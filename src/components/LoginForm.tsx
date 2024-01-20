import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  firstHeaderText: "Math",
  styledText: "C",
  lastHeaderText: "ollab",
  secondHeading: "",
  paragraph:
    "Sign in to your account and collaborate with like minds in solving problems",
  email: "",
};

export default function LoginForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="login" />
      <FormFooter formType="login" />
    </FormWrapper>
  );
}
