var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    minlength: [10, "Description must be at least 10 characters long"],
    maxlength: [100, "Description must be at most 100 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be a positive number"],
  },
  created: Date
});

module.exports = mongoose.model("product", ProductSchema);
