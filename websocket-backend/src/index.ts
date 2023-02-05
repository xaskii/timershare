import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { v4 as uuidv4 } from 'uuid'

interface SocketData {
  roomId: string
}

const io = new Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  SocketData
>({
  cors: {
    origin: 'http://localhost:3000',
  },
})
const db = new Set<string>()
const randomId = () => uuidv4()

io.use((socket, next) => {
  const roomId = socket.handshake.auth.sessionID
  if (roomId) {
    // find existing session
    if (!db.has(roomId)) {
      socket.data.roomId = roomId
      return next()
    }
  }
  next()
})

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`)

  socket.on('ready', () => {
    socket.emit('info', {
      connected: true,
      db: db,
      room: socket.data.roomId,
    })
  })

  socket.on('ping', () => {
    socket.emit('pong')
  })
  socket.on('create-room', () => {
    const id = String(uuidv4())
    db.add(id)
    socket.join(id)
    socket.emit('connect')
  })
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`)
  })
})
io.listen(3001)
