import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TechDemo = () => {
    const [text, setText] = useState("");
    const fullText = "> system.init()\n> loading_modules...\n> [OK] React_Engine\n> [OK] Tailwind_CSS\n> [OK] Framer_Motion\n> ready_for_input_";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 35);
        return () => clearInterval(interval);
    }, []);

    const stack = [
        { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
        { label: "Animation", items: ["Framer Motion", "GSAP"] },
        { label: "Backend", items: ["Supabase", "Stripe", "Node.js"] },
        { label: "Tooling", items: ["Vite", "Vercel", "Git"] },
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
                    Technical Proficiency
                </motion.span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-[#0a0a0a] border border-white/[0.06] p-6 font-mono text-[13px] text-green-400/70 rounded-sm"
                    >
                        <div className="flex gap-2 mb-5 pb-4 border-b border-white/[0.04]">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                        <div className="whitespace-pre-wrap min-h-[140px] leading-relaxed">
                            {text}
                            <span className="animate-pulse">_</span>
                        </div>
                    </motion.div>

                    {/* Stack Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="grid grid-cols-2 gap-10"
                    >
                        {stack.map((category, i) => (
                            <div key={i}>
                                <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase block mb-4 font-medium">
                                    {category.label}
                                </span>
                                <div className="space-y-2.5">
                                    {category.items.map((item, j) => (
                                        <span key={j} className="block text-[15px] text-neutral-400 font-light">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechDemo;
