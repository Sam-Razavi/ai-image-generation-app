import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Route setups
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from SamInCodes!',
    });
});

const startServer = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await connectDB(process.env.MONGODB_URL);
        console.log('MongoDB connected.');

        app.listen(8080, () =>
            console.log('Server started on port 8080: https://ai-image-backend-8a1m.onrender.com')
        );
    } catch (error) {
        console.error('Error starting the server:', error.message);
    }
};

startServer();
