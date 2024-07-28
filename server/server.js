// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRouter = require('./routes/auth'); // Import authRouter
const trainingsRouter = require('./routes/trainings');
const contactsRouter = require('./routes/contacts');
const usersRouter = require('./routes/users'); // Import usersRouter

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/trainings', trainingsRouter);
app.use('/contacts', contactsRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 
app.use('/api/auth', authRouter); // Use authRouter for authentication
app.use('/api/users', usersRouter); // Use usersRouter for other routes

app.get('/', (req, res) => {
  res.send('Hello from ATRAINE backend!');
});

// Listen on port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
