import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express();

// Start the HTTP server
const server = app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});

// Create the WebSocket server, passing in the HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("error", console.error);

  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send("Hello! Message From Server!!");
});

app.get("/", (req, res) => {
  res.send("Hello, this is the HTTP server!");
});
