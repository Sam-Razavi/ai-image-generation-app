import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        mongoose.set('strictQuery', true); // Recommended by Mongoose for strict mode

        console.log('Connecting to MongoDB...');
        await mongoose.connect(url, {
            useNewUrlParser: true, // Ensures compatibility with the latest MongoDB drivers
            useUnifiedTopology: true, // Handles new connection topology
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        });

        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
