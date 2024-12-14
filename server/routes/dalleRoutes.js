import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await fetch(
            'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (response.status === 503) {
            return res.status(503).json({ message: 'Model is currently loading. Please try again later.' });
        }

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to generate image');
        }

        // Convert response to an array buffer
        const imageBuffer = await response.arrayBuffer();

        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': imageBuffer.byteLength,
        });
        res.end(Buffer.from(imageBuffer));
    } catch (error) {
        console.error('Error generating image:', error.message);
        res.status(500).json({ message: error.message || 'Something went wrong' });
    }
});




export default router;
