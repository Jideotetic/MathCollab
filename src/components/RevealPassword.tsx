import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function RevealPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  function handleviewPassword() {
    setPasswordVisible(!passwordVisible);
  }
  return (
    <>
      {passwordVisible ? (
        <EyeIcon
          className="absolute right-3 top-3.5 h-[17px] w-5 cursor-pointer"
          onClick={handleviewPassword}
        />
      ) : (
        <EyeSlashIcon
          className="absolute right-3 top-3.5 h-[17px] w-5 cursor-pointer"
          onClick={handleviewPassword}
        />
      )}
    </>
  );
}
