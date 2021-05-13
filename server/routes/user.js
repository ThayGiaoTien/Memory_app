import express from 'express';

import {signin, signup} from '../controllers/user.js';

const router= express.Router();
//the best explaination for GET and POST method is signup and signin
router.post('/signin', signin);
router.post('/signup', signup);

export default router;