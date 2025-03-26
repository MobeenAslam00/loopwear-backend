import express from 'express';
import { signup, login, resetOTP ,reset} from './userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/reset-otp', resetOTP);
router.post('/reset-pass', reset);


export default router;