import { preregister, residentRegister, login, signup } from './endpoints';
import axios from 'axios';

const api = import.meta.env.VITE_REACT_APP_API_URL;



export const postPreRegisterForm = async (form) => {
    const { data } = await axios.post(`${api}${preregister}`, form);
    return data;
};

export const postResidentForm = async (form) => {
    const { data } = await axios.post(`${api}${residentRegister}`, form);
    return data;
};

export const postLoginForm = async (user) => {
    try {
        const response = await axios.post(`${api}${login}`, user);
        return response.data;
    } catch (error) {
        throw error.response?.data || error; 
    }
};

export const postSignupForm = async (user) => {
    const { data } = await axios.post(`${api}${signup}`, user);
    return data;
};