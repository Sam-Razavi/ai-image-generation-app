# AI Image Generation App

This project is an AI-powered web application that allows users to generate images using the Hugging Face API and share them with a community. The app also includes a search functionality to browse and filter shared images based on user prompts.

---

## Features

- **Image Generation**: Generate stunning images using the Hugging Face Stable Diffusion API.
- **Community Sharing**: Share generated images with the community.
- **Search Functionality**: Search through the shared posts using prompts or user names.
- **Cloud Storage**: Stores shared images on [Cloudinary](https://cloudinary.com).
- **Database Integration**: Uses MongoDB to manage user-generated content.

---

## Prerequisites

Make sure you have the following installed:

1. [Node.js](https://nodejs.org/)
2. [MongoDB](https://www.mongodb.com/)
3. A [Cloudinary](https://cloudinary.com/) account.
4. A [Hugging Face](https://huggingface.co/) API key.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sam-Razavi/ai-image-generation-app.git
   cd ai-image-generation-app
   ```

2. Install dependencies for both server and client:

   ```bash
   # Navigate to the server folder
   cd server
   npm install

   # Navigate to the client folder
   cd ../client
   npm install
   ```

---

## Configuration

1. **Environment Variables**:

   Create a `.env` file in the `server` directory with the following content:

   ```env
   HUGGINGFACE_API_KEY=<your-huggingface-api-key>
   MONGODB_URL=<your-mongodb-connection-url>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```

2. **Update API Endpoints**:

   - In the client app (`client/src/pages/Home.jsx` and `client/src/pages/CreatePost.jsx`), ensure the API endpoints point to your server URL.

---

## Running the Application

1. **Start the server**:

   ```bash
   cd server
   npm start
   ```

   The server will run on `http://localhost:8080`.

2. **Start the client**:

   ```bash
   cd client
   npm start
   ```

   The client will run on `http://localhost:5173` (or the port specified in your development environment).

---

## Usage

1. **Generate an Image**:
   - Go to the "Create" page.
   - Enter a prompt or click "Surprise Me" for a random prompt.
   - Click "Generate" to create an image.

2. **Share an Image**:
   - After generating an image, click "Share with the Community."

3. **Browse and Search**:
   - On the homepage, browse through the shared images or use the search bar to filter posts.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Image Hosting**: Cloudinary
- **AI API**: Hugging Face Stable Diffusion

---

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/fd1347f6-e256-4813-8b84-d5d314e02ddd)


### Create Page
![image](https://github.com/user-attachments/assets/1ced9e2f-d6b2-4548-bc17-be14877a6483)



---

## Known Issues

- **Hugging Face Model Loading**: Sometimes the Hugging Face model takes time to load.
- **Image Sharing**: Ensure that generated images are valid URLs before sharing.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Hugging Face API](https://huggingface.co)
- [Cloudinary](https://cloudinary.com)
- [MongoDB](https://mongodb.com)
- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)

