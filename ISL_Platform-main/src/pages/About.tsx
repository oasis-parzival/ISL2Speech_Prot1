import { motion } from 'framer-motion';
import Footer from '../components/home/Footer';
import { Code, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-graphite-950 font-sans selection:bg-silver-500/30">
            <main className="pt-32 pb-24 px-6">
                <div className="container mx-auto max-w-5xl">

                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            {t.about.title} <span className="text-silver-400">{t.about.titleHighlight}</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-grey-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            {t.about.subtitle}
                        </motion.p>
                    </div>

                    {/* Impact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {[
                            {
                                icon: Globe,
                                title: t.about.gap.title,
                                desc: t.about.gap.desc
                            },
                            {
                                icon: Code,
                                title: t.about.technology.title,
                                desc: t.about.technology.desc
                            },
                            {
                                icon: Heart,
                                title: t.about.goal.title,
                                desc: t.about.goal.desc
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-graphite-900 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group"
                            >
                                <div className="w-10 h-10 bg-silver-500/10 rounded-lg flex items-center justify-center text-silver-400 mb-5 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-grey-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="border border-white/5 bg-white/[0.02] rounded-3xl p-12 mb-24">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: t.about.stats.landmarks, value: "486" },
                                { label: t.about.stats.latency, value: "< 15" },
                                { label: t.about.stats.dialects, value: "4" },
                                { label: t.about.stats.privacy, value: "100%" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center relative">
                                    <div className="text-3xl font-mono font-bold text-white mb-1 tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] text-grey-500 font-bold uppercase tracking-widest">{stat.label}</div>
                                    {i !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-32 mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">{t.about.cta.title}</h2>
                        <button
                            onClick={() => window.location.href = '/translate'}
                            className="bg-white text-graphite-950 hover:bg-silver-200 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-white/10"
                        >
                            {t.about.cta.button}
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
