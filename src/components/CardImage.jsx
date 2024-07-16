import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import editIcon from '/edit.svg'
import deleteIcon from '/delete.svg'
import favoriteIcon from '/favorite.svg'
import favoriteIconFilled from '/clickfavorite.svg'
import ImageService from '../services/ImageService';
import { useNavigate } from "react-router-dom";

const CardImage = ({ image }) => {
    const navigate = useNavigate();
    const handleFavoriteClick = async (id) => {
        try {
            const updatedImage = await ImageService.toggleFavorite(id);
            image.favorite = updatedImage.favorite;
            navigate('/images');
        } catch (error) {
            console.error('Error updating favorite status', error);
        }
   
    };

    return (
        <div className="card-image">
            <div className="image-container">
                <Link to={`/image/${image.id}`}><img src={image.url} className="image" alt={image.title} title={image.title} /></Link>
            </div>
            <div className="image-title-container">
                <Link to={`/image/${image.id}`} className="image-title"><h4>{image.title}</h4></Link>
                <p className="card-text description-text">{image.description}</p>
            </div>
            <div className='icons-container'>
                <Link to={`/update-image/${image.id}`} className="icons">
                    <img src={editIcon} alt="update" />
                </Link>
                <Link to={`/delete/${image.id}`} className="icons">
                    <img src={deleteIcon} alt="update" />
                </Link>
                <button className="icons" onClick={() => handleFavoriteClick(image.id)}>
                    <img src={image.favorite ? favoriteIconFilled : favoriteIcon} className="icons" alt="favorite" />
                </button>
            </div>
        </div>
    )
}
CardImage.propTypes = {
    image: PropTypes.object.isRequired,
    onFavorite: PropTypes.func.isRequired
};

export default CardImage;