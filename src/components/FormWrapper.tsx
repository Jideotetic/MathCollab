import { ReactNode } from "react";

export default function FormWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[556px] rounded-lg bg-white px-[74px] py-[35px] text-neutral-700 shadow-2xl shadow-black">
      <div className="flex flex-col items-center justify-center gap-8">
        {children}
      </div>
    </div>
  );
}
