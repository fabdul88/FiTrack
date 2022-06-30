require('dotenv').config();
// Creating Express Server
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parsing JSON
app.use(morgan('dev')); // http request logger

// Connecting MongoDB Atlas.
connectDB();

// Routes
const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/users');

app.use('/api/workouts', workoutsRouter);
app.use('/api/users', usersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('fitrack-client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(_dirname, 'fitrack-client', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || 8080;
// Express Server connection
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
