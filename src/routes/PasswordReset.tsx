import { Link } from "react-router-dom";

export default function PasswordReset() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-sm flex-col justify-center">
      <h1 className="mb-3 text-clamp1 font-semibold">Forgot your passowrd?</h1>
      <p className="mb-3">
        Enter your email address and we will send you a link to reset your
        password.
      </p>
      <form>
        <ul>
          <li className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 h-8 w-full rounded-sm border border-slate-500 p-2 focus:outline-lime-600"
              required
            />
          </li>
          <li className="mb-4 flex justify-between">
            <button
              type="submit"
              className="rounded-sm bg-lime-600 px-2 text-white hover:bg-lime-800"
            >
              Send
            </button>
            <Link
              to="/login"
              className="text-blue-600 underline hover:no-underline"
            >
              Return to login
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
