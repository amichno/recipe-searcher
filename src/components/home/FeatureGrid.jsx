import { UtensilsIcon, BoltIcon, SearchListIcon } from "../icons/Icons";

const FEATURES = [
  {
    Icon: UtensilsIcon,
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    Icon: BoltIcon,
    title: "Minimum fuss",
    description: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    Icon: SearchListIcon,
    title: "Search in seconds",
    description: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

export function FeatureGrid() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-14 text-center border-t border-stone-200">
      <h2 className="font-display font-semibold text-2xl text-emerald-950 mb-10">What you'll get</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {FEATURES.map(({ Icon, title, description }) => (
          <div key={title}>
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mx-auto mb-4">
              <Icon />
            </div>
            <p className="font-semibold text-sm text-emerald-950 mb-1.5">{title}</p>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[190px] mx-auto">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
