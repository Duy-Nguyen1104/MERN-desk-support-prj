const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//Function to protect routes
const protect = expressAsyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // 
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // get the decoded token using the secret key
            //Get user from token
            req.user = await User.findById(decoded.id).select('-password'); // get the user from the token and exclude the password
            next();
        } catch (error) {
            console.log(error);
            res.status(401); //Unauthorized
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401); //Unauthorized
        throw new Error('Not authorized');
    }   
});

module.exports = { protect }