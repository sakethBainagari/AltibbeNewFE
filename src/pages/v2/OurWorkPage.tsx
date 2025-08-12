
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
    <>
      <Navbar className="bg-white text-black pt-2" />
      <WorkHero />
      <ImpactMetrics />
      <CaseStudies />
      <HowWeWork />
  <Testimonials />
  <PartnersRecognition />
  <CTASection />
    </>
  );
}