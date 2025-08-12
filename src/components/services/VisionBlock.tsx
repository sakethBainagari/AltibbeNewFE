export type VisionBlockProps = { title: string; text: string };

export default function VisionBlock({ title, text }: VisionBlockProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
      <p className="text-gray-700 text-base md:text-lg">{text}</p>
    </section>
  );
}
