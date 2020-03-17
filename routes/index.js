var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var paginate = require("../config/paginate");
var check_fields = require("../config/checkAuthenticate");
/* GET home page. */

router.get("/", async function(req, res, next) {
  // top 6 product rating star
  Product.find()
    .sort({
      totalProfit: -1
    })
    .limit(6)
    .exec(async (err, rs) => {
      var productChunks = [];
      var departFrom = [];
      var desInternational = [];
      var desDomestic = [];
      var chunkSize = 3;
      var tour = rs.filter(s => s.seat !== 0);
      for (var i = 0; i < tour.length; i += chunkSize) {
        productChunks.push(tour.slice(i, i + chunkSize));
        tour.forEach(s => {
          if (s.checkLocate === true) {
            var obj = departFrom.find(a => a.id === s.depart.id);
            var obj2 = desDomestic.find(b => b.id === s.destination.id);
            var obj3 = desInternational.find(c => c.id === s.destination.id);

            if (obj === undefined) {
              departFrom.push(s.depart);
            }
            if (obj2 === undefined) {
              desDomestic.push(s.destination);
            }
          } else {
            if(obj3 === undefined){
              desInternational.push(s.destination);
            }
   
          }
        });
      }
      await res.render("pages/index", {
        departFrom: departFrom,
        desInternational: desInternational,
        desDomestic: desDomestic,
        products: productChunks
      });
    });
});

router.post("/product-search", async (req, res) => {
  Product.find(
    {
      title: {
        $regex: req.body.search,
        $options: "i"
      }
    },
    (err, docs) => {
      var productChunks = [];
      var chunkSize = docs.length;
      for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render("pages/index", {
        products: productChunks
      });
    }
  );
});

router.post("/product-filter", async (req, res) => {
  Product.find(
    {
      title: {
        $regex: req.body.search,
        $options: "i"
      }
    },
    (err, docs) => {
      var productChunks = [];
      var chunkSize = docs.length;
      for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render("pages/index", {
        products: productChunks
      });
    }
  );
});

module.exports = router;
