import RevealPassword from "./RevealPassword";
import React, { useState } from "react";
import { Props } from "./CustomForm";

export default function Inputs({ inputs }: { inputs: Props[] }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleChangeConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function handleRevealPassword() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <>
      {inputs.map((input) => (
        <div className="relative" key={input.inputType}>
          <input
            type={
              input.inputType === "email"
                ? "email"
                : passwordVisible
                  ? "text"
                  : "password"
            }
            name={input.inputType}
            value={
              input.inputType === "email"
                ? email
                : input.inputType === "password"
                  ? password
                  : input.inputType === "confirm-password"
                    ? confirmPassword
                    : ""
            }
            onChange={
              input.inputType === "email"
                ? handleChangeEmail
                : input.inputType === "password"
                  ? handleChangePassword
                  : input.inputType === "confirm-password"
                    ? handleChangeConfirmPassword
                    : null
            }
            required
            id={input.inputType}
            placeholder={input.label}
            minLength={input.inputType === "password" ? 8 : 0}
            className="peer w-full rounded-lg border-neutral-200 bg-white pb-3 pr-8 pt-3 text-sm placeholder-transparent shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
          <label
            htmlFor={input.inputType}
            className="absolute -top-0.5 left-[13px] text-sm text-neutral-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-neutral-600"
          >
            {input.label}
          </label>
          {input.inputType === "password" && (
            <RevealPassword
              passwordVisible={passwordVisible}
              onRevealPassword={handleRevealPassword}
            />
          )}
        </div>
      ))}
    </>
  );
}
