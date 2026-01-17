import { MoveDown } from "lucide-react";
import InteractiveHoverButton from "../ui/InteractiveHoverButton";
import Ripple from "../ui/Ripple";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
            {/* Background Ripple - Hero Only */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                {/* Ripple visible with higher opacity */}
                <Ripple mainCircleSize={300} numCircles={8} mainCircleOpacity={0.35} />
            </div>

            <div className="text-center max-w-5xl space-y-8 animate-in fade-in zoom-in duration-1000 relative z-10">
                {/* Badge removed as requested */}

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter bg-gradient-to-b from-white via-white/90 to-grey-400 bg-clip-text text-transparent drop-shadow-sm leading-normal py-6">
                    {t.hero.title} <br /> {t.hero.subtitle}
                </h1>
                <p className="text-xl md:text-2xl text-grey-300 font-light max-w-2xl mx-auto leading-relaxed">
                    {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <InteractiveHoverButton
                        text={t.hero.tryNow}
                        onClick={() => navigate('/translate')}
                        className="border-silver-500/50 hover:border-silver-400 min-w-[200px]"
                    />
                    <button className="px-8 py-3 rounded-full border border-graphite-700 text-grey-300 hover:text-white hover:border-grey-500 hover:bg-white/5 transition-all duration-300 font-medium text-sm flex items-center gap-2 group min-w-[180px] justify-center">
                        {t.hero.watchDemo}
                        <MoveDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
