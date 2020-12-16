// Creating Express Server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");

// Middleware
const cors = require("cors");
app.use(cors());
app.use(express.json()); // Parsing JSON
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if ((req, method === "options")) {
//     res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

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
  console.log("production");
  app.use(express.static("fitrack-client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(_dirname, "fitrack-client", "build", "index.html")
    );
  });
}

// Express Server connection
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
