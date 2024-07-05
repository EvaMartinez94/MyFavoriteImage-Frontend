import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('auth_token'));
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem('auth_token'));
    }, []);

    const logoutSubmit = () => {
        localStorage.removeItem("auth_user");
        localStorage.removeItem('auth_token');
        setToken(null);
        navigate('/');
    }

    return (
        <nav>
            <div className="navbar-link-container">
                <Link to={`/`} className="navbar-link">
                    <h5 className="navbar-text">Home</h5>
                </Link>
                {token === null ?
                    <Link to={`/login`} className="navbar-link">
                        <h5 className="navbar-text">Login</h5>
                    </Link>
                    :
                    <>
                        <Link to={`/images`} className="navbar-link">
                            <h5 className="navbar-text">Images</h5>
                        </Link>
                        <h5 className="navbar-link navbar-text" onClick={logoutSubmit}>Logout</h5>
                    </>
                }
            </div>
        </nav >
    )
}

export default Navbar