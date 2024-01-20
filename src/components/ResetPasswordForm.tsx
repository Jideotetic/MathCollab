import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [{ label: "Email", inputType: "email" }];

const headerContent = {
  firstHeaderText: "Math",
  styledText: "C",
  lastHeaderText: "ollab",
  secondHeading: "Reset Password",
  paragraph: "Provide your registered email to reset your password",
  email: "",
};

export default function ResetPasswordForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="reset-password" />
      <FormFooter formType="reset-password" />
    </FormWrapper>
  );
}
