import { useNavigate, Link } from "react-router-dom";
import Inputs from "./Inputs";
import OTPInputs from "./OTPInputs";
import { Dispatch, SetStateAction, useState } from "react";

export interface Props {
  label: string;
  inputType: string;
}

export default function Form({
  inputs,
  formType,
  // loginFormOpen,
  setLoginFormOpen,
  // signUpFormOpen,
  setSignUpFormOpen,
  resetPasswordFormOpen,
  setResetPasswordFormOpen,
  // verifyEmailOTPFormOpen,
  setVerifyEmailOTPFormOpen,
  verifyPasswordResetOTPFormOpen,
  setVerifyPasswordResetOTPFormOpen,
  // newPasswordFormOpen,
  setNewPasswordFormOpen,
  // createClassFormOpen,
  // setCreateClassFormOpen,
  // joinClassFormOpen,
  // setJoinClassFormOpen,
}: {
  inputs: Props[];
  formType: string;
  // loginFormOpen: boolean;
  setLoginFormOpen: Dispatch<SetStateAction<boolean>>;
  // signUpFormOpen: boolean;
  setSignUpFormOpen: Dispatch<SetStateAction<boolean>>;
  resetPasswordFormOpen: boolean;
  setResetPasswordFormOpen: Dispatch<SetStateAction<boolean>>;
  // verifyEmailOTPFormOpen: boolean;
  setVerifyEmailOTPFormOpen: Dispatch<SetStateAction<boolean>>;
  verifyPasswordResetOTPFormOpen: boolean;
  setVerifyPasswordResetOTPFormOpen: Dispatch<SetStateAction<boolean>>;
  // newPasswordFormOpen: boolean;
  setNewPasswordFormOpen: Dispatch<SetStateAction<boolean>>;
  // createClassFormOpen: boolean;
  // setCreateClassFormOpen: Dispatch<SetStateAction<boolean>>;
  // joinClassFormOpen: boolean;
  // setJoinClassFormOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  function onChange(value: string) {
    setOtp(value);
  }

  function signIn() {
    setLoginFormOpen(false);
    navigate("/dashboard");
  }

  function forgotPassword() {
    setLoginFormOpen(false);
    setResetPasswordFormOpen(true);
  }

  function resetPassword() {
    setResetPasswordFormOpen(false);
    setVerifyPasswordResetOTPFormOpen(true);
  }

  function createFreeAccount() {
    setSignUpFormOpen(false);
    setVerifyEmailOTPFormOpen(true);
  }

  function verifyEmailOTP() {
    setLoginFormOpen(true);
    setVerifyEmailOTPFormOpen(false);
  }

  function verifyResetPasswordOTP() {
    setVerifyPasswordResetOTPFormOpen(false);
    setNewPasswordFormOpen(true);
  }

  function createNewPassword() {
    setNewPasswordFormOpen(false);
    setLoginFormOpen(true);
  }

  function goToSignInPage() {
    if (resetPasswordFormOpen) {
      setResetPasswordFormOpen(false);
    }

    if (verifyPasswordResetOTPFormOpen) {
      setVerifyPasswordResetOTPFormOpen(false);
    }

    setLoginFormOpen(true);
  }

  return (
    <>
      <form
        className="flex w-full flex-col gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {formType === "login" && (
          <div className="flex flex-col">
            <div className="flex flex-col gap-8">
              <Inputs inputs={inputs} />
            </div>
            <Link
              to="#"
              onClick={forgotPassword}
              className="mt-2 self-end text-base font-normal leading-normal text-orange-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        )}

        {formType === "signup" && (
          <div className="flex flex-col gap-8">
            <Inputs inputs={inputs} />
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="terms-of-use"
                id="terms-of-use"
                required
                className="form-checkbox ml-1 mt-1 inline-block cursor-pointer rounded-sm border-neutral-300 text-slate-950 shadow-sm hover:text-slate-800 focus:ring-slate-950 hover:focus:ring-slate-800"
              />
              <label
                htmlFor="terms-of-use"
                className="text-base font-normal leading-normal"
              >
                <span className="inline-block">
                  By creating an account, you agree to the{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Privacy Policy.
                  </a>
                </span>
              </label>
            </div>
          </div>
        )}

        {formType === "verify-email" && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-2">
              <OTPInputs otp={otp} otpLength={4} onChange={onChange} />
            </div>
            <div className="text-center text-base text-orange-500">
              Resend OTP{" "}
              <span className="text-lg font-normal leading-[27px] text-stone-300">
                00:00
              </span>
            </div>
          </div>
        )}

        {formType === "reset-password" && (
          <div className="flex flex-col gap-8">
            <Inputs inputs={inputs} />
          </div>
        )}

        {formType === "verify-password-reset" && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-2">
              <OTPInputs otp={otp} otpLength={4} onChange={onChange} />
            </div>
            <div className="text-center text-base text-orange-500">
              Resend OTP{" "}
              <span className="text-lg font-normal leading-[27px] text-stone-300">
                00:00
              </span>
            </div>
          </div>
        )}

        {formType === "new-password" && (
          <div className="flex flex-col gap-8">
            <Inputs inputs={inputs} />
          </div>
        )}

        <button
          type="submit"
          onClick={() => {
            formType === "login"
              ? signIn()
              : formType === "verify-email"
                ? verifyEmailOTP()
                : formType === "signup"
                  ? createFreeAccount()
                  : formType === "reset-password"
                    ? resetPassword()
                    : formType === "verify-password-reset"
                      ? verifyResetPasswordOTP()
                      : formType === "new-password"
                        ? createNewPassword()
                        : "";
          }}
          className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
        >
          {formType === "signup"
            ? "Create free Account"
            : formType === "verify-email"
              ? "Verify"
              : formType === "login"
                ? "Sign In"
                : formType === "reset-password"
                  ? "Reset Password"
                  : formType === "verify-password-reset"
                    ? "Verify"
                    : formType === "new-password"
                      ? "Reset Password"
                      : ""}
        </button>

        {formType === "reset-password" && (
          <Link
            to="#"
            onClick={goToSignInPage}
            className="text-center font-normal leading-normal text-orange-500"
          >
            Remember Password?
          </Link>
        )}

        {formType === "new-password" && (
          <Link
            to="#"
            onClick={goToSignInPage}
            className="text-center font-normal leading-normal text-orange-500"
          >
            Remember Password?
          </Link>
        )}
      </form>
    </>
  );
}
