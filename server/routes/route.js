import express from "express"
import { studentSignup, alumniSignup, mentorSignup, userLogin, userLogout } from '../controllers/userController.js';

const router=express.Router();

router.post('/login', userLogin);
router.get('/logout',userLogout);
// Routes for user registration based on type (student, alumni, mentor)
router.post('/register/student', studentSignup);
router.post('/register/alumni', alumniSignup);
router.post('/register/mentor', mentorSignup);

export default router;