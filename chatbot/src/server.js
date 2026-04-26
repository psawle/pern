import app from "./app.js";
import { Server } from 'socket.io';
import { createServer } from 'node:http';

// const app = express();
const server = createServer(app);
const io = new Server(server);


io.on('connection', (socket) => {
    console.log('a socket connected');
  });
  
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });