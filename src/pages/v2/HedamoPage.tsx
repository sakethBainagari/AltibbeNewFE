import Navbar from "../../components/Navbar";
import HedamoHero from "../../components/v2/hedamopage/HedamoHero";
import HedamoPillars from "../../components/v2/hedamopage/HedamoPillars";
import HowItWorks from "../../components/v2/hedamopage/HowItWorks";
import StakeholderUseCases from "../../components/v2/hedamopage/StakeholderUseCases";
import MarketTiles from "../../components/v2/hedamopage/MarketTiles";
import AdvisoryFeature from "../../components/v2/hedamopage/AdvisoryFeature";
import Governance from "../../components/v2/hedamopage/Governance";
import Samples from "../../components/v2/hedamopage/Samples";
import Integrations from "../../components/v2/hedamopage/Integrations";
import CTASection from "../../components/v2/hedamopage/CTASection";

export default function HedamoPage() {
  return (
    <div className="">
      <Navbar className="bg-transparent backdrop-none shadow-none text-black"/>
      <HedamoHero />
  <HedamoPillars />
  <HowItWorks />
  <StakeholderUseCases />
  <MarketTiles />
  <AdvisoryFeature />
  <Governance />
  <Samples />
  <Integrations />
  <CTASection />
  {/* Only the 10 required sections are rendered above. */}
    </div>
  );
} 