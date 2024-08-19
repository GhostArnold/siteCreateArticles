import { Router } from 'express';
import { register } from '../controllers/auth.js';

const router = new Router();

router.post('/register', register);
router.post('/autorization', () => '');
router.post('/getMe', () => '');

export default router;
