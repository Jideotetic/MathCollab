import FormWrapper from "./FormWrapper";
import { Link, Form, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import OTPInputs from "./OTPInputs";
import { FormsContext, FormsContextType } from "../../contexts/FormsContext";
import { temp } from "../../otp";
import { Transition, Dialog } from "@headlessui/react";
import MathCollab from "../MathCollab";

export default function VerifyPasswordResetOTPForm() {
  const [otp, setOtp] = useState("");

  function onChange(value: string) {
    setOtp(value);
  }

  const navigate = useNavigate();

  const {
    verifyPasswordResetOTPFormOpen,
    setVerifyPasswordResetOTPFormOpen,
    setResetPasswordFormOpen,
    resetPasswordFormOpen,
    setLoginFormOpen,
  } = useContext(FormsContext) as FormsContextType;

  function goToSignInPage() {
    setVerifyPasswordResetOTPFormOpen(false);
    setLoginFormOpen(true);
    temp.email = "";
  }

  useEffect(() => {
    setResetPasswordFormOpen(false);
    setVerifyPasswordResetOTPFormOpen(true);

    if (
      verifyPasswordResetOTPFormOpen === false &&
      resetPasswordFormOpen === false
    ) {
      temp.email = "";
      navigate("/");
    }
  }, [
    navigate,
    resetPasswordFormOpen,
    setResetPasswordFormOpen,
    setVerifyPasswordResetOTPFormOpen,
    verifyPasswordResetOTPFormOpen,
  ]);

  return (
    <Transition show={verifyPasswordResetOTPFormOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setVerifyPasswordResetOTPFormOpen(false);
          temp.email = "";
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
                Enter the verification code sent to
              </p>
              <p className="font-semibold">{temp.email}</p>
            </div>
          </div>

          <Form
            className="flex w-full min-w-[202px] flex-col gap-8"
            method="post"
            action="."
          >
            <ToastContainer />
            <div className="flex flex-col gap-8">
              <div className="flex justify-center gap-2">
                <OTPInputs otp={otp} otpLength={4} onChange={onChange} />
              </div>
              <div className="text-center text-base text-orange-500">
                <button
                  type="button"
                  // onClick={resendOTP}
                  // disabled={timeActive}
                  className="w-[141px] rounded border border-orange-500 py-1.5 text-sm font-normal leading-[21px] text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                >
                  Resend OTP{" "}
                </button>
                <div className="text-lg font-normal leading-[27px] text-stone-300">
                  {/* {timeActive ? time : "01:00"} */}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
            >
              Verify
            </button>
          </Form>

          <div className="text-center text-base font-normal leading-normal text-neutral-500">
            Already have an account?{" "}
            <Link
              to="/login"
              onClick={goToSignInPage}
              className="text-orange-500 hover:underline"
            >
              Sign In
            </Link>
          </div>
        </FormWrapper>
      </Dialog>
    </Transition>
  );
}
