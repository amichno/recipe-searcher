import { useMemo, useState } from "react";
import { RECIPES } from "../data/recipes";

export const TIME_OPTIONS = [15, 30, 45, 60, 90];

const matchesQuery = (recipe, query) => {
  const q = query.trim().toLowerCase();
  if (q === "") return true;
  return (
    recipe.title.toLowerCase().includes(q) ||
    recipe.tags.some((tag) => tag.toLowerCase().includes(q)) ||
    recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(q))
  );
};

export function useRecipeSearch() {
  const [query, setQuery] = useState("");
  const [maxPrepTime, setMaxPrepTime] = useState("Dowolny");
  const [maxCookTime, setMaxCookTime] = useState("Dowolny");

  const results = useMemo(() => {
    return RECIPES.filter((recipe) => {
      const prepOk = maxPrepTime === "Dowolny" || recipe.prepTime <= maxPrepTime;
      const cookOk = maxCookTime === "Dowolny" || recipe.cookTime <= maxCookTime;
      return prepOk && cookOk && matchesQuery(recipe, query);
    });
  }, [query, maxPrepTime, maxCookTime]);

  return {
    query,
    setQuery,
    maxPrepTime,
    setMaxPrepTime,
    maxCookTime,
    setMaxCookTime,
    results,
  };
}
