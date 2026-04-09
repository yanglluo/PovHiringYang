import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-4 md:inset-8 lg:inset-12 bg-white rounded-lg z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
                            <h2 className="text-lg font-medium text-neutral-900">Resume</h2>
                            <div className="flex items-center gap-3">
                                <a
                                    href="/Yang_Luo_Resume.png"
                                    download="Yang_Luo_Resume.png"
                                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Resume
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-neutral-200 rounded-md transition-colors"
                                >
                                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Resume Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white">
                            <div className="max-w-3xl mx-auto text-neutral-900">
                                {/* Header */}
                                <div className="text-center mb-8 pb-6 border-b border-neutral-200">
                                    <h1 className="text-2xl font-semibold mb-2">Yang Luo</h1>
                                    <p className="text-sm text-neutral-600">
                                        <a href="mailto:theyangluo@gmail.com" className="text-blue-600 hover:underline">theyangluo@gmail.com</a>
                                        {" | "}(778) 896-8891{" | "}
                                        <a href="https://linkedin.com/in/yanglluo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                                        {" | "}
                                        <a href="https://x.com/yangbuilds" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">X</a>
                                        {" | "}Toronto, Canada
                                    </p>
                                </div>

                                {/* Education */}
                                <section className="mb-6">
                                    <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                                        Education
                                    </h2>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium italic">University of Western Ontario, B.S. in Computer Science</p>
                                            <p className="text-sm text-neutral-600">
                                                <span className="font-medium">Relevant Coursework:</span> Data Structures and Algorithms, Web Development, Object-Oriented Programming
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                <span className="font-medium">Activities:</span> Western CyberSociety, The Computer Science Undergraduate Society
                                            </p>
                                        </div>
                                        <span className="text-sm text-neutral-600 whitespace-nowrap ml-4">May 2027</span>
                                    </div>
                                </section>

                                {/* Technical Skills */}
                                <section className="mb-6">
                                    <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                                        Technical Skills
                                    </h2>
                                    <div className="text-sm space-y-1">
                                        <p><span className="font-medium">AI & Data:</span> Prompt Engineering, AI Workflow Design, Data Analysis</p>
                                        <p><span className="font-medium">Languages:</span> TypeScript / JavaScript, Python, SQL, Java</p>
                                        <p><span className="font-medium">Frontend:</span> React, Tailwind CSS, HTML</p>
                                        <p><span className="font-medium">Backend & APIs:</span> Node.js, REST APIs, Authentication</p>
                                        <p><span className="font-medium">Infrastructure:</span> PostgreSQL, MongoDB, AWS, GCP</p>
                                        <p><span className="font-medium">Additional:</span> Codebase analysis, refactoring, and system restructuring</p>
                                    </div>
                                </section>

                                {/* Work Experience */}
                                <section className="mb-6">
                                    <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                                        Work Experience
                                    </h2>

                                    {/* Prima Design Co */}
                                    <div className="mb-5">
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <p className="font-medium">Prima Design Co <span className="font-normal text-neutral-600">- Toronto, Canada</span></p>
                                                <p className="text-sm italic text-neutral-600">Co-Founder & Software Engineer | React.js, Tailwind CSS, Node.js, Figma, Webflow, Canva</p>
                                            </div>
                                            <span className="text-sm text-neutral-600 whitespace-nowrap ml-4">Nov 2024 – Present</span>
                                        </div>
                                        <ul className="text-sm text-neutral-700 space-y-1.5 ml-4 list-disc">
                                            <li>Co-founded and scaled a digital development business, delivering structured web systems for clients across industries</li>
                                            <li>Designed and implemented conversion-optimised websites, improving usability, performance, and user experience</li>
                                            <li>Applied analytical thinking to develop digital workflows supporting business operations</li>
                                        </ul>
                                    </div>

                                    {/* Wouessi */}
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <p className="font-medium">Wouessi Mobile & Software Development Program <span className="font-normal text-neutral-600">- Toronto, Canada</span></p>
                                                <p className="text-sm italic text-neutral-600">Software Developer (Training Program) | React, TypeScript, MongoDB</p>
                                            </div>
                                            <span className="text-sm text-neutral-600 whitespace-nowrap ml-4">Mar 2025 - Jun 2025</span>
                                        </div>
                                        <ul className="text-sm text-neutral-700 space-y-1.5 ml-4 list-disc">
                                            <li>Selected for a competitive software development program, contributing to structured system development projects</li>
                                            <li>Built frontend interfaces and backend features for platforms involving data handling and workflow coordination</li>
                                            <li>Collaborated in Agile environments, contributing to system design and iterative problem-solving</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Projects */}
                                <section className="mb-6">
                                    <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                                        Projects
                                    </h2>

                                    {/* RevLeak */}
                                    <div className="mb-5">
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <p className="font-medium">RevLeak - Revenue Monitoring SaaS <span className="font-normal text-neutral-600">| React, Tailwind CSS, Python, PostgreSQL, APIs</span></p>
                                            </div>
                                            <span className="text-sm text-neutral-600 whitespace-nowrap ml-4">Oct 2025 - Present</span>
                                        </div>
                                        <ul className="text-sm text-neutral-700 space-y-1.5 ml-4 list-disc">
                                            <li>Built an end-to-end revenue monitoring system detecting failed payments, billing mismatches, and configuration errors</li>
                                            <li>Designed data processing workflows for structured financial event tracking and analysis</li>
                                            <li>Developed dashboards and backend systems supporting secure data ingestion and actionable insights</li>
                                            <li>Iterated on system models based on feedback, improving detection accuracy and reducing false positives</li>
                                        </ul>
                                    </div>

                                    {/* Mend */}
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <p className="font-medium">Mend - Finance App <span className="font-normal text-neutral-600">| React, Tailwind CSS, Node.js, MongoDB, OpenAI API</span></p>
                                            </div>
                                            <span className="text-sm text-neutral-600 whitespace-nowrap ml-4">Aug 2025 - Present</span>
                                        </div>
                                        <ul className="text-sm text-neutral-700 space-y-1.5 ml-4 list-disc">
                                            <li>Built an AI-powered financial application automating peer-to-peer payments through structured intent recognition and validation</li>
                                            <li>Designed backend logic for intent handling and recipient validation, improving transaction accuracy and reliability</li>
                                            <li>Integrated AI-powered classification to manage ambiguous payment scenarios and enforce approval workflows</li>
                                            <li>Refactored system logic and rebuilt components to improve transaction reliability and workflow efficiency</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
