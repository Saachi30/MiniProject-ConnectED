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
// Send request to mentor
export const sendConnectionRequestToMentor = async (studentEmail, mentorEmail) => {
    try {
        const data = { studentEmail, mentorEmail ,requestType:'mentor'};
        const response = await axios.post(`${baseUrl}/send-request-to-mentor`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Send request to alumni
export const sendConnectionRequestToAlumni = async (studentEmail, alumniEmail) => {
    try {
        const data = { studentEmail, alumniEmail,requestType:'alumni' };
        const response = await axios.post(`${baseUrl}/send-request-to-alumni`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Remove request to mentor
export const removeConnectionRequestToMentor = async (studentEmail, mentorEmail) => {
    try {
        const data = { studentEmail, mentorEmail ,requestType:'mentor'};
        const response = await axios.post(`${baseUrl}/remove-request-to-mentor`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Remove request to alumni
export const removeConnectionRequestToAlumni = async (studentEmail, alumniEmail) => {
    try {
        const data = { studentEmail, alumniEmail, requestType:'alumni' };
        const response = await axios.post(`${baseUrl}/remove-request-to-alumni`, data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};