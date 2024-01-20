import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [
  { label: "Password", inputType: "password" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  firstHeaderText: "Math",
  styledText: "C",
  lastHeaderText: "ollab",
  secondHeading: "Reset Password",
  paragraph: "Enter the verification code send to",
  email: "Jideotetic@gmail.com",
};

export default function ConfirmPasswordResetForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="confirm-reset" />
      <FormFooter formType="confirm-reset" />
    </FormWrapper>
  );
}
