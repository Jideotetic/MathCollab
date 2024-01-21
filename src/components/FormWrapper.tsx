import { ReactNode } from "react";

export default function FormWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden p-5">
      <div className="mx-auto max-w-[556px] rounded-lg  border-2 bg-white px-[74px] py-[35px] text-neutral-700 shadow-2xl shadow-black">
        <div className="flex flex-col items-center justify-center gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}
