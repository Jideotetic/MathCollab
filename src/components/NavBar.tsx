import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Pricing", link: "pricing" },
  { title: "FAQ", link: "faq" },
  { title: "Blog", link: "blog" },
];

export default function NavBar() {
  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.title}
          className="font-normal leading-tight text-zinc-600"
        >
          <NavLink
            to={link.link}
            className={({ isActive }) =>
              isActive
                ? "rounded-3xl bg-purple-200 px-[15px] py-1.5  hover:bg-purple-500 hover:text-white"
                : "rounded-3xl px-[15px] py-1.5 hover:bg-purple-500 hover:text-white"
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </>
  );
}
