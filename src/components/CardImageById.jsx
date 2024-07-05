import PropTypes from 'prop-types'

const CardImageById = ({ image }) => {

    CardImageById.propTypes = {
        image: PropTypes.any,
    }

    return (
        <div className='imageById'>
            <div className="imageById-card" key={image.id}>
                <div className="imageById-container">
                    <img src={image.url} className="imageById-image" alt={image.title} title={image.title} />
                </div>
                <div className="imageById-text-container">
                    <h4>{image.title}</h4>
                    <p className="card-text description-text">{image.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardImageById