import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PlusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

export default function CreateOrJoinClassButton() {
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
            >
              <PlusIcon className="h-4 w-4" /> Create class
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded px-4 py-1.5 hover:bg-black hover:text-white"
            >
              <UserPlusIcon className="h-4 w-4" />
              Join class
            </button>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
