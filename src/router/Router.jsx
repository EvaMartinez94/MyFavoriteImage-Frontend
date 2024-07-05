import { createBrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout";
import Home from '../pages/Home';
import FavoriteImage from '../pages/FavoriteImage';
import FavoriteImageById from '../pages/FavoriteImageById';
import AddOrUpdateImage from '../pages/AddOrUpdateImage';
import DeleteImage from '../pages/DeleteImage';
import Login from '../pages/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/images",
                element: <FavoriteImage />
            },
            {
                path: "/image/:id",
                element: <FavoriteImageById />
            },
            {
                path: "/add-image",
                element: <AddOrUpdateImage />
            },
            {
                path: "/update-image/:id",
                element: <AddOrUpdateImage />
            },
            {
                path: "/delete/:id",
                element: <DeleteImage />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]); 