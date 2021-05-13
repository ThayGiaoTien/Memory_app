import express from 'express';
import auth from '../middleware/auth.js';
import {signin, signup} from '../controllers/user.js';

const router= express.Router();
//the best explaination for GET and POST method is signup and signin
router.post('/signin', auth,  signin);
router.post('/signup', auth, signup);

export default router;