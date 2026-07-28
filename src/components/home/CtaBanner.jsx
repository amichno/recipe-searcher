import { Link } from "react-router-dom";
import { ForkIllustration, KnifeIllustration } from "../icons/Icons";

export function CtaBanner() {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-14">
      <div className="relative bg-emerald-50 rounded-2xl py-12 px-6 text-center overflow-hidden">
        <ForkIllustration className="hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 w-14 h-28 opacity-70" />
        <KnifeIllustration className="hidden sm:block absolute right-6 top-1/2 -translate-y-1/2 w-14 h-28 opacity-70" />
        <h2 className="font-display font-semibold text-2xl text-emerald-950 mb-2">Ready to cook smarter?</h2>
        <p className="text-sm text-stone-500 mb-6 max-w-sm mx-auto">
          Hit the button, pick a recipe, and get dinner on the table — fast.
        </p>
        <Link
          to="/recipes"
          className="inline-block text-sm font-semibold bg-emerald-950 text-stone-100 px-6 py-3 rounded-lg hover:bg-emerald-900"
        >
          Browse recipes
        </Link>
      </div>
    </section>
  );
}
