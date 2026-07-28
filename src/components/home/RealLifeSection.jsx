export function RealLifeSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="font-display font-semibold text-2xl text-emerald-950 mb-4">Built for real life</h2>
        <p className="text-sm text-stone-500 leading-relaxed mb-4">
          Cooking shouldn't be complicated. These recipes come in under{" "}
          <span className="text-orange-600 font-semibold">30 minutes</span> of active time, fit busy
          schedules, and taste good enough to repeat.
        </p>
        <p className="text-sm text-stone-500 leading-relaxed">
          Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
        </p>
      </div>
      <img
        src="https://picsum.photos/seed/chopping-vegetables/700/500"
        alt="Dłonie kroją świeże warzywa na drewnianej desce"
        className="w-full h-64 object-cover rounded-2xl border border-stone-200"
      />
    </section>
  );
}
