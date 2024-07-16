import { Link } from "react-router-dom"

const Home = () => {
    return (
        
        <div className="home-background">
            <Link to="/images" className="home-title">
                <div className="home-title-container">
                    <h1 className="home-title-text">Pixel Gallery</h1>
                </div>
            </Link>
        </div>
    )
}

export default Home