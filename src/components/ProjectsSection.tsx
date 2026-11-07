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
            name: "Provision",
            url: "https://github.com/yanglluo/provision-case-study",
            caseStudyUrl: "https://github.com/yanglluo/provision-case-study",
            category: "Native iOS Nutrition App",
            emoji: "🌿",
            problem: "Meal descriptions, estimated portions, and incomplete food data can turn uncertain inputs into nutrition totals that look more precise than they are.",
            why: "People should be able to inspect the food source and portion behind a nutrition record, with missing information kept visible.",
            built: "A SwiftUI app that connects food exploration, ingredient and source review, explicit meal confirmation, an on-device journal, and recorded-period insights. The public case study includes actual QA simulator screenshots and architecture diagrams.",
            decisions: "Separated recoverable drafts from confirmed meals, preserved unknown-versus-zero nutrient values, and validated atomic saves before reporting success. The app is in development; its source remains private.",
            tech: ["Swift", "SwiftUI", "Observation", "Codable", "XCTest"],
            date: "In development",
        },
        {
            name: "Signal Desk",
            url: "https://github.com/yanglluo/signal-desk-case-study",
            caseStudyUrl: "https://github.com/yanglluo/signal-desk-case-study",
            category: "AI-Assisted Media Monitoring",
            emoji: "📰",
            problem: "Media monitoring spans discovery feeds, article text, duplicate links, model suggestions, editorial decisions, and report preparation.",
            why: "A discovered article or AI suggestion should not become official coverage without evidence checks and a deliberate human decision.",
            built: "A media-monitoring workflow connecting multi-source ingestion, deduplication, structured AI suggestions, workspace-scoped review, and approved-only report generation. The public case study explains the architecture through fictional examples.",
            decisions: "Validated quoted evidence against the current article, kept model suggestions separate from reviewer decisions, and made provider failures and resumable work visible. Company code, client identities, and operational data remain private.",
            tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Vitest"],
            date: "Public case study",
        },
        {
            name: "Mend",
            url: "https://github.com/yanglluo/MendFinanceApp",
            category: "Student Budgeting Prototype",
            emoji: "💚",
            problem: "Budgeting feedback can feel overwhelming when every screen presents detailed spending numbers.",
            why: "Students should be able to choose precise numbers, gentler trends, or habit-focused feedback while tracking expenses.",
            built: "A React Native and Expo prototype with manual expense entry, local SQLite persistence, budget views, rules-based insights, and mascot feedback.",
            decisions: "Kept feedback modes separate from deterministic analysis. Authentication is mocked; cloud sync is a placeholder and there is no bank integration.",
            tech: ["React Native", "Expo", "TypeScript", "SQLite"],
            date: "Prototype",
        },
        {
            name: "RevLeak",
            url: "https://github.com/yanglluo/RevLeak",
            category: "Stripe Billing-Risk Prototype",
            emoji: "💸",
            problem: "Failed payments, overdue subscriptions, and expiring cards are spread across billing records.",
            why: "A prioritized view helps someone investigate billing risks and understand the affected customer context.",
            built: "A Next.js and TypeScript prototype with Stripe sync, typed risk detectors, dashboard views, and server-side recovery action routes.",
            decisions: "Separated risk detection from transport and UI. Webhook business-state updates and persistent dismiss/resolve actions remain incomplete; some statistics are placeholders. Recovery routes can perform writes and must use test credentials.",
            tech: ["Next.js", "TypeScript", "Stripe", "Supabase", "Zustand"],
            date: "Prototype",
        },
        {
            name: "Prima Design Co",
            category: "Freelance Agency",
            emoji: "✨",
            problem: "Small businesses need high-quality web presence but can't afford agencies, and template sites feel generic.",
            why: "A website is often the first touchpoint for a business. The gap between 'has a website' and 'has a website that works' is massive.",
            built: "Founded a freelance web-development business for real estate, retail, and personal-branding clients. Own requirements, responsive React/Next.js development, testing, deployment, and revisions.",
            decisions: "Kept responsibility for requirements, implementation, and post-launch revisions so client feedback could inform the next iteration.",
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
                    {projects.map((project) => (
                        <motion.article
                            key={project.name}
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

                            {project.caseStudyUrl ? (
                                <a
                                    href={project.caseStudyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Read ${project.name} case study on GitHub`}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4 hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white mb-6"
                                >
                                    Read case study on GitHub <span aria-hidden="true">↗</span>
                                </a>
                            ) : null}

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
