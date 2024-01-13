import { Outlet, Link } from "react-router-dom";
import Main from "../components/Main";

export default function Root() {
  return (
    <>
      <header className="flex h-[100px] flex-col justify-center px-2 text-black shadow-sm shadow-lime-200">
        <ul className="flex items-center justify-between">
          <li className="font-lemons text-clamp2 transition-transform duration-300 ease-in-out hover:scale-75">
            <Link
              to="/"
              title="Go to homepage"
              className="focus-visible:outline-2 focus-visible:outline-lime-600"
            >
              Math<span className="text-lime-600">Collab</span>
            </Link>
          </li>
          <li className="shrink-0 text-white">
            <Link
              to="login"
              className="rounded-full bg-lime-600 px-3 py-1 hover:bg-lime-800 focus:outline-2 focus:outline-lime-900"
            >
              Login
            </Link>
          </li>
        </ul>
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
