import { Router } from 'express';
import { register, autorization, getMe } from '../controllers/auth.js';
import { checkAuth } from '../utils/checkAuth.js';
const router = new Router();

router.post('/register', register);
router.post('/autorization', autorization);
router.get('/getMe', checkAuth, getMe);

export default router;
