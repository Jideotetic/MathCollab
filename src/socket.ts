import io from "socket.io-client";

const PORT = "http://localhost:10000";
// const PORT = "https://mathcollab-server.onrender.com";

interface ConnectionOptionsType {
  "force new connection": boolean;
  reconnectionAttempts: number;
  timeout: number;
  transport: string[];
}

const connectionOptions: ConnectionOptionsType = {
  "force new connection": true,
  reconnectionAttempts: Infinity,
  timeout: 10000,
  transport: ["websocket"],
};

export const server = io(PORT, connectionOptions);
