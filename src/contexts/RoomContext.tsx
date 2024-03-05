import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface HostContextType {
  host: boolean;
  setHost: Dispatch<SetStateAction<boolean>>;
}

export const RoomContext = createContext<null | HostContextType>(null);

export default function RoomContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [host, setHost] = useState(false);
  return (
    <RoomContext.Provider value={{ host, setHost }}>
      {children}
    </RoomContext.Provider>
  );
}
