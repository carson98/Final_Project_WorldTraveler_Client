var express = require("express");
var router = express.Router();
var Tour = require("../models/tour");
var paginate = require("../config/paginate");
var check_fields = require("../config/checkAuthenticate");
/* GET home page. */

router.get("/", async function(req, res, next) {
  // top 6 tour rating star
  // var s = await viewTour.View_LocalStorage()
  Tour.find()
    .sort({
      totalProfit: -1
    })
    .limit(6)
    .exec(async (err, rs) => {
      var tourChunks = [];
      var departFrom = [];
      var desInternational = [];
      var desDomestic = [];
      var chunkSize = 3;

      var tour = rs.filter(s => s.seat > 0);
      for (var i = 0; i < tour.length; i += chunkSize) {
        tourChunks.push(tour.slice(i, i + chunkSize));
        tour.forEach(s => {
          if (s.category === true) {
            var obj = departFrom.find(a => a.id === s.depart.id);
            var obj2 = desDomestic.find(b => b.id === s.destination.id);

            if (obj === undefined) {
              departFrom.push(s.depart);
            }
            if (obj2 === undefined) {
              desDomestic.push(s.destination);
            }
          } else {
            var obj3 = desInternational.find(c => c.id === s.destination.id);
            if (obj3 === undefined) {
              desInternational.push(s.destination);
            }
          }
        });
      }
      console.log(tourChunks)
      await res.render("pages/index", {
        departFrom: departFrom,
        desInternational: desInternational,
        desDomestic: desDomestic,
        tours: tourChunks
      });
    });
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
      res.render("pages/index", {
        tours: tourChunks
      });
    }
  );
});

router.post("/tour-filter", async (req, res) => {
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
      res.render("pages/index", {
        tours: tourChunks
      });
    }
  );
});

module.exports = router;
