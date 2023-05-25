"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const uuid_1 = require("uuid");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const io = new socket_io_1.Server({
    cors: {
        origin: process.env.CLIENT_URL,
    },
});
const db = new Set();
const randomId = () => (0, uuid_1.v4)();
io.use((socket, next) => {
    const roomId = socket.handshake.auth.sessionID;
    if (roomId) {
        if (!db.has(roomId)) {
            socket.data.roomId = roomId;
            return next();
        }
    }
    next();
});
io.on('connection', (socket) => {
    console.log(socket.handshake.headers);
    socket.on('extend hand', () => {
        socket.emit('shake-hand');
        socket.emit('info', {
            connected: true,
            db: db,
            room: socket.data.roomId,
        });
    });
    socket.on('ping', () => {
        socket.emit('pong', {
            date: new Date(),
        });
        socket.emit(`ping response: ${new Date().toISOString()}`);
    });
    socket.on('join-room', () => {
        const id = String((0, uuid_1.v4)());
        socket.join(id);
        socket.emit(`room(${id}) joined`);
    });
    socket.on('disconnect', ({}) => {
        console.log(`${socket.id} disconnected`);
    });
});
io.listen(Number(process.env.PORT));
//# sourceMappingURL=index.js.map