import { NavLink } from "react-router-dom";
import { LeafIcon } from "./icons/Icons";

const navLinkClass = ({ isActive }) =>
  "text-sm font-medium " + (isActive ? "text-emerald-950 border-b-2 border-orange-400 pb-1" : "text-stone-500 hover:text-emerald-950");

export function Nav() {
  return (
    <header className="flex items-center justify-between px-10 py-5 border-b border-stone-200">
      <div className="flex items-center gap-2.5">
        <LeafIcon className="w-6 h-6" />
        <span className="font-display font-semibold text-lg text-emerald-950">Healthy Recipe Finder</span>
      </div>

      <nav className="hidden sm:flex items-center gap-8">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/recipes" className={navLinkClass}>
          Recipes
        </NavLink>
      </nav>

      <NavLink
        to="/recipes"
        className="text-sm font-semibold bg-emerald-950 text-stone-100 px-5 py-2.5 rounded-lg hover:bg-emerald-900"
      >
        Browse recipes
      </NavLink>
    </header>
  );
}
