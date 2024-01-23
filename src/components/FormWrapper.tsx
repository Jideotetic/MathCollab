import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";

export default function FormWrapper({ children }: { children: ReactNode }) {
  return (
    <Dialog.Panel className="relative mx-auto max-w-[556px] rounded-lg bg-white px-[74px] py-[35px] text-neutral-700">
      <div className="flex flex-col items-center justify-center gap-8">
        {children}
      </div>
    </Dialog.Panel>
  );
}
