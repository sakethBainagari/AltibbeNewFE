export type BenefitsGridProps = { title: string; bullets: string[] };

export default function BenefitsGrid({ title, bullets }: BenefitsGridProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bullets.map((b, i) => (
          <li key={i} className="bg-gray-50 rounded-lg p-4 text-gray-800 border-l-4 border-yellow-400">
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}
