import { motion, type Variants } from "framer-motion";

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
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
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const headerColumns = [
        {
            label: "INTRO",
            content: ["Yang Luo", "Product Engineer", "2024–NOW"],
        },
        {
            label: "POSITION",
            content: ["Full-Stack Dev", "Systems Design", "0→1 Products"],
        },
        {
            label: "TECH",
            content: ["React / TypeScript", "Tailwind / Framer", "Supabase / Stripe"],
        },
        {
            label: "FOCUS",
            content: ["Revenue Systems", "Automation", "Developer Experience"],
        },
        {
            label: "CONNECT",
            content: ["GitHub", "Email", "X"],
            links: ["https://github.com", "mailto:yang@example.com", "https://x.com"],
        },
    ];

    return (
        <section className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[#050505]">
            {/* Atmospheric Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_70%)] opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.02)_0%,_transparent_60%)]" />

            {/* Dashboard Header Grid */}
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full border-b border-white/[0.06]"
            >
                <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/[0.06]">
                    {headerColumns.map((col, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="px-5 py-6 md:px-6 md:py-7"
                        >
                            <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-4 font-medium">
                                {col.label}
                            </span>
                            <div className="space-y-1.5">
                                {col.content.map((item, j) => (
                                    col.links ? (
                                        <a
                                            key={j}
                                            href={col.links[j]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-[13px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                                        >
                                            {item}
                                        </a>
                                    ) : (
                                        <span key={j} className="block text-[13px] text-neutral-400 leading-relaxed">
                                            {item}
                                        </span>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.header>

            {/* Centered Hero Content */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 md:px-12 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                    className="text-center max-w-4xl"
                >
                    <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[-0.025em] leading-[1.08] mb-6 md:mb-8">
                        POV: You're hiring Yang.
                    </h1>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-400 font-light max-w-xl mx-auto leading-[1.7]">
                        An engineer who ships products, thinks in systems, and optimizes for leverage.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="relative z-10 border-t border-white/[0.06]"
            >
                <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-center">
                    {[
                        { value: "3+", label: "Projects Shipped" },
                        { value: "0→1", label: "Product Focus" },
                        { value: "Full-Stack", label: "Capability" },
                        { value: "Systems", label: "Thinking" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <span className="text-[clamp(1.25rem,3vw,1.75rem)] font-medium text-white tracking-tight">
                                {stat.value}
                            </span>
                            <span className="block text-[11px] tracking-[0.12em] text-neutral-500 uppercase mt-2 font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
