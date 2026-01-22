import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroProps {
    onResumeClick: () => void;
}

const Hero = ({ onResumeClick }: HeroProps) => {
    // Animated keyword carousel
    const keywords = ["fintech infrastructure", "revenue systems", "internal tools", "payment flows", "boring problems"];
    const [currentKeyword, setCurrentKeyword] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

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
            content: ["Yang Luo", "Software Engineer", "Toronto, Canada"],
        },
        {
            label: "EDUCATION",
            content: ["Western University", "B.S. Computer Science", "May 2027"],
        },
        {
            label: "TECH",
            content: ["React / TypeScript", "Node.js / Python", "Tailwind / AWS"],
        },
        {
            label: "FOCUS",
            content: ["Fintech Infrastructure", "Revenue Systems", "Internal Tools"],
        },
        {
            label: "CONNECT",
            content: ["X", "LinkedIn", "Email"],
            links: ["https://x.com/yangbuilds", "https://linkedin.com/in/yanglluo", "mailto:theyangluo@gmail.com"],
        },
    ];

    return (
        <section className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[#050505]">
            {/* Atmospheric Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_70%)] opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.03)_0%,_transparent_50%)]" />

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
                            className="px-5 py-6 md:px-6 md:py-8"
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
                                            target={col.links[j].startsWith("mailto:") ? undefined : "_blank"}
                                            rel="noopener noreferrer"
                                            className="block text-[13px] text-neutral-400 hover:text-white transition-colors duration-200 leading-relaxed"
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
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 md:px-12 py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                    className="text-center max-w-3xl"
                >
                    <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold tracking-[-0.03em] leading-[1.08] mb-8">
                        I build products that handle money carefully.
                    </h1>

                    {/* Animated keyword section */}
                    <div className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-neutral-400 font-normal mb-4 flex flex-wrap items-center justify-center gap-2">
                        <span>Full-stack engineer focused on</span>
                        <span className="relative h-[1.5em] w-[200px] md:w-[260px] overflow-hidden inline-flex">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentKeyword}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute left-0 text-white font-medium"
                                >
                                    {keywords[currentKeyword]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </div>

                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-neutral-500 font-light max-w-lg mx-auto leading-[1.7] mb-12">
                        I like boring problems that matter.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.button
                            onClick={onResumeClick}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                        >
                            View Resume
                        </motion.button>
                        <motion.a
                            href="#why-me"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary"
                        >
                            Why I'd Be a Great Fit
                        </motion.a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="scroll-indicator text-neutral-600 text-[11px] tracking-[0.15em] uppercase flex flex-col items-center gap-2">
                        <span>Scroll</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Stats Bar - Bento Style */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="relative z-10 border-t border-white/[0.06]"
            >
                <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "5+", label: "Websites Shipped" },
                        { value: "$6K+", label: "Client Revenue" },
                        { value: "Full-Stack", label: "End-to-End" },
                        { value: "0→1", label: "Product Focus" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="bento-card p-5 text-center"
                        >
                            <span className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-white tracking-tight block">
                                {stat.value}
                            </span>
                            <span className="block text-[11px] tracking-[0.12em] text-neutral-500 uppercase mt-2 font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
