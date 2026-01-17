import { motion } from "framer-motion";
import { Ear, GraduationCap, School, Building2, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TargetAudience = () => {
    const { t } = useLanguage();

    const audiences = [
        {
            icon: Ear,
            label: t.targetAudience.audiences[0].label,
            stat: t.targetAudience.audiences[0].stat,
            context: t.targetAudience.audiences[0].context
        },
        {
            icon: GraduationCap,
            label: t.targetAudience.audiences[1].label,
            stat: t.targetAudience.audiences[1].stat,
            context: t.targetAudience.audiences[1].context
        },
        {
            icon: Building2,
            label: t.targetAudience.audiences[2].label,
            stat: t.targetAudience.audiences[2].stat,
            context: t.targetAudience.audiences[2].context
        },
        {
            icon: Users,
            label: t.targetAudience.audiences[3].label,
            stat: t.targetAudience.audiences[3].stat,
            context: t.targetAudience.audiences[3].context
        }
    ];

    const useCases = [
        {
            title: t.targetAudience.useCases[0].title,
            desc: t.targetAudience.useCases[0].desc,
        },
        {
            title: t.targetAudience.useCases[1].title,
            desc: t.targetAudience.useCases[1].desc,
        },
        {
            title: t.targetAudience.useCases[2].title,
            desc: t.targetAudience.useCases[2].desc,
        }
    ];

    return (
        <section className="py-32 bg-graphite-900 border-y border-graphite-800 relative">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">{t.targetAudience.title}</h2>
                    <p className="text-grey-500 text-base">{t.targetAudience.desc}</p>
                </motion.div>

                {/* Audience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {audiences.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-graphite-950 border border-graphite-800 rounded-xl p-6 hover:border-graphite-700 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-graphite-800 border border-graphite-700 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-grey-500" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-white mb-1">{item.label}</h3>
                                    <div className="flex items-baseline gap-2 mt-2">
                                        <span className="text-2xl font-mono font-semibold text-grey-400">{item.stat}</span>
                                        <span className="text-xs text-grey-600">{item.context}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Use Cases */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-12 border-t border-graphite-800"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                        {useCases.map((useCase, i) => (
                            <div key={i}>
                                <h4 className="text-grey-400 font-medium mb-2">{useCase.title}</h4>
                                <p className="text-grey-600 leading-relaxed">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TargetAudience;