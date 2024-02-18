import groupUrl from "../assets/Group 1000001948.svg";
import bgImagerightUrl from "../assets/bg-image-right.png";
import bgImageleftUrl from "../assets/bg-image-left.png";
import searchIconUrl from "../assets/ic_Search.svg";
import heartIconUrl from "../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../assets/Ellipse 1779.png";
import { Form, Link, useLoaderData } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";

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
  search: string;
}

interface Data {
  selected: number;
}

const PAGESIZE = 15;

export default function ExplorePage() {
  const { lessons, search } = useLoaderData() as Prop;
  const [currentPage, setCurrentPage] = useState(1);
  const currentLessons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGESIZE;
    const lastPageIndex = firstPageIndex + PAGESIZE;
    return lessons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, lessons]);

  const totalPageCount = Math.ceil(lessons.length / PAGESIZE);

  function handlePageClick(data: Data) {
    setCurrentPage(data.selected + 1);
    console.log(data.selected + 1);
  }

  useEffect(() => {
    (document.getElementById("search") as HTMLInputElement).value = search;
  }, [search]);

  return (
    <main className="mx-auto w-[1280px] max-w-full space-y-[40px] px-4 py-6 pt-[101px] text-center xl:px-20">
      <div className="mx-auto  w-[1135px] max-w-full space-y-[24px]">
        <div className="relative flex min-h-[172px] items-center justify-around rounded-[20px] border-4 border-[#06031E] bg-[#74C3F00A]">
          <img
            src={bgImageleftUrl}
            alt=""
            className="absolute bottom-0 left-0 top-0"
          />
          <img
            src={bgImagerightUrl}
            alt=""
            className="absolute right-0 top-0"
          />
          <div className="space-y-3 lg:text-left">
            <h2 className="text-clamp font-bold text-slate-950">
              Create and Join Top Collaborative Classes
            </h2>
            <p>
              Welcome to the ultimate destination where math collaboration is
              made easier for learners
            </p>
          </div>
          <div className="hidden lg:block">
            <img src={groupUrl} alt="" />
          </div>
        </div>

        <div className="mx-auto w-[668px] max-w-full gap-2 space-y-4 sm:flex sm:space-y-0">
          <Form className="relative w-full sm:w-[251px]">
            <input
              type="text"
              name="search"
              autoComplete="off"
              id="search"
              placeholder="Search"
              defaultValue={search}
              className="w-full rounded-[80px] bg-[#d8d8db6e]"
            />
            <button
              type="submit"
              className="absolute right-3 top-[50%] -translate-y-[50%]"
            >
              <img src={searchIconUrl} alt="" />
            </button>
          </Form>
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
      <ul className="mx-auto grid w-[1135px] max-w-full grid-cols-classes gap-x-2 gap-y-8 py-[15px] text-left sm:grid-cols-classe1">
        {currentLessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={lesson.link}>
              <div className="flex h-full flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
                <img
                  src={lesson.video}
                  alt=""
                  className="h-[203px] w-full bg-white"
                />
                <img
                  src={lesson.creatorImage}
                  alt=""
                  className="h-[46px] w-[46px]"
                />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between">
                    {lesson.status === "ongoing" ? (
                      <p className="text-base font-medium text-black">
                        <span className="font-semibold">Preview</span>:
                        {lesson.title}
                      </p>
                    ) : (
                      <p className="text-base font-medium text-black">
                        {lesson.title}
                      </p>
                    )}

                    <div className="flex items-center gap-1">
                      <img src={heartIconUrl} alt="" />
                      <span className="text-lg font-normal text-[#616161]">
                        {lesson.likes}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between gap-3">
                    <div className="text-lg font-normal text-[#616161]">
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
                    </div>
                    {lesson.status === "ongoing" ? (
                      <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                        Join
                      </button>
                    ) : (
                      <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                        Share
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mx-auto w-[650px] max-w-full py-[15px]">
        <ReactPaginate
          previousLabel={"<< Previous"}
          nextLabel={"Next >>"}
          breakLabel={"..."}
          pageCount={totalPageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={
            "flex flex-wrap justify-center gap-1 items-center"
          }
          pageClassName={`rounded-[4px] border w-[38px] border-[#E0E0E0] bg-white py-[8px] text-[#616161] hover:bg-[#E0E0E0]`}
          previousClassName={`flex w-[110px] items-center justify-center gap-4 rounded-[4px] border
border-[#E0E0E0] bg-white py-[8px] text-[#616161] disabled:text-[#E0E0E0] hover:bg-[#E0E0E0]`}
          nextClassName={`flex w-[110px] items-center justify-center gap-4 rounded-[4px] border
border-[#E0E0E0] bg-white py-[8px] text-[#616161] disabled:text-[#E0E0E0] hover:bg-[#E0E0E0]`}
          breakClassName={`rounded-[4px] border w-[38px] border-[#E0E0E0] bg-white py-[8px] text-[#616161] hover:bg-[#E0E0E0]`}
          activeClassName={`bg-[#E0E0E0]`}
        />
      </div>
    </main>
  );
}
