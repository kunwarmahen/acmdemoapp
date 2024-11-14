// Import required modules
const os = require("os");
const http = require("http");

// Create a server that responds with "Hello World" and server ID
const server = http.createServer((req, res) => {
  const serverId = os.hostname();
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello World from server: ${serverId}\n`);
});

// Set the port to listen on
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
