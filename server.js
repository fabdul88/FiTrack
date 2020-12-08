// Creating Express Server
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const path = require("path");

// Middleware
const cors = require("cors");
app.use(cors());
app.use(express.json()); // Parsing JSON

require("dotenv").config();

// Database URI From mongoDB dashboard
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// Console logging open connection from mongoDB
mongoose.connection.once("open", () => {
  console.log("mongoDB connection successful");
});

// Routes
const workoutsRouter = require("./routes/workouts");
const usersRouter = require("./routes/users");

app.use("/workouts", workoutsRouter);
app.use("/users", usersRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("fitrack-client/build"));
}

// Express Server connection
app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
