import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1";
const token = localStorage.getItem("auth_token");
//const userId = localStorage.getItem("auth_id");
const headers = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}

const getAllImages = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`,
            headers
        );
        return response.data;
    } catch (error) {
        console.error('Error trying to fetch images', error);
        throw error;
    }
};

const getImageById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/images/${id}`,
            headers
        );
        return JSON.stringify(response.data);
    } catch (error) {
        console.error('Error trying to fetch image', error);
        throw error;
    }
};

const addImage = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/images`, data,
            headers
        );
        return response.data.data;
    } catch (error) {
        console.error('Error trying to save image:', error);
        throw error;
    }
};

const updateImage = async (id, image) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/images/${id}`, image,
            headers
        );
        return response.data;
    } catch (error) {
        console.error('Error trying to update image', error);
        throw error;
    }
};

const deleteImage = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/images/${id}`,
            headers
        );
    } catch (error) {
        console.error('Error trying to delete image', error);
        throw error;
    }
};
const toggleFavorite = async (id) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/images/${id}/favorite`, headers);
        return response.data;
    } catch (error) {
        console.error('Error trying to toggle favorite status', error);
        throw error;
    }
};

const ImageService = {
    getAllImages,
    getImageById,
    addImage,
    updateImage,
    deleteImage,
    toggleFavorite
};

export default ImageService;