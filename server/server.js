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
  origin: 'https://atraine.vercel.app', // Replace with your frontend domain
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

// Routes
app.use('/trainings', trainingsRouter);
app.use('/contacts', contactsRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/internships', internshipsRouter); // Ensure this route exists

app.get('/', (req, res) => {
  res.send('Hello from ATRAINE backend!');
});

// Listen on port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
