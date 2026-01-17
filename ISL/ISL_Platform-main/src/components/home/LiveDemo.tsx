import { motion } from "framer-motion";
import { Play, Sparkles, Zap, Camera, Mic, Volume2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { GestureIcon, AIIcon, SpeakIcon } from "./HowItWorks";

const LiveDemo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useLanguage();

    const handleOpenTranslator = () => {
        console.log('Navigate to translator');
    };

    const demoSteps = [
        { Icon: GestureIcon, label: t.liveDemo.steps[0] },
        { Icon: AIIcon, label: t.liveDemo.steps[1] },
        { Icon: SpeakIcon, label: t.liveDemo.steps[2] }
    ];

    const benefits = [
        { icon: Zap, title: t.liveDemo.benefits[0].title, desc: t.liveDemo.benefits[0].desc },
        { icon: Camera, title: t.liveDemo.benefits[1].title, desc: t.liveDemo.benefits[1].desc },
        { icon: Volume2, title: t.liveDemo.benefits[2].title, desc: t.liveDemo.benefits[2].desc }
    ];

    return (
        <section className="py-32 bg-graphite-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-graphite-900 via-graphite-950 to-graphite-900" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-silver-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-silver-500/10 border border-silver-500/20 mb-6">
                        <Zap className="w-4 h-4 text-silver-400" />
                        <span className="text-xs font-medium text-silver-300 uppercase tracking-wider">{t.liveDemo.badge}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        {t.liveDemo.title}
                    </h2>
                    <p className="text-grey-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t.liveDemo.desc}
                    </p>
                </motion.div>

                {/* Quick Steps */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid grid-cols-3 gap-4 md:gap-6">
                        {demoSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-graphite-900/30 border border-graphite-800/50"
                                whileHover={{ scale: 1.05, borderColor: 'rgba(140,133,115,0.3)' }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-graphite-800/50 flex items-center justify-center text-silver-400">
                                    <div className="scale-50">
                                        <step.Icon />
                                    </div>
                                </div>
                                <p className="text-sm text-grey-300 font-medium text-center leading-normal">{step.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Live Preview Window */}
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="rounded-3xl overflow-hidden relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Animated Glow Effect */}
                        <motion.div
                            className="absolute -inset-2 bg-gradient-to-b from-silver-500/20 via-graphite-800/20 to-transparent rounded-3xl blur-3xl"
                            animate={{
                                opacity: isHovered ? 0.5 : 0.25,
                                scale: isHovered ? 1.03 : 1
                            }}
                            transition={{ duration: 0.7 }}
                        />

                        {/* Window Container */}
                        <div className="relative bg-graphite-950 border border-graphite-800/60 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
                            {/* Title Bar */}
                            <div className="h-14 bg-graphite-900/50 border-b border-white/5 flex items-center justify-between px-6 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="w-3 h-3 rounded-full bg-graphite-700"
                                                whileHover={{ backgroundColor: '#8c8573' }}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-grey-500 hidden sm:block">{t.liveDemo.windowTitle}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-green-500"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-[10px] tracking-widest text-grey-600 font-medium uppercase">
                                        {t.liveDemo.live}
                                    </span>
                                </div>

                                <div className="w-20" />
                            </div>

                            {/* Preview Content Area */}
                            <div className="relative aspect-video bg-gradient-to-b from-graphite-900 to-black flex items-center justify-center p-6 md:p-12">
                                {/* Subtle Grid Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

                                {/* Floating Orbs */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-32 h-32 rounded-full"
                                        style={{
                                            background: `radial-gradient(circle, rgba(140,133,115,0.1), transparent)`,
                                            left: `${15 + i * 30}%`,
                                            top: `${20 + i * 20}%`,
                                        }}
                                        animate={{
                                            y: [0, -30, 0],
                                            opacity: [0.1, 0.3, 0.1],
                                        }}
                                        transition={{
                                            duration: 4 + i,
                                            delay: i * 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}

                                {/* Central Content */}
                                <div className="text-center z-20 flex flex-col items-center max-w-lg">
                                    {/* Large Play Button */}
                                    <motion.button
                                        onClick={handleOpenTranslator}
                                        className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-silver-500/10 to-graphite-800/10 flex items-center justify-center mb-10 border-2 border-white/10 relative cursor-pointer group/play"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        animate={{
                                            boxShadow: isHovered
                                                ? ['0 0 0 0 rgba(140,133,115,0.4)', '0 0 0 30px rgba(140,133,115,0)', '0 0 0 0 rgba(140,133,115,0.4)']
                                                : '0 0 0 0 rgba(140,133,115,0)'
                                        }}
                                        transition={{
                                            boxShadow: { duration: 3, repeat: Infinity },
                                            scale: { duration: 0.2 }
                                        }}
                                    >
                                        {/* Inner glow */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-silver-400/5"
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                opacity: [0.3, 0.6, 0.3]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />

                                        <div className="relative flex items-center justify-center">
                                            <Play className="w-12 h-12 md:w-14 md:h-14 text-white fill-white/90 ml-2 drop-shadow-lg" />
                                        </div>
                                    </motion.button>

                                    <motion.div
                                        className="space-y-5 mb-10"
                                        animate={{ opacity: [0.8, 1, 0.8] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <Sparkles className="w-5 h-5 text-silver-400" />
                                            <p className="text-white text-xl md:text-2xl font-bold leading-tight">
                                                {t.liveDemo.ctaTitle}
                                            </p>
                                        </div>
                                        <p className="text-grey-400 text-sm md:text-base leading-relaxed">
                                            {t.liveDemo.ctaDesc}
                                        </p>
                                    </motion.div>

                                    {/* CTA Button */}
                                    <motion.button
                                        onClick={handleOpenTranslator}
                                        className="group px-8 md:px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-silver-500/20 to-graphite-700/20 border-2 border-silver-500/30 rounded-full hover:border-silver-400/50 hover:from-silver-500/30 hover:to-graphite-700/30 transition-all duration-300 relative overflow-hidden shadow-lg"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t.liveDemo.ctaButton}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-silver-500/0 via-silver-400/20 to-silver-500/0"
                                            animate={{ x: ['-200%', '200%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                        />
                                    </motion.button>
                                </div>

                                {/* Live Demo Indicators */}
                                <motion.div
                                    className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="bg-graphite-900/95 backdrop-blur-md border border-white/10 px-4 md:px-6 py-3 md:py-4 rounded-2xl shadow-2xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-grey-500 font-bold">
                                                {t.liveDemo.detection}
                                            </span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl md:text-2xl font-bold text-white">
                                                Hello
                                            </span>
                                            <span className="text-xs md:text-sm text-green-400 font-mono font-bold">
                                                92%
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Performance Stats */}
                                <motion.div
                                    className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-20 hidden sm:flex gap-2 md:gap-3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {[
                                        { label: t.liveDemo.stats.fps, value: '30' },
                                        { label: t.liveDemo.stats.latency, value: '<100ms' }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-graphite-900/95 backdrop-blur-md border border-white/10 px-3 md:px-4 py-2 rounded-lg">
                                            <p className="text-[8px] md:text-[9px] uppercase tracking-wider text-grey-500 font-bold mb-0.5">
                                                {stat.label}
                                            </p>
                                            <p className="text-xs md:text-sm font-mono font-bold text-silver-300">
                                                {stat.value}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-4 p-4 rounded-xl bg-graphite-900/30 border border-graphite-800/50"
                            whileHover={{ scale: 1.03, borderColor: 'rgba(140,133,115,0.3)' }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-silver-500/10 flex items-center justify-center flex-shrink-0">
                                <benefit.icon className="w-5 h-5 text-silver-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm leading-tight">{benefit.title}</h4>
                                <p className="text-grey-500 text-xs leading-normal">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LiveDemo;