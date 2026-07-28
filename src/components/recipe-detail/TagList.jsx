export function TagList({ category, tags }) {
  return (
    <div className="flex gap-2 mb-3 flex-wrap">
      <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
        {category}
      </span>
      {tags.map((tag) => (
        <span key={tag} className="text-xs font-semibold text-green-800 bg-green-100 px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  );
}
