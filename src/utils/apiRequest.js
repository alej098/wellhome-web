import { preregister, login } from './endpoints';
import axios from 'axios';

const api = import.meta.env.VITE_REACT_APP_API_URL;



export const postPreRegisterForm = async (form) => {
    console.log(form);
    try {
        const { data } = await axios.post(`${api}${preregister}`, form);
        console.log(data);
    } catch (error) {
        console.error({ error: error });
    }
};

export const postLoginForm = async (user) => {
    try {
        const response = await axios.post(`${api}${login}`, user);
        return response.data;
    } catch (error) {
        throw error.response?.data || error; 
    }
};