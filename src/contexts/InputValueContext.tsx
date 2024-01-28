import { ReactNode, createContext, useState } from "react";
import { InputValueContextTypes } from "../@types/inputValueContextTypes";

export const InputValueContext = createContext<InputValueContextTypes | null>(
  null,
);

export default function InputValueContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [className, setClassName] = useState("");
  const [classUrl, setClassUrl] = useState("");
  const [collaborators, setCollaborators] = useState("");
  return (
    <>
      <InputValueContext.Provider
        value={{
          email,
          setEmail,
          password,
          setPassword,
          confirmPassword,
          setConfirmPassword,
          className,
          setClassName,
          classUrl,
          setClassUrl,
          collaborators,
          setCollaborators,
        }}
      >
        {children}
      </InputValueContext.Provider>
    </>
  );
}
