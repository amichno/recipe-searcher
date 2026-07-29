import { Link } from "react-router-dom";
import { PersonIcon, ClockIcon, PotIcon } from "../icons/Icons";

export function RecipeCard({ recipe }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col">
      <img src={recipe.image} alt={recipe.title} className="w-full h-36 object-cover" />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="font-display font-semibold text-base text-emerald-950 leading-snug">{recipe.title}</p>
        <p className="text-xs text-stone-500 leading-relaxed flex-1">{recipe.description}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <PersonIcon className="w-3.5 h-3.5" /> Servings: {recipe.servings}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon className="w-3.5 h-3.5" /> Prep: {recipe.prepTime}min
          </span>
          <span className="flex items-center gap-1">
            <PotIcon className="w-3.5 h-3.5" /> Cook: {recipe.cookTime}min
          </span>
        </div>

        <Link
          to={`/recipes/${recipe.id}`}
          className="mt-1 text-center text-sm font-semibold bg-emerald-950 text-stone-100 py-2 rounded-full hover:bg-emerald-900"
        >
          View recipe
        </Link>
      </div>
    </div>
  );
}
