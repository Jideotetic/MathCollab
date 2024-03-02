import FormWrapper from "./FormWrapper";
import { Dialog, Transition } from "@headlessui/react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { useContext, Fragment, useEffect } from "react";
import { Form, useNavigate, Link } from "react-router-dom";
import Inputs from "./Inputs";
import MathCollab from "./MathCollab";
import lineUrl from "../assets/line.svg";
import googleLogoUrl from "../assets/Google-logo.svg";
import { ToastContainer } from "react-toastify";

const inputs = [
  { label: "First Name", inputType: "text" },
  { label: "Last Name", inputType: "text" },
  { label: "Email", inputType: "email" },
  { label: "Password", inputType: "password" },
];

export default function SignUpForm() {
  const { signUpFormOpen, setSignUpFormOpen, setLoginFormOpen } = useContext(
    FormsContext,
  ) as FormsContextType;

  function goToSignInPage() {
    setSignUpFormOpen(false);
    setLoginFormOpen(true);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (signUpFormOpen === false) {
      navigate("/");
    }
  }, [navigate, signUpFormOpen]);

  return (
    <Transition show={signUpFormOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          setSignUpFormOpen(false);
          navigate("/");
        }}
      >
        <FormWrapper>
          <div className="flex w-[359px] max-w-full flex-col items-center justify-center gap-2 text-center">
            <MathCollab />

            <div className="space-y-2">
              <h2 className="text-xl font-semibold leading-[30px]">
                Create free Account
              </h2>

              <p className="text-base font-normal leading-normal">
                Create your free account and collaborate with like minds in
                solving problems
              </p>
            </div>
          </div>

          {/* REACT ROUTER FORM */}
          <Form
            className="flex w-full min-w-[202px] flex-col gap-8"
            method="post"
            action="."
            replace
          >
            <ToastContainer />
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

            <button
              type="submit"
              className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
            >
              Create free Account
            </button>
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
                Sign up with Google
              </span>
            </button>
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
          </div>
        </FormWrapper>
      </Dialog>
    </Transition>
  );
}
