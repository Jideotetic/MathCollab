import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler } from "react";
export default function RevealPassword({
  passwordVisible,
  onRevealPassword,
}: {
  passwordVisible: boolean;
  onRevealPassword: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      {passwordVisible ? (
        <button type="button" onClick={onRevealPassword}>
          <EyeIcon className="absolute right-3 top-3.5 h-[17px] w-5" />
        </button>
      ) : (
        <button type="button" onClick={onRevealPassword}>
          <EyeSlashIcon className="absolute right-3 top-3.5 h-[17px] w-5" />
        </button>
      )}
    </>
  );
}
