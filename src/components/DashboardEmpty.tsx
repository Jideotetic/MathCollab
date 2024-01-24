import { PlusIcon } from "@heroicons/react/24/outline";
import { useContext, Fragment } from "react";
import { FormBooleanValueContextTypes } from "../@types/formBooleanValueContextTypes";
import { FormBooleanValueContext } from "../contexts/FormBooleansValueContext";
import { Transition, Dialog } from "@headlessui/react";
import CreateClassForm from "./CreateClassForm";
import JoinClassForm from "./JoinClassForm";

export default function DashboardEmpty() {
  const {
    createClassFormOpen,
    setCreateClassFormOpen,
    joinClassFormOpen,
    setJoinClassFormOpen,
  } = useContext(FormBooleanValueContext) as FormBooleanValueContextTypes;
  return (
    <>
      <div className="flex flex-grow items-center justify-center border-2 border-neutral-200 text-center">
        <div className="flex max-w-[551px] flex-col items-center justify-center gap-8">
          <div className="border-2 border-green-500"></div>
          <div className="flex max-w-[365px] flex-col gap-8">
            <div>
              <p className="text-xl font-semibold leading-[30px] text-neutral-700">
                Start by creating or joining a class
              </p>
              <p className="text-base font-normal leading-normal text-neutral-500">
                Create or join class to get started
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setCreateClassFormOpen(true)}
                className="flex w-[141px] items-center justify-evenly rounded border border-slate-950 py-1.5 text-sm font-normal leading-[21px] hover:bg-black hover:text-white"
              >
                <PlusIcon className="h-4 w-4" />
                Create a class
              </button>
              <button
                type="button"
                onClick={() => setJoinClassFormOpen(true)}
                className="w-[141px] rounded border border-orange-500 py-1.5 text-sm font-normal leading-[21px] text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Join a class
              </button>
            </div>
            <Transition show={createClassFormOpen} as={Fragment}>
              <Dialog
                className="relative z-10"
                onClose={() => setCreateClassFormOpen(false)}
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
                    <CreateClassForm />
                  </div>
                </div>
              </Dialog>
            </Transition>
            <Transition show={joinClassFormOpen} as={Fragment}>
              <Dialog
                className="relative z-10"
                onClose={() => setJoinClassFormOpen(false)}
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
          </div>
        </div>
      </div>
    </>
  );
}
