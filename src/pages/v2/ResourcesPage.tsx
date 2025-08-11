import Navbar from '../../components/Navbar'
import AboutHero from '../../components/v2/aboutpage/AboutHero'
import MissionEthos from '../../components/v2/aboutpage/MissionEthos'
import Timeline from '../../components/v2/aboutpage/Timeline'
import GlobalPresence from '../../components/v2/aboutpage/GlobalPresence'

export default function AboutPage() {
  return (
    <>
      <main className="bg-white text-brand-text">
        <Navbar className='bg-white text-black'/>
        <AboutHero />
        <MissionEthos />
        <Timeline />
        <GlobalPresence />
      </main>
    </>
  )
}