import { motion, type Variants } from "framer-motion";

const ThinkingSection = () => {
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
        <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-8">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-12"
                >
                    How I Think
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900"
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-[#050505] p-8 md:p-10 group hover:bg-neutral-950 transition-colors duration-300"
                        >
                            <h3 className="text-lg font-medium text-white mb-4 tracking-tight">
                                {card.title}
                            </h3>
                            <p className="text-sm text-neutral-500 font-light leading-relaxed">
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
