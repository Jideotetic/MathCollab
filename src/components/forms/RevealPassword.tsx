import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

export default function RevealPassword({
  passwordVisible,
  setPasswordVisible,
}: {
  passwordVisible: boolean;
  setPasswordVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      {passwordVisible ? (
        <EyeIcon
          className="absolute right-3 top-3.5 h-[17px] w-5 cursor-pointer"
          onClick={() => setPasswordVisible(!passwordVisible)}
        />
      ) : (
        <EyeSlashIcon
          className="absolute right-3 top-3.5 h-[17px] w-5 cursor-pointer"
          onClick={() => setPasswordVisible(!passwordVisible)}
        />
      )}
    </>
  );
}
