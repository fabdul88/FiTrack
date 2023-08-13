require('dotenv').config();
// Creating Express Server
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parsing JSON
app.use(morgan('dev')); // http request logger
app.use(cookieParser());

// Connecting MongoDB Atlas.
connectDB();

// Routes
const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/api/workouts', workoutsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'fitrack-client/build')));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'fitrack-client', 'build', 'index.html'),
      function (err) {
        res.status(500).send(err);
      }
    );
  });
} else {
  app.get('/', (req, res) => res.send('server is ready'));
}

const PORT = process.env.PORT || 8080;
// Express Server connection
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
