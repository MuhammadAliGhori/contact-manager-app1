const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter you good name"],
    },
    mail: {
      type: String,
      require: [true, "Please enter you mail"], 
    },
    phone: {
      type: String,
      require: [true, "Please enter you number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
