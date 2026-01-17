import { motion } from "framer-motion";
import { Video, Keyboard, Mic, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Features = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { t } = useLanguage();

    const features = [
        {
            icon: Video,
            title: t.features.list[0].title,
            text: t.features.list[0].text,
            gradient: "from-silver-500/10 to-graphite-800/10"
        },
        {
            icon: Keyboard,
            title: t.features.list[1].title,
            text: t.features.list[1].text,
            gradient: "from-graphite-700/10 to-silver-600/10"
        },
        {
            icon: Mic,
            title: t.features.list[2].title,
            text: t.features.list[2].text,
            gradient: "from-silver-600/10 to-graphite-700/10"
        },
        {
            icon: Languages,
            title: t.features.list[3].title,
            text: t.features.list[3].text,
            gradient: "from-graphite-800/10 to-silver-500/10"
        },
    ];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        if (hoveredIndex !== index) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section className="py-32 px-4 bg-graphite-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-graphite-900 to-graphite-950" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-graphite-700/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{t.features.title}</h2>
                    <p className="text-grey-400 text-lg">{t.features.desc}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onMouseMove={(e) => handleMouseMove(e, i)}
                            className={`relative h-80 rounded-3xl border overflow-hidden transition-all duration-500 ${hoveredIndex !== null && hoveredIndex !== i
                                ? 'opacity-50 scale-95'
                                : 'opacity-100 scale-100'
                                } ${hoveredIndex === i
                                    ? 'border-silver-500/50 shadow-[0_0_50px_-15px_rgba(140,133,115,0.4)]'
                                    : 'border-graphite-700'
                                }`}
                        >
                            {/* Spotlight Effect */}
                            {hoveredIndex === i && (
                                <motion.div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(140,133,115,0.15), transparent 80%)`,
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.3, 0.2],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}

                            {/* Card Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
                            <div className="absolute inset-0 bg-graphite-900/80 backdrop-blur-sm" />

                            {/* Grid Pattern Overlay */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                                     linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}
                            />

                            {/* Content */}
                            <div className="relative h-full p-8 flex flex-col justify-between">
                                {/* Icon Section */}
                                <div>
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 transition-all duration-500 ${hoveredIndex === i
                                            ? 'from-silver-500/20 to-silver-600/10 shadow-lg'
                                            : 'from-silver-500/10 to-transparent'
                                            }`}
                                        animate={{
                                            scale: hoveredIndex === i ? [1, 1.05, 1] : 1,
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: hoveredIndex === i ? Infinity : 0,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {/* Glow ring on hover */}
                                        {hoveredIndex === i && (
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl border-2 border-silver-400/30"
                                                initial={{ scale: 1, opacity: 0.5 }}
                                                animate={{ scale: 1.3, opacity: 0 }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                            />
                                        )}

                                        <feature.icon className={`w-7 h-7 transition-colors duration-500 ${hoveredIndex === i ? 'text-silver-300' : 'text-silver-400'
                                            }`} />
                                    </motion.div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-6 right-6 flex gap-1">
                                        {[...Array(3)].map((_, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="w-1.5 h-1.5 rounded-full bg-silver-500"
                                                animate={{
                                                    opacity: hoveredIndex === i ? [0.3, 1, 0.3] : 0.2,
                                                    scale: hoveredIndex === i ? [1, 1.2, 1] : 1,
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    delay: idx * 0.2,
                                                    repeat: hoveredIndex === i ? Infinity : 0,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Text Section */}
                                <div>
                                    <motion.h4
                                        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${hoveredIndex === i ? 'text-silver-200' : 'text-white'
                                            }`}
                                        animate={{
                                            x: hoveredIndex === i ? 2 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {feature.title}
                                    </motion.h4>
                                    <p className="text-grey-400 text-sm leading-relaxed font-light">
                                        {feature.text}
                                    </p>

                                    {/* Progress Bar Animation */}
                                    <motion.div
                                        className="mt-4 h-1 bg-graphite-800 rounded-full overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-silver-500 to-silver-400 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: hoveredIndex === i ? "100%" : "0%" }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <motion.div
                                className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-silver-500/5 to-transparent rounded-tl-full"
                                animate={{
                                    opacity: hoveredIndex === i ? [0.3, 0.5, 0.3] : 0.1,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-grey-500 text-sm inline-flex items-center gap-2 px-5 py-3 rounded-full border border-graphite-800 bg-graphite-900/50">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-silver-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-silver-500"></span>
                        </span>
                        {t.features.footer}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;