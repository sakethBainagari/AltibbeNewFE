import Hero from '../../components/v2/Homepage/Hero';
import SplitScreenIntro from '../../components/v2/Homepage/SplitScreenIntro';
import IntroBlurb from '../../components/v2/Homepage/IntroBlurb';
import PoweredBy from '../../components/v2/Homepage/PoweredBy';
import LiveMainnetBanner from '../../components/v2/Homepage/LiveMainnetBanner';
import Navbar from '../../components/Navbar';

export default function HomePage() {
  return (
    <>
    <Navbar className="bg-white text-black" />
    <div className="font-mono">
    <Hero />
    <div className=" relative
    z-10">
    <IntroBlurb />
        <SplitScreenIntro />
        <PoweredBy />
        <LiveMainnetBanner />
    </div>
    </div>
    </>
  );
}