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
    trim: true
  },
  image: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  starred: {
    type: Boolean,
    required: true
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = { Favorite };
