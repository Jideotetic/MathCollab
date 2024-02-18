import { Fragment, useContext } from "react";
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
import { Outlet, Link } from "react-router-dom";
import { InputsContext, InputsContextType } from "../contexts/InputsContext";
import facebookIconUrl from "../assets/Facebook.svg";
import twitterIconUrl from "../assets/Twitter.svg";
import instagramIconUrl from "../assets/Instagram.svg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Classes", link: "classes" },
  { title: "FAQ", link: "faq" },
  { title: "Blog", link: "blog" },
];

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

  const { setEmail, setPassword, setFirstName, setLastName } = useContext(
    InputsContext,
  ) as InputsContextType;

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-[101px] w-[1280px] max-w-full items-center justify-between bg-white px-4 py-6 text-sm xl:px-20">
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
                <Popover.Overlay className="fixed inset-0 z-50 bg-black" />
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
                  className="fixed left-0 top-0 z-50 flex h-screen w-full justify-between bg-white px-4 py-6 sm:w-[50%]"
                >
                  {({ close }) => (
                    <>
                      <ul className="space-y-8">
                        {navLinks.map((link) => (
                          <li
                            key={link.title}
                            className="font-normal leading-tight hover:text-white"
                          >
                            <NavLink
                              to={link.link}
                              className={({ isActive }) =>
                                isActive
                                  ? "rounded-3xl bg-purple-200 px-[15px] py-1.5  hover:bg-purple-500 hover:text-white"
                                  : "rounded-3xl px-[15px] py-1.5 hover:bg-purple-500"
                              }
                              onClick={() => close()}
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                        <li>
                          <button
                            type="button"
                            onClick={() => setLoginFormOpen(true)}
                            className="rounded-lg border border-slate-950 px-7 py-3 font-semibold text-slate-950 hover:bg-slate-950 hover:text-white"
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
            {navLinks.map((link) => (
              <li
                key={link.title}
                className="font-normal leading-tight hover:text-white"
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-3xl bg-purple-200 px-[15px] py-1.5  hover:bg-purple-500 hover:text-white"
                      : "rounded-3xl px-[15px] py-1.5 hover:bg-purple-500"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setLoginFormOpen(true)}
          className="hidden rounded-lg border border-slate-950 px-7 py-3 font-semibold text-slate-950 hover:bg-slate-950 hover:text-white lg:block"
        >
          Sign In
        </button>

        {/* AUTHENTICATION SCREENS FLOW STARTS */}
        <Transition show={loginFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setLoginFormOpen(false);
              setEmail("");
              setPassword("");
            }}
          >
            <LoginForm />
          </Dialog>
        </Transition>

        <Transition show={signUpFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setSignUpFormOpen(false);
              setFirstName("");
              setLastName("");
              setEmail("");
              setPassword("");
            }}
          >
            <SignUpForm />
          </Dialog>
        </Transition>

        <Transition show={verifyEmailOTPFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setVerifyEmailOTPFormOpen(false);
              signOut(auth);
            }}
          >
            <VerifyEmailOTPForm />
          </Dialog>
        </Transition>
        <Transition show={resetPasswordFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setResetPasswordFormOpen(false);
              setEmail("");
            }}
          >
            <ResetPasswordForm />
          </Dialog>
        </Transition>
        <Transition show={verifyPasswordResetOTPFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setVerifyPasswordResetOTPFormOpen(false);
            }}
          >
            <VerifyPasswordResetOTPForm />
          </Dialog>
        </Transition>
        <Transition show={newPasswordFormOpen} as={Fragment}>
          <Dialog
            className="relative z-10"
            onClose={() => {
              setNewPasswordFormOpen(false);
            }}
          >
            <NewPasswordForm />
          </Dialog>
        </Transition>
        {/* AUTHENTICATION FLOW SCREEN ENDS */}
      </header>

      <Outlet />

      <div className="bg-[#06031E]">
        <footer className="mx-auto w-[1280px] max-w-full p-4 text-start text-base text-white">
          <div className="mx-auto w-[1200px] max-w-full space-y-[43px]">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="space-y-8 self-start">
                <h3 className="text-[28px] font-bold leading-[32px] text-white">
                  Math<span className="text-[#FD632F]">C</span>ollab
                </h3>
                <div className="flex justify-between">
                  <img src={facebookIconUrl} alt="" />
                  <img src={instagramIconUrl} alt="" />
                  <img src={twitterIconUrl} alt="" />
                </div>
              </div>

              <div className="space-y-[16px]">
                <h3 className="text-lg font-normal text-[#696974]">LINKS</h3>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="about">About Us</Link>
                    </li>
                    <li>
                      <Link to="tools">Tools</Link>
                    </li>
                    <li>
                      <Link to="classes">Classes</Link>
                    </li>
                    <li>
                      <Link to="blog">Blogs & Resources</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="space-y-[16px]">
                <h3 className="text-lg font-normal text-[#696974]">CONTACTS</h3>
                <address className="space-y-4">
                  <div>24, mobolaje street, Aja, lagos</div>
                  <div>mathcolab@customercare.com</div>
                  <div>+234-906-594-1182</div>
                </address>
              </div>

              <div className="space-y-[22px] self-start">
                <div className="space-y-[16px]">
                  <h3 className="text-lg font-normal">
                    Sign Up To Our Newsletter
                  </h3>
                  <p className="text-sm">
                    Be the first to get the latest Updates, tips from our blogs
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id=""
                      className="w-full rounded-full pr-[120px] text-[#06031E]"
                      autoComplete="off"
                      placeholder="Enter Your Email"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-[50%] -translate-y-[50%] rounded-[21.28px] bg-[#06031E] px-[20px] py-[5px]"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center text-[#696974]">
              <hr className="mb-[18px]" />
              <p>© 2024 MathCollab, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
