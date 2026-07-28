import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { RecipeFilters } from "../components/recipes/RecipeFilters";
import { RecipeGrid } from "../components/recipes/RecipeGrid";

export function RecipesPage() {
  const {
    query,
    setQuery,
    maxPrepTime,
    setMaxPrepTime,
    maxCookTime,
    setMaxCookTime,
    results,
  } = useRecipeSearch();

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="font-display font-semibold text-3xl text-emerald-950 mb-3">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-sm text-stone-500 max-w-xl mx-auto">
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the
          search bar to find a recipe by name or ingredient, or simply scroll the list and let something
          catch your eye.
        </p>
      </div>

      <RecipeFilters
        query={query}
        onQueryChange={setQuery}
        maxPrepTime={maxPrepTime}
        onMaxPrepTimeChange={setMaxPrepTime}
        maxCookTime={maxCookTime}
        onMaxCookTimeChange={setMaxCookTime}
      />

      <RecipeGrid recipes={results} />
    </section>
  );
}
