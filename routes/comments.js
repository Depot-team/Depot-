const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllComments, addComment } = require('../controllers/comments');

/// POSTS ROUTES ///

//GET request to fetch all comments for one specific post.
router.get('/:postId', getAllComments);
// POST request for adding a new comment.
router.post('/add', addComment);


module.exports = router;