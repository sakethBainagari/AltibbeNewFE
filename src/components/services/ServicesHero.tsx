export type ServicesHeroProps = {
  title: string;
  headline: string;
  subtext: string;
  image: string;
  accent?: "gold" | "green";
};

export default function ServicesHero({ title, headline, subtext, image, accent }: ServicesHeroProps) {
  return (
    <section className="relative min-h-[340px] md:min-h-[420px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" style={{ zIndex: 1 }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 tracking-wide uppercase text-gray-200">{title}</h1>
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${accent === "gold" ? "text-yellow-400" : accent === "green" ? "text-green-400" : "text-white"}`}>{headline}</h2>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">{subtext}</p>
      </div>
    </section>
  );
}
