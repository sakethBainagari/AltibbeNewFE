import Navbar from "../../components/Navbar";
import CollaborateHero from "../../components/v2/collaboratepage/CollaborateHero";
import PartnershipOpportunities from "../../components/v2/collaboratepage/PartnershipOpportunities";
import CollaborateCTA from "../../components/v2/collaboratepage/CollaborateCTA";

export default function CollaboratePage() {
  return (
    <>
    <Navbar className="bg-white text-black"/>
      <main className="bg-surface text-brand mt-10">
        <CollaborateHero />
        <PartnershipOpportunities />
        <CollaborateCTA />
      </main>
    </>
  )
}