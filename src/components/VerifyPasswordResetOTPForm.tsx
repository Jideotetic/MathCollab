import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [
  { label: "Password", inputType: "password" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  title: "Reset Password",
  description: "Enter the verification code send to",
  email: "Jideotetic@gmail.com",
};

export default function VerifyPasswordResetOTPForm({
  otpValue,
}: {
  otpValue: string;
}) {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form
        inputs={inputs}
        formType="verify-password-reset"
        otpValue={otpValue}
      />
      <FormFooter formType="verify-password-reset" />
    </FormWrapper>
  );
}
