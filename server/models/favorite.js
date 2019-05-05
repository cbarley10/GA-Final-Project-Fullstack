const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  status: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = { Favorite };
