import { useState, useEffect } from "react"
import ImageService from "../services/ImageService.jsx"
import { Link, useNavigate, useParams } from "react-router-dom";

const AddOrUpdateImage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();


    const saveOrUpdateImage = async (e) => {
        e.preventDefault();
        if (id) {
            e.preventDefault();
            const image = { title, description, url };
            try {
                await ImageService.updateImage(id, image);
                navigate('/images');
            } catch (error) {
                console.error('Error trying to update the image:', error);
            }
        } else {
            try {
                await ImageService.addImage({
                    title: title,
                    description: description,
                    url: url
                });
                navigate('/images');
            } catch (error) {
                console.error('Error trying to save the image:', error);
            }
        }
    }

    useEffect(() => {
        if (id) {
            ImageService.getImageById(id).then((response) => {
                setTitle(JSON.parse(response).title)
                setDescription(JSON.parse(response).description)
                setUrl(JSON.parse(response).url)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    const actionTitle = () => {
        if (id) {
            return <h2>Update Image</h2>
        } else {
            return <h2>Add New Image</h2>
        }
    }

    return (
        <div className="add-update-form">
            <div className="text-center">{actionTitle()}</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        placeholder="Write image title"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Image Url</label>
                    <input
                        type="text"
                        placeholder="Add image url"
                        name="url"
                        className="form-control"
                        defaultValue={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        placeholder="Write image description"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success m-2" onClick={(e) => saveOrUpdateImage(e)}>Save</button>
                    <Link to='/images' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AddOrUpdateImage;