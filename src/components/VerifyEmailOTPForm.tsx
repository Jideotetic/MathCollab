import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";
import { Dispatch, SetStateAction } from "react";

const inputs = [
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  title: "Verify Email",
  description: "Enter the verification code sent to",
  email: "Jideotetic@gmail.com",
};

export default function VerifyEmailOTPForm({
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
}: {
  loginFormOpen: boolean;
  setLoginFormOpen: Dispatch<SetStateAction<boolean>>;
  signUpFormOpen: boolean;
  setSignUpFormOpen: Dispatch<SetStateAction<boolean>>;
  resetPasswordFormOpen: boolean;
  setResetPasswordFormOpen: Dispatch<SetStateAction<boolean>>;
  verifyEmailOTPFormOpen: boolean;
  setVerifyEmailOTPFormOpen: Dispatch<SetStateAction<boolean>>;
  verifyPasswordResetOTPFormOpen: boolean;
  setVerifyPasswordResetOTPFormOpen: Dispatch<SetStateAction<boolean>>;
  newPasswordFormOpen: boolean;
  setNewPasswordFormOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form
        inputs={inputs}
        formType="verify-email"
        // loginFormOpen={loginFormOpen}
        setLoginFormOpen={setLoginFormOpen}
        // signUpFormOpen={signUpFormOpen}
        setSignUpFormOpen={setSignUpFormOpen}
        resetPasswordFormOpen={resetPasswordFormOpen}
        setResetPasswordFormOpen={setResetPasswordFormOpen}
        // verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
        setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
        verifyPasswordResetOTPFormOpen={verifyPasswordResetOTPFormOpen}
        setVerifyPasswordResetOTPFormOpen={setVerifyPasswordResetOTPFormOpen}
        // newPasswordFormOpen={newPasswordFormOpen}
        setNewPasswordFormOpen={setNewPasswordFormOpen}
      />
      <FormFooter
        formType="verify-email"
        loginFormOpen={loginFormOpen}
        setLoginFormOpen={setLoginFormOpen}
        signUpFormOpen={signUpFormOpen}
        setSignUpFormOpen={setSignUpFormOpen}
        resetPasswordFormOpen={resetPasswordFormOpen}
        setResetPasswordFormOpen={setResetPasswordFormOpen}
        verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
        setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
        verifyPasswordResetOTPFormOpen={verifyPasswordResetOTPFormOpen}
        setVerifyPasswordResetOTPFormOpen={setVerifyPasswordResetOTPFormOpen}
        newPasswordFormOpen={newPasswordFormOpen}
        setNewPasswordFormOpen={setNewPasswordFormOpen}
      />
    </FormWrapper>
  );
}
