import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [
  { label: "Enter new password", inputType: "password" },
  { label: "Confirm new password", inputType: "confirm-password" },
];

const headerContent = {
  title: "Reset Password",
  description: "Enter your new password below",
  email: "",
};

export default function NewPasswordForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="new-password" />
      <FormFooter formType="new-password" />
    </FormWrapper>
  );
}
