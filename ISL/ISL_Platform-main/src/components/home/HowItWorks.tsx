import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

// Custom Premium Icons (SVG + Motion)
const GestureIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M14 26C14 26 14.5 18 20 18C25.5 18 24 22 24 22"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
            d="M24 22C24 22 26 14 30 14C34 14 32 20 32 20V32C32 38 28 42 22 42C16 42 14 36 14 30V26"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.circle cx="20" cy="18" r="2" fill="currentColor"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="30" cy="14" r="2" fill="currentColor"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx="24" cy="22" r="2" fill="currentColor"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
);

const AIIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M10 24H16L20 14L28 34L32 24H38"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.circle cx="10" cy="24" r="2" fill="currentColor"
            animate={{ x: [0, 30], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
        />
        <motion.circle cx="16" cy="24" r="2" fill="currentColor"
            animate={{ x: [0, 24], opacity: [1, 0] }} transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
        />
    </svg>
);

const SpeakIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect x="8" y="20" width="4" height="8" rx="2" fill="currentColor"
            animate={{ height: [8, 16, 8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect x="16" y="14" width="4" height="20" rx="2" fill="currentColor"
            animate={{ height: [20, 32, 20] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.rect x="24" y="10" width="4" height="28" rx="2" fill="currentColor"
            animate={{ height: [28, 14, 28] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
        />
        <motion.rect x="32" y="16" width="4" height="16" rx="2" fill="currentColor"
            animate={{ height: [16, 24, 16] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.1, ease: "easeInOut" }}
        />
        <motion.rect x="40" y="22" width="4" height="4" rx="2" fill="currentColor"
            animate={{ height: [4, 12, 4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
        />
    </svg>
);

export { GestureIcon, AIIcon, SpeakIcon };

const HowItWorks = () => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const { t } = useLanguage();

    const steps = [
        {
            id: "01",
            icon: GestureIcon,
            title: t.howItWorks.steps[0].title,
            desc: t.howItWorks.steps[0].desc,
        },
        {
            id: "02",
            icon: AIIcon,
            title: t.howItWorks.steps[1].title,
            desc: t.howItWorks.steps[1].desc,
        },
        {
            id: "03",
            icon: SpeakIcon,
            title: t.howItWorks.steps[2].title,
            desc: t.howItWorks.steps[2].desc,
        }
    ];

    return (
        <section className="py-32 bg-graphite-950 relative border-t border-white/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-graphite-900/50 to-graphite-950" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-graphite-700/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        {t.howItWorks.title}
                    </h2>
                    <p className="text-grey-400 text-lg font-light leading-relaxed">
                        {t.howItWorks.desc}
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Visual Connector Line (Desktop) - Enhanced */}
                    <div className="hidden md:block absolute top-[72px] left-32 right-32 h-px bg-gradient-to-r from-transparent via-silver-500/20 to-transparent z-0">
                        {/* Animated Flow Pulse */}
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-silver-400/60 to-transparent w-1/4 blur-sm"
                            animate={{ left: ["-25%", "125%"] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Glowing dots at connection points */}
                        <motion.div
                            className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 bg-silver-400 rounded-full shadow-[0_0_8px_rgba(192,192,192,0.6)]"
                            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-2 h-2 -translate-y-1/2 -translate-x-1/2 bg-silver-400 rounded-full shadow-[0_0_8px_rgba(192,192,192,0.6)]"
                            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }}
                            transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-1/2 right-0 w-2 h-2 -translate-y-1/2 bg-silver-400 rounded-full shadow-[0_0_8px_rgba(192,192,192,0.6)]"
                            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }}
                            transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                        {steps.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                onMouseEnter={() => setHoveredStep(i)}
                                onMouseLeave={() => setHoveredStep(null)}
                                className={`flex flex-col items-center text-center group transition-all duration-500 ${hoveredStep !== null && hoveredStep !== i ? 'opacity-40 scale-95 blur-[1px]' : 'opacity-100 scale-100'}`}
                            >
                                {/* Icon Container with Premium Glow */}
                                <div className={`w-36 h-36 rounded-3xl bg-gradient-to-br from-graphite-800 to-graphite-900 border flex items-center justify-center mb-8 relative transition-all duration-700 ${hoveredStep === i ? 'border-silver-500/50 shadow-[0_0_60px_-10px_rgba(140,133,115,0.4),0_0_30px_-5px_rgba(140,133,115,0.1)_inset] -translate-y-3 scale-105' : 'border-graphite-700 shadow-none'}`}>
                                    {/* Animated Background Glow */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-silver-500/10 via-transparent to-silver-400/5 transition-opacity duration-700 ${hoveredStep === i ? 'opacity-100' : 'opacity-0'}`} />

                                    {/* Radial pulse effect on hover */}
                                    {hoveredStep === i && (
                                        <motion.div
                                            className="absolute inset-0 rounded-3xl border-2 border-silver-400/30"
                                            initial={{ scale: 1, opacity: 0.6 }}
                                            animate={{ scale: 1.15, opacity: 0 }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                        />
                                    )}

                                    <div className={`text-silver-400 transition-all duration-500 relative z-10 ${hoveredStep === i ? 'text-silver-200 scale-110' : ''}`}>
                                        <item.icon />
                                    </div>

                                    {/* Number Badge */}
                                    <div className={`absolute -top-3 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-graphite-700 to-graphite-900 border flex items-center justify-center text-2xl font-heading font-bold transition-all duration-500 ${hoveredStep === i ? 'border-silver-500/50 text-silver-300 shadow-lg' : 'border-graphite-700 text-grey-500'}`}>
                                        {item.id}
                                    </div>
                                </div>

                                <h3 className={`text-2xl font-heading font-bold text-white mb-4 transition-all duration-300 ${hoveredStep === i ? 'text-silver-100 scale-105' : ''}`}>
                                    {item.title}
                                </h3>
                                <p className="text-grey-400 text-base leading-relaxed max-w-[280px] font-light">
                                    {item.desc}
                                </p>

                                {/* Subtle indicator arrow */}
                                {i < steps.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute -right-8 top-16 text-graphite-700"
                                        animate={{ x: [0, 5, 0], opacity: [0.3, 0.7, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;