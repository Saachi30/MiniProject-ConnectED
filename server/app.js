import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/route.js';
import session from 'express-session';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 
    }
  }));

const port = 8000;

const URL="mongodb://127.0.0.1:27017/connectED";
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Database connected successfully");
    }
    catch(error){
        console.log(error);
    }
    
app.listen(port, () => {
    console.log("Listening on port");
});