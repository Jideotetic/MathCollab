import { useNavigate, Link } from "react-router-dom";
import Inputs from "./Inputs";
import OTPInputs from "./OTPInputs";
import { useState, useContext, FormEvent } from "react";
import { FormBooleanValueContextTypes } from "../@types/formBooleanValueContextTypes";
import { FormBooleanValueContext } from "../contexts/FormBooleansValueContext";
import { InputValueContextTypes } from "../@types/inputValueContextTypes";
import { InputValueContext } from "../contexts/InputValueContext";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export interface Props {
  label: string;
  inputType: string;
}

export default function Form({
  inputs,
  formType,
}: {
  inputs: Props[];
  formType: string;
}) {
  const {
    loginFormOpen,
    setLoginFormOpen,
    signUpFormOpen,
    setSignUpFormOpen,
    resetPasswordFormOpen,
    setResetPasswordFormOpen,
    verifyEmailOTPFormOpen,
    setVerifyEmailOTPFormOpen,
    verifyPasswordResetOTPFormOpen,
    setVerifyPasswordResetOTPFormOpen,
    newPasswordFormOpen,
    setNewPasswordFormOpen,
  } = useContext(FormBooleanValueContext) as FormBooleanValueContextTypes;

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(InputValueContext) as InputValueContextTypes;

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  function onChange(value: string) {
    setOtp(value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (signUpFormOpen) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          setSignUpFormOpen(false);
          setVerifyEmailOTPFormOpen(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else if (loginFormOpen) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/dashboard");
          console.log(user);

          setLoginFormOpen(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else if (verifyEmailOTPFormOpen) {
      setVerifyEmailOTPFormOpen(false);
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } else if (resetPasswordFormOpen) {
      setResetPasswordFormOpen(false);
      setVerifyPasswordResetOTPFormOpen(true);
    } else if (verifyPasswordResetOTPFormOpen) {
      setVerifyPasswordResetOTPFormOpen(false);
      setNewPasswordFormOpen(true);
    } else if (newPasswordFormOpen) {
      setNewPasswordFormOpen(false);
      setLoginFormOpen(true);
    }
  }

  function forgotPassword() {
    setLoginFormOpen(false);
    setResetPasswordFormOpen(true);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  function goToSignInPage() {
    if (resetPasswordFormOpen) {
      setResetPasswordFormOpen(false);
    }
    if (newPasswordFormOpen) {
      setNewPasswordFormOpen(false);
    }

    setLoginFormOpen(true);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <form className="flex w-full flex-col gap-8" onSubmit={handleSubmit}>
        {formType === "login" && (
          <div className="flex flex-col">
            <div className="flex flex-col gap-8">
              <Inputs
                inputs={inputs}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
              />
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
            <Inputs
              inputs={inputs}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
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
            <Inputs
              inputs={inputs}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
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
            <Inputs
              inputs={inputs}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          </div>
        )}

        {formType === "join-class" && (
          <div className="mb-8">
            <Inputs
              inputs={inputs}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          </div>
        )}

        {formType === "create-class" && (
          <div className=" flex flex-col gap-8">
            <Inputs
              inputs={inputs}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="collaborators">
                Invite Collaborators/Students
              </label>
              <textarea
                name="collaborators"
                id="collaborators"
                className="form-textarea inline-block self-stretch rounded-sm border-neutral-300 text-slate-950 shadow-sm hover:text-slate-800 focus:ring-slate-950 hover:focus:ring-slate-800"
              ></textarea>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="notify"
                  id="notify"
                  required
                  className="form-checkbox ml-1 mt-1 inline-block cursor-pointer rounded-sm border-neutral-300 text-slate-950 shadow-sm hover:text-slate-800 focus:ring-slate-950 hover:focus:ring-slate-800"
                />
                <label
                  htmlFor="notify"
                  className="text-base font-normal leading-normal"
                >
                  Notify
                </label>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
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
                      : formType === "create-class"
                        ? "Create"
                        : formType === "join-class"
                          ? "Join a class"
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
