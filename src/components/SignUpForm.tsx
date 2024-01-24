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
  title: "Create free Account",
  description:
    "Create your free account and collaborate with like minds in solving problems",
  email: "",
};

export default function SignUpForm({
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
        formType="signup"
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
        formType="signup"
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
