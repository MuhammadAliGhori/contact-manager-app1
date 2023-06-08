const mongoose = require("mongoose");

const userModelSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please enter you good name"],
    },
    mail: {
      type: String,
      require: [true, "Please enter a mail"],
      unique: [true, "Please enter a new mai, this is already added"],
    },
    password: {
      type: String,
      require: [true, "Please enter you password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModelSchema);
