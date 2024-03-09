import express from "express"
import { studentSignup, alumniSignup, mentorSignup, userLogin, getUserData } from '../controllers/userController.js';
import cors from 'cors'

const router=express.Router();
router.use(cors())

router.post('/login', userLogin);
// Routes for user registration based on type (student, alumni, mentor)
router.post('/register/student', studentSignup);
router.post('/register/alumni', alumniSignup);
router.post('/register/mentor', mentorSignup);
//router.get('/student', getUserData);
router.get('/login', getUserData);


export default router;