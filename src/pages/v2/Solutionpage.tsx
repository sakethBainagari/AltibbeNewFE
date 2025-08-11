import Navbar from "../../components/Navbar";
import ContactHero from "../../components/v2/contactpage/ContactHero";
import ContactDetails from "../../components/v2/contactpage/ContactDetails";
import WaitlistNewsletter from "../../components/v2/contactpage/WaitlistNewsletter";
import SocialMediaConnect from "../../components/v2/contactpage/SocialMediaConnect";

export default function ContactPage() {
  return (
    <main className="bg-white">
        <Navbar className="bg-white text-black"/>
      <ContactHero />
      <ContactDetails />
      <WaitlistNewsletter />
      <SocialMediaConnect />
    </main>
  );
}