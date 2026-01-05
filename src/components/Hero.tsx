import { motion, type Variants } from "framer-motion";

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
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
            content: ["Full-Stack Development", "Systems Design", "0→1 Products"],
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
        <section className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
            {/* Atmospheric Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_70%)] opacity-80" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)]" />

            {/* Dashboard Header Grid */}
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full border-b border-neutral-900"
            >
                <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-neutral-900">
                    {headerColumns.map((col, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-4 md:p-6"
                        >
                            <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-3">
                                {col.label}
                            </span>
                            <div className="space-y-1">
                                {col.content.map((item, j) => (
                                    col.links ? (
                                        <a
                                            key={j}
                                            href={col.links[j]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-xs text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ) : (
                                        <span key={j} className="block text-xs text-neutral-400">
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
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="text-center max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.02em] leading-[1.1] mb-8">
                        POV: You're hiring Yang.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
                        An engineer who ships products, thinks in systems, and optimizes for leverage.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="relative z-10 border-t border-neutral-900"
            >
                <div className="max-w-6xl mx-auto px-8 py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
                    <div>
                        <span className="text-2xl md:text-3xl font-medium text-white">3+</span>
                        <span className="block text-[10px] tracking-widest text-neutral-600 uppercase mt-1">Projects Shipped</span>
                    </div>
                    <div>
                        <span className="text-2xl md:text-3xl font-medium text-white">0→1</span>
                        <span className="block text-[10px] tracking-widest text-neutral-600 uppercase mt-1">Product Focus</span>
                    </div>
                    <div>
                        <span className="text-2xl md:text-3xl font-medium text-white">Full-Stack</span>
                        <span className="block text-[10px] tracking-widest text-neutral-600 uppercase mt-1">Capability</span>
                    </div>
                    <div>
                        <span className="text-2xl md:text-3xl font-medium text-white">Systems</span>
                        <span className="block text-[10px] tracking-widest text-neutral-600 uppercase mt-1">Thinking</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
