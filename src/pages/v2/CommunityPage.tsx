import Navbar from "../../components/Navbar";
import CollaborateHero from "../../components/v2/collaboratepage/CollaborateHero";
import PartnerTypes from "../../components/v2/collaboratepage/PartnerTypes";
import WhyCollaborate from "../../components/v2/collaboratepage/WhyCollaborate";
import CollaborationModels from "../../components/v2/collaboratepage/CollaborationModels";
import RegionalFocus from "../../components/v2/collaboratepage/RegionalFocus";
import CollaborationCTA from "../../components/v2/collaboratepage/CollaborationCTA";

export default function CollaboratePage() {
  return (
    <>
    <Navbar className="bg-white text-black"/>
      <main className="bg-surface text-brand mt-10">
  <CollaborateHero />
  <PartnerTypes />
  <WhyCollaborate />
  <CollaborationModels />
  <RegionalFocus />
  <CollaborationCTA />
      </main>
    </>
  )
}