const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors()); // Use cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.listen(4000, () => console.log('Server running on port 4000'));