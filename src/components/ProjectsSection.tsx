import { motion, type Variants } from "framer-motion";

const ProjectsSection = () => {
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

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
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

    const projects = [
        {
            name: "Mend",
            url: "https://MendFinance.app",
            category: "AI Financial Wellness",
            emoji: "💚",
            problem: "People know they should budget, but existing apps are either too complex (YNAB) or too passive (Mint). There's no tool that actually pushes you toward better habits.",
            why: "Financial health is upstream of everything: stress, career decisions, relationships. Most people don't need more data; they need less friction.",
            built: "AI-powered financial assistant with React, Tailwind, Node.js, MongoDB, and OpenAI API. Surfaces personalized nudges based on spending patterns and stated goals.",
            decisions: "Optimized for daily habit formation over comprehensive tracking. Stripped features that required manual entry. Trade-off: less data granularity, but higher engagement.",
            tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
            date: "Aug 2025 – Present",
        },
        {
            name: "RevLeak",
            url: "https://revleak.co",
            category: "Revenue Infrastructure",
            emoji: "💸",
            problem: "SaaS companies lose money to failed payments, expired cards, and dunning gaps. Most founders don't even know it's happening until they audit months later.",
            why: "Churn from payment failures is preventable but invisible. A tool that surfaces this in real-time saves real money.",
            built: "Stripe-integrated dashboard that identifies revenue leaks: failed payments, subscription downgrades, and dunning issues. Read-only API integration with webhook listeners for real-time alerting.",
            decisions: "Built as read-only intentionally. No write access reduces risk and increases trust. Prioritized alert accuracy over alert volume. Zero false positives.",
            tech: ["React", "Tailwind CSS", "Python", "PostgreSQL"],
            date: "Oct 2025 – Present",
        },
        {
            name: "Prima Design Co",
            category: "Freelance Agency",
            emoji: "✨",
            problem: "Small businesses need high-quality web presence but can't afford agencies, and template sites feel generic.",
            why: "A website is often the first touchpoint for a business. The gap between 'has a website' and 'has a website that works' is massive.",
            built: "Co-founded and scaled a freelance web development business. Delivered 5 fully customized websites in 5 months, generating $6,000+ in client revenue across real estate, retail, and personal branding.",
            decisions: "Took on projects where I could own the full stack, not just execute designs. Said no to clients who wanted 'just a developer'. Fewer projects, full ownership.",
            tech: ["React", "Next.js", "Tailwind", "Figma"],
            date: "Nov 2024 – Present",
        },
    ];

    return (
        <section className="w-full py-28 md:py-36 lg:py-44 bg-[#050505] border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-4 font-medium">
                        What I've Built
                    </span>
                    <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-white tracking-tight">
                        Projects that solve real problems
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-8"
                >
                    {projects.map((project, i) => (
                        <motion.article
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="bento-card p-7 md:p-9"
                        >
                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{project.emoji}</span>
                                    <div>
                                        <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-semibold text-white tracking-tight">
                                            {project.url ? (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-neutral-300 transition-colors inline-flex items-center gap-2 group"
                                                >
                                                    {project.name}
                                                    <svg className="w-4 h-4 opacity-40 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                project.name
                                            )}
                                        </h3>
                                        <span className="text-[12px] text-neutral-500 font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[12px] text-neutral-500 font-light bg-white/[0.03] px-3 py-1.5 rounded-full">
                                    {project.date}
                                </span>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.12em] block mb-3">
                                            The Problem
                                        </span>
                                        <p className="text-[15px] text-neutral-400 leading-[1.75]">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.12em] block mb-3">
                                            Why It Matters
                                        </span>
                                        <p className="text-[15px] text-neutral-400 leading-[1.75]">
                                            {project.why}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.12em] block mb-3">
                                            What I Built
                                        </span>
                                        <p className="text-[15px] text-neutral-400 leading-[1.75]">
                                            {project.built}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.12em] block mb-3">
                                            Key Decisions
                                        </span>
                                        <p className="text-[15px] text-neutral-400 leading-[1.75]">
                                            {project.decisions}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="pt-6 border-t border-white/[0.04] flex flex-wrap gap-2">
                                {project.tech.map((tech, j) => (
                                    <span key={j} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
