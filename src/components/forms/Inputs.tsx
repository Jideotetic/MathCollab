import RevealPassword from "./RevealPassword";
import { useState } from "react";

export interface Props {
  label: string;
  inputType: string;
}

export default function Inputs({ inputs }: { inputs: Props[] }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      {inputs.map((input) => (
        <div className="relative" key={input.label}>
          <input
            type={
              input.inputType === "email"
                ? "email"
                : passwordVisible
                  ? "text"
                  : input.inputType === "password"
                    ? "password"
                    : input.inputType === "confirm-password"
                      ? "password"
                      : "text"
            }
            autoComplete="off"
            name={input.label}
            required
            id={input.label}
            placeholder={input.label}
            minLength={
              input.label === "Password"
                ? 8
                : input.label === "Enter new password"
                  ? 8
                  : input.label === "Confirm new password"
                    ? 8
                    : 0
            }
            className="peer w-full rounded-lg border-neutral-200 bg-white pb-3 pr-8 pt-3 text-sm placeholder-transparent shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
          <label
            htmlFor={input.label}
            className="absolute -top-0.5 left-[13px] text-sm text-neutral-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-neutral-600"
          >
            {input.label}
          </label>
          {input.inputType === "password" && (
            <RevealPassword
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
          )}
          {input.inputType === "confirm-password" && (
            <RevealPassword
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
          )}
        </div>
      ))}
    </>
  );
}
