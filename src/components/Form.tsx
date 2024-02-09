import { useNavigate, Link } from "react-router-dom";
import Inputs from "./Inputs";
import OTPInputs from "./OTPInputs";
import { useState, useContext, FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputsContext, InputsContextType } from "../contexts/InputsContext";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import emailjs from "emailjs-com";
import { OtpContext, OtpContextType } from "../contexts/OtpContext";
// import { signOut } from "firebase/auth";

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
  const [otp, setOtp] = useState("");

  const { otpValue } = useContext(OtpContext) as OtpContextType;

  // const [time, setTime] = useState(60);
  // const [timeActive, setTimeActive] = useState(false);

  const navigate = useNavigate();

  const { email, password, setEmail, setPassword, firstName, lastName } =
    useContext(InputsContext) as InputsContextType;

  const {
    loginFormOpen,
    setLoginFormOpen,
    setResetPasswordFormOpen,
    signUpFormOpen,
    setSignUpFormOpen,
    setVerifyEmailOTPFormOpen,
    verifyEmailOTPFormOpen,
    resetPasswordFormOpen,
    setVerifyPasswordResetOTPFormOpen,
    verifyPasswordResetOTPFormOpen,
    setNewPasswordFormOpen,
    newPasswordFormOpen,
  } = useContext(FormsContext) as FormsContextType;

  function onChange(value: string) {
    setOtp(value);
  }

  // function handleCollaboratorsChange(e: ChangeEvent<HTMLInputElement>) {
  //   setCollaborators(e.target.value);
  // }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loginFormOpen) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setLoginFormOpen(false);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error(error);
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/invalid-credential") {
            toast.error("Password or Email invalid");
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
    } else if (signUpFormOpen) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      updateProfile(userCredential.user, {
        displayName: firstName + " " + lastName.slice(0, 1),
      })
        .then(() => {
          setSignUpFormOpen(false);
          setVerifyEmailOTPFormOpen(true);
          sendOTP();
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          } else if (error.code === "auth/invalid-email") {
            toast.error("Invalid email");
          }
        });
    } else if (verifyEmailOTPFormOpen) {
      if (otp !== otpValue) {
        alert("Invalid OTP");
        return;
      }
      setVerifyEmailOTPFormOpen(false);
      navigate("/dashboard");
    } else if (resetPasswordFormOpen) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // setResetPasswordFormOpen(false);
          // setVerifyPasswordResetOTPFormOpen(true);
          sendOTP();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (verifyPasswordResetOTPFormOpen) {
      if (otp !== otpValue) {
        alert("Invalid OTP");
        return;
      }
      setVerifyPasswordResetOTPFormOpen(false);
      setNewPasswordFormOpen(true);
    } else if (newPasswordFormOpen) {
      setNewPasswordFormOpen(false);
      navigate("/dashboard");
      toast.success("Password reset successfully");
    }

    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    // setFirstName("");
    // setLastName("");
  }

  function forgotPassword() {
    setLoginFormOpen(false);
    setResetPasswordFormOpen(true);
    setEmail("");
    setPassword("");
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

  function sendOTP() {
    const templateParams = {
      to_email: email,
      to_name: firstName,
      message: otpValue,
    };

    emailjs
      .send(
        "service_gmfhpbo",
        "template_q4nt0w6",
        templateParams,
        "ATX_F8kDIENLslJVM",
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch(() => {
        alert("Error sending email contact administrator");
      });
  }

  // function resendOTP() {
  //   sendEmailVerification(auth.currentUser)
  //     .then(() => {
  //       setTimeActive(true);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }

  // useEffect(() => {
  //   let interval = null;
  //   if (timeActive && time !== 0) {
  //     interval = setInterval(() => {
  //       setTime((time) => time - 1);
  //     }, 1000);
  //   } else if (time === 0) {
  //     setTimeActive(false);
  //     setTime(60);
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [timeActive, time]);

  return (
    <>
      <form
        className="flex w-full min-w-[202px] flex-col gap-8"
        onSubmit={handleSubmit}
      >
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
                // value={collaborators}
                // onChange={handleCollaboratorsChange}
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
