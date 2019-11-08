// code away!
require("dotenv").config();
const express = require("express");

const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

server = express();

server.use(express.json());
server.use(logger);
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.status(200).send("You are at the index page");
});

server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}/`);
});

function logger(req, res, next) {
  const date = new Date();
  console.log(`${req.method} ${req.url} ${date.toISOString()}`);
  next();
}
