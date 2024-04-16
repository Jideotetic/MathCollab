import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import MathCollab from "../MathCollab";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FormsContext, FormsContextType } from "../../contexts/FormsContext";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Classes", link: "classes" },
  { title: "FAQ", link: "faq" },
  { title: "Blog", link: "blog" },
];

export default function HomePageHeader() {
  const { setLoginFormOpen } = useContext(FormsContext) as FormsContextType;

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-[101px] w-[1280px] max-w-full items-center justify-between bg-white px-4 py-6 text-sm xl:px-20">
        <MathCollab />

        {/* MOBILE NAV STARTS */}
        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              {/* OPEN NAV START */}
              <Popover.Button>
                {!open && (
                  <Bars3Icon className="h-10 w-10 transition-transform duration-300 ease-in-out hover:rotate-180" />
                )}
              </Popover.Button>
              {/* OPEN NAV ENDS */}

              {/* OVERLAY */}
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

              {/* NAV BAR */}
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
                  className="fixed left-0 top-0 z-50 flex h-screen w-full justify-between overflow-auto bg-white px-4 py-6 min-[320px]:w-[80%] sm:w-[50%]"
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

                        {/* LOGIN LINK */}
                        <li>
                          <Link
                            to="/login"
                            onClick={() => setLoginFormOpen(true)}
                            className="rounded-lg border border-slate-950 px-7 py-3 font-semibold text-slate-950 hover:bg-slate-950 hover:text-white"
                          >
                            Sign In
                          </Link>
                        </li>
                        {/* LOGIN LINK */}
                      </ul>

                      {/* CLOSE NAV START */}
                      <button
                        type="button"
                        className="-mt-4 self-start"
                        onClick={() => close()}
                      >
                        <XMarkIcon className="h-10 w-10 transition-transform duration-300 ease-in hover:rotate-45" />
                      </button>
                      {/* CLOSE NAV ENDS */}
                    </>
                  )}
                </Popover.Panel>
              </Transition.Child>
            </>
          )}
        </Popover>
        {/* MOBILE NAV ENDS */}
        {/* LARGE SCREEN NAV STARTS */}
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
        {/* LARGE SCREEN NAV ENDS */}
        {/* LOGIN BUTTON */}
        <Link
          to="/login"
          onClick={() => setLoginFormOpen(true)}
          className="hidden rounded-lg border border-slate-950 px-7 py-3 font-semibold text-slate-950 hover:bg-slate-950 hover:text-white lg:block"
        >
          Sign In
        </Link>
      </header>
    </>
  );
}
