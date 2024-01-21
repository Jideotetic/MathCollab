import { Link } from "react-router-dom";
import lineUrl from "../assets/line.svg";
import googleLogoUrl from "../assets/Google-logo.svg";

export default function FormFooter({ formType }: { formType: string }) {
  return (
    <>
      {formType === "signup" && (
        <div className="flex w-full max-w-[333px] flex-col items-center justify-center gap-4">
          <div className="flex justify-center text-sm font-normal leading-[21px] text-neutral-400">
            <img src={lineUrl} alt="" className="w-[50%]" /> Or{" "}
            <img src={lineUrl} alt="" className="w-[50%]" />
          </div>
          <button className="flex w-[202px] items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white py-[13px]">
            <img src={googleLogoUrl} alt="Google logo" />
            <span className="text-sm font-medium leading-[21px] text-slate-950">
              Sign up with Google
            </span>
          </button>
          <div className="text-center text-base font-normal leading-normal text-neutral-500">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      )}
      {formType === "verify-email" && (
        <div className="text-center text-base font-normal leading-normal text-neutral-500">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Sign In
          </Link>
        </div>
      )}
      {formType === "login" && (
        <div className="flex w-full max-w-[333px] flex-col items-center justify-center gap-4">
          <div className="flex justify-center text-sm font-normal leading-[21px] text-neutral-400">
            <img src={lineUrl} alt="" className="w-[50%]" /> Or{" "}
            <img src={lineUrl} alt="" className="w-[50%]" />
          </div>
          <button className="flex w-[202px] items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white py-[13px]">
            <img src={googleLogoUrl} alt="Google logo" />
            <span className="text-sm font-medium leading-[21px] text-slate-950">
              Sign up with Google
            </span>
          </button>
          <div className="text-center text-base font-normal leading-normal text-neutral-500">
            Dont't have an account?{" "}
            <Link to="/" className="text-orange-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      )}
      {formType === "reset-password" && (
        <div className="text-center text-base font-normal leading-normal text-neutral-500">
          Don't have an account?{" "}
          <Link to="/" className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </div>
      )}
      {formType === "verify-password-reset" && (
        <div className="text-center text-base font-normal leading-normal text-neutral-500">
          Remember your password?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Sign In
          </Link>
        </div>
      )}

      {formType === "new-password" && (
        <div className="text-center text-base font-normal leading-normal text-neutral-500">
          Don't have an account?{" "}
          <Link to="/" className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
}
