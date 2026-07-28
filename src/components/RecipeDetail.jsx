import { BackIcon } from "./icons/Icons";
import { TagList } from "./recipe-detail/TagList";
import { RecipeMeta } from "./recipe-detail/RecipeMeta";
import { IngredientList } from "./recipe-detail/IngredientList";
import { StepList } from "./recipe-detail/StepList";

export function RecipeDetail({ recipe, onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-emerald-900 text-sm font-semibold p-0 mb-6"
      >
        <BackIcon /> Back to recipes
      </button>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-56 md:h-72 object-cover rounded-2xl border border-stone-200 mb-6"
      />

      <TagList category={recipe.category} tags={recipe.tags} />

      <h1 className="font-display font-semibold text-3xl md:text-4xl text-emerald-950 mb-2 leading-tight">
        {recipe.title}
      </h1>
      <p className="text-stone-500 text-base leading-relaxed max-w-xl mb-5">{recipe.description}</p>

      <RecipeMeta
        prepTime={recipe.prepTime}
        cookTime={recipe.cookTime}
        servings={recipe.servings}
        difficulty={recipe.difficulty}
      />

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
        <IngredientList ingredients={recipe.ingredients} />
        <StepList steps={recipe.steps} />
      </div>
    </div>
  );
}
