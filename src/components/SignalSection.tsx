import { motion, type Variants } from "framer-motion";

const SignalSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
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
        "Developer experience",
        "Clean abstractions",
        "Animation restraint",
    ];

    return (
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
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
                    What I Optimize For
                </motion.span>

                <motion.h2
                    variants={itemVariants}
                    className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-white mb-12 tracking-tight"
                >
                    Signal &gt; Noise
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16"
                >
                    {bullets.map((bullet, i) => (
                        <div key={i} className="text-[15px] text-neutral-400 font-light leading-relaxed">
                            {bullet}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="pt-10 border-t border-white/[0.06]"
                >
                    <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-5 font-medium">
                        Preferred Stack
                    </span>
                    <p className="font-mono text-[13px] text-neutral-500 tracking-wide">
                        React · TypeScript · Tailwind · Framer Motion · Supabase · Stripe
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SignalSection;
