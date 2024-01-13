import { Link } from "react-router-dom";

const labels = ["first-name", "last-name", "email", "password"];

const inputs = labels.map((label) => {
  return (
    <li key={label} className="mb-4">
      <label htmlFor={label}>
        {label === "first-name"
          ? "First Name"
          : label === "last-name"
            ? "Last Name"
            : label === "email"
              ? "Email"
              : "Password"}
      </label>
      <br />
      <input
        type={
          label === "email"
            ? "email"
            : label === "password"
              ? "password"
              : "text"
        }
        name={label}
        id={label}
        className="mt-1 h-8 w-full rounded-sm border border-slate-500 p-2 focus:outline-lime-600"
        required
        placeholder={
          label === "first-name"
            ? "Enter first name"
            : label === "last-name"
              ? "Enter last name"
              : label === "email"
                ? "Enter email address"
                : "Enter password"
        }
      />
    </li>
  );
});

export default function SignUp() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-sm flex-col justify-center">
      <h1 className="mb-2 text-clamp1 font-semibold">Get Started</h1>
      <form>
        <ul>
          {inputs}
          <li className="mb-2">
            <button
              type="submit"
              className="rounded-sm bg-lime-600 px-2 text-white hover:bg-lime-800"
            >
              Submit
            </button>
          </li>
        </ul>

        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 underline hover:no-underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
