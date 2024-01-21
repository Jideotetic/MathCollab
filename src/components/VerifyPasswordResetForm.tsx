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

export default function VerifyPasswordResetForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="verify-password-reset" />
      <FormFooter formType="verify-password-reset" />
    </FormWrapper>
  );
}
