var Product = require("../models/product");
var mongoose = require("mongoose");
const mongo = mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true
});
mongo
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });
var products = [
  // new Product({
  //   imagePath: "NhaTrang-DaLat.jpg",
  //   title: "Hà Nội",
  //   category: true,
  //   price: 1000,
  //   depart: {
  //     id: "5e78a29eb740ab33786b9b67",
  //     name: "Phú Quốc"
  //   },
  //   destination: {
  //     id: "5e78df3a4ec2883cb4e6c886",
  //     name: "Hà Nội"
  //   },
  //   duration: 4,
  //   seat: 5,
  //   tourGuide: "Du",
  //   hotel: 5,
  //   description: "exelenfjn",
  //   reviews: [],
  //   orderList: [],
  //   productRate: 0,
  //   totalProfit: 0
  // }),
  new Product({
    imagePath: "NhaTrang-DaLat.jpg",
    title: "Australia",
    category: false,
    price: 500,
    depart: {
      id: "5e78df3a4ec2883cb4e6c886",
      name: "Hà Nội"
    },
    destination: {
      id: "",
      name: "Australia"
    },
    duration: 6,
    seat: 8,
    tourGuide: "Ngân",
    hotel: 4,
    description: "Hee",
    reviews: [],
    orderList: [],
    productRate: 0,
    totalProfit: 0
  })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done == products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
