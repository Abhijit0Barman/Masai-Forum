// routes/posts.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', postController.getAllPosts);
router.get('/:post_id', postController.getPostById);
router.post('/', authMiddleware.authenticateUser, postController.createPost);
router.put('/:post_id', authMiddleware.authenticateUser, postController.updatePost);
router.delete('/:post_id', authMiddleware.authenticateUser, postController.deletePost);
router.post('/:post_id/like', authMiddleware.authenticateUser, postController.likePost);
router.post('/:post_id/comment', authMiddleware.authenticateUser, postController.commentOnPost);

module.exports = router;
