const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //Link ticket to a user
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: [
        "iPhone",
        "Macbook",
        "iMac",
        "iPad",
        "Apple Watch",
        "AirPods",
        "Beats",
        "Apple TV",
        "HomePod",
        "iPod",
      ],
    },
    description: {
      type: String,
      required: [true, "Please provide a description of the issue"],
    },
    status: {
      type: String,
      required: [true],
      enum: ["Pending", "Open", "Closed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema); //Export the model as 'Ticket'
