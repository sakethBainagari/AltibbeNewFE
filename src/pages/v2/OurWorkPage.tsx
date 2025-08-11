import Navbar from "../../components/Navbar";
import DigitalPlatformBlock from "../../components/v2/ourwork/DigitalPlatformBlock";
import InnovationFoundation from "../../components/v2/ourwork/InnovationFoundation";
import InnovationHero from "../../components/v2/ourwork/InnovationHero";
import InnovationStats from "../../components/v2/ourwork/InnovationStats";
import AIHealthSolutions from "../../components/v2/ourwork/AIHealthSolutions";
import SustainableFashionBeauty from "../../components/v2/ourwork/SustainableFashionBeauty";

export default function OurWorkPage() {
  return (
    <>
    <Navbar className="bg-white text-black pt-2" />
      <InnovationHero />
      <InnovationStats />
      <DigitalPlatformBlock />
      <AIHealthSolutions />
      <InnovationFoundation />
      <SustainableFashionBeauty />
    </>
  );
}