import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const appointments = async (status?: string) => {
    try {
        const url = status ? `${API_URL}/appointments?status=${status}` : `${API_URL}/appointments`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return [];
    }
};
