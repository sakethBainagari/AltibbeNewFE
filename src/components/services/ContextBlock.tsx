export type ContextBlockProps = { title: string; paragraphs: string[] };

export default function ContextBlock({ title, paragraphs }: ContextBlockProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-gray-700 text-base md:text-lg">{p}</p>
      ))}
    </section>
  );
}
