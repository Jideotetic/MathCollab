import MathCollab from "../MathCollab";
import notificationUrl from "../../assets/notification.svg";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ImageUpload from "../ImageUpload";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import switchUserUrl from "../../assets/switch-user.svg";
import lineUrl from "../../assets/line.svg";
import calenderUrl from "../../assets/calender.svg";
import settingsUrl from "../../assets/settings.svg";
import helpUrl from "../../assets/help.svg";
import signOutUrl from "../../assets/sign-out.svg";
import { v4 as uuidv4 } from "uuid";
import { User } from "firebase/auth";

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

export default function DashboardHeader() {
  const { currentUser } = useRouteLoaderData("dashboard") as {
    currentUser: User;
  };
  const [userName, setUserName] = useState(currentUser.displayName);
  useEffect(() => {
    const names = userName?.split(" ");
    setUserName((names?.[0] + " " + names?.[1][0]) as string);
  }, [userName]);

  return (
    <>
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
                  className="fixed left-0 top-0 z-50 flex h-screen justify-between overflow-auto bg-white px-4 py-6 max-[320px]:w-full min-[320px]:w-full min-[360px]:w-[80%] min-[500px]:w-[60%] sm:w-[50%]"
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

                        <ul className="space-y-5 pb-4">
                          {navLinks.map((link) => (
                            <Fragment key={link.id}>
                              <li className="space-y-8">
                                {link.link === "sign-out" ? (
                                  <Form
                                    method="post"
                                    action="signout"
                                    className="flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-neutral-500"
                                  >
                                    <img src={signOutUrl} alt="" />
                                    <button type="submit">{link.title}</button>
                                  </Form>
                                ) : (
                                  <NavLink
                                    to={`/${link.link}`}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "flex w-full items-center gap-2 rounded bg-gray-200 px-4 py-1.5 font-poppins text-sm font-light leading-tight text-slate-950"
                                        : "flex w-full items-center gap-2 rounded px-4 py-1.5 font-poppins text-sm font-light leading-tight text-neutral-500"
                                    }
                                    onClick={() => {
                                      close();
                                    }}
                                  >
                                    {link.link === "settings" ? (
                                      <img src={settingsUrl} alt="" />
                                    ) : link.link === "help" ? (
                                      <img src={helpUrl} alt="" />
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

        <div className="flex gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100">
            <img src={notificationUrl} alt="" />
          </div>

          <div className="flex shrink-0 items-center justify-center gap-2">
            <div className="flex gap-4">
              <div className="text-sm leading-[21px]">
                <div className="font-semibold text-slate-950">{userName}.</div>
                <div className="font-normal text-neutral-500">Free Account</div>
              </div>
              <ImageUpload />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
