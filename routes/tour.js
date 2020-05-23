var express = require("express");
var router = express.Router();
var Tour = require("../models/tour");
var paginate = require("../config/paginate");
var sizes = 6;
var sanitizeHtml = require("sanitize-html");

/* GET home page. */
router.post("/tour-searchTour", (req, res) => {
  sizes = sizes + 3;
  console.log(req.body.dates);
  console.log(req.body.from);
  console.log(req.body.to);
  Tour.find(
    {
      "destination.id": req.body.to,
      "depart.id": req.body.from
    },
    (err, results) => {
      results.filter(s => {
        s.date.toISOString().slice(0, 10) === req.body.dates && s;
        s.date = s.date.toISOString().slice(0, 10);
      });
      // console.log(test)
      var docs = results;
      console.log(results);

      if (req.body.price === "200") {
        var docs = results.filter(s => s.price < 200);
      } else if (req.body.price === "500") {
        var docs = results.filter(s => s.price > 500);
      } else if (req.body.price === "200-500") {
        var docs = results.filter(s => s.price >= 200 && s.price <= 500);
      } else if (req.body.price === "all") {
        var docs = results;
      }

      console.log(docs);
      var tourChunks = [];
      if (sizes > docs.length) {
        sizes = docs.length;
        var hidenMore = true;
      }
      var chuckSize = 3;
      for (var i = 0; i < docs.length; i += chuckSize) {
        tourChunks.push(docs.slice(i, i + chuckSize));
      }
      console.log(tourChunks)
      res.render("tour/tourList", {
        tours: tourChunks,
        hidenMore: hidenMore
      });
    }
  );
});

router.get("/tour-more", async (req, res) => {
  sizes = await (sizes + 3);
  await Tour.paginate(
    {},
    {
      page: 1,
      limit: sizes
    },
    async function(err, rs) {
      var docs = rs.docs;
      var tour = docs.filter(s => s.seat > 0);
      var tourChunks = [];
      if (sizes > tour.length) {
        sizes = tour.length;
        var hidenMore = true;
      }
      var chuckSize = 3;
      for (var i = 0; i < tour.length; i += chuckSize) {
        tourChunks.push(tour.slice(i, i + chuckSize));
      }
      await res.render("tour/tourList", {
        tours: tourChunks,
        hidenMore: hidenMore
      });
    }
  );
});

router.post("/tour-search", async (req, res) => {
  Tour.find(
    {
      title: {
        $regex: req.body.search,
        $options: "i"
      }
    },
    (err, docs) => {
      var tourChunks = [];
      var chunkSize = docs.length;
      for (var i = 0; i < docs.length; i += chunkSize) {
        tourChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render("tour/tourList", {
        tours: tourChunks
      });
    }
  );
});

router.post("/filterPrice", (req, res) => {});

router.get("/detail/:id", (req, res, next) => {
  // localStorage.setItem('Tour',[])
 
  var tourId = req.params.id;
  var userAcc = req.session.user;
  var checkReview = null;
  var tour = Tour.findById(tourId, async (err, pro) => {
    var dirty = pro.description;
    var clean = sanitizeHtml(dirty);
    clean = sanitizeHtml(dirty, {
      allowedTags: [
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "p",
        "a",
        "ul",
        "ol",
        "nl",
        "li",
        "b",
        "i",
        "strong",
        "em",
        "strike",
        "code",
        "hr",
        "br",
        "div",
        "table",
        "thead",
        "caption",
        "tbody",
        "tr",
        "th",
        "td",
        "pre",
        "iframe"
      ],
      disallowedTagsMode: "discard",
      allowedAttributes: {
        a: ["href", "name", "target"],
        // We don't currently allow img itself by default, but this
        // would make sense if we did. You could add srcset here,
        // and if you do the URL is checked for safety
        img: ["src"]
      },
      // Lots of these won't come up by default because we don't allow them
      selfClosing: [
        "img",
        "br",
        "hr",
        "area",
        "base",
        "basefont",
        "input",
        "link",
        "meta"
      ],
      // URL schemes we permit
      allowedSchemes: ["http", "https", "ftp", "mailto"],
      allowedSchemesByTag: {},
      allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
      allowProtocolRelative: true
    });

    if (err) {
      return res.redirect("/");
    }
    if (userAcc && pro.orderList.length > 0) {
      for (var i = 0; i < pro.orderList.length; i++) {
        if (
          pro.orderList[i].userInfo.email == userAcc.email &&
          pro.orderList[i].status == 1
        ) {
          checkReview = true;
        }
      }
    }
    Tour.find(
      {
        category: pro.category
      },
      async (err, docs) => {
        for (var i = 0; i < docs.length; i++) {
          if (String(docs[i]._id) == tourId) {
            await docs.splice(i, 1);
          }
        }
        if(req.session.checkSeats < pro.seat){
          req.session.notice = null
        }

        // ViewedTour
        var ViewedTour = {
          "id": pro.id,
          "img" : pro.imagePath,
          "name": pro.title
        }
        if(req.session.TourSession !== undefined){
          let data = req.session.TourSession
          data.find(item => item.id === pro.id) === undefined && data.unshift(ViewedTour)
          data.length > 5 && data.pop();
          req.session.TourSession = data
        } else{
          let data = [];
          data.unshift(ViewedTour)
          req.session.TourSession = data;
        }
        await res.render("tour/detail", {
          proDetail: pro,
          proRelated: docs,
          checkAcc: checkReview,
          reviewLength: pro.reviews.length
        });
      }
    );
  });
});

router.post("/review-tour/:id", async (req, res) => {
  var id = req.params.id;
  var rating = Number(req.body.rating);
  var userEmail = req.session.user.email;
  var userName = req.session.user.fullName;
  var description = req.body.review;
  var tourRate = 0;
  var objReview = await {
    userEmail: userEmail,
    userName: userName,
    rating: rating,
    description: description,
    date_time: new Date().toISOString().slice(0, 10)
  };
  var updPro;
  await Tour.findById(id, async (err, doc) => {
    for (var i = 0; i < doc.reviews.length; i++) {
      if (doc.reviews[i].userEmail == userEmail) {
        // find userEmail exist
        updPro = await Tour.findOneAndUpdate(
          {
            "reviews.userEmail": userEmail
          },
          {
            $set: {
              "reviews.$.userName": userName,
              "reviews.$.rating": rating,
              "reviews.$.description": description,
              "reviews.$.date_time": new Date().toISOString().slice(0, 10)
            }
          },
          {
            upsert: true,
            new: true
          },
          async (err, docs) => {}
        );
      }
    }//
  });
  if (updPro == undefined) {
    await Tour.findOneAndUpdate(
      {
        _id: id
      },
      {
        $addToSet: {
          reviews: objReview
        }
      },
      {
        new: true
      },
      async (err, doc) => {}
    );
  }
  await Tour.findById(id, async (err, doc) => {
    var sum = 0;
    var count = 0;
    if (doc.reviews.length == 0) {
      count = 1;
    }
    for (var i = 0; i < doc.reviews.length; i++) {
      sum = await (sum + doc.reviews[i].rating);
      await count++;
    }
    tourRate = await (sum / count).toFixed(1);
    await Tour.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          tourRate: tourRate
        }
      },
      {
        upsert: true,
        new: true
      },
      function(err, doc) {}
    );
  });
  res.redirect("../detail/" + id);
});

module.exports = router;
