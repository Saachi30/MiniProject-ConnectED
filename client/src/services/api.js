import axios from 'axios';

const url="http://localhost:8000";

export const authenticateSignup=async (data)=>{
    try{
       return await axios.post(`${url}/register`, data);
    }
    catch(error){
        console.log(error);
    }
}
export const authenticateLogin=async (data)=>{
    try{
       return await axios.post(`${url}/login`, data);
    }
    catch(error){
        console.log(error);
        return error.response;
    }
}

