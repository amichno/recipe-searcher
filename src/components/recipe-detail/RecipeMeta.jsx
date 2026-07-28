function MetaItem({ label, value }) {
  return (
    <div>
      <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-base font-semibold text-emerald-950">{value}</p>
    </div>
  );
}

export function RecipeMeta({ prepTime, cookTime, servings, difficulty }) {
  return (
    <div className="flex gap-8 mb-8 border-y border-stone-200 py-4 flex-wrap">
      <MetaItem label="Prep" value={`${prepTime} min`} />
      <MetaItem label="Cook" value={`${cookTime} min`} />
      <MetaItem label="Servings" value={servings} />
      <MetaItem label="Difficulty" value={difficulty} />
    </div>
  );
}
