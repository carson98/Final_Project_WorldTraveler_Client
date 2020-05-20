var Tour = require("../models/tour");
var mongoose = require("mongoose");
const mongo = mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true,
});
mongo
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("err", err);
  });
var tours = [
  new Tour({
    imagePath: "da-lat.jpg",
    title: "Đà Lạt",
    category: true,
    price: 1000,
    depart: {
      id: "",
      name: "TP HCM",
    },
    destination: {
      id: "",
      name: "Đà Lạt",
    },
    duration: 4,
    seat: 5,
    tourGuide: "Du",
    hotel: 5,
    description: "Good",
    reviews: [],
    orderList: [],
    tourRate: 0,
    totalProfit: 0,
  }),
  new Tour({
    imagePath: "NhaTrang-DaLat.jpg",
    title: "Nha Trang",
    category: true,
    price: 1000,
    depart: {
      id: "",
      name: "Đà Lạt",
    },
    destination: {
      id: "",
      name: "Nha Trang",
    },
    duration: 4,
    seat: 5,
    tourGuide: "Nam",
    hotel: 6,
    description: "exellent",
    reviews: [],
    orderList: [],
    tourRate: 0,
    totalProfit: 0,
  }),
  new Tour({
    imagePath: "Hue-Hoi-An.jpg",
    title: "TP HCM",
    category: true,
    price: 1000,
    depart: {
      id: "",
      name: "Nha Trang",
    },
    destination: {
      id: "",
      name: "TP HCM",
    },
    duration: 4,
    seat: 5,
    tourGuide: "Ngân",
    hotel: 5,
    description: "good",
    reviews: [],
    orderList: [],
    tourRate: 0,
    totalProfit: 0,
  }),

  new Tour({
    imagePath: "new-york.jpg",
    title: "New York",
    category: false,
    price: 5000,
    depart: {
      id: "",
      name: "TP HCM",
    },
    destination: {
      id: "",
      name: "New York",
    },
    duration: 7,
    seat: 8,
    tourGuide: "Nhật",
    hotel: 6,
    description: "nice",
    reviews: [],
    orderList: [],
    tourRate: 0,
    totalProfit: 0,
  }),

  new Tour({
    imagePath: "Sydney-Opera-House.jpg",
    title: "Australia",
    category: false,
    price: 3000,
    depart: {
      id: "",
      name: "TP HCM",
    },
    destination: {
      id: "",
      name: "Australia",
    },
    duration: 7,
    seat: 8,
    tourGuide: "Nam",
    hotel: 6,
    description: "nice",
    reviews: [],
    orderList: [],
    tourRate: 0,
    totalProfit: 0,
  }),

  new Tour({
    imagePath: "France.jpg",
    title: "France",
    category: false,
    price: 3000,
    depart: {
      id: "",
      name: "TP HCM",
    },
    destination: {
      id: "",
      name: "France",
    },
    duration: 7,
    seat: 8,
    tourGuide: "Du",
    hotel: 6,
    description: "nice",
    reviews: [],
    orderList: [],
    tourRate: 0,
    totalProfit: 0,
  })
];
var done = 0;
for (var i = 0; i < tours.length; i++) {
  tours[i].save(function (err, result) {
    done++;
    if (done == tours.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
