export function StepList({ steps }) {
  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-emerald-950 mb-4">Przygotowanie</h2>
      <ol className="list-none p-0 m-0 flex flex-col gap-4">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3.5">
            <span className="w-6 h-6 rounded-full bg-emerald-950 text-stone-100 flex items-center justify-center text-xs font-semibold flex-shrink-0">
              {index + 1}
            </span>
            <p className="mt-0.5 text-sm leading-relaxed text-stone-800">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
