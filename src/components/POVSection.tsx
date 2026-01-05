import { motion, type Variants } from "framer-motion";

const POVSection = () => {
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

    const bodyLines = [
        "You don't need another resume.",
        "You need someone who ships, thinks in systems, and cares about leverage.",
        "This site shows how I think — not just what I've done.",
    ];

    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-neutral-900">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-4xl mx-auto px-8"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-6"
                >
                    The Pitch
                </motion.span>

                <div className="space-y-6">
                    {bodyLines.map((line, i) => (
                        <motion.p
                            key={i}
                            variants={itemVariants}
                            className={`text-xl md:text-2xl leading-relaxed ${i === 0 ? 'text-white font-medium' : 'text-neutral-400 font-light'}`}
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
