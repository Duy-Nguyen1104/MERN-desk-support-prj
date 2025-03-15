import axios from "axios";

const API_URL = "http://localhost:5000/api/tickets/";

//Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, //set the token in the header
    },
  };
  const response = await axios.post(API_URL, ticketData, config);

  return response.data; //return the response data
};

//Get user tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, //set the token in the header
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data; //return the response data
};

//Get user ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, //set the token in the header
    },
  };
  const response = await axios.get(API_URL + ticketId, config);

  return response.data; //return the response data
};

//Close user ticket status
const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, //set the token in the header
    },
  };
  const response = await axios.put(
    API_URL + ticketId,
    { status: "Closed" },
    config
  );

  return response.data; //return the response data
};

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  closeTicket,
};

export default ticketService;
