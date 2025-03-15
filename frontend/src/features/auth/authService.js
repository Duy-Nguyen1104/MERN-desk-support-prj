import axios from "axios";

const API_URL = "/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); //store the user data in local storage
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    //check if the response data is not empty
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;

//The authService file contains the functions to register, login, and logout a user.
//The register function sends a POST request to the backend to register a new user.
//The login function sends a POST request to the backend to log in a user.
//The logout function removes the user data from local storage.
// The authService object exports the register, login, and logout functions.
