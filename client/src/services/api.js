import axios from 'axios';

const baseUrl = "http://localhost:8000";


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
export const authenticateSignup = async (type, data) => {
    try {
        const res= await axios.post(`${baseUrl}/register/${type}`, data);
        console.log(res.status)
        return res;
    } catch (error) {
        console.error(error);
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

export const getDataLogin = async ({ email }) => { // Accept email as a parameter
    try {
      const response = await axios.get(`${baseUrl}/login`, { params: { email } }); // Pass email as a query parameter
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
// Send request to mentor
export const sendConnectionRequestToMentor = async (studentEmail, mentorEmail) => {
    try {
        const data = { studentEmail, recipientEmail: mentorEmail, requestType: 'mentor' };
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
        const data = { studentEmail, recipientEmail: alumniEmail, requestType: 'alumni' };
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
        console.log(data)
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
// Fetch mentors from backend
export const fetchMentors = async () => {
    try {
      const response = await axios.get(`${baseUrl}/mentors`);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error('Error fetching mentors:', error);
      throw error;
    }
  };

export const fetchMentorRequestsWithStudentData = async (mentorEmail) => {
    try {
      const response = await axios.get(`${baseUrl}/mentor-requests-with-student-data`, {params: {mentorEmail} });
      console.log(response)
      return response;
    } catch (error) {
      console.error('Error fetching mentor requests with student data:', error);
    }
  };


export const changeReqStatus=async({studentEmail, mentorEmail, reqstatus})=>{
    try{
        const data={studentEmail, mentorEmail, reqstatus}
        const response=await axios.post(`${baseUrl}/update-req`,data)
        return response;
    }
    catch(error){
        console.error('Error updating req status', error);
    }

}
// export const viewMentorProfile=async(mentorEmail)=>{
//     try{

//         const response=await axios.get(`${baseUrl}/mentorprofile/`, { data: { mentorEmail } })
//         return response;
//     }
//     catch (error) {
//         console.error('Error fetching mentor details:', error);
//       }
// }

export const getConnectedMentors=async(email)=>{
    try{
        const studentEmail=email;
        console.log(studentEmail)
        const response=await axios.get(`${baseUrl}/get-connected-mentors`,{params: {studentEmail}});
        return response.data;
    }
    catch(error){
        console.error('Error finding mentors', error);
    }
}
export const getConnectedStudents=async(email)=>{
    try{
        const mentorEmail=email;
        console.log(mentorEmail)
        const response=await axios.get(`${baseUrl}/get-connected-students`,{params: {mentorEmail}});
        return response.data;
    }
    catch(error){
        console.error('Error retrieving connected students', error);
    }
}