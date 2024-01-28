import { useNavigate, Link } from "react-router-dom";
import Inputs from "./Inputs";
import OTPInputs from "./OTPInputs";
import { useState, useContext, FormEvent, ChangeEvent } from "react";
import { FormBooleanValueContextTypes } from "../@types/formBooleanValueContextTypes";
import { FormBooleanValueContext } from "../contexts/FormBooleansValueContext";
import { InputValueContextTypes } from "../@types/inputValueContextTypes";
import { InputValueContext } from "../contexts/InputValueContext";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClassListType } from "../@types/classListType";
import { ClassListContext } from "../contexts/ClassListContext";

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
    createClassFormOpen,
    setCreateClassFormOpen,
    joinClassFormOpen,
    setJoinClassFormOpen,
  } = useContext(FormBooleanValueContext) as FormBooleanValueContextTypes;

  const { classList, setClassList } = useContext(
    ClassListContext,
  ) as ClassListType;

  const {
    email,
    password,
    className,
    setEmail,
    setPassword,
    setConfirmPassword,
    collaborators,
    setCollaborators,
  } = useContext(InputValueContext) as InputValueContextTypes;

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  function onChange(value: string) {
    setOtp(value);
  }

  function handleCollaboratorsChange(e: ChangeEvent<HTMLInputElement>) {
    setCollaborators(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (signUpFormOpen) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          sessionStorage.setItem("Auth Token", user.uid);
          setSignUpFormOpen(false);
          setVerifyEmailOTPFormOpen(true);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    } else if (loginFormOpen) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          sessionStorage.setItem("Auth Token", user.uid);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigate("/dashboard");
          setLoginFormOpen(false);
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/invalid-credential") {
            toast.error("Invalid credential");
          }
          if (error.code === "auth/too-many-requests") {
            toast.error(
              "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
            );
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    } else if (verifyEmailOTPFormOpen) {
      setVerifyEmailOTPFormOpen(false);
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
    } else if (createClassFormOpen) {
      setCreateClassFormOpen(false);
      setClassList([
        ...classList,
        {
          className,
          dateCreated: new Date().toLocaleDateString(),
          owner: "Abdulbasit Yusuf",
          people: [collaborators],
          status: "online",
        },
      ]);
    } else if (joinClassFormOpen) {
      setJoinClassFormOpen(false);
    }
  }

  function forgotPassword() {
    setLoginFormOpen(false);
    setResetPasswordFormOpen(true);
  }

  function goToSignInPage() {
    if (resetPasswordFormOpen) {
      setResetPasswordFormOpen(false);
    }
    if (newPasswordFormOpen) {
      setNewPasswordFormOpen(false);
    }

    setLoginFormOpen(true);
  }

  return (
    <>
      <form className="flex w-full flex-col gap-8" onSubmit={handleSubmit}>
        <ToastContainer />
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
            <div className="flex items-start gap-2 text-left">
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

        {formType === "join-class" && (
          <div className="mb-8">
            <Inputs inputs={inputs} />
          </div>
        )}

        {formType === "create-class" && (
          <div className=" flex flex-col gap-8">
            <Inputs inputs={inputs} />
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="collaborators">
                Invite Collaborators/Students
              </label>
              <input
                type="email"
                name="collaborators"
                id="collaborators"
                multiple
                required
                value={collaborators}
                onChange={handleCollaboratorsChange}
                className="form-input  inline-block h-20 w-full rounded-lg border-neutral-200 bg-white pb-3 pr-8 pt-3 text-sm placeholder-transparent shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
              ></input>
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
