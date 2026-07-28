import { useChecklist } from "../../hooks/useChecklist";

export function IngredientList({ ingredients }) {
  const { toggle, isChecked } = useChecklist();

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-emerald-950 mb-4">Składniki</h2>
      <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
        {ingredients.map((ingredient, index) => {
          const checked = isChecked(index);
          return (
            <li
              key={ingredient}
              onClick={() => toggle(index)}
              className={
                "flex items-start gap-2.5 cursor-pointer text-sm select-none " +
                (checked ? "text-stone-300 line-through" : "text-stone-800")
              }
            >
              <span
                className={
                  "w-4 h-4 rounded mt-0.5 flex-shrink-0 border-2 " +
                  (checked ? "bg-green-600 border-green-600" : "border-green-600 bg-transparent")
                }
              />
              {ingredient}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
