import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";


const login = async (username, password) => {
    const user = username + ":" + password
    try {
        const response = await axios.post(API_URL + '/login', {}, {
            headers: {
                Authorization: 'Basic ' + btoa(user)
            }
        })
        const data = response.data.data;
        if(data.token) {
            localStorage.setItem("auth_user", data);
            localStorage.setItem("auth_token", data.token);
            localStorage.setItem("auth_role", data.userInfo.roles);
            localStorage.setItem("auth_id", data.userInfo.id);
        }
        return data; 
    } catch (error) {
        console.error('Error trying to login:', error.response.data.data);
        throw error; 
    }
};


const AuthService = {
    login,
};

export default AuthService;