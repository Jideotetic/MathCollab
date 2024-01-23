import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";
import { Dispatch, SetStateAction } from "react";

const inputs = [{ label: "Email", inputType: "email" }];

const headerContent = {
  title: "Reset Password",
  description: "Provide your registered email to reset your password",
  email: "",
};

export default function ResetPasswordForm({
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
        formType="reset-password"
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
        formType="reset-password"
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
