import ServicesHero from '../../../components/services/ServicesHero';
import ContextBlock from '../../../components/services/ContextBlock';
import MarketTiles from '../../../components/common/MarketTiles';
import { useEffect, useState } from 'react';

type HubData = {
  hero: any;
  intro: { title: string; paragraphs: string[] };
  countriesPrimary: string[];
  countriesSecondary: string[];
};

export default function HubPage() {
  const [data, setData] = useState<HubData | null>(null);

  useEffect(() => {
    import('../../../content/services/hub.json').then((mod) => setData(mod.default || mod));
  }, []);

  if (!data) return <div className="py-24 text-center">Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <ServicesHero {...data.hero} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ContextBlock title={data.intro.title} paragraphs={data.intro.paragraphs} />
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <MarketTiles 
          primary={data.countriesPrimary} 
          secondary={data.countriesSecondary} 
          baseHref="/hedamo/services/" 
        />
      </div>
    </main>
  );
}
