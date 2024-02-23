import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

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