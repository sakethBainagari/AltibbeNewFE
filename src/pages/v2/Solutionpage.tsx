import Navbar from "../../components/Navbar";
import ContactHero from "../../components/v2/contactpage/ContactHero";
import ContactOptions from "../../components/v2/contactpage/ContactOptions";
import ContactForm from "../../components/v2/contactpage/ContactForm";
import RegionalContacts from "../../components/v2/contactpage/RegionalContacts";
import LocationMap from "../../components/v2/contactpage/LocationMap";

export default function ContactPage() {
  return (
    <main className="bg-white">
        <Navbar className="bg-white text-black"/>
  <ContactHero />
  <ContactOptions />
  <ContactForm />
  <RegionalContacts />
  <LocationMap />
    </main>
  );
}