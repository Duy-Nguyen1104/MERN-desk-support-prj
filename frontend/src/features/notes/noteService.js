import axios from "axios";

const API_URL = "http://localhost:5000/api/tickets/";

//Get user ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, //set the token in the header
    },
  };
  const response = await axios.get(API_URL + ticketId + "/notes", config);

  return response.data; //return the response data
};

//Create user ticket note
const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, //set the token in the header
    },
  };
  const response = await axios.post(
    API_URL + ticketId + "/notes",
    {
      text: noteText,
    },
    config
  );

  return response.data; //return the response data
};

export const noteService = {
  getNotes,
  createNote,
};

export default noteService;
