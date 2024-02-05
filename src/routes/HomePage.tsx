import { Fragment, useContext, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import MathCollab from "../components/MathCollab";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import VerifyEmailOTPForm from "../components/VerifyEmailOTPForm";
import VerifyPasswordResetOTPForm from "../components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "../components/NewPasswordForm";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
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
  } = useContext(FormsContext) as FormsContextType;

  const [otpValue] = useState(
    Math.floor(Math.random() * 10000)
      .toFixed()
      .padEnd(4, "0"),
  );

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const authToken = sessionStorage.getItem("Auth Token");

  //   if (authToken) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate]);

  return (
    <>
      <header className="mx-auto flex h-[101px] w-[1280px] max-w-full items-center justify-between bg-white px-4 py-6">
        <MathCollab />

        {/* MOBILE NAV STARTS */}
        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              <Popover.Button>
                {!open && (
                  <Bars3Icon className="h-10 w-10 transition-transform duration-300 ease-in-out hover:rotate-180" />
                )}
              </Popover.Button>

              <Transition.Child
                as={Fragment}
                enter="ease-in duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-50"
                leave="ease-out duration-200"
                leaveFrom="opacity-50"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 bg-black" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition duration-200 ease-out"
                enterFrom="transform -translate-x-[100%]"
                enterTo="transform translate-x-0"
                leave="transition duration-200 ease-out"
                leaveFrom="transform translate-x-0"
                leaveTo="transform -translate-x-[100%]"
              >
                <Popover.Panel
                  as="nav"
                  className="fixed left-0 top-0 flex h-screen w-full justify-between bg-white px-4 py-6 sm:w-[50%]"
                >
                  {({ close }) => (
                    <>
                      <ul className="flex flex-col gap-8">
                        <NavBar />
                        <li>
                          <button
                            type="button"
                            onClick={() => setLoginFormOpen(true)}
                            className="rounded-lg border border-slate-950 px-7 py-3 text-sm font-medium leading-[21px] text-slate-950 hover:bg-slate-950 hover:text-white"
                          >
                            Sign In
                          </button>
                        </li>
                      </ul>

                      <button
                        type="button"
                        className="-mt-4 self-start"
                        onClick={() => close()}
                      >
                        <XMarkIcon className="h-10 w-10 transition-transform duration-300 ease-in hover:rotate-45" />
                      </button>
                    </>
                  )}
                </Popover.Panel>
              </Transition.Child>
            </>
          )}
        </Popover>
        {/* MOBILE NAV ENDS */}

        <nav className="hidden lg:block">
          <ul className="gap-8 lg:flex">
            <NavBar />
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setLoginFormOpen(true)}
          className="hidden rounded-lg border border-slate-950 px-7 py-3 text-sm font-medium leading-[21px] text-slate-950 hover:bg-slate-950 hover:text-white lg:block"
        >
          Sign In
        </button>

        {/* AUTHENTICATION SCREENS FLOW STARTS */}
        <Transition show={loginFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setLoginFormOpen(false);
            }}
          >
            <LoginForm otpValue={otpValue} />
          </Dialog>
        </Transition>
        <Transition show={signUpFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setSignUpFormOpen(false);
            }}
          >
            <SignUpForm otpValue={otpValue} />
          </Dialog>
        </Transition>
        <Transition show={verifyEmailOTPFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setVerifyEmailOTPFormOpen(false);
            }}
          >
            <VerifyEmailOTPForm otpValue={otpValue} />
          </Dialog>
        </Transition>
        <Transition show={resetPasswordFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setResetPasswordFormOpen(false);
            }}
          >
            <ResetPasswordForm otpValue={otpValue} />
          </Dialog>
        </Transition>
        <Transition show={verifyPasswordResetOTPFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setVerifyPasswordResetOTPFormOpen(false);
            }}
          >
            <VerifyPasswordResetOTPForm otpValue={otpValue} />
          </Dialog>
        </Transition>
        <Transition show={newPasswordFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setNewPasswordFormOpen(false);
            }}
          >
            <NewPasswordForm otpValue={otpValue} />
          </Dialog>
        </Transition>
        {/* AUTHENTICATION FLOW SCREEN ENDS */}
      </header>

      <Outlet />
      <div className="bg-[#06031E]">
        <footer className="mx-auto h-[338px] w-[1280px] max-w-full border-2 border-red-400 p-4 text-center">
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-center text-[#696974]">
            <hr className="mb-[18px]" />
            <p>© 2024 MathCollab, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
