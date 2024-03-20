import FormWrapper from "./FormWrapper";
import { Dialog, Transition } from "@headlessui/react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { useContext, Fragment, useEffect } from "react";
import { useNavigate, Form, Link, useNavigation, useRouteLoaderData } from "react-router-dom";
import Inputs from "./Inputs";
import { ToastContainer } from "react-toastify";
import MathCollab from "./MathCollab";
import lineUrl from "../assets/line.svg";
import googleLogoUrl from "../assets/Google-logo.svg";
import {signOut, User} from "firebase/auth"
import {auth} from "../firebase";

const inputs = [
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

export default function LoginForm() {
  const {
    loginFormOpen,
    setLoginFormOpen,
    signUpFormOpen,
    setSignUpFormOpen,
    setResetPasswordFormOpen,
    setVerifyEmailFormOpen,
    verifyEmailFormOpen,
    newPasswordFormOpen,
    setNewPasswordFormOpen,
  } = useContext(FormsContext) as FormsContextType;
  const { currentUser } = useRouteLoaderData("root") as { currentUser: User };

  const navigate = useNavigate();
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  function forgotPassword() {
    setLoginFormOpen(false);
    setResetPasswordFormOpen(true);
  }

  function goToSignUpPage() {
    setLoginFormOpen(false);
    setSignUpFormOpen(true);
  }

  useEffect(() => {
    setNewPasswordFormOpen(false);
    setVerifyEmailFormOpen(false);
    setLoginFormOpen(true);
    if (
      loginFormOpen === false &&
      verifyEmailFormOpen === false &&
      newPasswordFormOpen === false
    ) {
      navigate("/");
    }
  }, [
    loginFormOpen,
    signUpFormOpen,
    navigate,
    setLoginFormOpen,
    verifyEmailFormOpen,
    setVerifyEmailFormOpen,
    setNewPasswordFormOpen,
    newPasswordFormOpen,
  ]);

  useEffect(() => {
    if (currentUser) {
      signOut(auth);
    }
  }, [])

  return (
    <>
      <Transition show={loginFormOpen} as={Fragment}>
        <Dialog
          className="relative z-10"
          onClose={() => {
            setLoginFormOpen(false);
            navigate("/");
          }}
        >
          <FormWrapper>
            <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
              <MathCollab />

              <p className="text-base font-normal leading-normal">
                Sign in to your account and collaborate with like minds in
                solving problems
              </p>
            </div>

            {/* REACT ROUTER FORM */}
            <Form
              className="flex w-full min-w-[202px] flex-col gap-8"
              method="post"
              action="."
            >
              <ToastContainer />
              {/* <fieldset disabled={busy}> */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-8">
                  <Inputs inputs={inputs} />
                </div>
                <Link
                  to="/reset-password"
                  onClick={forgotPassword}
                  className="mt-2 self-end text-base font-normal leading-normal text-orange-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
              >
                {busy ? "Signing In..." : "Sign In"}
              </button>
              {/* </fieldset> */}
            </Form>
            {/* REACT ROUTER FORM */}

            <div className="flex w-full max-w-[333px] flex-col items-center justify-center gap-4">
              <div className="flex justify-center text-sm font-normal leading-[21px] text-neutral-400">
                <img src={lineUrl} alt="" className="w-[50%]" /> Or{" "}
                <img src={lineUrl} alt="" className="w-[50%]" />
              </div>
              <button className="flex w-[202px] items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white py-[13px]">
                <img src={googleLogoUrl} alt="Google logo" />
                <span className="text-sm font-medium leading-[21px] text-slate-950">
                  Sign in with Google
                </span>
              </button>
              <div className="text-center text-base font-normal leading-normal text-neutral-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-orange-500 hover:underline"
                  onClick={goToSignUpPage}
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* <FormFooter formType="login" /> */}
          </FormWrapper>
        </Dialog>
      </Transition>
    </>
  );
}
