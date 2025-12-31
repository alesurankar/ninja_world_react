/**
 * User Controller
 * Handles all user-related operations including authentication, profile management,
 * password reset, and admin user management for the PetShop application
 */

const User = require('../models/userModel');
const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');
const sendToken = require('../utils/sendToken');

/**
 * Register New User
 * @route POST /api/v1/register
 * @access Public
 */
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
    console.log("🔥 registerUser triggered");

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

    const user = await User.create ({
        name,
        email,     
        password,
    });
    //res.status(200).json({ message: "Data received successfully", received: user});
    sendToken(user, 201, res);
});



/**
 * User Login
 * @route POST /api/v1/login
 * @access Public
 */
exports.loginUser = asyncErrorHandler(async (req, res, next) => {
    console.log("🔥 loginUser Triggered");

    const { email, password } = req.body;
    const user = {
        email,    
        password,
    };
    res.status(200).json({ message: "Dummy login successful", received: user});
});