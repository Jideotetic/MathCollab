import { ToastContainer } from "react-toastify";
import FormWrapper from "./FormWrapper";
import { Link, Form, useNavigate } from "react-router-dom";
import Inputs from "./Inputs";
import { useContext, useEffect, Fragment } from "react";
import { FormsContext, FormsContextType } from "../../contexts/FormsContext";
import MathCollab from "../MathCollab";
import { Transition, Dialog } from "@headlessui/react";

const inputs = [
  { label: "Enter new password", inputType: "password" },
  { label: "Confirm new password", inputType: "confirm-password" },
];

export default function NewPasswordForm() {
  const {
    newPasswordFormOpen,
    setNewPasswordFormOpen,
    setVerifyPasswordResetOTPFormOpen,
    verifyPasswordResetOTPFormOpen,
    setSignUpFormOpen,
    setLoginFormOpen,
  } = useContext(FormsContext) as FormsContextType;

  function goToSignUpPage() {
    setNewPasswordFormOpen(false);
    setSignUpFormOpen(true);
  }

  function goToSignInPage() {
    setNewPasswordFormOpen(false);
    setLoginFormOpen(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    setVerifyPasswordResetOTPFormOpen(false);
    setNewPasswordFormOpen(true);
    if (
      newPasswordFormOpen === false &&
      verifyPasswordResetOTPFormOpen === false
    ) {
      navigate("/");
    }
  }, [
    navigate,
    newPasswordFormOpen,
    setNewPasswordFormOpen,
    setVerifyPasswordResetOTPFormOpen,
    verifyPasswordResetOTPFormOpen,
  ]);
  return (
    <Transition show={newPasswordFormOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setNewPasswordFormOpen(false);
          navigate("/");
        }}
      >
        <FormWrapper>
          <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
            <MathCollab />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold leading-[30px]">
                Reset Password
              </h2>

              <p className="text-base font-normal leading-normal">
                Enter your new password below
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
