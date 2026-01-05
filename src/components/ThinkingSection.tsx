import { motion, type Variants } from "framer-motion";

const ThinkingSection = () => {
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

    const cards = [
        {
            title: "Systems Thinking",
            body: "I design products as feedback loops, not pages. Scale is a first-class constraint.",
        },
        {
            title: "Execution Bias",
            body: "MVPs over mockups. Ship, measure, iterate.",
        },
        {
            title: "Leverage Focus",
            body: "Automation beats manpower. Tools should compound time.",
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
                    How I Think
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-6 md:p-8 border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 rounded-sm"
                        >
                            <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-medium text-white mb-4 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-[15px] text-neutral-400 font-light leading-[1.7]">
                                {card.body}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ThinkingSection;
