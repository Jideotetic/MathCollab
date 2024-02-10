import RevealPassword from "./RevealPassword";
import { ChangeEvent, useContext, useState } from "react";
import { Props } from "./Form";
import { InputsContext, InputsContextType } from "../contexts/InputsContext";

export default function Inputs({ inputs }: { inputs: Props[] }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    confirmPassword,
    setConfirmPassword,
    className,
    setClassName,
  } = useContext(InputsContext) as InputsContextType;

  function handleChangeFirstName(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

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

  // function handleChangeClassUrl(e: ChangeEvent<HTMLInputElement>) {
  //   setClassUrl(e.target.value);
  // }

  return (
    <>
      {inputs.map((input) => (
        <div className="relative" key={input.label}>
          <input
            type={
              input.inputType === "email"
                ? "email"
                : input.inputType === "text"
                  ? "text"
                  : passwordVisible
                    ? "text"
                    : "password"
            }
            autoComplete="off"
            name={input.label}
            value={
              input.label === "Email"
                ? email
                : input.label === "Password" ||
                    input.label === "Enter new password"
                  ? password
                  : input.label === "Confirm new password"
                    ? confirmPassword
                    : input.label === "First Name"
                      ? firstName
                      : input.label === "Last Name"
                        ? lastName
                        : className
            }
            onChange={
              input.label === "Email"
                ? handleChangeEmail
                : input.label === "Password" ||
                    input.label === "Enter new password"
                  ? handleChangePassword
                  : input.label === "Confirm new password"
                    ? handleChangeConfirmPassword
                    : input.label === "First Name"
                      ? handleChangeFirstName
                      : input.label === "First Name"
                        ? handleChangeLastName
                        : handleChangeClassName
            }
            required
            id={input.label}
            placeholder={input.label}
            minLength={input.label === "Password" ? 8 : 0}
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
