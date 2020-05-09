var express = require("express");
var router = express.Router();
var Tour = require("../models/tour");
var Cart = require("../models/cart");
var Coupon = require("../models/coupon");

/* GET home page. */

router.post("/add-to-cart/:id", function(req, res, next) {
  var tourId = req.params.id;
  var qty = req.body.num;
  var numChil = req.body.numChil;
  var numKid = req.body.numKid;
  var totalSeat = Number(numChil) + Number(numKid) + Number(qty);
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Tour.findById(tourId, function(err, tour) {
    if (err) {
      return res.redirect("/");
    }
    req.session.checkSeats = totalSeat;
    if (tour.seat < totalSeat) {
      req.session.sessionFlash = {
        type: "warning",
        message:
          "Not Enough Seat"
      };
      return res.redirect(`../../tour/detail/${tourId}`);
    }
    cart.add(tour, tour.id, qty, numChil, numKid);
    req.session.cart = cart;
    res.redirect("/cart/shopping-cart");
  });
});

router.get("/shopping-cart", function(req, res, next) {
  if (!req.session.cart) {
    return res.render("cart/shopping-cart", {
      tours: null
    });
  }
  var cart = new Cart(req.session.cart);
  var couponId = req.query.couponCode;
  Coupon.findOne(
    {
      _id: couponId
    },
    (err, doc) => {
      if (doc && doc.active == true) {
        req.session.cart.coupons = doc;
        cart.coupons = doc;
        cart.totalDiscount = cart.totalPrice - cart.totalPrice * doc.discount;
        req.session.cart.totalDiscount = cart.totalDiscount;
      } else if (doc && doc.active == false) {
        req.session.cart.coupons = {
          description: 0
        };
        cart.coupons = {
          description: 0
        };
        var show_messages = "The coupon code inActive!";
      } else if (!doc) {
        req.session.cart.coupons = {
          description: 0
        };
        cart.coupons = {
          description: 0
        };
        cart.totalDiscount = cart.totalPrice;
        req.session.cart.totalDiscount = cart.totalDiscount;
        if (couponId) {
          var show_messages = "Not found coupon code!";
        }
      }

      var zxc = cart.items.qty + cart.items.numChil + cart.items.numKid;
      console.log(zxc);
      console.log(cart);
      console.log(cart.generateArray());
      res.render("cart/shopping-cart", {
        tours: cart.generateArray(),
        totalPrice: cart.totalPrice,
        priceChil: cart.priceChil,
        priceKid: cart.priceKid,
        couponCodes: cart.coupons,
        priceDiscount: cart.totalDiscount,
        messages: show_messages
      });
    }
  );
});

router.get("/removeAll/:id", function(req, res, next) {
  var tourId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(tourId);
  console.log(cart);
  req.session.cart = cart;
  res.redirect("/cart/shopping-cart");
});

module.exports = router;
