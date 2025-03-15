const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const colors = require("colors");
const port = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
); //Enable CORS

//Connect to the database
connectDB();

app.use(express.json()); //Middleware to parse JSON data
app.use(express.urlencoded({ extended: false })); //Middleware to parse URL encoded data

//Create a route with express
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the app" }); //Send a response to the client
});

//Routes
app.use("/api/users", require("./routes/userRouter")); //Use the userRouter.js file to handle requests to /api/users
app.use("/api/tickets", require("./routes/ticketRouter")); //Use the ticketRouter.js file to handle requests to /api/tickets

app.use(errorHandler); //Use the errorHandler middleware to handle errors

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
