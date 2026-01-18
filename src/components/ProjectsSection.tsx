import { motion, type Variants } from "framer-motion";

const ProjectsSection = () => {
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

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const projects = [
        {
            name: "Mend",
            url: "https://MendFinance.app",
            category: "AI Financial Wellness",
            problem: "People know they should budget, but existing apps are either too complex (YNAB) or too passive (Mint). There's no tool that actually pushes you toward better habits.",
            why: "Financial health is upstream of everything—stress, career decisions, relationships. Most people don't need more data; they need less friction.",
            built: "AI-powered financial assistant with React, Tailwind, Node.js, MongoDB, and OpenAI API. Surfaces personalized nudges based on spending patterns and stated goals.",
            decisions: "Optimized for daily habit formation over comprehensive tracking. Stripped features that required manual entry. Trade-off: less data granularity, but higher engagement.",
            tech: "React · Node.js · MongoDB · OpenAI API",
            date: "Aug 2025 – Present",
        },
        {
            name: "RevLeak",
            url: "https://RevLeak.io",
            category: "Revenue Infrastructure",
            problem: "SaaS companies lose money to failed payments, expired cards, and dunning gaps—but most founders don't even know it's happening until they audit months later.",
            why: "Churn from payment failures is preventable but invisible. A tool that surfaces this in real-time saves real money.",
            built: "Stripe-integrated dashboard that identifies revenue leaks: failed payments, subscription downgrades, and dunning issues. Read-only API integration with webhook listeners for real-time alerting.",
            decisions: "Built as read-only intentionally—no write access reduces risk and increases trust. Prioritized alert accuracy over alert volume. Zero false positives.",
            tech: "React · TypeScript · Stripe API · Supabase",
            date: "Dec 2024 – Present",
        },
        {
            name: "Prima Design Co",
            category: "Freelance Agency",
            problem: "Small businesses need high-quality web presence but can't afford agencies, and template sites feel generic.",
            why: "A website is often the first touchpoint for a business. The gap between 'has a website' and 'has a website that works' is massive.",
            built: "Co-founded and scaled a freelance web development business. Delivered 5 fully customized websites in 5 months, generating $6,000+ in client revenue across real estate, retail, and personal branding.",
            decisions: "Took on projects where I could own the full stack, not just execute designs. Said no to clients who wanted 'just a developer'. Fewer projects, full ownership.",
            tech: "React · Next.js · Tailwind · Figma",
            date: "Nov 2024 – Present",
        },
    ];

    return (
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-12 font-medium"
                >
                    What I've Built
                </motion.span>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-12"
                >
                    {projects.map((project, i) => (
                        <motion.article
                            key={i}
                            variants={cardVariants}
                            className="p-6 md:p-8 border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.01] transition-all duration-300 rounded-sm"
                        >
                            {/* Header */}
                            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
                                <div className="flex items-baseline gap-4">
                                    <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium text-white tracking-tight">
                                        {project.url ? (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-neutral-300 transition-colors inline-flex items-center gap-2"
                                            >
                                                {project.name}
                                                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ) : (
                                            project.name
                                        )}
                                    </h3>
                                    <span className="text-[10px] tracking-[0.1em] text-neutral-500 uppercase font-medium">
                                        {project.category}
                                    </span>
                                </div>
                                <span className="text-[12px] text-neutral-500 font-light">
                                    {project.date}
                                </span>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] block mb-2">
                                            The Problem
                                        </span>
                                        <p className="text-[14px] text-neutral-400 leading-[1.7]">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] block mb-2">
                                            Why It Matters
                                        </span>
                                        <p className="text-[14px] text-neutral-400 leading-[1.7]">
                                            {project.why}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] block mb-2">
                                            What I Built
                                        </span>
                                        <p className="text-[14px] text-neutral-400 leading-[1.7]">
                                            {project.built}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-[0.1em] block mb-2">
                                            Key Decisions
                                        </span>
                                        <p className="text-[14px] text-neutral-400 leading-[1.7]">
                                            {project.decisions}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="pt-4 border-t border-white/[0.04]">
                                <span className="font-mono text-[12px] text-neutral-600">
                                    {project.tech}
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
