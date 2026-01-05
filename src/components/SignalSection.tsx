import { motion, type Variants } from "framer-motion";

const SignalSection = () => {
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
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const bullets = [
        "Performance budgets",
        "Developer experience & maintainability",
        "Clean abstractions",
        "Animation restraint",
    ];

    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-neutral-900">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto px-8"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-6"
                >
                    What I Optimize For
                </motion.span>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-medium text-white mb-12 tracking-tight"
                >
                    Signal &gt; Noise
                </motion.h2>

                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {bullets.map((bullet, i) => (
                        <div key={i} className="text-sm text-neutral-400 font-light">
                            {bullet}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="pt-8 border-t border-neutral-900"
                >
                    <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-4">
                        Preferred Stack
                    </span>
                    <p className="font-mono text-xs text-neutral-500 tracking-wide">
                        React · TypeScript · Tailwind · Framer Motion · Supabase · Stripe
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SignalSection;
