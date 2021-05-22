import express from 'express';

import { getPost, getPosts, createPost, updatePost, likePost, deletePost, getPostsBySearch } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router= express.Router();

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);
router.post('/', auth, createPost); //we pushed middle ware before controller so we can use it in controller
//router.get('/:id', getPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;