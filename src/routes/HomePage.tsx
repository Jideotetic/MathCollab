import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const links = [
  { href: "/signup", label: "Sign Up" },
  { href: "/login", label: "Login" },
];

export default function HomePage() {
  return (
    <>
      <header className="fixed flex h-[60px] w-full items-center justify-between bg-white px-2">
        <Link
          to="/"
          title="Go to homepage"
          className="font-lemons text-clamp2 transition-transform duration-300 ease-in-out hover:scale-75 focus-visible:outline-2 focus-visible:outline-lime-600"
        >
          Math<span className="text-lime-600">Collab</span>
        </Link>

        <Popover className="md:hidden">
          {({ open }) => (
            <>
              {open ? (
                <Popover.Button className="focus-visible:outline-2 focus-visible:outline-lime-600">
                  <XMarkIcon className="h-8 w-8" />
                </Popover.Button>
              ) : (
                <Popover.Button className="focus-visible:outline-2 focus-visible:outline-lime-600">
                  <Bars3Icon className="h-8 w-8" />
                </Popover.Button>
              )}
              <Popover.Overlay className="fixed inset-0 top-[60px] bg-black opacity-30" />
              <Transition
                as="nav"
                className="fixed left-0 top-[60px] min-h-[calc(100vh-60px)] w-[calc(100vw-50%)] bg-amber-300 px-2"
                enter="transition duration-300 ease-out"
                enterFrom="transform -translate-x-[100%]"
                enterTo="transform translate-x-0"
                leave="transition duration-300 ease-out"
                leaveFrom="transform translate-x-0"
                leaveTo="transform -translate-x-[100%]"
              >
                <Popover.Panel as="ul" static>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Popover.Button as={Link} to={link.href}>
                        {link.label}
                      </Popover.Button>
                    </li>
                  ))}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <ul className="hidden gap-2 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </header>
      <div className="mx-auto flex min-h-[calc(100vh-100px)] max-w-3xl flex-col items-center justify-center pt-[60px] text-center">
        <h2 className="text-clamp3 font-extrabold">
          Welcome to{" "}
          <span className="font-lemons">
            Math<span className="text-lime-600">Collab</span>
          </span>
        </h2>
        <p>
          An interactive math editing and collaboration platform that enables
          real-time collaborative learning of math and other applied math
          courses.
        </p>
      </div>
    </>
  );
}
