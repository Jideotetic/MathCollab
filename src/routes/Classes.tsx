import searchIconUrl from "../assets/ic_Search.svg";
import heartIconUrl from "../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../assets/Ellipse 1779.png";
import { useLoaderData, Link } from "react-router-dom";
import { useMemo } from "react";

interface Classes {
  id: string;
  creator: string;
  title: string;
  link: string;
  views: string;
  likes: string;
  status: string;
  video: string;
  creatorImage: string;
}

interface Prop {
  lessons: Classes[];
  lesson: Classes;
}

const PAGESIZE = 15;

export default function Classes() {
  const { lesson, lessons } = useLoaderData() as Prop;

  const currentLessons = useMemo(() => {
    const firstPageIndex = 1 * PAGESIZE;
    const lastPageIndex = firstPageIndex + PAGESIZE;
    return lessons.slice(firstPageIndex, lastPageIndex);
  }, [lessons]);

  return (
    <main className="mx-auto w-[1280px] max-w-full space-y-[40px] px-4 py-6 pt-[110px] text-center xl:px-20">
      <div className="mx-auto w-[520px] max-w-full">
        <form role="search" className="relative w-full">
          <input
            type="text"
            name="search"
            id=""
            autoComplete="off"
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

      <div className="mx-auto flex w-[1121px] max-w-full flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="mx-auto w-[737px] max-w-full space-y-8">
          <div className="flex flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
            <img src={lesson.video} alt="" className="h-auto w-full bg-white" />
            <img
              src={lesson.creatorImage}
              alt=""
              className="h-[46px] w-[46px]"
            />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between">
                <p className="text-left text-[24px] font-medium text-black">
                  {lesson.title}
                </p>
                <div className="flex items-center gap-1">
                  <img src={heartIconUrl} alt="" />
                  <span className="text-lg font-normal text-[#616161]">
                    {lesson.likes}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1 font-normal text-[#616161]">
                  <p className="shrink-0 text-[14px]">{lesson.creator}</p>
                  {" | "}
                  <div className="flex items-center gap-1">
                    <EyeIcon className="h-[13px] w-[13px] shrink-0" />
                    <span className="shrink-0 text-xs font-normal text-[#616161]">
                      {lesson.views}
                    </span>
                    <img src={ellipseIconUrl} alt="" className="" />
                    <span className="shrink-0 text-xs font-normal text-[#616161]">
                      {lesson.status}
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
            <ul className="flex flex-col gap-4">
              {currentLessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link to={`/classes/${lesson.link}`}>
                    <div className="flex h-full flex-col gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43] sm:flex-row">
                      <div className="relative sm:w-[50%]">
                        <img
                          src={lesson.video}
                          alt=""
                          className="h-[203px] w-full bg-white"
                        />
                        <img
                          src={lesson.creatorImage}
                          alt=""
                          className="absolute bottom-0 h-[46px] w-[46px]"
                        />
                      </div>

                      <div className="flex flex-col justify-between gap-4 text-left sm:w-[50%]">
                        {lesson.status === "ongoing" ? (
                          <p className="text-base font-semibold text-black">
                            <span>Preview</span>:{lesson.title}
                          </p>
                        ) : (
                          <p className="text-base font-semibold text-black">
                            {lesson.title}
                          </p>
                        )}

                        <p>{lesson.creator}</p>

                        <div className="flex items-center gap-1">
                          <EyeIcon className="h-[13px] w-[13px]" />

                          <span className="shrink-0 text-xs font-normal text-[#616161]">
                            {lesson.views}
                          </span>

                          <img src={ellipseIconUrl} alt="" className="" />
                          {lesson.status === "ongoing" ? (
                            <span className="shrink-0 text-xs font-semibold text-[#06031E]">
                              {lesson.status}
                            </span>
                          ) : (
                            <span className="shrink-0 text-xs font-normal text-[#616161]">
                              {lesson.status}
                            </span>
                          )}
                        </div>

                        <div className="flex justify-between">
                          {lesson.status === "ongoing" ? (
                            <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                              Join
                            </button>
                          ) : (
                            <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                              Share
                            </button>
                          )}

                          <div className="flex items-center gap-1">
                            <img src={heartIconUrl} alt="" />
                            <span className="text-lg font-normal text-[#616161]">
                              {lesson.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto w-[400px] max-w-full space-y-4">
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
          <ul className="flex flex-col gap-4">
            {currentLessons.map((lesson) => (
              <li key={lesson.id}>
                <Link to={`/classes/${lesson.link}`}>
                  <div className="flex h-full flex-col gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43] sm:flex-row">
                    <div className="relative sm:w-[50%]">
                      <img
                        src={lesson.video}
                        alt=""
                        className="h-[203px] w-full bg-white"
                      />
                      <img
                        src={lesson.creatorImage}
                        alt=""
                        className="absolute bottom-0 h-[46px] w-[46px]"
                      />
                    </div>

                    <div className="flex flex-col justify-between gap-4 text-left sm:w-[50%]">
                      {lesson.status === "ongoing" ? (
                        <p className="text-base font-semibold text-black">
                          <span>Preview</span>:{lesson.title}
                        </p>
                      ) : (
                        <p className="text-base font-semibold text-black">
                          {lesson.title}
                        </p>
                      )}

                      <p>{lesson.creator}</p>

                      <div className="flex items-center gap-1">
                        <EyeIcon className="h-[13px] w-[13px]" />

                        <span className="shrink-0 text-xs font-normal text-[#616161]">
                          {lesson.views}
                        </span>

                        <img src={ellipseIconUrl} alt="" className="" />
                        {lesson.status === "ongoing" ? (
                          <span className="shrink-0 text-xs font-semibold text-[#06031E]">
                            {lesson.status}
                          </span>
                        ) : (
                          <span className="shrink-0 text-xs font-normal text-[#616161]">
                            {lesson.status}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between">
                        {lesson.status === "ongoing" ? (
                          <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                            Join
                          </button>
                        ) : (
                          <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                            Share
                          </button>
                        )}

                        <div className="flex items-center gap-1">
                          <img src={heartIconUrl} alt="" />
                          <span className="text-lg font-normal text-[#616161]">
                            {lesson.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
