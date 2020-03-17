var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
var Schema = mongoose.Schema;
var schema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, require: true },
  userGroup: { type: String, required: true },
  price: { type: Number, required: true },
  depart: { type: Object, required: true },
  destination: { type: Object, required: true },
  date: { type: Date, required: true, default: Date.now() },
  duration: { type: Number, required: true },
  seat: { type: Number, required: true },
  tourGuide: { type: String, required: true },
  hotel: { type: String, required: true },
  description: { type: String, required: true },
  checkLocate: { type: Boolean, require: true },
  schedule: {type: Object, required:true},
  reviews: [],
  orderList: [],
  productRate: { type: Number },
  totalProfit: { type: Number }
});
schema.plugin(mongoosePaginate);
module.exports = mongoose.model("Product", schema);
