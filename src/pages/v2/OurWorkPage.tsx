
import Navbar from "../../components/Navbar";
import WorkHero from "../../components/v2/ourwork/WorkHero";
import ImpactMetrics from "../../components/v2/ourwork/InnovationStats";
import CaseStudies from "../../components/v2/ourwork/CaseStudies";
import HowWeWork from "../../components/v2/ourwork/HowWeWork";
import Testimonials from "../../components/v2/ourwork/Testimonials";
import PartnersRecognition from "../../components/v2/ourwork/PartnersRecognition";
import CTASection from "../../components/v2/ourwork/CTASection";

export default function OurWorkPage() {
  return (
    <div className="font-sans bg-ivory text-[#222]">
      <Navbar className="bg-white text-black pt-2" />
      <main>
        <section className="font-serif">
          <WorkHero />
        </section>
        <section className="bg-white py-20">
          <ImpactMetrics />
        </section>
        <section className="bg-gray-50 py-20">
          <CaseStudies />
        </section>
        <section className="bg-white py-20">
          <HowWeWork />
        </section>
        <section className="bg-gray-50 py-20">
          <Testimonials />
        </section>
        <section className="bg-white py-20">
          <PartnersRecognition />
        </section>
        <section className="bg-yellow-50 py-20">
          <CTASection />
        </section>
      </main>
    </div>
  );
}