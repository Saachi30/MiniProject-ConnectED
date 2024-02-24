// userController.js

import { Student, Alumni, Mentor } from '../models/userSchema.js';
import bcrypt from 'bcrypt';

// Controller function for student registration
export const studentSignup = async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, phoneNumber, preferredDomain, password, yearOfStudy } = req.body;

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
    const { name, email, phoneNumber,preferredDomain, password, currentJobTitle, company } = req.body;

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
    const { name, email, phoneNumber,  preferredDomain , password, yearOfStudy} = req.body;

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

    res.status(200).json({ message: 'Mentor registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for user login
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    let user = await Student.findOne({ email });
    if (!user) {
      user = await Alumni.findOne({ email });
    }
    if (!user) {
      user = await Mentor.findOne({ email });
    }

    // Check if user exists
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Store user data in session
    req.session.user = user;

    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for user logout
export const userLogout = (req, res) => {
  try {
    req.session.destroy();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
