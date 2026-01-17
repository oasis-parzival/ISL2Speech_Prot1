import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const CallToAction = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const scrollToHowItWorks = () => {
        const element = document.getElementById('how-it-works');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-graphite-900 to-graphite-950 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-silver-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 tracking-tight">
                    {t.callToAction.title}
                </h2>
                <p className="text-xl text-grey-400 mb-10 max-w-2xl mx-auto">
                    {t.callToAction.desc}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate('/translate')}
                        className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-silver-100 transform hover:scale-105 transition-all shadow-2xl shadow-white/10"
                    >
                        {t.callToAction.start}
                    </button>
                    <button
                        onClick={scrollToHowItWorks}
                        className="px-8 py-4 text-grey-400 hover:text-white font-medium transition-colors"
                    >
                        {t.callToAction.learn}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
