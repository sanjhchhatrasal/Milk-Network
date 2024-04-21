
# Milk Network

Milk Network is a social networking platform built with React, Redux, Node.js, and MongoDB. It provides a platform for users to connect, share updates, and engage in discussions within a community focused on dairy farming.

## Features

- **User Authentication:** Secure user authentication and authorization system.
- **Profile Management:** Users can create and manage their profiles, including profile pictures and bio.
- **Feed and Posts:** Users can create posts, like, comment, and share posts within the network.
- **Messaging:** Private messaging system for direct communication between users.
- **Community Forums:** Dedicated forums for discussions on various topics related to dairy farming.
- **Admin Dashboard:** Admin panel for managing users, posts, and community guidelines.

## Technologies Used

- **Frontend:** React, Redux, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** Heroku, MongoDB Atlas

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/sanjhchhatrasal/Milk-Network.git
```

2. Install dependencies for both frontend and backend:

```bash
cd Milk-Network/frontend
npm install
cd ../backend
npm install
```

3. Set up environment variables:

Create a `.env` file in the backend directory and add the following variables:

```
PORT=5000
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```

Replace `<your_mongodb_uri>` with your MongoDB connection URI and `<your_jwt_secret>` with a secret key for JWT.

4. Start the development servers:

```bash
cd ../frontend
npm start
cd ../backend
npm run dev
```

5. Open `http://localhost:3000` in your browser to view the Milk Network application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

