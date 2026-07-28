import { useParams, useNavigate, Link } from "react-router-dom";
import { RECIPES } from "../data/recipes";
import { RecipeDetail } from "../components/RecipeDetail";

export function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = RECIPES.find((r) => String(r.id) === id);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-stone-500 mb-4">We couldn't find that recipe.</p>
        <Link to="/recipes" className="text-sm font-semibold text-emerald-900 underline">
          Back to all recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <RecipeDetail recipe={recipe} onBack={() => navigate("/recipes")} />
    </div>
  );
}
