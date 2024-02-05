import { ReactNode, createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface InputsContextType {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  className: string;
  setClassName: Dispatch<SetStateAction<string>>;
  classUrl: string;
  setClassUrl: Dispatch<SetStateAction<string>>;
  collaborators: string;
  setCollaborators: Dispatch<SetStateAction<string>>;
}

export const InputsContext = createContext<InputsContextType | null>(null);

export default function InputsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [className, setClassName] = useState("");
  const [classUrl, setClassUrl] = useState("");
  const [collaborators, setCollaborators] = useState("");
  return (
    <>
      <InputsContext.Provider
        value={{
          firstName,
          setFirstName,
          lastName,
          setLastName,
          email,
          setEmail,
          password,
          setPassword,
          error,
          setError,
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
      </InputsContext.Provider>
    </>
  );
}
