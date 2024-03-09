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

// export const logoutuser = async () => {
//     try {
//         await axios.post(`${baseUrl}/logout`);
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

export const getDataLogin = async () => {
    try {
        const response = await axios.get(`${baseUrl}/login`);
        //console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
