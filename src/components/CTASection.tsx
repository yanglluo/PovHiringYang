import { motion } from "framer-motion";

const CTASection = () => {
    const links = [
        { label: "Email", href: "mailto:yang@example.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "X", href: "https://x.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
    ];

    return (
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl mx-auto px-6 md:px-12"
            >
                <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-8 font-medium">
                    Connect
                </span>

                <p className="text-[clamp(1.375rem,3vw,1.75rem)] text-white font-medium leading-[1.4] mb-12 tracking-tight">
                    If this POV matches how you think, we should talk.
                </p>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {links.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase text-neutral-400 border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-all duration-300 rounded-sm"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                <div className="mt-24 pt-10 border-t border-white/[0.06]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <span className="text-[13px] text-neutral-500 font-light">
                            Yang Luo · 2024
                        </span>
                        <span className="text-[13px] text-neutral-500 font-light">
                            Built with React, TypeScript, Tailwind, Framer Motion
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
