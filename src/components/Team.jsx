import { motion } from 'framer-motion'

const Team = () => {
    return (
        <section id="team" className="py-24 px-6 bg-gradient-to-b from-gray-900/30 to-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Built for the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Hackathon</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        This project represents a vision for the future of cybersecurity—where AI doesn't just enhance security,
                        it fundamentally reimagines how we protect digital systems.
                    </p>

                    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-primary/30 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-6 text-primary">Project Vision</h3>
                        <div className="space-y-4 text-left text-gray-300 leading-relaxed">
                            <p>
                                <span className="text-secondary font-semibold">Cognitive Firewall</span> demonstrates how AI-native
                                architectures can solve problems that traditional approaches cannot. By treating security as a
                                distributed, living system rather than a static barrier, we unlock capabilities like self-healing,
                                autonomous response, and continuous evolution.
                            </p>
                            <p>
                                This hackathon submission showcases not just technical implementation, but a fundamental rethinking
                                of cybersecurity principles for an AI-first world.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-700">
                            <h4 className="text-lg font-semibold mb-4 text-primary">Technologies Used</h4>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'AI/ML Concepts', 'Distributed Systems'].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Team
