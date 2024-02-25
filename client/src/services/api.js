import axios from 'axios';

const baseUrl = "http://localhost:8000";

export const authenticateSignup = async (type, data) => {
    try {
        const res= await axios.post(`${baseUrl}/register/${type}`, data);
        console.log(res.status)
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const authenticateLogin = async (data) => {
    try {
        const response= await axios.post(`${baseUrl}/login`, data);
        if(response){
            return response;
        }
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

export const logoutuser = async (data) => {
    try {
        await axios.post(`${baseUrl}/profile`,data);
    } catch (error) {
        console.error(error);
    }
};
export const getData = async (data) => {
    try {
        const response=await axios.post(`${baseUrl}/student`,{email: data});
        return response;
    } catch (error) {
        console.error(error);
    }
};
