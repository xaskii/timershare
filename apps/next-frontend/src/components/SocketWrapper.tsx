import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Box,
  createLocalStorageManager,
  Editable,
  EditableInput,
  EditablePreview,
  Text,
  Flex,
  VStack,
  HStack,
  ButtonGroup,
  Stack,
} from "@chakra-ui/react";
import { Timer } from "./Timer";

import { io } from "socket.io-client";
// const socket = io('http://localhost:3001')
const socket = io(process.env.NEXT_PUBLIC_WSSERVER_URL);
console.error({ envvarhere: process.env.NEXT_PUBLIC_WSSERVER_URL });

interface SocketWrapperProps {}

export const SocketWrapper: React.FC<SocketWrapperProps> = ({}) => {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [lastPong, setLastPong] = useState(null);
  const [socketCopy, setSocketCopy] = useState<any>(null);

  useEffect(() => {
    setSocketCopy({ ...socket });

    // will refactor into a util, maybe socket controller?
    socket.on("info", () => {
      setIsConnected(true);
    });
    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });
    socket.on("hand extended", (...args) => {
      console.log("handshake complete ");
    });
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
    socket.emit("extend hand");
    socket.emit("ping");

    return () => {
      socket.off("info");
      socket.off("pong");
      socket.off("hand extended");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  // return (
  //   <VStack
  //     width='xl'
  //     alignItems='flex-start'
  //     p={0}
  //     textAlign='left'
  //     fontSize='2xl'
  //   >
  //     <Text>
  //       room: <span>{router.query.room}</span>
  //     </Text>
  //     <Text>last ping: {lastPong}</Text>
  //     <Text>connected: {String(isConnected)}</Text>
  //     <Text>socketId: {socketCopy?.id}</Text>
  //     <ButtonGroup>
  //       <Button onClick={() => console.log(socketCopy)}>log socket info</Button>
  //       <Button onClick={sendPing}>ping</Button>
  //     </ButtonGroup>
  //   </VStack>
  // )
  return (
    <Stack
      justifyContent="center"
      alignContent="center"
      direction={["column", "column", "column", "row"]}
      h="full"
      w="full"
      p={40}
    >
      <VStack
        h="full"
        w={["full", "full", "full", "50%"]}
        alignItems="center"
        textAlign="center"
        justifyContent="center"
      >
        <h1 style={{ display: "flex" }}></h1>
        <Text>
          room: <span>{router.query.room}</span>
        </Text>
        <Text>last ping: {lastPong}</Text>
        <Text>connected: {String(isConnected)}</Text>
        <Text>socketId: {socketCopy?.id}</Text>
        <ButtonGroup variant="solid">
          <Button onClick={() => console.log(socketCopy)}>
            log socket info
          </Button>
          <Button onClick={sendPing}>ping</Button>
          <Button>hahahahahah i ahte this shit</Button>
        </ButtonGroup>
      </VStack>

      <VStack
        justifyContent="center"
        w={["full", "full", "full", "50%"]}
        spacing={4}
        textAlign="center"
      >
        <Timer offset={300} />
      </VStack>
    </Stack>
  );
};
