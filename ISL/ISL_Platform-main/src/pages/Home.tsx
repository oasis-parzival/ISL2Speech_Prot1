import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import LiveDemo from "../components/home/LiveDemo";
import Features from "../components/home/Features";
import TargetAudience from "../components/home/TargetAudience";
import AccessibilitySection from "../components/home/AccessibilitySection";
import StatsRoadmap from "../components/home/StatsRoadmap";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

const Home = () => {
    return (
        <div className="relative min-h-screen w-full bg-graphite-950 text-graphite-50 font-sans selection:bg-silver-500/30 overflow-x-hidden">
            <Hero />
            <div id="how-it-works">
                <HowItWorks />
            </div>
            <LiveDemo />
            <div id="features">
                <Features />
            </div>
            <TargetAudience />
            <AccessibilitySection />
            <StatsRoadmap />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Home;
