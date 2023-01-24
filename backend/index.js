// Design Server
const express = require("express");
const app = express();
const cors = require("cors");

// Call Mongo DB Connection
const mongo = require("./api/config/mongoose");

// Define Routes
const userRouter = require("./api/routes/userRoutes");
const clubRouter = require("./api/routes/clubRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", clubRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("running on", process.env.PORT);
});

//  Old
// App.listen(3000, () => {
//   console.log("running");
// });
