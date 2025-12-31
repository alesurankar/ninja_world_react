/**
 * User Controller
 * Handles all user-related operations including authentication, profile management,
 * password reset, and admin user management for the PetShop application
 */

const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');

/**
 * Register New User
 * @route POST /api/v1/register
 * @access Public
 */
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
    console.log("🔥 registerUser triggered");

    const { name, email, password } = req.body;
    const user = {
        name,
        email,     
        password,
    };
    res.status(200).json({ message: "Data received successfully", received: user});
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