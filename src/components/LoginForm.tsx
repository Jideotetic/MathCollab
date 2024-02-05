import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

const headerContent = {
  title: "",
  description:
    "Sign in to your account and collaborate with like minds in solving problems",
  email: "",
};

export default function LoginForm({ otpValue }: { otpValue: string }) {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="login" otpValue={otpValue} />
      <FormFooter formType="login" />
    </FormWrapper>
  );
}
