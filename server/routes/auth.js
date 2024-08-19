import { Router } from 'express';
import { register, autorization } from '../controllers/auth.js';

const router = new Router();

router.post('/register', register);
router.post('/autorization', autorization);
router.post('/getMe', () => '');

export default router;
