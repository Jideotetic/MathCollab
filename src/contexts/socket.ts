// import { createContext } from "react";
import io, { Socket } from "socket.io-client";

// const PORT = "http://localhost:10000";
const PORT = import.meta.env.REACT_APP_BACKEND_URL;
// const backendUrl = process.env.REACT_APP_BACKEND_URL;
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transport: ["websocket"],
};

interface ConnectionOptionsType {
  // "force new connection": boolean;
  // reconnectionAttempts: string;
  // timeout: number;
  // transport: string[];
}

export interface RoomContextType {
  server: Socket;
}

// export const RoomContext = createContext<RoomContextType | null>(null);

export const server = io(PORT, connectionOptions as ConnectionOptionsType);
