const mongoose = require('mongoose');

// Database URI From mongoDB dashboard and connecting to the database
const ConnectDB = async () => {
  await mongoose.connect(
    process.env.ATLAS_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    },
    (err) => {
      err ? console.log(err) : console.log('Connected to MongoDB');
    }
  );
};

module.exports = ConnectDB;
