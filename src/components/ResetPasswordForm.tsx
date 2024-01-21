import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [{ label: "Email", inputType: "email" }];

const headerContent = {
  title: "Reset Password",
  description: "Provide your registered email to reset your password",
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
