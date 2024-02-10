import MathCollab from "../components/MathCollab";
import { NavLink, Link, Outlet } from "react-router-dom";
// import { useContext, useEffect } from "react";
import switchUserUrl from "../assets/switch-user.svg";
import lineUrl from "../assets/line.svg";
import calenderUrl from "../assets/calender.svg";
import settingsUrl from "../assets/settings.svg";
import helpUrl from "../assets/help.svg";
import signOutUrl from "../assets/sign-out.svg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// import { ClassListType } from "../@types/classListType";
import searchIconUrl from "../assets/ic_Search.svg";
import notificationUrl from "../assets/notification.svg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import userImageUrl from "../assets/user-image.png";
import arrowRightIconUrl from "../assets/Icon.svg";
// import { ClassListContext } from "../contexts/ClassListContext";

export default function DashboardLayout() {
  //   const { classList, setClassList } = useContext(
  //     ClassListContext,
  //   ) as ClassListType;
  const currentUser = useContext(AuthContext);

  const handleLogout = () => {
    // navigate("/login");
    signOut(auth);
  };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const authToken = sessionStorage.getItem("Auth Token");

  //   if (authToken) {
  //     navigate("/dashboard");
  //   }

  //   if (!authToken) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <>
      {/* <div className="flex items-center justify-between gap-3 pb-4 pl-[40px] pr-[23px] pt-[36px]">
        <MathCollab />
        <div className="mx-auto hidden w-[520px] max-w-full sm:block">
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
        </div>
        <div className="flex gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100">
            <img src={notificationUrl} alt="" />
          </div>
          <div className="flex shrink-0 items-center justify-center gap-2">
            <div className="flex gap-4">
              <div className="text-sm leading-[21px]">
                <div className=" font-semibold text-slate-950">
                  {currentUser?.displayName}.
                </div>
                <div className="font-normal text-neutral-500">Free Account</div>
              </div>
              <img
                src={currentUser?.photoURL || userImageUrl}
                className="h-10 w-10 rounded-full"
                alt=""
              />
            </div>
            <img src={arrowRightIconUrl} alt="" />
          </div>
        </div>
      </div> */}
      <div className="mx-auto grid min-h-screen max-w-[1280px] grid-cols-layout bg-white">
        <div className="flex flex-col gap-[20px] pb-4 pl-[40px] pr-[23px] pt-[36px]">
          <MathCollab />
          <nav className="flex flex-col gap-[30px]">
            <div className="space-y-5">
              <div className="flex gap-2 rounded bg-gray-200 py-1.5 pl-4">
                <img src={switchUserUrl} alt="" />
                <NavLink
                  to="/dashboard"
                  className="font-poppins text-sm font-light leading-tight text-slate-950"
                >
                  Dashboard
                </NavLink>
              </div>
              <img src={lineUrl} alt="" />
            </div>
            <h2 className="text-xl font-semibold leading-[30px] text-neutral-700">
              Math Tools
            </h2>
            <div className="space-y-5">
              <ul className="space-y-4">
                <li className="flex gap-2 rounded py-1.5 pl-4">
                  <img src={calenderUrl} alt="" />
                  <Link
                    to="/dashboard"
                    className="font-poppins text-sm font-light leading-tight text-neutral-500"
                  >
                    Graphing Calculator
                  </Link>
                </li>
                <li className="flex gap-2 rounded py-1.5 pl-4">
                  <img src={calenderUrl} alt="" />
                  <Link
                    to="/dashboard"
                    className="font-poppins text-sm font-light leading-tight text-neutral-500"
                  >
                    Scientific Calculator
                  </Link>
                </li>
                <li className="flex gap-2 rounded py-1.5 pl-4">
                  <img src={calenderUrl} alt="" />
                  <Link
                    to="/dashboard"
                    className="font-poppins text-sm font-light leading-tight text-neutral-500"
                  >
                    Geometry Tool
                  </Link>
                </li>
              </ul>
              <img src={lineUrl} alt="" />
            </div>

            <ul className="space-y-4">
              <li className="flex gap-2 rounded py-1.5 pl-4">
                <img src={calenderUrl} alt="" />
                <Link
                  to="/dashboard"
                  className="font-poppins text-sm font-light leading-tight text-neutral-500"
                >
                  Schedule
                </Link>
              </li>
              <li className="flex gap-2 rounded py-1.5 pl-4">
                <img src={calenderUrl} alt="" />
                <Link
                  to="/dashboard"
                  className="font-poppins text-sm font-light leading-tight text-neutral-500"
                >
                  Tutorials
                </Link>
              </li>
              <li className="flex gap-2 rounded py-1.5 pl-4">
                <img src={settingsUrl} alt="" />
                <Link
                  to="/dashboard"
                  className="font-poppins text-sm font-light leading-tight text-neutral-500"
                >
                  Settings
                </Link>
              </li>
              <li className="flex gap-2 rounded py-1.5 pl-4">
                <img src={helpUrl} alt="" />
                <Link
                  to="/dashboard"
                  className="font-poppins text-sm font-light leading-tight text-neutral-500"
                >
                  Help
                </Link>
              </li>
              <li className="flex gap-2 rounded py-1.5 pl-4">
                <img src={signOutUrl} alt="" />
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="font-poppins text-sm font-light leading-tight text-neutral-500"
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mx-[17px] mb-[14px] mt-[19px] flex flex-col rounded-[10px] border-2 border-neutral-200">
          <Outlet
          //   context={{ classList, setClassList }}
          />
        </div>
      </div>
    </>
  );
}
