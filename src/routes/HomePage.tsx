import { NavLink } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import MathCollab from "../components/MathCollab";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ResetPasswordForm from "../components/ResetPasswordForm";
import VerifyEmailOTPForm from "../components/VerifyEmailOTPForm";
import VerifyPasswordResetOTPForm from "../components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "../components/NewPasswordForm";
import { FormBooleanValueContext } from "../contexts/FormBooleansValueContext";
import { FormBooleanValueContextTypes } from "../@types/formBooleanValueContextTypes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import listDashboardUrl from "../assets/List_dashboard.png";

const links = ["Home", "Pricing", "FAQ", "Blog"];

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
  } = useContext(FormBooleanValueContext) as FormBooleanValueContextTypes;

  return (
    <>
      <header className="mx-auto flex h-[101px] max-w-[1280px] items-center justify-between bg-white px-4 py-6">
        <MathCollab />

        {/* MOBILE NAV STARTS */}
        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              <div className="relative">
                <Popover.Button className="absolute -top-[100%] right-0 z-50 -translate-y-[50%]">
                  {open ? (
                    <XMarkIcon className="h-10 w-10" />
                  ) : (
                    <Bars3Icon className="h-10 w-10" />
                  )}
                </Popover.Button>
              </div>

              <Transition.Child
                as={Fragment}
                enter="ease-in duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-30"
                leave="ease-in duration-200"
                leaveFrom="opacity-30"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 bg-black" />
              </Transition.Child>
              <Transition
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
                  className="fixed left-0 top-0 h-screen w-[50%] bg-white px-4 py-6"
                >
                  {({ close }) => (
                    <>
                      <ul className="flex flex-col gap-8">
                        {links.map((link) => (
                          <li
                            key={link}
                            className="font-normal leading-tight text-zinc-600"
                          >
                            <NavLink
                              to={link === "Home" ? "/" : link}
                              onClick={() => close()}
                              className={({ isActive, isPending }) =>
                                isActive
                                  ? "rounded-3xl bg-purple-200 px-[15px] py-1.5 hover:bg-purple-500 hover:text-white"
                                  : isPending
                                    ? ""
                                    : "rounded-3xl px-[15px] py-1.5 hover:bg-purple-500 hover:text-white"
                              }
                            >
                              {link}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={() => setLoginFormOpen(true)}
                        className="mt-8 rounded-lg border border-slate-950 px-7 py-3 text-sm font-medium leading-[21px] text-slate-950 hover:bg-slate-950 hover:text-white"
                      >
                        Sign In
                      </button>
                    </>
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        {/* MOBILE NAV ENDS */}

        <nav className="hidden lg:block">
          <ul className="gap-8 lg:flex">
            {links.map((link) => (
              <li
                key={link}
                className="font-normal leading-tight text-zinc-600"
              >
                <NavLink
                  to={link === "Home" ? "/" : link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "rounded-3xl bg-purple-200 px-[15px] py-1.5  hover:bg-purple-500 hover:text-white"
                      : isPending
                        ? ""
                        : "rounded-3xl px-[15px] py-1.5 hover:bg-purple-500 hover:text-white"
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
          className="hidden rounded-lg border border-slate-950 px-7 py-3 text-sm font-medium leading-[21px] text-slate-950 hover:bg-slate-950 hover:text-white lg:block"
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
                <LoginForm />
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
                <SignUpForm />
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
                <VerifyEmailOTPForm />
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
                <ResetPasswordForm />
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
                <VerifyPasswordResetOTPForm />
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
                <NewPasswordForm />
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* AUTHENTICATION FLOW SCREEN ENDS */}
      </header>
      <main className="mx-auto max-w-[1280px] px-4 text-center">
        <div className="mb-10 flex flex-col items-center gap-8 bg-image bg-cover bg-center bg-no-repeat pt-8">
          <h2 className="max-w-[291px] rounded-3xl border border-neutral-200 bg-white px-[19px] py-[9px] text-base font-bold leading-normal text-orange-500">
            WELCOME TO MATHCOLLAB
          </h2>
          <div className="flex flex-col items-center justify-center gap-[18px]">
            <h3 className="text-clamp2 max-w-[802px] font-bold leading-[64px] text-slate-950">
              We Make Math Editing and{" "}
              <span className="text-orange-500">Collaboration</span> Easier
            </h3>
            <p className="max-w-[689px] text-lg font-normal leading-[27px] text-neutral-700">
              MathCollab is a real-time interactive math editing and
              collaboration platform that enables realt-time collaborative
              learning of math and other applied math courses.
            </p>
          </div>
          <button
            type="button"
            className="w-[175px] rounded-lg border bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white hover:border-slate-950 hover:bg-white hover:text-slate-950"
          >
            Explore MathCollab
          </button>
        </div>
        <div className="mb-10">
          <img src={listDashboardUrl} className="w-full" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-clamp2 max-w-[802px] font-bold leading-[64px] text-slate-950">
            What People Say About Math<span className="text-orange-500">C</span>
            ollab
          </h3>
        </div>
      </main>
    </>
  );
}
