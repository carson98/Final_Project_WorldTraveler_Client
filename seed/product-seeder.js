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
  new Product({
    imagePath: "NhaTrang-DaLat.jpg",
    title: "Huế",
    userGroup: "domestic",
    price: 300,
    depart: {
      id: "5e6e63d9e1b9d03f1c7fa282",
      name: "TP HCM"
    },
    destination: {
      id: "5e691551d7a96940c425b470",
      name: "Huế"
    },
    duration: 3,
    seat: 5,
    tourGuide: "Dũng",
    hotel: 4,
    description: "Exellent",
    checkLocate: false,
    schedule: {
        Day1: "Đền vua",
        Day2: "Cố đô Huế",
        Day3: "Về TP" 
    },
    reviews: [],
    orderList: [],
    productRate: 0,
    totalProfit: 0
  }),
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
