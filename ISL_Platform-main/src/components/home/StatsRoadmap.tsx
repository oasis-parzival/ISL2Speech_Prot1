import { motion } from "framer-motion";
import { Activity, Clock, Smartphone, LayoutDashboard, GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const StatsRoadmap = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-graphite-950 px-4 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Performance Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-graphite-900 border border-white/5 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-silver-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-silver-400" />
                                {t.statsRoadmap.performance.title}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* FPS Counter */}
                                <div className="p-6 rounded-2xl bg-graphite-950 border border-white/5">
                                    <div className="flex items-end gap-2 mb-2">
                                        <span className="text-4xl font-mono font-bold text-white">60</span>
                                        <span className="text-sm text-grey-500 mb-1">FPS</span>
                                    </div>
                                    <p className="text-sm text-grey-400">{t.statsRoadmap.performance.fps}</p>

                                    {/* Graph Visual */}
                                    <div className="mt-4 flex items-end gap-1 h-8">
                                        {[40, 60, 55, 60, 58, 60, 59, 60].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 bg-silver-500/20 rounded-t-sm"
                                                initial={{ height: "0%" }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ delay: i * 0.05 }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Latency Stat */}
                                <div className="p-6 rounded-2xl bg-graphite-950 border border-white/5">
                                    <div className="flex items-end gap-2 mb-2">
                                        <span className="text-4xl font-mono font-bold text-green-400">12</span>
                                        <span className="text-sm text-grey-500 mb-1">ms</span>
                                    </div>
                                    <p className="text-sm text-grey-400">{t.statsRoadmap.performance.latency}</p>

                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="h-1.5 flex-1 bg-graphite-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-green-500 rounded-full"
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: "15%" }}
                                                transition={{ duration: 1 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Roadmap */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Clock className="w-6 h-6 text-silver-400" />
                            {t.statsRoadmap.roadmap.title}
                        </h3>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: t.statsRoadmap.roadmap.steps[0].title,
                                    desc: t.statsRoadmap.roadmap.steps[0].desc,
                                    status: "current"
                                },
                                {
                                    icon: LayoutDashboard,
                                    title: t.statsRoadmap.roadmap.steps[1].title,
                                    desc: t.statsRoadmap.roadmap.steps[1].desc,
                                    status: "next"
                                },
                                {
                                    icon: Smartphone,
                                    title: t.statsRoadmap.roadmap.steps[2].title,
                                    desc: t.statsRoadmap.roadmap.steps[2].desc,
                                    status: "planned"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 bg-graphite-950 transition-colors ${i === 0 ? 'border-silver-500 text-silver-400' : 'border-graphite-800 text-grey-600'
                                            }`}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        {i !== 2 && <div className="w-0.5 h-full bg-graphite-800 -my-2" />}
                                    </div>
                                    <div className="pb-8 pt-2">
                                        <h4 className={`text-lg font-bold mb-1 transition-colors ${i === 0 ? 'text-white' : 'text-grey-500'
                                            }`}>
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-grey-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    {i === 0 && (
                                        <div className="ml-auto pt-2">
                                            <span className="px-3 py-1 rounded-full bg-silver-500/10 text-silver-400 text-xs font-bold uppercase tracking-wider border border-silver-500/20">
                                                In Progress
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pl-14">
                            <p className="text-sm text-grey-600 font-mono flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                {t.statsRoadmap.roadmap.planned}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsRoadmap;