import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="text-center max-w-2xl mx-auto pt-14 pb-10 px-6">
      <h1 className="font-display font-semibold text-4xl md:text-5xl text-emerald-950 leading-tight mb-4">
        <span className="bg-orange-200/60 px-1">Healthy meals</span>, zero fuss
      </h1>
      <p className="text-stone-500 text-base mb-7 max-w-lg mx-auto">
        Discover eight quick, whole-food recipes you can cook tonight — no processed junk, no guesswork.
      </p>
      <Link
        to="/recipes"
        className="inline-block text-sm font-semibold bg-emerald-950 text-stone-100 px-6 py-3 rounded-lg hover:bg-emerald-900"
      >
        Start exploring
      </Link>
    </section>
  );
}
