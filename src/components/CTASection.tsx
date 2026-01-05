import { motion } from "framer-motion";

const CTASection = () => {
    const links = [
        { label: "Email", href: "mailto:yang@example.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "X", href: "https://x.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
    ];

    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-neutral-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto px-8"
            >
                <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-6">
                    Connect
                </span>

                <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-12 tracking-tight">
                    If this POV matches how you think, we should talk.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    {links.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-neutral-500 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-300"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                <div className="mt-20 pt-8 border-t border-neutral-900">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <span className="text-xs text-neutral-600">
                            Yang Luo · 2024
                        </span>
                        <span className="text-xs text-neutral-600">
                            Built with React, TypeScript, Tailwind, Framer Motion
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
