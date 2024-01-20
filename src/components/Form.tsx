import { useNavigate, Link } from "react-router-dom";
import Inputs from "./Inputs";
import OTPInputs from "./OTPInputs";
import { useState } from "react";

interface Props {
  label: string;
  inputType: string;
}

export default function Form({
  inputs,
  formType,
}: {
  inputs: Props[];
  formType: string;
}) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  function onChange(value: string) {
    setOtp(value);
  }
  return (
    <>
      <form className="flex w-full flex-col gap-8">
        {formType === "signup" && (
          <div className="flex flex-col gap-8">
            <Inputs inputs={inputs} />
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="terms-of-use"
                id="terms-of-use"
                required
                className="form-checkbox ml-1 mt-1 inline-block cursor-pointer rounded-sm border-neutral-300 text-slate-950 shadow-sm hover:text-slate-800 focus:ring-slate-950 hover:focus:ring-slate-800"
              />
              <label
                htmlFor="terms-of-use"
                className="text-base font-normal leading-normal"
              >
                <span className="inline-block">
                  By creating an account, you agree to the{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Privacy Policy.
                  </a>
                </span>
              </label>
            </div>
          </div>
        )}

        {formType === "verify-otp" && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-2">
              <OTPInputs otp={otp} otpLength={4} onChange={onChange} />
            </div>
            <div className="text-center text-base text-orange-500">
              Resend OTP{" "}
              <span className="text-lg font-normal leading-[27px] text-stone-300">
                00:00
              </span>
            </div>
          </div>
        )}

        {formType === "login" && (
          <div className="flex flex-col">
            <div className="flex flex-col gap-8">
              <Inputs inputs={inputs} />
            </div>
            <Link
              to="/reset-password"
              className="mt-2 self-end text-base font-normal leading-normal text-orange-500"
            >
              Forgot Password?
            </Link>
          </div>
        )}

        {formType === "reset-password" && (
          <div className="flex flex-col gap-8">
            <Inputs inputs={inputs} />
          </div>
        )}

        {formType === "confirm-reset" && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-2">
              <OTPInputs otp={otp} otpLength={4} onChange={onChange} />
            </div>
            <div className="text-center text-base text-orange-500">
              Resend OTP{" "}
              <span className="text-lg font-normal leading-[27px] text-stone-300">
                00:00
              </span>
            </div>
          </div>
        )}

        <button
          type="submit"
          onClick={() => {
            formType === "signup"
              ? navigate("/verify-otp")
              : formType === "verify-otp"
                ? navigate("/login")
                : formType === "login"
                  ? navigate("/dashboard")
                  : formType === "reset-password"
                    ? navigate("/confirm-reset")
                    : formType === "confirm-reset"
                      ? navigate("/login")
                      : "";
          }}
          className="mx-auto w-[202px] rounded-lg bg-slate-950 py-[13px] text-sm font-medium text-white hover:bg-slate-800"
        >
          {formType === "signup"
            ? "Create free Account"
            : formType === "login"
              ? "Sign In"
              : formType === "reset-password"
                ? "Reset Password"
                : formType === "confirm-reset"
                  ? "Verify"
                  : formType === "verify-otp"
                    ? "Verify"
                    : ""}
        </button>
        {formType === "reset-password" && (
          <Link
            to="/login"
            className="text-center font-normal leading-normal text-orange-500"
          >
            Remember Password?
          </Link>
        )}
        {/* {formType === "verify-otp" && (
            <div className="flex flex-col gap-8">
              <div className="flex justify-center gap-2">
                <Inputs inputs={inputs} formType={formType} />
              </div>
              <p className="text-center text-orange-500">
                Resend OTP{" "}
                <span className="text-lg font-normal leading-[27px] text-stone-300">
                  00:00
                </span>
              </p>
            </div>
          )} */}
        {/* <div className="flex flex-col gap-8">
            {formType === "signup" && (
              <>
                <Inputs inputs={inputs} />
                <label
                  htmlFor="terms-of-use"
                  className="flex items-start gap-2 text-base font-normal leading-normal"
                >
                  <input
                    type="checkbox"
                    name="term-of-use"
                    id="terms-of-use"
                    required
                    className="form-checkbox ml-1 mt-1 inline-block cursor-pointer rounded-sm text-slate-950 focus:ring-slate-950"
                  />
                  <span className="inline-block">
                    By creating an account, you agree to the{" "}
                    <a href="#" className="text-orange-500 hover:underline">
                      Terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-orange-500 hover:underline">
                      Privacy Policy.
                    </a>
                  </span>
                </label>
              </>
            )}
            {formType === "verify-otp" && (
              <>
                <Inputs inputs={inputs} />
                <p className="text-center text-orange-500">
                  Resend OTP{" "}
                  <span className="text-lg font-normal leading-[27px] text-stone-300">
                    00:00
                  </span>
                </p>
              </>
            )}
            {formType === "login" && <Inputs inputs={inputs} />}
            {formType === "reset-password" && <Inputs inputs={inputs} />}
          </div> */}
        {/* {formType === "login" && (
            <Link
              to="reset-password"
              className="mt-2 self-end text-base font-normal leading-normal text-orange-500"
            >
              Forgot Password?
            </Link>
          )}

          <button
            type="submit"
            onClick={() => {
              formType === "signup"
                ? navigate("/verify-otp")
                : formType === "verify-otp"
                  ? navigate("/login")
                  : "";
            }}
            className="mx-auto mt-8 w-[202px] rounded-lg bg-slate-950 px-[28px] py-[13px] text-sm font-medium text-white hover:bg-slate-800"
          >
            {formType === "signup"
              ? "Create free Account"
              : formType === "login"
                ? "Sign In"
                : formType === "reset-password"
                  ? "Reset Password"
                  : "Verify"}
          </button>

          {formType === "verify-otp" && (
            <p className="mt-8 text-center">
              Aready have an account?{" "}
              <span className="text-orange-500">Sign In</span>
            </p>
          )} */}
      </form>

      {/* {formType === "verify-otp" && (
        <div className="flex w-[333px] max-w-full flex-col items-center justify-center gap-4">
          <p className="text-base font-normal leading-normal text-neutral-500">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500">
              Sign In
            </Link>
          </p>
        </div>
      )}
      {formType === "login" && (
        <div className="flex w-[333px] max-w-full flex-col items-center justify-center gap-4">
          <div className="flex text-sm font-normal leading-[21px] text-neutral-400">
            <img src={lineUrl} alt="" className="w-[50%]" /> Or{" "}
            <img src={lineUrl} alt="" className="w-[50%]" />
          </div>
          <button className="flex items-center justify-center gap-3 rounded-lg border border-neutral-200 bg-white px-[21.8px] py-3">
            <img src={googleLogoUrl} alt="Google logo" />
            <span className="text-sm font-medium leading-[21px] text-slate-950">
              Sign in with Google
            </span>
          </button>
          <p className="text-base font-normal leading-normal text-neutral-500">
            Don't have an account?{" "}
            <Link to="/" className="text-orange-500">
              Sign Up
            </Link>
          </p>
        </div>
      )}
      {formType === "reset-password" && (
        <div className="flex w-[333px] max-w-full flex-col items-center justify-center gap-4">
          <Link to="/login" className="text-orange-500">
            Remember Password?
          </Link>
          <p className="text-base font-normal leading-normal text-neutral-500">
            Don't have an account?{" "}
            <Link to="/" className="text-orange-500">
              Sign Up
            </Link>
          </p>
        </div>
      )} */}
    </>
  );
}
