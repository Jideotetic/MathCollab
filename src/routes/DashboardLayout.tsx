import MathCollab from "../components/MathCollab";
import { Form, NavLink, Outlet } from "react-router-dom";
import { Fragment, useEffect } from "react";
import switchUserUrl from "../assets/switch-user.svg";
import lineUrl from "../assets/line.svg";
import calenderUrl from "../assets/calender.svg";
import settingsUrl from "../assets/settings.svg";
import helpUrl from "../assets/help.svg";
import signOutUrl from "../assets/sign-out.svg";
// import searchIconUrl from "../assets/ic_Search.svg";
import { User } from "firebase/auth";
import notificationUrl from "../assets/notification.svg";
import userImageUrl from "../assets/user.jpeg";
import arrowRightIconUrl from "../assets/Icon.svg";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import DashboardIndex from "./DashboardIndex";
import { useRouteLoaderData } from "react-router-dom";
import { authProvider } from "../auth";
import { ToastContainer } from "react-toastify";

const navLinks = [
  { id: uuidv4(), title: "Graphing Calculator", link: "graphing-calculator" },
  {
    id: uuidv4(),
    title: "Scientific Calculator",
    link: "scientific-calculator",
  },
  { id: uuidv4(), title: "Geometry Tool", link: "geometry-tool" },
  { id: uuidv4(), title: "Tutorials", link: "tutorials" },
  { id: uuidv4(), title: "Settings", link: "settings" },
  { id: uuidv4(), title: "Help", link: "help" },
  { id: uuidv4(), title: "Sign Out", link: "sign-out" },
];

export default function DashboardLayout() {
  const { user } = useRouteLoaderData("dashboard") as {
    user: User;
  };

  console.log(user);

  const handleLogout = () => {
    authProvider.signout();
  };

  useEffect(() => {
    sessionStorage.removeItem("host");
  }, []);

  return (
    <>
      <ToastContainer />
      <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-[1280px] max-w-full justify-between bg-white px-4 py-6">
        <h1 className="hidden text-[28px] font-bold leading-[32px] text-[#3A383C] lg:inline-block">
          Math
          <span className="text-[#FD632F]">C</span>
          ollab
        </h1>

        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              <Popover.Button>
                {!open && <Bars3Icon className="h-10 w-10" />}
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
                <Popover.Overlay className="fixed inset-0 z-50 overflow-auto bg-black" />
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
                  className="fixed left-0 top-0 z-50 flex h-screen justify-between overflow-auto bg-white px-4 py-6 max-[320px]:w-full min-[320px]:w-full min-[350px]:w-[80%] sm:w-[50%]"
                >
                  {({ close }) => (
                    <>
                      <div className="flex flex-col gap-[30px]">
                        <MathCollab />

                        <div className="space-y-8">
                          <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                              isActive
                                ? "flex w-full items-center gap-2 rounded bg-gray-200 px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                                : "flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                            }
                            onClick={() => close()}
                          >
                            <img src={switchUserUrl} alt="" />
                            Dashboard
                          </NavLink>

                          <img src={lineUrl} alt="" className="mx-auto" />
                        </div>

                        <h2 className="text-xl font-semibold leading-[30px] text-neutral-700">
                          Math Tools
                        </h2>

                        <ul className="space-y-5">
                          {navLinks.map((link) => (
                            <Fragment key={link.id}>
                              <li className="space-y-8">
                                {link.link === "sign-out" ? (
                                  <Form method="post" action="signout">
                                    <button type="submit">{link.title}</button>
                                  </Form>
                                ) : (
                                  <NavLink
                                    to={
                                      link.link === "sign-out"
                                        ? "/"
                                        : `/${link.link}`
                                    }
                                    className={({ isActive }) =>
                                      isActive
                                        ? "flex w-full items-center gap-2 rounded bg-gray-200 px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                                        : "flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-neutral-500"
                                    }
                                    onClick={() => {
                                      close();
                                      link.link === "sign-out"
                                        ? handleLogout
                                        : "";
                                    }}
                                  >
                                    {link.link === "settings" ? (
                                      <img src={settingsUrl} alt="" />
                                    ) : link.link === "help" ? (
                                      <img src={helpUrl} alt="" />
                                    ) : link.link === "sign-out" ? (
                                      <img src={signOutUrl} alt="" />
                                    ) : (
                                      <img src={calenderUrl} alt="" />
                                    )}
                                    {link.title}
                                  </NavLink>
                                )}

                                {link.link === "geometry-tool" && (
                                  <img
                                    src={lineUrl}
                                    alt=""
                                    className="mx-auto"
                                  />
                                )}
                              </li>
                            </Fragment>
                          ))}
                        </ul>
                      </div>
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

        {/* <div className="mx-auto hidden w-[520px] max-w-full lg:block">
          <form action="#" className="relative w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-full rounded-[80px] border border-[#666666] bg-white"
            />
            <button
              type="button"
              className="absolute right-3 top-[50%] -translate-y-[50%]"
            >
              <img src={searchIconUrl} alt="" />
            </button>
          </form>
        </div> */}

        <div className="flex gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100">
            <img src={notificationUrl} alt="" />
          </div>

          <div className="flex shrink-0 items-center justify-center gap-2">
            <div className="flex gap-4">
              <div className="text-sm leading-[21px]">
                <div className="font-semibold text-slate-950">
                  {user?.displayName}
                </div>
                <div className="font-normal text-neutral-500">Free Account</div>
              </div>
              <img
                src={(user?.photoURL as string | undefined) || userImageUrl}
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </div>

            <img src={arrowRightIconUrl} alt="" />
          </div>
        </div>
      </header>

      <div className="relative mx-auto grid min-h-screen w-[1280px] max-w-full pb-2 pt-[110px] lg:grid-cols-layout lg:gap-2">
        <nav className="fixed hidden h-screen w-[218px] bg-white pl-4 pt-[110px] lg:inline-block">
          <div className="space-y-8">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full items-center gap-2 rounded bg-gray-200 px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                  : "flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
              }
            >
              <img src={switchUserUrl} alt="" />
              Dashboard
            </NavLink>

            <img src={lineUrl} alt="" className="mx-auto" />
          </div>

          <h2 className="my-3 text-xl font-semibold leading-[30px] text-neutral-700">
            Math Tools
          </h2>

          {/* <ul className="w-full space-y-5">
            {navLinks.map((link) => (
              <Fragment key={link.id}>
                <li className="w-full space-y-5">
                  <NavLink
                    to={link.link === "sign-out" ? "/" : `/${link.link}`}
                    className={({ isActive }) =>
                      isActive
                        ? "flex w-full items-center gap-2 rounded bg-gray-200 px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                        : "flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-neutral-500"
                    }
                    onClick={() => {
                      close();
                      link.link === "sign-out" ? handleLogout : "";
                    }}
                  >
                    {link.link === "settings" ? (
                      <img src={settingsUrl} alt="" />
                    ) : link.link === "help" ? (
                      <img src={helpUrl} alt="" />
                    ) : link.link === "sign-out" ? (
                      <img src={signOutUrl} alt="" />
                    ) : (
                      <img src={calenderUrl} alt="" />
                    )}
                    {link.title}
                  </NavLink>
                  {link.link === "geometry-tool" && (
                    <img src={lineUrl} alt="" className="mx-auto" />
                  )}
                </li>
              </Fragment>
            ))}
          </ul> */}
          <ul className="space-y-5">
            {navLinks.map((link) => (
              <Fragment key={link.id}>
                <li className="space-y-8">
                  {link.link === "sign-out" ? (
                    <Form method="post" action="signout">
                      <button type="submit">{link.title}</button>
                    </Form>
                  ) : (
                    <NavLink
                      to={link.link === "sign-out" ? "/" : `/${link.link}`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex w-full items-center gap-2 rounded bg-gray-200 px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                          : "flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-neutral-500"
                      }
                      onClick={() => {
                        close();
                        link.link === "sign-out" ? handleLogout : "";
                      }}
                    >
                      {link.link === "settings" ? (
                        <img src={settingsUrl} alt="" />
                      ) : link.link === "help" ? (
                        <img src={helpUrl} alt="" />
                      ) : link.link === "sign-out" ? (
                        <img src={signOutUrl} alt="" />
                      ) : (
                        <img src={calenderUrl} alt="" />
                      )}
                      {link.title}
                    </NavLink>
                  )}

                  {link.link === "geometry-tool" && (
                    <img src={lineUrl} alt="" className="mx-auto" />
                  )}
                </li>
              </Fragment>
            ))}
          </ul>
        </nav>
        {/* Empty container for grid style */}
        <div className="hidden lg:block"></div>
        {/* Empty container for grid style */}
        <main className="rounded-[10px] border-2 border-[#E0E0E0] ">
          <DashboardIndex />
          <Outlet />
        </main>
      </div>
    </>
  );
}
