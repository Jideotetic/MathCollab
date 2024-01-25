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
        }}
      >
        {children}
      </InputValueContext.Provider>
    </>
  );
}
