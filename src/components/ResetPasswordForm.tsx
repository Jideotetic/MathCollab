// import FormHeader from "./FormHeader";
import FormWrapper from "./FormWrapper";
// import FormFooter from "./FormFooter";
import { Dialog, Transition } from "@headlessui/react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { useContext, Fragment, useEffect } from "react";
import { useNavigate, Form, Link } from "react-router-dom";
import Inputs from "./Inputs";
import MathCollab from "./MathCollab";
import { ToastContainer } from "react-toastify";

const inputs = [{ label: "Email", inputType: "email" }];

// const headerContent = {
//   title: "Reset Password",
//   description: "Provide your registered email to reset your password",
//   email: "",
// };

export default function ResetPasswordForm() {
  const {
    resetPasswordFormOpen,
    setResetPasswordFormOpen,
    setLoginFormOpen,
    loginFormOpen,
    setSignUpFormOpen,
  } = useContext(FormsContext) as FormsContextType;

  const navigate = useNavigate();

  function goToSignInPage() {
    setResetPasswordFormOpen(false);
    setLoginFormOpen(true);
  }

  function goToSignUpPage() {
    setResetPasswordFormOpen(false);
    setSignUpFormOpen(true);
  }

  useEffect(() => {
    if (resetPasswordFormOpen === false && loginFormOpen === false) {
      navigate("/");
    }
  }, [resetPasswordFormOpen, loginFormOpen, navigate]);

  return (
    <Transition show={resetPasswordFormOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setResetPasswordFormOpen(false);
          navigate("/");
        }}
      >
        <FormWrapper>
          {/* <FormHeader headerContent={headerContent} /> */}

          <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
            <MathCollab />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold leading-[30px]">
                Reset Password
              </h2>

              <p className="text-base font-normal leading-normal">
                Provide your registered email to reset your password
              </p>
            </div>
          </div>

          <Form
            className="flex w-full min-w-[202px] flex-col gap-8"
            method="post"
            action="."
          >
            <ToastContainer />
            <div className="flex flex-col gap-8">
              <Inputs inputs={inputs} />
            </div>

            <button
              type="submit"
              className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
            >
              Reset Password
            </button>
          </Form>

          <Link
            to="/login"
            onClick={goToSignInPage}
            className="text-center font-normal leading-normal text-orange-500"
          >
            Remember Password?
          </Link>

          {/* <Form inputs={inputs} formType="reset-password" /> */}
          {/* <FormFooter formType="reset-password" /> */}

          <div className="text-center text-base font-normal leading-normal text-neutral-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              onClick={goToSignUpPage}
              className="text-orange-500 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </FormWrapper>
      </Dialog>
    </Transition>
  );
}
