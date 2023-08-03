const mongoose = require('mongoose');

const ConnectDB = async () => {
  await mongoose
    .connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify has been deprecated.
      // https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
      // useFindAndModify: false,
    })
    .catch((err) => {
      console.log('ERROR INITIALIZING MONGODB CONNECTION --', err);
      process.exit(1);
    });
};

// Check for connection events on the MongoDB server
mongoose.connection.on('connecting', () => {
  console.log('connecting to MongoDB Database...');
});
mongoose.connection.on('connected', () => {
  console.log('Initial connection to mongoDB database successful');
});
mongoose.connection.on('open', () => {
  console.log('mongoDB database connection successful');
});
mongoose.connection.on('error', () => {
  console.log('mongoDB database error!');
});
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB connection disconnected');
});

module.exports = ConnectDB;
