import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="flex h-[100px] flex-col justify-center px-2 text-black shadow-sm shadow-lime-200">
        <ul className="flex items-center justify-between">
          <li className="font-lemons text-clamp2 transition-transform duration-300 ease-in-out hover:scale-75">
            <Link to="/" title="Go to homepage">
              Math<span className="text-lime-600">Collab</span>
            </Link>
          </li>
          <li className="shrink-0 rounded-full bg-lime-600 px-3 py-1 text-white hover:bg-lime-800">
            <Link to="login">Login</Link>
          </li>
        </ul>
      </header>
      <main className="flex min-h-[calc(100vh-100px)] items-center justify-center px-2 text-center">
        <Outlet />
      </main>
    </>
  );
}
