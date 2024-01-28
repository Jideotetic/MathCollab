import { Dispatch, SetStateAction } from "react";

export interface InputValueContextTypes {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  className: string;
  setClassName: Dispatch<SetStateAction<string>>;
  classUrl: string;
  setClassUrl: Dispatch<SetStateAction<string>>;
  collaborators: string;
  setCollaborators: Dispatch<SetStateAction<string>>;
}
