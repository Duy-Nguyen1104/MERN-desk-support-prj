const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

//@desc: Get current user tickets
//@route GET /api/tickets/
//@acess Private
const getTickets = asyncHandler(async (req, res) => {
  //Get user using the id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

//@desc: Get current user ticket
//@route GET /api/tickets/:id
//@acess Private
const getTicket = asyncHandler(async (req, res) => {
  //Get user using the id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  res.status(200).json(ticket);
});

//@desc: Create new ticket
//@route POST /api/tickets/
//@acess Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error("Please provide a product and description");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "Open",
  });

  res.status(200).json(ticket);
});

//@desc: Delete current user ticket
//@route DELETE /api/tickets/:id
//@acess Private
const deleteTicket = asyncHandler(async (req, res) => {
  //Get user using the id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Ticket.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true });
});

//@desc: Update current user ticket
//@route PUT /api/tickets/:id
//@acess Private
const updateTicket = asyncHandler(async (req, res) => {
  //Get user using the id from the token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id, //id from the URL
    req.body, //Data to update
    {
      new: true, //Return the updated data
      runValidators: true, //Run the validators
    }
  );

  res.status(200).json(updatedTicket);
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
};
