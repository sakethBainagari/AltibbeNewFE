import ServicesHero from '../../../components/services/ServicesHero';
import ContextBlock from '../../../components/services/ContextBlock';
import SolutionBlock from '../../../components/services/SolutionBlock';
import BenefitsGrid from '../../../components/services/BenefitsGrid';
import VisionBlock from '../../../components/services/VisionBlock';
import CTASection from '../../../components/services/CTASection';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type CountryData = {
  hero: any;
  context: any;
  solution: any;
  benefits: any;
  vision: any;
  cta: any;
};

export default function CountryPage() {
  const { country } = useParams();
  const [data, setData] = useState<CountryData | null>(null);

  useEffect(() => {
    if (country) {
      import(`../../../content/services/${country}.json`).then((mod) => setData(mod.default || mod));
    }
  }, [country]);

  if (!data) return <div className="py-24 text-center">Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <ServicesHero {...data.hero} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ContextBlock {...data.context} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <SolutionBlock {...data.solution} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BenefitsGrid {...data.benefits} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <VisionBlock {...data.vision} />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <CTASection {...data.cta} />
      </div>
    </main>
  );
}
