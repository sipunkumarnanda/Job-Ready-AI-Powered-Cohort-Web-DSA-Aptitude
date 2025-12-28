const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your app
const multer = require('multer');
const imagekit = require('@imagekit/nodejs'); // Adjust based on your setup

describe('POST /api/products/', () => {
    it('should upload an image and create a product', async () => {
        const response = await request(app)
            .post('/api/products/')
            .attach('image', 'path/to/test/image.jpg') // Adjust the path to your test image
            .field('name', 'Test Product')
            .field('description', 'This is a test product');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Test Product');
    });

    it('should return 400 if no image is provided', async () => {
        const response = await request(app)
            .post('/api/products/')
            .field('name', 'Test Product')
            .field('description', 'This is a test product');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('should return 400 for invalid image type', async () => {
        const response = await request(app)
            .post('/api/products/')
            .attach('image', 'path/to/test/invalid.txt') // Adjust the path to an invalid test image
            .field('name', 'Test Product')
            .field('description', 'This is a test product');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});