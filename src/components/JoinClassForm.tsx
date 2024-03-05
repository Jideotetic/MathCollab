// import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
// import FormFooter from "./FormFooter";
// import Form from "./CustomForm";
import MathCollab from "./MathCollab";
import { Form, useNavigate } from "react-router-dom";
import Inputs from "./Inputs";
import { Fragment, useContext, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";

const inputs = [{ label: "Enter/Paste class name", inputType: "text" }];

// const headerContent = {
//   title: "Join a class",
//   description: "Provide your class information below",
//   email: "",
// };

export default function JoinClassForm() {
  const { setJoinClassFormOpen, joinClassFormOpen } = useContext(
    FormsContext,
  ) as FormsContextType;

  const navigate = useNavigate();

  useEffect(() => {
    if (joinClassFormOpen === false) {
      navigate("/dashboard");
    }
  }, [joinClassFormOpen, navigate]);
  return (
    <Transition show={joinClassFormOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setJoinClassFormOpen(false);
          navigate("/dashboard");
        }}
      >
        <FormWrapper>
          {/* <FormHeader headerContent={headerContent} /> */}
          <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
            <MathCollab />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold leading-[30px]">
                Join a class
              </h2>

              <p className="text-base font-normal leading-normal">
                Provide your class information below
              </p>
            </div>
          </div>
          {/* <Form inputs={inputs} formType="join-class" /> */}
          <Form
            className="flex w-full min-w-[202px] flex-col gap-8"
            method="post"
            action="."
          >
            <div className="mb-8">
              <Inputs inputs={inputs} />
            </div>

            <button
              type="submit"
              className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
            >
              Join a class
            </button>
          </Form>
          {/* <FormFooter formType="join-class" /> */}
        </FormWrapper>
      </Dialog>
    </Transition>
  );
}
