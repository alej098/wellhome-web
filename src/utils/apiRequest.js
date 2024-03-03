import { preregister } from './endpoints';
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

