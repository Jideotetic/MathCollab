import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MathCollab from "../components/MathCollab";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import VerifyEmailOTPForm from "../components/VerifyEmailOTPForm";
import VerifyPasswordResetOTPForm from "../components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "../components/NewPasswordForm";

const links = ["Home", "Pricing", "FAQ", "Blog"];

export default function HomePage() {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [resetPasswordFormOpen, setResetPasswordFormOpen] = useState(false);
  const [verifyEmailOTPFormOpen, setVerifyEmailOTPFormOpen] = useState(false);
  const [verifyPasswordResetOTPFormOpen, setVerifyPasswordResetOTPFormOpen] =
    useState(false);
  const [newPasswordFormOpen, setNewPasswordFormOpen] = useState(false);

  return (
    <>
      <header className="mx-auto flex h-[101px] max-w-[1280px] items-center justify-between bg-white px-20 py-6 shadow-md shadow-black">
        <MathCollab />

        <nav>
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link}>
                <NavLink
                  to={link === "Home" ? "/" : link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "rounded-3xl bg-purple-200 px-[15px] py-1.5 font-normal leading-tight text-zinc-600 hover:bg-purple-500 hover:text-white"
                      : isPending
                        ? ""
                        : "rounded-3xl px-[15px] py-1.5 leading-tight text-zinc-600 hover:bg-purple-500 hover:text-white"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setLoginFormOpen(true)}
          className="shrink-0 rounded-lg border border-slate-950 px-7 py-3 text-sm font-medium leading-[21px] text-slate-950 hover:bg-slate-950 hover:text-white"
        >
          Sign In
        </button>
        {/* AUTHENTICATION SCREENS FLOW STARTS */}
        <Transition show={loginFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => setLoginFormOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-5 text-center">
                <LoginForm
                  loginFormOpen={loginFormOpen}
                  setLoginFormOpen={setLoginFormOpen}
                  signUpFormOpen={signUpFormOpen}
                  setSignUpFormOpen={setSignUpFormOpen}
                  resetPasswordFormOpen={resetPasswordFormOpen}
                  setResetPasswordFormOpen={setResetPasswordFormOpen}
                  verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
                  setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
                  verifyPasswordResetOTPFormOpen={
                    verifyPasswordResetOTPFormOpen
                  }
                  setVerifyPasswordResetOTPFormOpen={
                    setVerifyPasswordResetOTPFormOpen
                  }
                  newPasswordFormOpen={newPasswordFormOpen}
                  setNewPasswordFormOpen={setNewPasswordFormOpen}
                />
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition show={signUpFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => setSignUpFormOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-5 text-center">
                <SignUpForm
                  loginFormOpen={loginFormOpen}
                  setLoginFormOpen={setLoginFormOpen}
                  signUpFormOpen={signUpFormOpen}
                  setSignUpFormOpen={setSignUpFormOpen}
                  resetPasswordFormOpen={resetPasswordFormOpen}
                  setResetPasswordFormOpen={setResetPasswordFormOpen}
                  verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
                  setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
                  verifyPasswordResetOTPFormOpen={
                    verifyPasswordResetOTPFormOpen
                  }
                  setVerifyPasswordResetOTPFormOpen={
                    setVerifyPasswordResetOTPFormOpen
                  }
                  newPasswordFormOpen={newPasswordFormOpen}
                  setNewPasswordFormOpen={setNewPasswordFormOpen}
                />
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition show={verifyEmailOTPFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => setVerifyEmailOTPFormOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-5 text-center">
                <VerifyEmailOTPForm
                  loginFormOpen={loginFormOpen}
                  setLoginFormOpen={setLoginFormOpen}
                  signUpFormOpen={signUpFormOpen}
                  setSignUpFormOpen={setSignUpFormOpen}
                  resetPasswordFormOpen={resetPasswordFormOpen}
                  setResetPasswordFormOpen={setResetPasswordFormOpen}
                  verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
                  setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
                  verifyPasswordResetOTPFormOpen={
                    verifyPasswordResetOTPFormOpen
                  }
                  setVerifyPasswordResetOTPFormOpen={
                    setVerifyPasswordResetOTPFormOpen
                  }
                  newPasswordFormOpen={newPasswordFormOpen}
                  setNewPasswordFormOpen={setNewPasswordFormOpen}
                />
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition show={resetPasswordFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => setResetPasswordFormOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-5 text-center">
                <ResetPasswordForm
                  loginFormOpen={loginFormOpen}
                  setLoginFormOpen={setLoginFormOpen}
                  signUpFormOpen={signUpFormOpen}
                  setSignUpFormOpen={setSignUpFormOpen}
                  resetPasswordFormOpen={resetPasswordFormOpen}
                  setResetPasswordFormOpen={setResetPasswordFormOpen}
                  verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
                  setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
                  verifyPasswordResetOTPFormOpen={
                    verifyPasswordResetOTPFormOpen
                  }
                  setVerifyPasswordResetOTPFormOpen={
                    setVerifyPasswordResetOTPFormOpen
                  }
                  newPasswordFormOpen={newPasswordFormOpen}
                  setNewPasswordFormOpen={setNewPasswordFormOpen}
                />
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition show={verifyPasswordResetOTPFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => setVerifyPasswordResetOTPFormOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-5 text-center">
                <VerifyPasswordResetOTPForm
                  loginFormOpen={loginFormOpen}
                  setLoginFormOpen={setLoginFormOpen}
                  signUpFormOpen={signUpFormOpen}
                  setSignUpFormOpen={setSignUpFormOpen}
                  resetPasswordFormOpen={resetPasswordFormOpen}
                  setResetPasswordFormOpen={setResetPasswordFormOpen}
                  verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
                  setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
                  verifyPasswordResetOTPFormOpen={
                    verifyPasswordResetOTPFormOpen
                  }
                  setVerifyPasswordResetOTPFormOpen={
                    setVerifyPasswordResetOTPFormOpen
                  }
                  newPasswordFormOpen={newPasswordFormOpen}
                  setNewPasswordFormOpen={setNewPasswordFormOpen}
                />
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition show={newPasswordFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => setNewPasswordFormOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-5 text-center">
                <NewPasswordForm
                  loginFormOpen={loginFormOpen}
                  setLoginFormOpen={setLoginFormOpen}
                  signUpFormOpen={signUpFormOpen}
                  setSignUpFormOpen={setSignUpFormOpen}
                  resetPasswordFormOpen={resetPasswordFormOpen}
                  setResetPasswordFormOpen={setResetPasswordFormOpen}
                  verifyEmailOTPFormOpen={verifyEmailOTPFormOpen}
                  setVerifyEmailOTPFormOpen={setVerifyEmailOTPFormOpen}
                  verifyPasswordResetOTPFormOpen={
                    verifyPasswordResetOTPFormOpen
                  }
                  setVerifyPasswordResetOTPFormOpen={
                    setVerifyPasswordResetOTPFormOpen
                  }
                  newPasswordFormOpen={newPasswordFormOpen}
                  setNewPasswordFormOpen={setNewPasswordFormOpen}
                />
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* AUTHENTICATION FLOW SCREEN ENDS */}
      </header>
      <main className="mx-auto max-w-[1280px] text-center">
        <div className="h-[calc(100vh-101px)] bg-image bg-cover bg-center bg-no-repeat pt-[64px]">
          <div className="mx-auto flex max-w-[838px] flex-col gap-8">
            <h2 className="mx-auto max-w-[291px] rounded-3xl border border-neutral-200 bg-white px-[21px] py-[9px] text-base font-bold leading-normal text-orange-500">
              WELCOME TO MATHCOLLAB
            </h2>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-[18px]">
                <h3 className="text-[57px] font-bold leading-[64px] text-slate-950">
                  We Make Math Editing and{" "}
                  <span className="text-orange-500">Collaboration</span> Easier
                </h3>
                <p className="mx-auto max-w-[689px] text-center text-lg font-normal leading-[27px] text-neutral-700">
                  MathCollab is a real-time interactive math editing and
                  collaboration platform that enables realt-time collaborative
                  learning of math and other applied math courses.
                </p>
              </div>
              <button
                type="button"
                className="mx-auto w-[175px] rounded-lg bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white"
              >
                Explore MathCollab
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
