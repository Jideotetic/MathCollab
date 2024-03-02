import { ReactNode } from "react";
import { RoomContext, server } from "./socket";

export default function RoomContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RoomContext.Provider value={{ server }}>{children}</RoomContext.Provider>
  );
}
