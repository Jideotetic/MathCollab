import groupUrl from "../assets/Group 1000001948.svg";
import bgImagerightUrl from "../assets/bg-image-right.png";
import bgImageleftUrl from "../assets/bg-image-left.png";
import searchIconUrl from "../assets/ic_Search.svg";
import creator1Url from "../assets/creator-1.png";
import creator2Url from "../assets/creator-2.png";
import heartIconUrl from "../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../assets/Ellipse 1779.png";
import findXUrl from "../assets/find-x.png";
import pythagorasUrl from "../assets/pythagoras-img.png";

export default function ExplorePage() {
  return (
    <main className="mx-auto w-[1280px] max-w-full space-y-[40px] px-4 py-6 text-center xl:px-20">
      <div className="mx-auto w-[1135px] max-w-full space-y-[24px]">
        <div className="relative flex min-h-[172px] items-center justify-around rounded-[20px] border-4 border-[#06031E] bg-[#74C3F00A]">
          <img
            src={bgImageleftUrl}
            alt=""
            className="absolute bottom-0 left-0  top-0"
          />
          <img
            src={bgImagerightUrl}
            alt=""
            className="absolute right-0 top-0"
          />
          <div className="z-10 space-y-3 lg:text-left">
            <h2 className="text-clamp font-bold text-slate-950">
              Create and Join Top Collaborative Classes
            </h2>
            <p>
              Welcome to the ultimate destination where math collaboration is
              made easier for learners
            </p>
          </div>
          <div className="z-10 hidden lg:block">
            <img src={groupUrl} alt="" />
          </div>
        </div>
        <div className="mx-auto w-[668px] max-w-full gap-2 space-y-4 sm:flex sm:space-y-0">
          <form action="#" className="relative w-full sm:w-[251px]">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="w-full rounded-[80px] bg-[#d8d8db6e]"
            />
            <button
              type="submit"
              className="absolute right-3 top-[50%] -translate-y-[50%]"
            >
              <img src={searchIconUrl} alt="" />
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 max-[468px]:flex-col sm:flex-row">
            <button
              type="button"
              className="h-[40px] min-w-[40px] rounded-full border border-[#92929D] bg-black text-white"
            >
              All
            </button>
            <button
              type="button"
              className="min-w-[115px] rounded-[78px] border border-[#92929D] py-[5px] text-[#92929D]"
            >
              Past
            </button>
            <button
              type="button"
              className="min-w-[115px] rounded-[78px] border border-[#92929D] py-[5px] text-[#92929D]"
            >
              Live
            </button>
            <button
              type="button"
              className="min-w-[115px] rounded-[78px] border border-[#92929D] py-[5px] text-[#92929D]"
            >
              Upcoming
            </button>
          </div>
        </div>
      </div>
      <div className="grid-cols-classes sm:grid-cols-classe1 mx-auto grid w-[1135px] max-w-full gap-x-2 gap-y-8 py-[15px] text-left">
        <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
          <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
          <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-base font-medium text-black">
                <span className="font-semibold">Preview</span>:Square root math
                simplification
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
        {/* <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="border-2 border-red-500">
          <iframe
            // width="640"
            // height="360"
            src="https://www.youtube.com/embed/aN1LnNq4z54?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ"
            title="Firebase Authentication Tutorial #1 - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div> */}
      </div>
      <div className="mx-auto w-[516px] max-w-full border-2 border-red-500 py-[15px]"></div>
    </main>
  );
}
