const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllUsers, addUser, getOneUser } = require('../controllers/users');

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.get('/getAll', getAllUsers);
// GET request for one user.
router.get('/:iduser', getOneUser);
// POST request for creating a user.
router.post('/add', addUser);


module.exports = router;