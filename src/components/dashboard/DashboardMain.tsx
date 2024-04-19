import {
  Form,
  useRouteLoaderData,
  useSubmit,
  useFetcher,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import heartIconUrl from "../../assets/heart.png";
import { EyeIcon } from "@heroicons/react/24/solid";
import ellipseIconUrl from "../../assets/Ellipse 1779.png";
import { Link } from "react-router-dom";
import { FormsContext, FormsContextType } from "../../contexts/FormsContext";
import { PlusIcon } from "@heroicons/react/24/outline";
import searchIconUrl from "../../assets/ic_Search.svg";
import userImageUrl from "../../assets/user.jpeg";
import { User } from "firebase/auth";
import { Unsubscribe } from "firebase/firestore";
import { ClassData } from "../../@types/types";
import TimePassed from "../TimePassed";

export interface Prop {
  lessons: ClassData[];
  search: string;
}

export default function DashboardMain() {
  const { filteredClasses, currentUser, search, cleanup } = useRouteLoaderData(
    "dashboard",
  ) as {
    filteredClasses: ClassData[];
    currentUser: User;
    search: string;
    cleanup: Unsubscribe;
  };

  const { setCreateClassFormOpen } = useContext(
    FormsContext,
  ) as FormsContextType;

  useEffect(() => {
    const searchElement = document.getElementById("search") as HTMLInputElement;
    if (searchElement) {
      searchElement.value = search;
    }
  }, [search]);

  const submit = useSubmit();
  let fetcher = useFetcher();

  useEffect(() => {
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-neutral-200 px-4 py-2">
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
              className="w-full rounded-[80px] border border-neutral-300 bg-white pl-10 sm:w-[70%]"
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
        {filteredClasses.length ? (
          <ul className="mx-auto grid max-w-full gap-x-2 gap-y-8 py-[15px] text-left sm:grid-cols-classes">
            {filteredClasses.map((lesson) => (
              <li
                key={lesson.id}
                className="flex max-w-full flex-col rounded-[5.85px]  border-[0.94px] border-[#E0E0E0] bg-white"
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
                      <fetcher.Form method="post" className="flex items-center">
                        <button
                          className="flex items-center"
                          name="lesson"
                          value={JSON.stringify(lesson)}
                        >
                          <img src={heartIconUrl} alt="" title="like" />
                        </button>
                        <input
                          type="hidden"
                          name="user"
                          value={currentUser.displayName}
                        />
                      </fetcher.Form>
                      <span className="text-lg font-normal text-[#616161]">
                        {lesson.likes > 0 && lesson.likes}
                      </span>
                    </div>
                  </div>

                  {lesson.status === "ongoing" ||
                  lesson.status === "upcoming" ? (
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
                          {lesson.views > 0 ? lesson.views : "0"} views
                        </span>

                        <img src={ellipseIconUrl} alt="" />

                        <span className="shrink-0 text-xs font-semibold text-red-500">
                          {lesson.status === "ongoing" ||
                            (lesson.status === "upcoming" && lesson.status)}
                        </span>
                        <span className="shrink-0 text-xs font-semibold text-[#616161]">
                          {typeof lesson.status !== "string" && (
                            <TimePassed eventDate={lesson.status.toDate()} />
                          )}
                        </span>
                      </div>
                    </div>
                    {typeof lesson.status !== "string" ? (
                      <button className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[20px] text-sm font-semibold">
                        Share
                      </button>
                    ) : lesson.status === "upcoming" &&
                      currentUser.displayName === lesson.name ? (
                      <Form
                        method="POST"
                        action="start-class"
                        className="flex h-[28px] items-center justify-center self-end rounded-[32px] bg-red-500 px-[28px] text-sm font-semibold text-white"
                      >
                        <button type="submit" name="id" value={lesson.id}>
                          Start
                        </button>
                      </Form>
                    ) : lesson.status === "ongoing" &&
                      currentUser.displayName === lesson.name ? (
                      <Form
                        method="POST"
                        action="start-class"
                        className="flex h-[28px] items-center justify-center self-end rounded-[32px] bg-red-500 px-[28px] text-sm font-semibold text-white"
                      >
                        <button
                          type="submit"
                          name="id"
                          value={lesson.id}
                          // className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold"
                        >
                          Start
                        </button>
                      </Form>
                    ) : (
                      <Form
                        method="POST"
                        action="join-class"
                        className="flex h-[28px] items-center justify-center self-end rounded-[32px] bg-red-500 px-[28px] text-sm font-semibold text-white"
                      >
                        <button
                          type="submit"
                          name="id"
                          value={lesson.id}
                          // className="h-[28px] self-end rounded-[32px] border-2 border-[#06031E] px-[28px] text-sm font-semibold"
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
