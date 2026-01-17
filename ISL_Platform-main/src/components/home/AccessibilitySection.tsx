import { motion } from "framer-motion";
import { Accessibility, CheckCircle, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const AccessibilitySection = () => {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
    const { t, language, setLanguage } = useLanguage();



    return (
        <section className="py-32 px-4 bg-graphite-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-graphite-900 via-graphite-950 to-graphite-900" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-graphite-700/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Accessibility Features */}
                    <motion.div
                        className="space-y-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-silver-500/10 border border-silver-500/20 mb-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Accessibility className="w-4 h-4 text-silver-400" />
                                <span className="text-xs font-bold text-silver-300 uppercase tracking-wider">{t.accessibility.badge}</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight whitespace-pre-line">
                                {t.accessibility.title}
                            </h2>

                            <p className="text-grey-400 text-lg leading-relaxed font-light">
                                {t.accessibility.desc}
                            </p>
                        </div>

                        <ul className="space-y-5">
                            {t.accessibility.features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    onMouseEnter={() => setHoveredFeature(i)}
                                    onMouseLeave={() => setHoveredFeature(null)}
                                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${hoveredFeature === i
                                        ? 'bg-graphite-800/50 border border-silver-500/30 shadow-lg -translate-x-2'
                                        : 'bg-transparent border border-transparent'
                                        }`}
                                >
                                    <motion.div
                                        animate={{
                                            scale: hoveredFeature === i ? [1, 1.2, 1] : 1,
                                            rotate: hoveredFeature === i ? [0, 360] : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <CheckCircle className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${hoveredFeature === i ? 'text-silver-300' : 'text-silver-500'
                                            }`} />
                                    </motion.div>
                                    <span className={`text-base font-medium transition-colors duration-300 ${hoveredFeature === i ? 'text-white' : 'text-grey-300'
                                        }`}>
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Additional Info Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite-900/50 border border-graphite-800 text-grey-400 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="w-2 h-2 bg-silver-500 rounded-full animate-pulse" />
                            <span>{t.accessibility.compliance}</span>
                        </motion.div>
                    </motion.div>

                    {/* Assistant Highlight Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Animated Glow */}
                        <motion.div
                            className="absolute -inset-2 bg-gradient-to-r from-silver-500/10 via-graphite-700/10 to-silver-500/10 rounded-3xl blur-2xl"
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                                scale: [0.98, 1.02, 0.98]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Card Container */}
                        <div className="relative bg-gradient-to-br from-graphite-900 to-graphite-950 border border-graphite-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                            {/* Decorative Grid */}
                            <div
                                className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                                     linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                                    backgroundSize: '30px 30px'
                                }}
                            />

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5 relative z-10">
                                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-silver-500/20 to-graphite-700/20 flex items-center justify-center">
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-silver-400/30"
                                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    {/* Updated: Silver dot (was green) */}
                                    <motion.div
                                        className="w-4 h-4 bg-silver-200 rounded-full shadow-[0_0_15px_rgba(192,192,192,0.6)]"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <MessageSquare className="absolute w-5 h-5 text-silver-800" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-heading">{t.accessibility.assistantTitle}</h3>
                                    <p className="text-sm text-grey-400">{t.accessibility.assistantDesc}</p>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="space-y-4 mb-8 relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex justify-start"
                                >
                                    <div className="p-4 rounded-2xl max-w-[85%] bg-graphite-950 border border-graphite-800 text-grey-300 rounded-tl-sm">
                                        <p className="text-sm leading-relaxed">{t.accessibility.chatHello}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex justify-end"
                                >
                                    <div className="p-4 rounded-2xl max-w-[85%] bg-silver-500/10 border border-silver-500/20 text-white rounded-tr-sm">
                                        <p className="text-sm leading-relaxed">{t.accessibility.chatHelp}</p>
                                    </div>
                                </motion.div>

                                {/* Typing Indicator */}
                                <motion.div
                                    className="flex gap-1.5 pl-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 bg-silver-400 rounded-full"
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{
                                                duration: 0.6,
                                                delay: i * 0.1,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Language Selector */}
                            <div className="flex gap-2 relative z-10">
                                {(['EN', 'HI', 'MR', 'GU'] as const).map(lang => (
                                    <motion.button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-300 ${language === lang
                                            ? 'bg-silver-500/20 border-silver-500/50 text-silver-200 shadow-lg'
                                            : 'bg-graphite-950 border-graphite-700 text-grey-400 hover:border-graphite-600 hover:text-grey-300'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {lang}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Corner Accent */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-silver-500/5 to-transparent rounded-bl-full"
                                animate={{ opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AccessibilitySection;