import Navbar from "../../components/Navbar";
import HedamoHero from "../../components/v2/hedamopage/HedamoHero";
import HedamoPillars from "../../components/v2/hedamopage/HedamoPillars";
import GlobalAlignment from "../../components/v2/hedamopage/GlobalAlignment";
import OnSiteVerification from "../../components/v2/hedamopage/OnSiteVerification";
import HedamoCTA from "../../components/v2/hedamopage/HedamoCTA";

export default function HedamoPage() {
  return (
    <div className="">
      <Navbar className="bg-transparent backdrop-none shadow-none text-black"/>
      <HedamoHero />
      <HedamoPillars />
      <GlobalAlignment />
      <OnSiteVerification />
      <HedamoCTA />
    </div>
  );
} 