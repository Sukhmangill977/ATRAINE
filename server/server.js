const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const authRouter = require('./routes/auth');
const trainingsRouter = require('./routes/trainings');
const contactsRouter = require('./routes/contacts');
const usersRouter = require('./routes/users');
const internshipsRouter = require('./routes/internships');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// CORS configuration
const corsOptions = {
  origin: true, // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization,token', // Add 'token' to allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, '/client/build')));

// API Routes
app.use('/api/trainings', trainingsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/internships', internshipsRouter); // Ensure this route exists

// Uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Fallback to serve the frontend app for any route not handled by the API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Listen on port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
