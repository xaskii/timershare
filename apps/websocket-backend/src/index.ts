import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { CLIENT_RENEG_WINDOW } from "tls";
import { v4 as uuidv4 } from "uuid";
import * as dotenv from "dotenv";
dotenv.config();

interface SocketData {
  roomId: string;
}

// hello
const io = new Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  SocketData
>({
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
const db = new Set<string>();
const randomId = () => uuidv4();

io.use((socket, next) => {
  // TODO: prob switching to actual websockets later so I'll rewrite this
  // leaving this here so there's a socketid for the application,
  // not sure how i'm going to implement rooms
  const roomId = socket.handshake.auth.sessionID;
  if (roomId) {
    // find existing session
    if (!db.has(roomId)) {
      socket.data.roomId = roomId;
      return next();
    }
  }
  next();
});

io.on("connection", (socket) => {
  console.log(socket.handshake.headers);

  socket.on("extend hand", () => {
    socket.emit("shake-hand");
    socket.emit("info", {
      connected: true,
      db: db,
      room: socket.data.roomId,
    });
  });

  socket.on("ping", () => {
    socket.emit("pong", {
      date: new Date(),
    });
    socket.emit(`ping response: ${new Date().toISOString()}`);
  });
  socket.on("join-room", () => {
    const id = String(uuidv4());
    // if (db.has(id)) {
    //   return
    // }

    // db.add(id)
    socket.join(id);
    socket.emit(`room(${id}) joined`);
  });

  socket.on("disconnect", ({}) => {
    console.log(`${socket.id} disconnected`);
  });
});
io.listen(Number(process.env.PORT));
