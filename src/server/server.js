import express from 'express';
import path from 'path';
import http from 'http';

const app = express();
const distDir = path.join(__dirname, '/../../dist');
const routePath = path.join(distDir, '/index.html');

// Point static path to dist
app.use(express.static(distDir));
app.use('*', (req, res) => {
  res.sendFile(routePath);
});

/** Get port from environment and store in Express. */
const port = process.env.NODE_ENV !== 'production' ? '3310' : '80';
app.set('port', port);
/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
