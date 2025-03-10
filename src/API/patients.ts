import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const patients = async () => {
    try {
        const url = `${API_URL}/patients`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching patients:', error);
        return [];
    }
};
