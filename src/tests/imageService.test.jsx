import '@testing-library/jest-dom';
import { test, describe, expect, vi, beforeEach } from "vitest";
import axios from 'axios';
import ImageService from "../services/ImageService.jsx"

//These test only work without authentication!!!

vi.mock('axios')
//GET
describe('Get images from Json Server API using axios', () => {
    beforeEach(() => {
        axios.get.mockReset()
    });
    test('makes a GET request to fetch all images', async () => {
        const imagesMock = [{ id: 1, title: "Árbol", }, { id: 2, title: "Lago" }]
        axios.get.mockResolvedValue({
            data: imagesMock,
        })
    
        const images = await ImageService.getAllImages()
        const URL = "http://localhost:3000/images"
        expect(axios.get).toHaveBeenCalledWith(URL)
        expect(images).toStrictEqual(imagesMock)
    }),
    test('makes a GET request to fetch image by id', async () => {
        const imageId = 1;
        const imageMock = [{ id: 1, title: "Árbol", }]
        axios.get.mockResolvedValue({
            data: imageMock,
        })

        const image = await ImageService.getImageById(imageId)
        const URL = `http://localhost:3000/images/${imageId}`
        expect(axios.get).toHaveBeenCalledWith(URL)
        expect(image).toEqual(imageMock)
    })
});

//POST
describe('addImage function', () => {
    test('makes a POST request to add a new image', async () => {
        const imageData = {
            title: 'Test Title',
            description: 'Test Description',
            url: 'test_image_url.jpg'
        };

        axios.post.mockResolvedValue({ data: { id: 1, ...imageData } });

        const result = await ImageService.addImage(imageData);

        expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/images', imageData);
        expect(result).toEqual({ id: 1, ...imageData });
    });
});

//PUT
describe('updateImage function', () => {
    test('makes a PUT request to update an existing image', async () => {
        const imageId = 1;
        const updatedImageData = {
            title: 'Updated Title',
            description: 'Updated Description',
            url: 'updated_image_url.jpg'
        };

        axios.put.mockResolvedValue({ data: { id: imageId, ...updatedImageData } });

        const result = await ImageService.updateImage(imageId, updatedImageData);

        expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/images/${imageId}`, updatedImageData);
        expect(result).toEqual({ id: imageId, ...updatedImageData });
    });
});

//DELETE
describe('deleteImage function', () => {
    test('makes a DELETE request to delete an image', async () => {
        const imageId = 1;

        axios.delete.mockResolvedValue();

        await ImageService.deleteImage(imageId);

        expect(axios.delete).toHaveBeenCalledWith(`http://localhost:3000/images/${imageId}`);
    });
});
