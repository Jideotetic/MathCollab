import searchIconUrl from "../assets/ic_Search.svg";
import heartIconUrl from "../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../assets/Ellipse 1779.png";
import findXUrl from "../assets/find-x.png";
import creator2Url from "../assets/creator-2.png";

export default function Classes() {
  return (
    <main className="mx-auto w-[1280px] max-w-full space-y-[40px] border border-red-400 px-4 py-6 text-center xl:px-20">
      <div className="mx-auto w-[520px] max-w-full">
        <form action="#" className="relative w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-full rounded-[80px] border-none bg-[#d8d8db6e]"
          />
          <button
            type="button"
            className="absolute right-3 top-[50%] -translate-y-[50%]"
          >
            <img src={searchIconUrl} alt="" />
          </button>
        </form>
      </div>

      <div className="mx-auto flex w-[1121px] max-w-full flex-col items-center gap-8 border border-purple-400 md:flex-row md:items-start">
        <div className="mx-auto w-[737px] max-w-full space-y-8 border-2 border-green-400">
          <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
            <img src={findXUrl} alt="" className="h-[203px] w-full bg-white" />
            <img src={creator2Url} alt="" className="h-[46px] w-[46px]" />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-left text-[24px] font-medium text-black">
                  Square root math simplification
                </p>
                <div className="flex items-center gap-1">
                  <img src={heartIconUrl} alt="" />
                  <span className="text-lg font-normal text-[#616161]">
                    8.8K
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1 font-normal text-[#616161]">
                  <p className="shrink-0 text-[14px]">Amanda Chisom</p>
                  {" | "}
                  <div className="flex items-center gap-1">
                    <EyeIcon className="h-[13px] w-[13px] shrink-0" />
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

          <div className="space-y-4">
            <p className="text-left text-[32px] font-medium text-[#44444F]">
              Explore more classes
            </p>
          </div>
        </div>

        <div className="mx-auto w-[347px] max-w-full border border-red-400">
          <div className="mx-auto w-[340px] max-w-full space-x-2 space-y-3 min-[359px]:space-y-0">
            <button
              type="button"
              className="w-[148px] rounded-[78px] border border-[#06031E] bg-[#06031E] py-[8px] text-base font-medium text-white hover:bg-white hover:text-[#06031E]"
            >
              Amanda Chisom
            </button>
            <button
              type="button"
              className="w-[148px] rounded-[78px] border border-[#92929D] bg-white py-[8px] text-[#92929D] hover:bg-[#06031E] hover:text-white"
            >
              Related Classes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
