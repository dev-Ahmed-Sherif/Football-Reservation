const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    clubName: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);
club = mongoose.model("clubs", clubSchema);
module.exports = club;
