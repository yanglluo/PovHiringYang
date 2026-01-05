import { motion, type Variants } from "framer-motion";

const POVSection = () => {
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

    const bodyLines = [
        "You don't need another resume.",
        "You need someone who ships, thinks in systems, and cares about leverage.",
        "This site shows how I think, not just what I've done.",
    ];

    return (
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-3xl mx-auto px-6 md:px-12"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-8 font-medium"
                >
                    The Pitch
                </motion.span>

                <div className="space-y-5">
                    {bodyLines.map((line, i) => (
                        <motion.p
                            key={i}
                            variants={itemVariants}
                            className={`text-[clamp(1.125rem,2.5vw,1.5rem)] leading-[1.6] ${i === 0
                                ? 'text-white font-medium'
                                : 'text-neutral-400 font-light'
                                }`}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default POVSection;
