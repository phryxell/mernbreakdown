// New route - require model
const router = require('express').Router();
let User = require('../models/user.model');

// Handle incoming user url path
router.route('/').get((req, res) => {
    User.find({}) // Mongoose method to get all the users from database
    .then(users => res.json(users)) // Return user from database
    .catch(err => res.status(400).json('Error: ' + err)); // Something wrong = error message
});

// Handle incoming post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save() // Save user to DB by save()-method
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;