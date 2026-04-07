const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// compteur en mémoire (stable sur Azure)
let count = 0;

app.get("/", (req, res) => {
  count++;

  const hostname = req.hostname;
  const port = process.env.PORT;
  const serverIP = req.socket.localAddress;
  const clientIP =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.send(`
    <h1>Visit Counter</h1>
    <p><strong>Visits:</strong> ${count}</p>
    <hr>
    <h3>Server Info</h3>
    <p><strong>Hostname:</strong> ${hostname}</p>
    <p><strong>Port:</strong> ${port}</p>
    <p><strong>Server IP:</strong> ${serverIP}</p>
    <hr>
    <h3>Client Info</h3>
    <p><strong>IP:</strong> ${clientIP}</p>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});