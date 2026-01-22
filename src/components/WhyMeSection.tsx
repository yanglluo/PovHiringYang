import { motion, type Variants } from "framer-motion";

const WhyMeSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
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

    const traits = [
        {
            title: "End-to-end ownership",
            description: "I don't hand off problems. From scoping to shipping to post-launch support, I own the full lifecycle.",
            icon: "🎯"
        },
        {
            title: "Product thinking",
            description: "I build features that solve real problems, not just implement specs. I ask why before I ask how.",
            icon: "💡"
        },
        {
            title: "Systems mindset",
            description: "I think about edge cases, failure modes, and scale from day one. Not as an afterthought.",
            icon: "⚙️"
        }
    ];

    return (
        <section id="why-me" className="w-full py-28 md:py-36 lg:py-44 bg-[#050505] border-t border-white/[0.06]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto px-6 md:px-12"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-6 font-medium"
                >
                    Why Me
                </motion.span>

                <motion.h2
                    variants={itemVariants}
                    className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white tracking-tight mb-8 leading-[1.2]"
                >
                    I prefer building things that are unsexy and important.
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-6 text-[16px] text-neutral-400 leading-[1.8] mb-14">
                    <p>
                        Most engineers optimize for resume-friendly companies. I'm optimizing for{" "}
                        <span className="text-white font-medium">problems that compound</span>. Infrastructure, internal tools, and systems that run quietly in the background.
                    </p>

                    <p>
                        I've built revenue systems, payment integrations, and client-facing products that handle real money. I understand the care required when dealing with financial data. Every edge case matters.
                    </p>
                </motion.div>

                {/* Trait Cards - Bento Grid */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
                >
                    {traits.map((trait, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="bento-card p-6"
                        >
                            <span className="text-2xl mb-4 block">{trait.icon}</span>
                            <h3 className="text-white font-semibold text-[15px] mb-2">
                                {trait.title}
                            </h3>
                            <p className="text-neutral-400 text-[14px] leading-[1.7]">
                                {trait.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    variants={itemVariants}
                    className="bento-card p-8 text-center"
                >
                    <p className="text-[17px] text-neutral-300 leading-[1.8]">
                        I prefer working on systems where correctness matters more than cleverness:{" "}
                        <span className="text-white font-semibold">boring problems done well</span>.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WhyMeSection;
