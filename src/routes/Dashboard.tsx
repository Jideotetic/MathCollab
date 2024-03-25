import { Form, NavLink, Outlet, useNavigation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import switchUserUrl from "../assets/switch-user.svg";
import lineUrl from "../assets/line.svg";
import calenderUrl from "../assets/calender.svg";
import settingsUrl from "../assets/settings.svg";
import helpUrl from "../assets/help.svg";
import signOutUrl from "../assets/sign-out.svg";
import { v4 as uuidv4 } from "uuid";
import DashboardIndex from "./DashboardIndex";
import { ToastContainer } from "react-toastify";
import DashboardHeader from "../components/DashboardHeader";
import GlobalSlider from "../components/GlobalSlider";

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

export default function Dashboard() {
  const navigation = useNavigation();

  useEffect(() => {
    sessionStorage.removeItem("host");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("className");
  }, []);

  // useEffect(() => {
  //   server.on("login-successfully", (data) => {
  //     const { success } = data;
  //     console.log(success);
  //     if (success) {
  //       toast.success("Login successfully");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   server.on("connected-successfully", (data) => {
  //     const { success } = data;
  //     console.log(success);
  //     if (success) {
  //       toast.success("Connected successfully");
  //     }
  //   });
  // }, []);

  return (
    <>
      {navigation.state === "loading" && <GlobalSlider />}
      <ToastContainer />

      <DashboardHeader />

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

          <ul className="space-y-5">
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
        <main className="rounded-[10px] border border-[#E0E0E0] ">
          <DashboardIndex />
          <Outlet />
        </main>
      </div>
    </>
  );
}
