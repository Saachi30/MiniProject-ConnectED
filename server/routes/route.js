import express from "express"
import { studentSignup, alumniSignup, mentorSignup, userLogin, userLogout,getUserData } from '../controllers/userController.js';
import cors from 'cors'

const router=express.Router();
router.use(cors())

router.post('/login', userLogin);
router.get('/profile',userLogout);
// Routes for user registration based on type (student, alumni, mentor)
router.post('/register/student', studentSignup);
router.post('/register/alumni', alumniSignup);
router.post('/register/mentor', mentorSignup);
router.post('/student', getUserData);

export default router;