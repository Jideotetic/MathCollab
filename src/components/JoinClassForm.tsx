import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./CustomForm";

const inputs = [{ label: "Enter/Paste Invite link", inputType: "url" }];

const headerContent = {
  title: "Join a class",
  description: "Provide your class information below",
  email: "",
};

export default function JoinClassForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="join-class" />
      <FormFooter formType="join-class" />
    </FormWrapper>
  );
}
