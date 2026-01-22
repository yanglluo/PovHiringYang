import { motion, type Variants } from "framer-motion";

const HowIThinkSection = () => {
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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const principles = [
        {
            title: "Ambiguous Problems",
            emoji: "🔍",
            content: "I start by defining what 'done' looks like, then work backwards. Before writing code, I ask: what's the smallest thing I can ship that tests the riskiest assumption? Most failed projects die from unclear goals, not bad code.",
        },
        {
            title: "Breaking Down Systems",
            emoji: "🧩",
            content: "I map dependencies first. What touches what? What fails if this fails? Then I draw the data flow. If I can't explain the system in two levels of zoom (high-level and one drill-down), it's too tangled. Refactor before shipping.",
        },
        {
            title: "Speed vs. Correctness",
            emoji: "⚖️",
            content: "Depends on the stakes. For money-touching code: correctness first, always. For user-facing iteration: ship fast, measure, fix. The skill is knowing which mode you're in.",
        },
    ];

    const optimizations = [
        { label: "Clarity over cleverness", icon: "💎" },
        { label: "Constraints over features", icon: "🎯" },
        { label: "Shipped over perfect", icon: "🚀" },
        { label: "Ownership over credit", icon: "🤝" },
    ];

    return (
        <section className="w-full py-28 md:py-36 lg:py-44 bg-[#050505] border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-4 font-medium">
                        How I Think
                    </span>
                    <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-white tracking-tight">
                        Problem-solving philosophy
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {principles.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="bento-card p-7"
                        >
                            <span className="text-2xl mb-4 block">{card.emoji}</span>
                            <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-white mb-4 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-[14px] text-neutral-400 leading-[1.75]">
                                {card.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Optimization Principles - Bento Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-16"
                >
                    <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-8 font-medium">
                        What I Optimize For
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {optimizations.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="bento-card p-5 text-center"
                            >
                                <span className="text-xl mb-2 block">{item.icon}</span>
                                <span className="text-[14px] text-neutral-400 font-medium leading-relaxed block">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowIThinkSection;
