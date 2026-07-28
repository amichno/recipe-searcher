import { RecipeCard } from "./RecipeCard";

export function RecipeGrid({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-16 px-5 text-stone-500 border border-dashed border-stone-300 rounded-2xl">
        <p className="text-sm m-0">No recipes match your filters. Try widening the time range.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
