// userController.js
import express from "express";
//import session from "express-session";
import { Student, Alumni, Mentor, User, Request } from '../models/userSchema.js';
import bcrypt from 'bcrypt';

const app = express();
import dotenv from 'dotenv';

dotenv.config();
//const secretKey = bcrypt.hash(process.env.SESSION_SECRET,10);
// Use session middleware
// app.use(session({
//   secret: secretKey,
//   resave: false,
//   saveUninitialized: true
// }));

var email="";
// Controller function for student registration
export const studentSignup = async (req, res) => {
  try {
    // Extract data from request body
    const { name, phoneNumber, preferredDomain, password, yearOfStudy } = req.body;
    email=req.body.email;

    // Check if email already exists
    const existingUser = await Student.findOne({ email });
    if (existingUser) { 
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student instance
    const newStudent = new Student({
      name,
      email,
      phoneNumber,
      preferredDomain,
      password: hashedPassword,
      yearOfStudy
  
    });

    // Save the student to the database
    await newStudent.save();
    //console.log("creating user")
    const newUser = new User({
        email,
        password: hashedPassword,
        userType: 'student',
        activity:true
      });
      //console.log("saving ")
      await newUser.save();
      //console.log("saved ")
     
    res.status(200).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for alumni registration
export const alumniSignup = async (req, res) => {
  try {
    // Extract data from request body
    const { name, phoneNumber,preferredDomain, password, currentJobTitle, company } = req.body;
    email=req.body.email;

    // Check if email already exists
    const existingUser = await Alumni.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new alumni instance
    const newAlumni = new Alumni({
      name,
      email,
      phoneNumber,
      preferredDomain,
      password: hashedPassword,
      currentJobTitle,
      company
    });

    // Save the alumni to the database
    await newAlumni.save();
    const newUser = new User({
        email,
        password: hashedPassword,
        userType: 'alumni',
        activity:true // Change to 'alumni' or 'mentor' accordingly
      });
      await newUser.save();
     
    res.status(200).json({ message: 'Alumni registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for mentor registration
export const mentorSignup = async (req, res) => {
  try {
    // Extract data from request body
    const { name, phoneNumber,  preferredDomain , password, yearOfStudy} = req.body;
    email=req.body.email;

    // Check if email already exists
    const existingUser = await Mentor.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new mentor instance
    const newMentor = new Mentor({
      name,
      email,
      phoneNumber,
      preferredDomain,
      password: hashedPassword,
      yearOfStudy
    });

    // Save the mentor to the database

    await newMentor.save();
    const newUser = new User({
        email,
        password: hashedPassword,
        userType: 'mentor',
        activity:true
      });
     
      await newUser.save();
      console.log("saved ")
    res.status(200).json({ message: 'Mentor registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const userLogin = async (req, res) => {
    email = req.body.email;
    const {password}=req.body;
    
      // Find user by email
      const user = await User.findOne({ email });
    try {
      // Check if user exists
      if (!user) {
        return res.status(200).json({ message: 'Invalid credentials' });
      }
  
      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(200).json({ message: 'Invalid credentials' });
      }
  
      // Store user data in session
      //req.session.user = user;
      //user.activity=true;
      console.log("Logged in")
      res.status(200).json({ success: true, user });
    } catch (error) {
      console.error(error);
      res.status(200).json({ message: 'Internal server error' });
    }
  };
  
  // Controller function for user logout
  

  export const getUserData = async (req, res) => {
    const { email } = req.query; // Retrieve email from query parameters
    console.log(email);
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
      }
  
      let userData;
      let userType;
      if (user.userType === 'student') {
        userData = await Student.findOne({ email });
      } else if (user.userType === 'alumni') {
        userData = await Alumni.findOne({ email });
      } else if (user.userType === 'mentor') {
        userData = await Mentor.findOne({ email });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid user type' });
      }
      console.log("user found")
      console.log(userData)
      console.log(userType)
      return res.status(200).json({ success: true, data: userData, type: user.userType });
    } catch (err) {
      console.error('Error fetching user data: ', err);
      res.status(400).json({ success: false, message: 'Internal server error' });
    }
  };
  
  

// Function to send a connection request
export const sendRequest = async (req, res) => {
  try {
  
    const { studentEmail, recipientEmail, requestType } = req.body;

    // Check if the request already exists
    const existingRequest = await Request.findOne({ studentEmail, recipientEmail });
    if (existingRequest) {
      return res.status(201).json({ message: 'Request already exists' });
    }

    // Create a new request instance
    const newRequest = new Request({ studentEmail, recipientEmail, status: 'pending', requestType });

    // Save the request to the database
    await newRequest.save();
    console.log("req saved")
    res.status(200).json({ message: 'Request sent successfully' });
  } catch (error) {
    console.error('Error sending request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to remove a connection request
export const removeRequest = async (req, res) => {
  try {
    const { studentEmail, mentorEmail, requestType } = req.body;
    // console.log(studentEmail+ recipientEmail+ requestType);
    // Find and delete the request based on studentEmail, recipientEmail, and requestType
    const request=await Request.findOne({recipientEmail: mentorEmail, studentEmail: studentEmail })
    if(request){
      request.reqstatus = "declined";
      await request.save(); // Save the updated status
      
    }
    await Request.findOneAndDelete({ studentEmail:studentEmail, recipientEmail:mentorEmail, requestType: requestType });

    res.status(200).json({ message: 'Request removed successfully' });
  } catch (error) {
    console.error('Error removing request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Function to get mentors from the database
export const getMentors = async (req, res) => {
  try {
    // Retrieve mentor data from the database
    const mentors = await Mentor.find(); 

    // Send mentor data in the response
    res.status(200).json({ success: true, mentors });
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to get mentor requests and corresponding student data
export const getMentorRequestsWithStudentData = async (req, res) => {
  try {
    const { mentorEmail } = req.query;
   
    console.log(mentorEmail);
    
    // Get mentor requests
    const mentorRequests = await Request.find({ recipientEmail: mentorEmail });
    console.log(mentorRequests + " from requests");

    // Filter and map requests with pending status and populate student data
    const requestsWithStudentData = await Promise.all(
      mentorRequests.map(async (request) => {
        if (request.reqstatus === 'pending') {
          // Find corresponding student data
          const student = await Student.findOne({ email: request.studentEmail });
          console.log(request + "  " + student);
          
          // Return an object containing both request and student data
          return { request, student };
        }
      })
    );

    // Filter out undefined values (requests with status other than pending)
    const pendingRequests = requestsWithStudentData.filter(Boolean);

    res.status(200).json(pendingRequests);
  } catch (error) {
    console.error('Error fetching mentor requests with student data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const updateReqStatus=async(req, res)=>{
  const { studentEmail, mentorEmail, reqstatus } = req.body;

console.log(studentEmail + mentorEmail + reqstatus)
  try {
    // Find the request document
    const request = await Request.findOne({ recipientEmail: mentorEmail, studentEmail: studentEmail });

    // If request is found, update its status
    if (request) {
      request.reqstatus = reqstatus;
      await request.save(); // Save the updated status
      res.status(200).json({ message: "Request accepted" });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    console.error('Error accepting request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}
// export const showMentorDetails = async(req,res)=>{
//   try{
//   const mentorEmail=req.body.mentorEmail;
//   const mentorDetails=Mentor.find({email: mentorEmail});
//   res.status(200).json(mentorDetails);
//   }
//   catch(error){
//     console.error("Error fetching mentor data from database");
//     res.status(500).json({ message: 'Internal server error' });
//   }

// }
export const getConnectedMentorsData = async (req, res) => {
  const { studentEmail } = req.query;

  // console.log("inside get connected mentors" + studentEmail)
  try {
    // Find all accepted requests for the given student
    const acceptedRequests = await Request.find({
      studentEmail: studentEmail,
      reqstatus: 'accepted',
      requestType:'mentor'
    });

    // Extract mentor emails from accepted requests
    // console.log(acceptedRequests)
    const mentorEmails = acceptedRequests.map(request => request.recipientEmail);
    
    // Find mentors based on their email addresses
    const connectedMentors = await Mentor.find({ email: { $in: mentorEmails } });
    // console.log(connectedMentors)
    res.status(200).json(connectedMentors);
  } catch (error) {
    console.error('Error retrieving connected mentors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export const getConnectedStudentsData = async (req, res) => {
  const { mentorEmail } = req.query;

  // console.log("inside get connected mentors" + studentEmail)
  try {
    // Find all accepted requests for the given student
    const acceptedRequests = await Request.find({
      recipientEmail: mentorEmail,
      reqstatus: 'accepted',
      requestType:'mentor'
    });

    // Extract mentor emails from accepted requests
    console.log(acceptedRequests)
    const studentEmails = acceptedRequests.map(request => request.studentEmail);
    
    // Find mentors based on their email addresses
    const connectedStudents = await Student.find({ email: { $in: studentEmails } });
    console.log(connectedStudents)
    res.status(200).json(connectedStudents);
  } catch (error) {
    console.error('Error retrieving connected students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};