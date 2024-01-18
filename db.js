const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB_URI = process.env.DB_URI;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const dbOptions = {
  user: DB_USER,
  pass: DB_PASS,
  dbName: DB_NAME,
};

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, dbOptions);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;