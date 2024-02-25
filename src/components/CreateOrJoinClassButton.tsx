import { Popover, Transition, Dialog } from "@headlessui/react";
import {
  ChevronDownIcon,
  PlusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useContext, Fragment } from "react";
import { FormsContext, FormsContextType } from "../contexts/FormsContext";

import CreateClassForm from "./CreateClassForm";
import JoinClassForm from "./JoinClassForm";

export default function CreateOrJoinClassButton({ socket }) {
  const {
    createClassFormOpen,
    setCreateClassFormOpen,
    joinClassFormOpen,
    setJoinClassFormOpen,
  } = useContext(FormsContext) as FormsContextType;

  return (
    <>
      <Popover className="relative">
        <Popover.Button className="flex items-center justify-center gap-2 rounded border-t border-zinc-700 bg-slate-950 px-4 py-1.5 text-sm font-normal leading-[21px] text-neutral-100">
          Create/Join
          <ChevronDownIcon className="h-4 w-4" />
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute z-10 mt-2 flex flex-col rounded bg-white font-poppins text-[10px] font-light leading-[14px] text-neutral-700 shadow-lg">
            <button
              type="button"
              className="flex items-center gap-2 rounded px-4 py-1.5 hover:bg-black hover:text-white"
              onClick={() => setCreateClassFormOpen(true)}
            >
              <PlusIcon className="h-4 w-4" />
              Create class
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded px-4 py-1.5 hover:bg-black hover:text-white"
              onClick={() => setJoinClassFormOpen(true)}
            >
              <UserPlusIcon className="h-4 w-4" />
              Join class
            </button>
          </Popover.Panel>
        </Transition>
      </Popover>

      <Transition show={createClassFormOpen} as={Fragment}>
        <Dialog
          className="relative z-10"
          onClose={() => {
            setCreateClassFormOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-5 text-center">
              <CreateClassForm socket={socket} />
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition show={joinClassFormOpen} as={Fragment}>
        <Dialog
          className="relative z-10"
          onClose={() => {
            setJoinClassFormOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-5 text-center">
              <JoinClassForm />
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
