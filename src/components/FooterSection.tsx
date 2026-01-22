import { motion } from "framer-motion";

interface FooterSectionProps {
    onResumeClick: () => void;
}

const FooterSection = ({ onResumeClick }: FooterSectionProps) => {
    const links = [
        { label: "Email", href: "mailto:theyangluo@gmail.com" },
        { label: "X", href: "https://x.com/yangbuilds" },
        { label: "LinkedIn", href: "https://linkedin.com/in/yanglluo" },
    ];

    return (
        <section className="w-full py-28 md:py-36 lg:py-44 bg-[#050505] border-t border-white/[0.06]">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto px-6 md:px-12 text-center"
            >
                <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-8 font-medium">
                    Connect
                </span>

                <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] text-white font-semibold leading-[1.2] mb-6 tracking-tight">
                    If this resonates, let's talk.
                </h2>

                <p className="text-[16px] text-neutral-400 font-light leading-[1.8] mb-12 max-w-lg mx-auto">
                    I'd love to chat about how I can contribute to what you're building.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    {/* Resume Button */}
                    <motion.button
                        onClick={onResumeClick}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="btn-primary"
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
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="btn-secondary"
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                <div className="pt-10 border-t border-white/[0.06]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <span className="text-[13px] text-neutral-500 font-light">
                            Yang Luo · 2026
                        </span>
                        <span className="text-[13px] text-neutral-500 font-light">
                            theyangluo@gmail.com
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterSection;
