import { useState, useEffect } from "react";
import CardImage from "../components/CardImage.jsx";
import ImageService from "../services/ImageService.jsx"
import { Link } from "react-router-dom";
import plusIcon from '/plus.svg'

const FavoriteImage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        imagesList()
    }, [])

    const imagesList = async () => {
        try {
            const response = await ImageService.getAllImages()
            setImages(response);
        } catch (error) {
            console.error('Error trying to fetch images', error);
        }
    }

    return (
        <div className='images'>
            <div className='add-new-image'>
                <Link to='/add-image' className="add-new-image-link">
                    <img className="add-new-image-icon" src={plusIcon} alt="" />
                    <span className="add-new-image-text">Add New Image</span>
                </Link>
            </div>
            <h1 className="images-title">My favorite Images</h1>
            <div className='cards-container'>
                {
                    images.map((image) =>
                        <CardImage key={image.id} image={image} />
                    )
                }
            </div>
        </div>
    )
}

export default FavoriteImage