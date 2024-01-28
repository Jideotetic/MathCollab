import { ReactNode, createContext, useState } from "react";
import { ClassType, ClassListType } from "../@types/classListType";

export const ClassListContext = createContext<ClassListType | null>(null);

export default function ClassListContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [classList, setClassList] = useState<ClassType[]>([]);

  return (
    <>
      <ClassListContext.Provider value={{ classList, setClassList }}>
        {children}
      </ClassListContext.Provider>
    </>
  );
}
