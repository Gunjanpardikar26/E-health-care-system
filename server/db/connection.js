const mongoose = require('mongoose');

// Corrected connection string
const url = "mongodb+srv://shalinchore:stxaviers@cluster0.uwydae9.mongodb.net/form-data?retryWrites=true&w=majority";
// const url = 'mongodb://localhost:27017/form-data';
// const url = "mongodb+srv://shalinchore:<password>@cluster0.uwydae9.mongodb.net/";
mongoose.connect(url, {serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
