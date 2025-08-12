export type SolutionBlockProps = {
  title: string;
  items: { name: "Hedamo Report" | "Hedamo AI" | "Hedamo Code"; text: string }[];
};

export default function SolutionBlock({ title, items }: SolutionBlockProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${item.name === "Hedamo Report" ? "bg-yellow-100 text-yellow-700" : item.name === "Hedamo AI" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"}`}>
              {item.name === "Hedamo Report" ? "📄" : item.name === "Hedamo AI" ? "🤖" : "🔗"}
            </span>
            <div>
              <div className="font-semibold text-gray-900">{item.name}</div>
              <div className="text-gray-700 text-base">{item.text}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
