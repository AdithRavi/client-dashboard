import express from "express";
import http from "http";
import { initSocket } from "./socket";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));

const server = http.createServer(app);
initSocket(server);

server.listen(5000, () => console.log("Server started"));
