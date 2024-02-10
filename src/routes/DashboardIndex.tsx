import homeUrl from "../assets/home.svg";
import notificationUrl from "../assets/notification.svg";
import userImageUrl from "../assets/user-image.png";
import arrowRightIconUrl from "../assets/Icon.svg";
// import DashboardEmpty from "../components/DashboardEmpty";
import gridIconUrl from "../assets/grid_icon.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import CreateOrJoinClassButton from "../components/CreateOrJoinClassButton";
// import { useOutletContext } from "react-router-dom";
// import { ClassListType } from "../@types/classListType";
// import ClassList from "../components/ClassList";
// import ClassGrid from "../components/ClassGrid";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function DashboardIndex() {
  // const { classList } = useOutletContext<ClassListType>();
  const [gridView, setGridView] = useState(false);
  const currentUser = useContext(AuthContext);

  return (
    <>
      <div className="flex h-[69px] items-center justify-between border-2 border-neutral-200 px-4">
        <div className="flex gap-2 py-1.5">
          <img src={homeUrl} alt="" />
          <span className="text-base font-normal leading-normal text-neutral-500">
            Dashboard
          </span>
        </div>
        <div className="flex gap-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
            <img src={notificationUrl} alt="" />
          </div>
          <div className="flex items-center justify-center gap-2">
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
      </div>
      <div className="flex h-16 items-center justify-between border-2 border-neutral-200 px-4">
        <div className="flex items-center gap-[14px]">
          <div className="text-center text-xl font-semibold leading-[30px] text-neutral-700">
            Classes
          </div>
          <div className="flex bg-white">
            <button
              type="button"
              onClick={() => setGridView(false)}
              className={`shrink-0 rounded-s-[47px] border border-stone-500 border-opacity-30 ${
                gridView ? "" : "bg-gray-200"
              } px-2`}
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={() => setGridView(true)}
              className={`shrink-0 rounded-e-[47px] border border-stone-500 border-opacity-30 ${
                gridView ? "bg-gray-200" : ""
              } px-2`}
            >
              <img src={gridIconUrl} alt="" className="h-7 w-7" />
            </button>
          </div>
        </div>

        <form action="#" method="get">
          <input
            type="search"
            className="flex-1 rounded-[47px] border border-stone-500 border-opacity-30 bg-white px-2"
            placeholder="Search"
            name="search"
          />
        </form>

        <CreateOrJoinClassButton />
      </div>
      {/* {classList.length === 0 ? (
        <DashboardEmpty />
      ) : gridView ? (
        <ClassGrid />
      ) : (
        <ClassList />
      )} */}

      {/* <div className="grid-cols-classes sm:grid-cols-classe1 mx-auto grid w-[1135px] max-w-full gap-x-2 gap-y-8 py-[15px] text-left">
        <Link to="square-root-simplification">
          <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
            <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
            <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-base font-medium text-black">
                  <span className="font-semibold">Preview</span>:Square root
                  math simplification
                </p>
                <div className="flex items-center gap-1">
                  <img src={heartIconUrl} alt="" />
                  <span className="text-lg font-normal text-[#616161]">
                    8.8K
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <div className="text-lg font-normal text-[#616161]">
                  <p>Amanda Chisom</p>
                  <div className="flex items-center gap-1">
                    <EyeIcon className="h-[13px] w-[13px]" />
                    <span className="shrink-0 text-xs font-normal text-[#616161]">
                      8.8K Views
                    </span>
                    <img src={ellipseIconUrl} alt="" className="" />
                    <span className="shrink-0 text-xs font-semibold text-[#06031E]">
                      Upcoming
                    </span>
                  </div>
                </div>
                <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
          <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Square root math simplification
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
          <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Square root math simplification
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
          <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Square root math simplification
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
          <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Square root math simplification
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img
            src={pythagorasUrl}
            alt=""
            className="h-[203px] w-full bg-white"
          />
          <img src={creator1Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Pythagorean Theorem made easy
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
          <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2 ">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                Square root math simplification
              </p>
              <div className="flex items-center gap-1">
                <img src={heartIconUrl} alt="" />
                <span className="text-lg font-normal text-[#616161]">8.8K</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="text-lg font-normal text-[#616161]">
                <p>Amanda Chisom</p>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-[13px] w-[13px]" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    8.8K Views
                  </span>
                  <img src={ellipseIconUrl} alt="" className="" />
                  <span className="shrink-0 text-xs font-normal text-[#616161]">
                    2wks ago
                  </span>
                </div>
              </div>
              <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                Share
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
