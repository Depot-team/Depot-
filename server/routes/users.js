const express = require('express');
const router = express.Router();

// Require controller modules.
const User = require('../controllers/users.js');

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.post('/addu', User.addUser);
// tp update user information
router.put('/updateu/:id', User.updateUser);
//to delete a user
router.delete('/deleteu/:id', User.deleteUser);


module.exports = router;