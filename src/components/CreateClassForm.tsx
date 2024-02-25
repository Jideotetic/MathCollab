import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
import FormFooter from "./FormFooter";
import Form from "./CustomForm";

const inputs = [{ label: "Class name", inputType: "text" }];

const headerContent = {
  title: "Create a class",
  description: "Provide your class information below",
  email: "",
};

export default function CreateClassForm() {
  return (
    <FormWrapper>
      <FormHeader headerContent={headerContent} />
      <Form inputs={inputs} formType="create-class" />
      <FormFooter formType="create-class" />
    </FormWrapper>
  );
}
