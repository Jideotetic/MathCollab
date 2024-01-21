import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  title: "Verify Email",
  description: "Enter the verification code sent to",
  email: "Jideotetic@gmail.com",
};

export default function OTPForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="verify-otp" />
      <FormFooter formType="verify-otp" />
    </FormWrapper>
  );
}
