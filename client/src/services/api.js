import axios from 'axios';

const baseUrl = "http://localhost:8000";

export const authenticateSignup = async (type, data) => {
    try {
        return await axios.post(`${baseUrl}/register/${type}`, data);
    } catch (error) {
        console.error(error);
    }
};

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${baseUrl}/login`, data);
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

export const logoutuser = async () => {
    try {
        await axios.get(`${baseUrl}/logout`);
    } catch (error) {
        console.error(error);
    }
};
