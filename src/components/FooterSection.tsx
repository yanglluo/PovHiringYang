import { motion } from "framer-motion";

interface FooterSectionProps {
    onResumeClick: () => void;
}

const FooterSection = ({ onResumeClick }: FooterSectionProps) => {
    const links = [
        { label: "Email", href: "mailto:Yangluo2004@gmail.com" },
        { label: "GitHub", href: "https://github.com/yanglluo" },
        { label: "LinkedIn", href: "https://linkedin.com/in/yanglluo" },
    ];

    return (
        <section className="w-full py-24 md:py-32 lg:py-40 bg-[#050505] border-t border-white/[0.06]">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-6 md:px-12"
            >
                <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-8 font-medium">
                    Connect
                </span>

                <p className="text-[clamp(1.375rem,3vw,1.75rem)] text-white font-medium leading-[1.4] mb-6 tracking-tight">
                    If this resonates, let's talk.
                </p>

                <p className="text-[15px] text-neutral-400 font-light leading-[1.7] mb-10 max-w-lg">
                    I'd love to chat about how I can contribute to what you're building.
                </p>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {/* Resume Button */}
                    <motion.button
                        onClick={onResumeClick}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase transition-all duration-300 rounded-sm bg-white text-[#050505] hover:bg-neutral-200"
                    >
                        Resume
                    </motion.button>

                    {/* Other Links */}
                    {links.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase transition-all duration-300 rounded-sm text-neutral-400 border border-white/[0.08] hover:border-white/[0.2] hover:text-white"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                <div className="mt-24 pt-10 border-t border-white/[0.06]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <span className="text-[13px] text-neutral-500 font-light">
                            Yang Luo · 2026
                        </span>
                        <span className="text-[13px] text-neutral-500 font-light">
                            Yangluo2004@gmail.com
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterSection;
