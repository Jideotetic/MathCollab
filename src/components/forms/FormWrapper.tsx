import { Dialog, Transition } from "@headlessui/react";
import { ReactNode, Fragment } from "react";

export default function FormWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Transition.Child
        as={Fragment}
        enter="ease-in duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="ease-out duration-200"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-50 bg-black/50" />
      </Transition.Child>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="relative z-50 flex min-h-screen flex-col items-center justify-center p-5 text-center">
          <Dialog.Panel className="relative z-50 w-[556px] max-w-full rounded-lg bg-white px-2 py-[35px] text-neutral-700 sm:px-[74px]">
            <div className="flex flex-col items-center justify-center gap-8">
              {children}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </>
  );
}
