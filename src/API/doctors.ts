import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const doctors = async () => {
    try {
        const url = `${API_URL}/doctors`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        return [];
    }
};
