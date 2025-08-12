export type CTASectionProps = {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  blurb?: string;
};

export default function CTASection({ primary, secondary, blurb }: CTASectionProps) {
  return (
    <section className="text-center py-8">
      {blurb && <div className="mb-4 text-gray-700 text-lg">{blurb}</div>}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a
          href={primary.href}
          className="px-8 py-3 rounded-full font-semibold text-lg bg-yellow-500 text-white shadow-lg hover:bg-yellow-600 transition"
        >
          {primary.label}
        </a>
        {secondary && (
          <a
            href={secondary.href}
            className="px-8 py-3 rounded-full font-semibold text-lg bg-white text-yellow-700 border border-yellow-400 shadow hover:bg-yellow-50 transition"
          >
            {secondary.label}
          </a>
        )}
      </div>
    </section>
  );
}
