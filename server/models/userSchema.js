// userSchema.js

import mongoose from "mongoose";

// Define schemas for student, alumni, and mentor
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 30
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true
  },
  preferredDomain: {
    type: String,
    enum: ['web dev', 'dsa', 'ml', 'cloud computing', 'blockchain', 'finance', 'ui/ux'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  yearOfStudy: {
    type: Number,
    required: true
  },
  preferredDomain: {
    type: String,
    enum: ['web dev', 'dsa', 'ml', 'cloud computing', 'blockchain', 'finance', 'ui/ux'],
    required: true
  }
});

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 30
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true
  },
  preferredDomain: {
    type: String,
    enum: ['web dev', 'dsa', 'ml', 'cloud computing', 'blockchain', 'finance', 'ui/ux'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  currentJobTitle: {
    type: String,
    required: true
  },
  company: { // Add company field
    type: String,
    required: true
  }
  
});

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 30
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 15
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true
  },
  preferredDomain: {
    type: String,
    enum: ['web dev', 'dsa', 'ml', 'cloud computing', 'blockchain', 'finance', 'ui/ux'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  yearOfStudy: {
    type: Number,
    required: true,
    enum: [3, 4]
  },
  preferredDomain: {
    type: String,
    enum: ['web dev', 'dsa', 'ml', 'cloud computing', 'blockchain', 'finance', 'ui/ux'],
    required: true
  }
});

const Student = mongoose.model("Student", studentSchema);
const Alumni = mongoose.model("Alumni", alumniSchema);
const Mentor = mongoose.model("Mentor", mentorSchema);

export { Student, Alumni, Mentor };
