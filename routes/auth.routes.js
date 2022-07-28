const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const { isAuthenticated } = require('../middleware/jwt.middleware')

const router = express.Router();
const saltRounds = 10;

// POST /auth/signup  - Creates a new user in the database
router.post('/signup', (req, res, next) => {
    console.log('signup called', req.body)
    const { username, password } = req.body;

    // Check if username or password are empty
    if (username === '' || password === '') {
        res.status(400).json({ message: "Provide username and password" });
        return;
    }

    // Check if a user with the same username already exists
    User.findOne({ username })
        .then((foundUser) => {
            // If the user with the same username already exists, send an error response
            if (foundUser) {
                res.status(400).json({ message: "Sorry, this username is already taken!" });
                return;
            }

            // If username is unique, proceed to hash the password
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            // Create the new user in the database
            // We return a pending promise, which allows us to chain another `then` 
            return User.create({ username, password: hashedPassword });
        })
        .then((createdUser) => {
            // Deconstruct the newly created user object to omit the password
            // We should never expose passwords publicly
            const { username, _id } = createdUser;

            // Create a new object that doesn't expose the password
            const user = { username, _id };

            // Send a json response containing the user object
            res.status(201).json({ user: user });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" })
        });
});

// POST  /auth/login - Verifies username and password and returns a JWT
router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    // Check if username or password are provided as empty string 
    if (username === '' || password === '') {
        res.status(400).json({ message: "Provide username and password." });
        return;
    }

    // Check the users collection if a user with the same username exists
    User.findOne({ username })
        .then((foundUser) => {

            if (!foundUser) {
                // If the user is not found, send an error response
                res.status(401).json({ message: "User not found." })
                return;
            }

            // Compare the provided password with the one saved in the database
            const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

            if (passwordCorrect) {
                // Deconstruct the user object to omit the password
                const { _id, username } = foundUser;

                // Create an object that will be set as the token payload
                const payload = { _id, username };

                // Create and sign the token
                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                );

                // Send the token as the response
                res.status(200).json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }

        })
        .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

//VERIFY checks if the token is valid and the user logged in
router.get('/verify', isAuthenticated, (req, res, next) => {
    // if the token is valid we can access it on : req.payload
    console.log('request payload is: ', req.payload)
    res.status(200).json(req.payload)
});


// DELETE /auth/delete- find user and delete
router.delete('/delete/:userID', (req, res, next) => {
    const { userID } = req.params;
    User.findByIdAndDelete(userID)
        .then(deletedUser => {
            console.log(deletedUser)
            res.status(200).json("deleted")
        })
        .catch(err => {
            next(err)
        })
})







module.exports = router;