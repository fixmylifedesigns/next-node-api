const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const authRouter = require("../router/auth/authRouter");
const usersRouter = require("../router/users/usersRouter");
const postsRouter = require("../router/posts/postsRouter");
const mailerRouter = require("../router/mailer/mailerRouter")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.use("/api/mailer", mailerRouter)

module.exports = server;
