import { createContext } from "react";
import { ReactNode, useState } from "react";
import { FormBooleanValueContextTypes } from "../@types/formBooleanValueContextTypes";

export const FormBooleanValueContext =
  createContext<FormBooleanValueContextTypes | null>(null);

export default function FormBooleanValueContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [resetPasswordFormOpen, setResetPasswordFormOpen] = useState(false);
  const [verifyEmailOTPFormOpen, setVerifyEmailOTPFormOpen] = useState(false);
  const [verifyPasswordResetOTPFormOpen, setVerifyPasswordResetOTPFormOpen] =
    useState(false);
  const [newPasswordFormOpen, setNewPasswordFormOpen] = useState(false);
  const [joinClassFormOpen, setJoinClassFormOpen] = useState(false);
  const [createClassFormOpen, setCreateClassFormOpen] = useState(false);
  return (
    <>
      <FormBooleanValueContext.Provider
        value={{
          loginFormOpen,
          setLoginFormOpen,
          signUpFormOpen,
          setSignUpFormOpen,
          resetPasswordFormOpen,
          setResetPasswordFormOpen,
          verifyEmailOTPFormOpen,
          setVerifyEmailOTPFormOpen,
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
      </FormBooleanValueContext.Provider>
    </>
  );
}
