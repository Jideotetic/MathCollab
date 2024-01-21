import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./CustomForm";

const inputs = [
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  title: "Verify Email",
  description: "Enter the verification code sent to",
  email: "Jideotetic@gmail.com",
};

export default function VerifyEmailOTPForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="verify-email" />
      <FormFooter formType="verify-email" />
    </FormWrapper>
  );
}
