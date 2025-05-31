const express = require('express');
const router = express.Router();
const { verifyToken, isClient } = require('../Middleware/userMiddleware');
const { allPost } = require("../Controller/postController");



// Route for creating a post with multiple file uploads
router.get("/all/post",verifyToken,allPost)
module.exports = router;