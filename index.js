const express = require("express");

const app = express();

// IMPORTANT Azure
const PORT = process.env.PORT || 3000;

let count = 0;

app.get("/", (req, res) => {
  count++;

  const hostname = req.hostname;
  const serverIP = req.socket.localAddress;

  const clientIP =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.send(`
    <h1>Visit Counter</h1>
    <p><strong>Visits:</strong> ${count}</p>
    <hr>
    <h3>Server Info</h3>
    <p><strong>Hostname:</strong> ${hostname}</p>
    <p><strong>Port:</strong> ${PORT}</p>
    <p><strong>Server IP:</strong> ${serverIP}</p>
    <hr>
    <h3>Client Info</h3>
    <p><strong>IP:</strong> ${clientIP}</p>
  `);
});

// IMPORTANT FIX AZURE
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});