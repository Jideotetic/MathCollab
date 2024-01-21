import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

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

export default function SignUpForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="signup" />
      <FormFooter formType="signup" />
    </FormWrapper>
  );
}