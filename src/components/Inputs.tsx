import RevealPassword from "./RevealPassword";
import { ChangeEvent, useState, useContext } from "react";
import { InputValueContextTypes } from "../@types/inputValueContextTypes";
import { InputValueContext } from "../contexts/InputValueContext";
import { Props } from "./Form";

export default function Inputs({ inputs }: { inputs: Props[] }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    className,
    setClassName,
    classUrl,
    setClassUrl,
  } = useContext(InputValueContext) as InputValueContextTypes;

  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleChangeConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function handleChangeClassName(e: ChangeEvent<HTMLInputElement>) {
    setClassName(e.target.value);
  }

  function handleChangeClassUrl(e: ChangeEvent<HTMLInputElement>) {
    setClassUrl(e.target.value);
  }

  return (
    <>
      {inputs.map((input) => (
        <div className="relative" key={input.inputType}>
          <input
            type={
              input.inputType === "email"
                ? "email"
                : input.inputType === "text"
                  ? "text"
                  : input.inputType === "url"
                    ? "url"
                    : passwordVisible
                      ? "text"
                      : "password"
            }
            autoComplete="off"
            name={input.inputType}
            value={
              input.inputType === "email"
                ? email
                : input.inputType === "password"
                  ? password
                  : input.inputType === "confirm-password"
                    ? confirmPassword
                    : input.inputType === "text"
                      ? className
                      : classUrl
            }
            onChange={
              input.inputType === "email"
                ? handleChangeEmail
                : input.inputType === "password"
                  ? handleChangePassword
                  : input.inputType === "confirm-password"
                    ? handleChangeConfirmPassword
                    : input.inputType === "text"
                      ? handleChangeClassName
                      : handleChangeClassUrl
            }
            required
            id={input.label}
            placeholder={input.label}
            minLength={input.inputType === "password" ? 8 : 0}
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
        </div>
      ))}
    </>
  );
}
