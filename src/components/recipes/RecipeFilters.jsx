import { SearchIcon } from "../icons/Icons";
import { TIME_OPTIONS } from "../../hooks/useRecipeSearch";

function TimeSelect({ label, value, onChange }) {
  return (
    <label className="flex items-center gap-2 text-sm text-stone-600">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value === "Dowolny" ? "Dowolny" : Number(e.target.value))}
        className="border border-stone-200 rounded-lg px-2.5 py-1.5 text-sm bg-white text-emerald-950"
      >
        <option value="Dowolny">Any</option>
        {TIME_OPTIONS.map((minutes) => (
          <option key={minutes} value={minutes}>
            {minutes} min
          </option>
        ))}
      </select>
    </label>
  );
}

export function RecipeFilters({
  query,
  onQueryChange,
  maxPrepTime,
  onMaxPrepTimeChange,
  maxCookTime,
  onMaxCookTimeChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div className="flex items-center gap-5 flex-wrap">
        <TimeSelect label="Max Prep Time" value={maxPrepTime} onChange={onMaxPrepTimeChange} />
        <TimeSelect label="Max Cook Time" value={maxCookTime} onChange={onMaxCookTimeChange} />
      </div>

      <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-3 py-2 w-full sm:w-64">
        <SearchIcon className="w-4 h-4" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by name or ingredient..."
          aria-label="Search recipes"
          className="border-none outline-none text-sm flex-1 font-sans text-emerald-950 bg-transparent"
        />
      </div>
    </div>
  );
}
