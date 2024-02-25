import { createContext } from "react";
import { ReactNode, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface FormsContextType {
  loginFormOpen: boolean;
  setLoginFormOpen: Dispatch<SetStateAction<boolean>>;
  signUpFormOpen: boolean;
  setSignUpFormOpen: Dispatch<SetStateAction<boolean>>;
  resetPasswordFormOpen: boolean;
  setResetPasswordFormOpen: Dispatch<SetStateAction<boolean>>;
  verifyEmailFormOpen: boolean;
  setVerifyEmailFormOpen: Dispatch<SetStateAction<boolean>>;
  verifyPasswordResetOTPFormOpen: boolean;
  setVerifyPasswordResetOTPFormOpen: Dispatch<SetStateAction<boolean>>;
  newPasswordFormOpen: boolean;
  setNewPasswordFormOpen: Dispatch<SetStateAction<boolean>>;
  joinClassFormOpen: boolean;
  setJoinClassFormOpen: Dispatch<SetStateAction<boolean>>;
  createClassFormOpen: boolean;
  setCreateClassFormOpen: Dispatch<SetStateAction<boolean>>;
}

export const FormsContext = createContext<FormsContextType | null>(null);

export default function FormsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [resetPasswordFormOpen, setResetPasswordFormOpen] = useState(false);
  const [verifyEmailFormOpen, setVerifyEmailFormOpen] = useState(false);
  const [verifyPasswordResetOTPFormOpen, setVerifyPasswordResetOTPFormOpen] =
    useState(false);
  const [newPasswordFormOpen, setNewPasswordFormOpen] = useState(false);
  const [joinClassFormOpen, setJoinClassFormOpen] = useState(false);
  const [createClassFormOpen, setCreateClassFormOpen] = useState(false);
  return (
    <>
      <FormsContext.Provider
        value={{
          loginFormOpen,
          setLoginFormOpen,
          signUpFormOpen,
          setSignUpFormOpen,
          resetPasswordFormOpen,
          setResetPasswordFormOpen,
          verifyEmailFormOpen,
          setVerifyEmailFormOpen,
          verifyPasswordResetOTPFormOpen,
          setVerifyPasswordResetOTPFormOpen,
          newPasswordFormOpen,
          setNewPasswordFormOpen,
          joinClassFormOpen,
          setJoinClassFormOpen,
          createClassFormOpen,
          setCreateClassFormOpen,
        }}
      >
        {children}
      </FormsContext.Provider>
    </>
  );
}
