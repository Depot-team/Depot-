const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllPosts, addPost, getOnePost } = require('../controllers/posts');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAll', getAllPosts);
// GET request for one post.
router.get('/:idpost', getOnePost);
// POST request for creating a new post.
router.post('/add', addPost);


module.exports = router;