import { motion, type Variants } from "framer-motion";

const CaseStudiesLite = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 16 },
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
        <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-8">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-12"
                >
                    Selected Work
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900"
                >
                    {cases.map((caseItem, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="bg-[#050505] p-8 md:p-10 group hover:bg-neutral-950 transition-colors duration-300"
                        >
                            <div className="flex items-baseline justify-between mb-4">
                                <h3 className="text-xl font-medium text-white tracking-tight">
                                    {caseItem.name}
                                </h3>
                                <span className="text-[10px] tracking-widest text-neutral-600 uppercase">
                                    {caseItem.tag}
                                </span>
                            </div>
                            <div className="space-y-2">
                                {caseItem.details.map((detail, j) => (
                                    <p
                                        key={j}
                                        className="text-sm text-neutral-500 font-light leading-relaxed"
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
