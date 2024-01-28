import { ClassListType } from "../@types/classListType";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import CreateOrJoinClassButton from "./CreateOrJoinClassButton";
import arrowUrl from "../assets/Line 5.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import userImageUrl from "../assets/user-image.png";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import iconUrl from "../assets/Vector.svg";

export default function ClassGrid() {
  const { classList } = useOutletContext<ClassListType>();
  const [dashboardFormVisible, setDashboardFormVisible] = useState(true);
  return (
    <div className="mt-2 flex flex-col gap-8 pb-4">
      <div className="grid grid-cols-2 gap-4 px-4">
        {classList.map((list) => (
          <div className="flex flex-col gap-[40px] rounded-lg border border-stone-300 bg-blue-50">
            <div className="flex items-center justify-between px-[20px] pt-2">
              <div>
                <div className="flex items-center gap-2">
                  <img src={iconUrl} alt="" />
                  <div className="text-2xl font-medium leading-9 text-zinc-700">
                    {list.className}
                  </div>
                </div>
                <div className="mt-4 text-lg font-normal leading-[27px] text-neutral-500">
                  Owned by {list.owner}
                </div>
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-blue-400 bg-blue-50 p-[9.84px] text-[27.55px] font-normal leading-[41.33px] text-blue-400">
                {list.owner.slice(0, 1)}
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-stone-300 bg-white px-[20px] py-[17px]">
              {list.people.map((people) => (
                <>
                  <div key={people}>
                    <img
                      src={userImageUrl}
                      className="inline-block h-[34px] w-[34px] rounded-full"
                      alt=""
                    />

                    <button type="button" title="Add collaborator">
                      <UserPlusIcon className="peer inline-block h-[34px] w-[34px] rounded-[34.62px] border border-stone-300 bg-white bg-opacity-5 px-[9.62px] py-[7.69px]" />
                    </button>
                  </div>
                  <div>{list.dateCreated}</div>
                </>
              ))}
              {}
            </div>
          </div>
        ))}
      </div>
      {dashboardFormVisible && (
        <div className="relative mx-auto h-[344px] max-w-[849px] rounded-lg bg-sky-50 px-[100px] py-[20px]">
          <div className="mx-auto flex max-w-[560px] flex-col gap-[90px]">
            <div className="mx-auto max-w-[418px] text-center">
              <h3 className="text-xl font-semibold leading-[30px] text-neutral-700">
                Invite Collaborators/Students to Your Class
              </h3>
              <p className="text-base font-normal leading-normal text-neutral-500">
                Collaborators/Students enter or paste the invite to join
              </p>
            </div>
            <div className="flex gap-3">
              <CreateOrJoinClassButton />
              <img src={arrowUrl} alt="" className="self-start" />

              {/* <form className="flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="url"
                    name="Invite link"
                    id="invite link"
                    placeholder="Enter/Paste Invite links"
                    className="peer w-full rounded-lg border-neutral-200 bg-white pb-3 pr-8 pt-3 text-sm placeholder-transparent shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  />
                  <label
                    htmlFor="invite-link"
                    className="absolute -top-0.5 left-[13px] text-sm text-neutral-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-neutral-600"
                  >
                    Enter/Paste Invite links
                  </label>
                </div>
                <button
                  type="button"
                  className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-center text-sm font-medium text-white hover:bg-slate-800"
                >
                  Join a class
                </button>
              </form> */}
            </div>
          </div>
          <button
            type="button"
            className="absolute right-[20px] top-[10px] rounded-full  bg-zinc-100"
            onClick={() => setDashboardFormVisible(false)}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
