import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardImageById from "../components/CardImageById.jsx";
import ImageService from "../services/ImageService.jsx"

const FavoriteImageById = () => {

    const [image, setImage] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        imageById(id)
    }, [id])

    const imageById = async (id) => {
        try {
            const response = await ImageService.getImageById(id)
            setImage(JSON.parse(response));
        } catch (error) {
            console.error('Error trying to fetch image', error);
        }
    }

    return (
        <CardImageById key={image.id} image={image} />
    )
}

export default FavoriteImageById;