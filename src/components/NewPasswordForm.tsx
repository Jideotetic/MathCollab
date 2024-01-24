import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";
import { Dispatch, SetStateAction } from "react";

const inputs = [
  { label: "Enter new password", inputType: "password" },
  { label: "Confirm new password", inputType: "confirm-password" },
];

const headerContent = {
  title: "Reset Password",
  description: "Enter your new password below",
  email: "",
};

export default function NewPasswordForm({
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
  // createClassFormOpen,
  // setCreateClassFormOpen,
  // joinClassFormOpen,
  // setJoinClassFormOpen,
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
  // createClassFormOpen: boolean;
  // setCreateClassFormOpen: Dispatch<SetStateAction<boolean>>;
  // joinClassFormOpen: boolean;
  // setJoinClassFormOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form
        inputs={inputs}
        formType="new-password"
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
        // createClassFormOpen={createClassFormOpen}
        // setCreateClassFormOpen={setCreateClassFormOpen}
        // joinClassFormOpen={joinClassFormOpen}
        // setJoinClassFormOpen={setJoinClassFormOpen}
      />
      <FormFooter
        formType="new-password"
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
        // createClassFormOpen={createClassFormOpen}
        // setCreateClassFormOpen={setCreateClassFormOpen}
        // joinClassFormOpen={joinClassFormOpen}
        // setJoinClassFormOpen={setJoinClassFormOpen}
      />
    </FormWrapper>
  );
}
