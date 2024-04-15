import express from "express"
import { studentSignup, alumniSignup, mentorSignup, userLogin, getUserData, sendRequest, removeRequest} from '../controllers/userController.js';
import cors from 'cors'
import { getMentors, getMentorRequestsWithStudentData } from '../controllers/userController.js';

const router=express.Router();
router.use(cors())

router.post('/login', userLogin);
// Routes for user registration based on type (student, alumni, mentor)
router.post('/register/student', studentSignup);
router.post('/register/alumni', alumniSignup);
router.post('/register/mentor', mentorSignup);
//router.get('/student', getUserData);
router.get('/login', getUserData);
// Routes for sending requests to mentors and alumni
router.post('/send-request-to-mentor', (req, res) => sendRequest(req, res, 'mentor'));
router.post('/send-request-to-alumni', (req, res) => sendRequest(req, res, 'alumni'));
// Routes for removing requests to mentors and alumni
router.post('/remove-request-to-mentor', (req, res) => removeRequest(req, res, 'mentor'));
router.post('/remove-request-to-alumni', (req, res) => removeRequest(req, res, 'alumni'));
// Route for getting mentor data
router.get('/mentors', getMentors);
router.get('/mentor-requests-with-student-data', getMentorRequestsWithStudentData);
// router.get('/mentorprofile', showMentorDetails)

export default router;