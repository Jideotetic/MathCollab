import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./Form";

const inputs = [{ label: "Enter/Paste Invite link", inputType: "url" }];

const headerContent = {
  title: "Join a class",
  description: "Provide your class information below",
  email: "",
};

export default function JoinClassForm({ otpValue }: { otpValue: string }) {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="join-class" otpValue={otpValue} />
      <FormFooter formType="join-class" />
    </FormWrapper>
  );
}
