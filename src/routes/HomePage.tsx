import { NavLink } from "react-router-dom";
// import { Popover, Transition } from "@headlessui/react";
// import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MathCollab from "../components/MathCollab";

const links = ["Home", "Pricing", "FAQ", "Blog"];

export default function HomePage() {
  return (
    <>
      <header className="mx-auto flex h-[101px] max-w-[1280px] items-center justify-between bg-white px-20 py-6">
        <MathCollab />

        <nav>
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link}>
                <NavLink
                  to={link === "Home" ? "/" : link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "rounded-3xl bg-purple-200 px-[15px] py-1.5 font-normal leading-tight text-zinc-600"
                      : isPending
                        ? "rounded-3xl bg-purple-500 px-[15px] py-1.5 font-normal leading-tight text-zinc-600"
                        : ""
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-slate-950 px-7 py-3 text-sm font-medium leading-tight text-slate-950"
        >
          Sign In
        </button>
      </header>
      <main className="mx-auto max-w-[1280px] text-center">
        <div className="bg-image h-[calc(100vh-101px)] border-2 border-green-500 bg-cover bg-center bg-no-repeat pt-[64px]">
          <div className="mx-auto flex max-w-[838px] flex-col gap-8">
            <h2 className="mx-auto max-w-[291px] rounded-3xl border border-neutral-200 bg-white px-[21px] py-[9px] text-base font-bold leading-normal text-orange-500">
              WELCOME TO MATHCOLLAB
            </h2>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-[18px]">
                <h3 className="text-[57px] font-bold leading-[64px] text-slate-950">
                  We Make Math Editing and{" "}
                  <span className="text-orange-500">Collaboration</span> Easier
                </h3>
                <p className="mx-auto max-w-[689px] text-center text-lg font-normal leading-[27px] text-neutral-700">
                  MathCollab is a real-time interactive math editing and
                  collaboration platform that enables realt-time collaborative
                  learning of math and other applied math courses.
                </p>
              </div>
              <button
                type="button"
                className="mx-auto w-[175px] rounded-lg bg-slate-950 py-[13px] text-sm font-semibold leading-tight text-white"
              >
                Explore MathCollab
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
