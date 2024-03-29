import io, { Socket } from "socket.io-client";

// const PORT = "http://localhost:10000";
// const PORT = import.meta.env.REACT_APP_BACKEND_URL;
const PORT = "https://mathcollab-server.onrender.com";
// const PORT =
//   "https://70aee64c-8b60-4c16-b047-25e7ceda3ad1-00-1kzz2yl4a7w07.spock.replit.dev/";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  // retries: 3,
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

export const server = io(PORT, connectionOptions as ConnectionOptionsType);
