import { Link } from "react-router-dom";

const labels = ["email", "password"];

const inputs = labels.map((label) => {
  return (
    <li key={label} className="mb-4">
      <label htmlFor={label}>{label === "email" ? "Email" : "Password"}</label>
      <input
        type={label}
        name={label}
        id={label}
        className="mt-1 h-8 w-full rounded-sm border border-slate-500 p-2 focus:outline-lime-600"
        placeholder={
          label === "email" ? "Enter email address" : "Enter password"
        }
        required
      />
    </li>
  );
});

export default function Login() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-sm flex-col justify-center">
      <h1 className="mb-3 text-clamp1 font-semibold">Log in to your account</h1>
      <form>
        <ul>
          {inputs}
          <li className="mb-4 flex justify-between">
            <button
              type="submit"
              className="rounded-sm bg-lime-600 px-2 text-white hover:bg-lime-800"
            >
              Login
            </button>
            <Link
              to="/password-reset"
              className="text-blue-600 underline hover:no-underline"
            >
              Forgot password?
            </Link>
          </li>
        </ul>

        <p>
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="text-blue-600 underline hover:no-underline"
          >
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
}
