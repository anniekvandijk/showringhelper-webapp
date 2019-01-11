import express from 'express';
import cors from 'cors';
import path from 'path';
import http from 'http';
import methodOverride from 'method-override';
import showsRouter from './showsRouter';

const app = express();
const distDir = path.join(__dirname, '/../../dist');
const routePath = path.join(distDir, '/index.html');

// Point static path to dist
app.use(express.static(distDir));
app.use(cors({ origin: true }));
app.use(express.json());
app.use('/api/shows', showsRouter);
app.use(methodOverride());
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
