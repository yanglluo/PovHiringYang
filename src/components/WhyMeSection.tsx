import { motion, type Variants } from "framer-motion";

const WhyMeSection = () => {
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
        hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
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

    return (
        <section id="why-me" className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl mx-auto px-6 md:px-12"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-8 font-medium"
                >
                    Why Me
                </motion.span>

                <motion.h2
                    variants={itemVariants}
                    className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-white tracking-tight mb-10 leading-[1.25]"
                >
                    I prefer building things that are unsexy and important.
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-5 text-[15px] text-neutral-400 leading-[1.75]">
                    <p>
                        Most engineers optimize for resume-friendly companies. I'm optimizing for{" "}
                        <span className="text-white font-medium">problems that compound</span>. Infrastructure, internal tools, and systems that run quietly in the background.
                    </p>

                    <p>
                        I've built revenue systems, payment integrations, and client-facing products that handle real money. I understand the care required when dealing with financial data. Every edge case matters.
                    </p>

                    <p className="text-white font-medium">What I bring to engineering teams:</p>

                    <ul className="space-y-4 ml-1">
                        <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-neutral-600">
                            <span className="text-white font-medium">End-to-end ownership.</span>{" "}
                            I don't hand off problems. From scoping to shipping to post-launch support, I own the full lifecycle.
                        </li>
                        <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-neutral-600">
                            <span className="text-white font-medium">Product thinking.</span>{" "}
                            I build features that solve real problems, not just implement specs. I ask why before I ask how.
                        </li>
                        <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-neutral-600">
                            <span className="text-white font-medium">Systems mindset.</span>{" "}
                            I think about edge cases, failure modes, and scale from day one. Not as an afterthought.
                        </li>
                    </ul>

                    <div className="pt-8 mt-8 border-t border-white/[0.06]">
                        <p>
                            I prefer working on systems where correctness matters more than cleverness:{" "}
                            <span className="text-white font-medium">boring problems done well</span>.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WhyMeSection;
