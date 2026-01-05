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
        }, 40);
        return () => clearInterval(interval);
    }, []);

    const stack = [
        { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
        { label: "Animation", items: ["Framer Motion", "GSAP"] },
        { label: "Backend", items: ["Supabase", "Stripe", "Node.js"] },
        { label: "Tooling", items: ["Vite", "Vercel", "Git"] },
    ];

    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-8">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-12"
                >
                    Technical Proficiency
                </motion.span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-neutral-950 border border-neutral-900 p-6 font-mono text-sm text-green-500/80"
                    >
                        <div className="flex gap-2 mb-4 pb-3 border-b border-neutral-900">
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                        </div>
                        <div className="whitespace-pre-wrap min-h-[140px] text-xs">
                            {text}
                            <span className="animate-pulse">_</span>
                        </div>
                    </motion.div>

                    {/* Stack Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="grid grid-cols-2 gap-8"
                    >
                        {stack.map((category, i) => (
                            <div key={i}>
                                <span className="text-[10px] tracking-[0.2em] text-neutral-600 uppercase block mb-3">
                                    {category.label}
                                </span>
                                <div className="space-y-2">
                                    {category.items.map((item, j) => (
                                        <span key={j} className="block text-sm text-neutral-400">
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
