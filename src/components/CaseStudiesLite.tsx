import { motion, type Variants } from "framer-motion";

const CaseStudiesLite = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const cases = [
        {
            name: "RevLeak",
            tag: "SaaS Tool",
            details: [
                "Identified hidden Stripe revenue leaks for SaaS founders.",
                "Built read-only analytics and alerting.",
                "Designed to save companies thousands per month.",
            ],
        },
        {
            name: "Prima Designs",
            tag: "Agency Site",
            details: [
                "Premium web design agency landing page.",
                "Scroll-driven animations with Apple-inspired minimalism.",
                "Built for conversion and brand confidence.",
            ],
        },
        {
            name: "Mend OS",
            tag: "Productivity App",
            details: [
                "Autonomous Chief of Staff application.",
                "Real-time financial vitals and habit tracking.",
                "Cyberpunk design system with neon accents.",
            ],
        },
    ];

    return (
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-12 font-medium"
                >
                    Selected Work
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {cases.map((caseItem, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="p-6 md:p-8 border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 rounded-sm"
                        >
                            <div className="flex items-baseline justify-between mb-5">
                                <h3 className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-medium text-white tracking-tight">
                                    {caseItem.name}
                                </h3>
                                <span className="text-[10px] tracking-[0.1em] text-neutral-500 uppercase font-medium">
                                    {caseItem.tag}
                                </span>
                            </div>
                            <div className="space-y-2.5">
                                {caseItem.details.map((detail, j) => (
                                    <p
                                        key={j}
                                        className="text-[14px] text-neutral-400 font-light leading-[1.7]"
                                    >
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudiesLite;
