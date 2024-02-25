import CreateOrJoinClassButton from "../components/CreateOrJoinClassButton";
import { Link, useLoaderData } from "react-router-dom";
import { useState, useMemo, useContext, useEffect } from "react";
import heartIconUrl from "../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../assets/Ellipse 1779.png";
import { NavLink } from "react-router-dom";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import io from "socket.io-client";

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

const PAGESIZE = 15;

const classesCategory = [
  "Explore",
  "Past",
  "Live",
  "Upcoming",
  "Trending",
  "Joined",
  "Mine",
];

const server = "http://localhost:5000";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: Infinity,
  timeout: 10000,
  transports: ["wesocket"],
};

const socket = io(server, connectionOptions);

export default function DashboardIndex() {
  const { lessons } = useLoaderData() as Prop;
  const [currentPage] = useState(1);
  const currentLessons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGESIZE;
    const lastPageIndex = firstPageIndex + PAGESIZE;
    return lessons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, lessons]);

  const { setJoinClassFormOpen } = useContext(FormsContext) as FormsContextType;

  useEffect(() => {
    socket.on("userIsJoined", (data) => {
      if (data.success) {
        console.log("Joined");
      } else {
        console.log("Error joining");
      }
    });
  }, []);

  // const totalPageCount = Math.ceil(lessons.length / PAGESIZE);

  // function handlePageClick(data: Data) {
  //   setCurrentPage(data.selected + 1);
  //   console.log(data.selected + 1);
  // }

  return (
    <>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-2 border-neutral-200 px-4">
        <ul className="flex flex-wrap gap-[10px] rounded-[8.19px] border-[0.68px] bg-[#F5F5F5] p-2">
          {classesCategory.map((category) => (
            <li
              key={category}
              // className="rounded-[8.19px] px-[11px]
              // py-[6px] text-[#3A383C]"
            >
              <NavLink
                to={category === "Explore" ? "/dashboard" : category}
                className={({ isActive }) =>
                  isActive
                    ? `rounded-[8.19px] bg-white px-[11px]
py-[6px] text-[#3A383C]`
                    : `rounded-[8.19px] px-[11px]
py-[6px] text-[#3A383C]`
                }
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>

        <CreateOrJoinClassButton />
      </div>

      <div className="p-4">
        <ul className="mx-auto grid max-w-full grid-cols-classes gap-x-2 gap-y-8 py-[15px] text-left sm:grid-cols-classe1">
          {currentLessons.map((lesson) => (
            <li key={lesson.id}>
              <div className="flex h-full flex-col justify-between gap-2 rounded-[6.25px] border bg-[#dfdede43] p-2 shadow-sm shadow-[#dfdede43]">
                <Link to={lesson.link}>
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
                </Link>

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
                      <button
                        onClick={() => setJoinClassFormOpen(true)}
                        className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold"
                      >
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
