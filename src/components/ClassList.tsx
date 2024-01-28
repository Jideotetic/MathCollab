import onlineIconUrl from "../assets/Ellipse 3.svg";
import { ClassListType } from "../@types/classListType";
import { useOutletContext } from "react-router-dom";
import { Fragment, useState } from "react";
import userImageUrl from "../assets/user-image.png";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import CreateOrJoinClassButton from "./CreateOrJoinClassButton";
import { XMarkIcon } from "@heroicons/react/24/outline";
import arrowUrl from "../assets/Line 5.svg";

const tableHeader = ["CLASS NAME", "DATE CREATED", "OWNER", "PEOPLE", "STATUS"];

export default function ClassList() {
  const { classList } = useOutletContext<ClassListType>();
  const [dashboardFormVisible, setDashboardFormVisible] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <table>
        <thead className="h-[49px] border-b border-l border-r border-zinc-200 bg-neutral-50 text-left">
          <tr>
            {tableHeader.map((header) => (
              <th
                key={header}
                className="px-4 text-sm font-normal leading-[21px] text-gray-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classList.map((list) => (
            <tr
              key={list.className}
              className="h-[49px] border-b border-l border-r border-zinc-200 bg-neutral-50 text-left"
            >
              <td className="px-4 text-xl font-semibold leading-[30px] text-zinc-700">
                {list.className}
              </td>
              <td className="px-4 text-base font-medium leading-normal text-zinc-700">
                {list.dateCreated}
              </td>
              <td className="px-4 text-base font-medium leading-normal text-zinc-700">
                {list.owner}
              </td>
              <td className="px-4 text-base font-medium leading-normal text-zinc-700">
                {list.people.map((people) => (
                  <Fragment key={people}>
                    <img
                      src={userImageUrl}
                      className="inline-block h-[34px] w-[34px] rounded-full"
                      alt=""
                    />

                    <button type="button" title="Add collaborator">
                      <UserPlusIcon className="peer inline-block h-[34px] w-[34px] rounded-[34.62px] border border-stone-300 bg-white bg-opacity-5 px-[9.62px] py-[7.69px]" />
                    </button>
                  </Fragment>
                ))}
              </td>
              <td className="px-4 text-sm font-normal leading-[21px] text-emerald-800">
                <img className="mr-1 inline-block" src={onlineIconUrl} alt="" />
                {list.status}
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
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
