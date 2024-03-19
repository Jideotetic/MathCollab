import {
  Form,
  // useNavigate,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { useState, useMemo, useContext, useEffect } from "react";
import heartIconUrl from "../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../assets/Ellipse 1779.png";
import { Link } from "react-router-dom";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";
import { ClassData } from "../loaders/loaders";
import { PlusIcon } from "@heroicons/react/24/outline";
import searchIconUrl from "../assets/ic_Search.svg";
import userImageUrl from "../assets/user.jpeg";
import { User } from "firebase/auth";
// import { doc, updateDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import { server } from "../socket";

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

export interface Prop {
  lessons: Classes[];
  search: string;
}

const PAGESIZE = 15;

// const classesCategory = [
//   "Explore",
//   "Past",
//   "Live",
//   "Upcoming",
//   "Trending",
//   "Joined",
//   "Mine",
// ];

export default function DashboardIndex() {
  const { filteredClasses, currentUser, search } = useRouteLoaderData(
    "dashboard",
  ) as {
    filteredClasses: ClassData[];
    currentUser: User;
    search: string;
  };
  const [currentPage] = useState(1);

  const currentLessons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGESIZE;
    const lastPageIndex = firstPageIndex + PAGESIZE;
    return filteredClasses.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredClasses]);

  const { setCreateClassFormOpen } = useContext(
    FormsContext,
  ) as FormsContextType;

  useEffect(() => {
    const searchElement = document.getElementById("search") as HTMLInputElement;
    if (searchElement) {
      searchElement.value = search;
    }
  }, [search]);

  // useEffect(() => {
  //   filteredClasses.forEach((lesson) => {
  //     if (
  //       lesson.status === "ongoing" &&
  //       lesson.user === currentUser.displayName
  //     ) {
  //       const docRef = doc(db, `classes/${lesson.id}`);
  //       updateDoc(docRef, {
  //         status: "created",
  //       });
  //     }
  //   });
  // }, [currentUser.displayName, filteredClasses]);

  const submit = useSubmit();
  // const navigate = useNavigate();

  // const totalPageCount = Math.ceil(lessons.length / PAGESIZE);

  // function handlePageClick(data: Data) {
  //   setCurrentPage(data.selected + 1);
  //   console.log(data.selected + 1);
  // }

  // function handleStartClass(lesson) {
  //   server.emit("start-class", { lesson, filteredClasses });
  //   navigate(`/canvas/${lesson.id}`);
  // }

  // function handleJoinClass(lesson) {
  //   server.emit("join-class", { lesson });
  //   navigate(`/canvas/${lesson.id}`);
  // }

  return (
    <>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border border-neutral-200 px-4">
        {/* <ul className="flex flex-wrap gap-[10px] rounded-[8.19px] border-[0.68px] bg-[#F5F5F5] p-2">
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
        </ul> */}

        <div className="flex-grow">
          <Form action="#" className="relative w-full">
            <button
              type="submit"
              className="absolute left-3 top-[50%] -translate-y-[50%]"
            >
              <img src={searchIconUrl} alt="" />
            </button>
            <input
              type="search"
              name="search"
              role="search"
              id="search"
              defaultValue={search}
              onChange={(e) => {
                const isFirstSearch = search == null;
                submit(e.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
              placeholder="Search for classes"
              className="w-full rounded-[80px] border border-[#666666] bg-white pl-10 sm:w-[70%]"
            />
          </Form>
        </div>

        <Link
          to="create-class"
          className="flex items-center gap-2 rounded bg-black px-4 py-1.5 text-white hover:border hover:bg-white hover:text-black"
          onClick={() => setCreateClassFormOpen(true)}
        >
          <PlusIcon className="h-4 w-4" />
          Create class
        </Link>
      </div>

      <div className="p-4">
        {currentLessons.length ? (
          <ul className="mx-auto grid max-w-full grid-cols-classes gap-x-2 gap-y-8 py-[15px] text-left sm:grid-cols-classe1">
            {currentLessons.map((lesson) => (
              <li
                key={lesson.id}
                className="flex max-w-full flex-shrink-0 flex-col rounded-[5.85px]  border-[0.94px] border-[#E0E0E0] bg-white"
              >
                <video
                  controls
                  src={lesson.video}
                  className="h-[191.95px] w-full rounded-t-[5.85px] bg-white object-cover"
                />

                <div className="flex flex-col gap-2 p-2">
                  <div className="flex justify-between">
                    <img
                      src={lesson.user || userImageUrl}
                      alt=""
                      className="h-[46px] w-[46px] rounded-full object-cover"
                    />

                    <div className="flex items-center gap-1">
                      <img src={heartIconUrl} alt="" />
                      <span className="text-lg font-normal text-[#616161]">
                        {lesson.likes > 0 && lesson.likes}
                      </span>
                    </div>
                  </div>

                  {lesson.status === "ongoing" ||
                  lesson.status === "created" ? (
                    <p className="text-left text-base font-medium text-black">
                      <span className="font-semibold">Preview</span>:{" "}
                      {lesson.title}
                    </p>
                  ) : (
                    <p className="text-left text-base font-medium text-black">
                      {lesson.title}
                    </p>
                  )}

                  <div className="flex flex-wrap justify-between gap-3 text-left">
                    <div className="text-lg font-normal text-[#616161]">
                      <p className="text-[11.24px] text-gray-700">
                        {lesson.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="h-[13px] w-[13px]" />

                        <span className="shrink-0 text-xs font-normal text-[#616161]">
                          {lesson.views > 0 && lesson.views} views
                        </span>

                        <img src={ellipseIconUrl} alt="" />
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
                    {lesson.status === "done" ? (
                      <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold">
                        Share
                      </button>
                    ) : lesson.status === "created" &&
                      currentUser.displayName === lesson.name ? (
                      <Form method="POST" action="start-class">
                        <input
                          type="hidden"
                          name="classes"
                          value={JSON.stringify(filteredClasses)}
                        />
                        <button
                          type="submit"
                          name="id"
                          value={lesson.id}
                          // to={`/canvas/${lesson.id}`}
                          // onClick={() => handleStartClass(lesson)}
                          className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold"
                        >
                          Start class
                        </button>
                      </Form>
                    ) : lesson.status === "ongoing" &&
                      currentUser.displayName === lesson.name ? (
                      <Form method="POST" action="join-class">
                        <button
                          type="submit"
                          name="id}"
                          value={lesson.id}
                          className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold"
                        >
                          Start class
                        </button>
                      </Form>
                    ) : (
                      <Form method="POST" action="join-class">
                        <button
                          type="submit"
                          name="id"
                          value={lesson.id}
                          className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold"
                        >
                          Join
                        </button>
                      </Form>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Classes not found</p>
        )}
      </div>
    </>
  );
}
