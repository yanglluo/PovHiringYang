import { motion, type Variants } from "framer-motion";

const HowIThinkSection = () => {
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

    const itemVariants: Variants = {
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

    const principles = [
        {
            title: "Ambiguous Problems",
            content: "I start by defining what 'done' looks like, then work backwards. Before writing code, I ask: what's the smallest thing I can ship that tests the riskiest assumption? Most failed projects die from unclear goals, not bad code.",
        },
        {
            title: "Breaking Down Systems",
            content: "I map dependencies first. What touches what? What fails if this fails? Then I draw the data flow. If I can't explain the system in two levels of zoom (high-level and one drill-down), it's too tangled. Refactor before shipping.",
        },
        {
            title: "Speed vs. Correctness",
            content: "Depends on the stakes. For money-touching code: correctness first, always. For user-facing iteration: ship fast, measure, fix. The skill is knowing which mode you're in.",
        },
    ];

    const optimizations = [
        "Clarity over cleverness",
        "Constraints over features",
        "Shipped over perfect",
        "Ownership over credit",
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
                    How I Think
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {principles.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-6 md:p-8 border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 rounded-sm"
                        >
                            <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-medium text-white mb-4 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-[14px] text-neutral-400 font-light leading-[1.7]">
                                {card.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Optimization Principles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-16 pt-10 border-t border-white/[0.06]"
                >
                    <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-6 font-medium">
                        What I Optimize For
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                        {optimizations.map((item, i) => (
                            <div key={i} className="text-[15px] text-neutral-400 font-light leading-relaxed">
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowIThinkSection;
