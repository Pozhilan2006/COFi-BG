import { motion } from 'framer-motion'

const Impact = () => {
    const impacts = [
        {
            icon: '🎯',
            title: 'Removes Single-Point Failures',
            description: 'Distributed architecture means no single breach can compromise your entire system. Each node operates independently.',
            stat: '100%',
            statLabel: 'Elimination of centralized vulnerabilities'
        },
        {
            icon: '🔥',
            title: 'Reduces Attack Blast Radius',
            description: 'Compromised applications stay isolated. Malware cannot spread laterally across your infrastructure.',
            stat: '99.9%',
            statLabel: 'Containment of threats at source'
        },
        {
            icon: '🌱',
            title: 'Enables Living Cybersecurity',
            description: 'Systems that learn, adapt, and evolve autonomously. Security improves continuously without human intervention.',
            stat: 'Infinite',
            statLabel: 'Adaptive learning cycles'
        },
        {
            icon: '🚀',
            title: 'Safer AI-First Future',
            description: 'As AI systems become more critical, they need security architectures designed for autonomous operation.',
            stat: 'Next-Gen',
            statLabel: 'Security paradigm'
        }
    ]

    return (
        <section id="impact" className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Matters</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        The transformative impact on cybersecurity infrastructure
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {impacts.map((impact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{impact.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-primary">{impact.title}</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">{impact.description}</p>
                            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                                <div className="text-3xl font-bold text-secondary mb-1">{impact.stat}</div>
                                <div className="text-sm text-gray-400">{impact.statLabel}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        The Future is <span className="text-secondary">Distributed, Intelligent, Resilient</span>
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Traditional cybersecurity is reactive and centralized. The AI Security Node Network is proactive,
                        distributed, and self-healing. This isn't just an improvement—it's a fundamental paradigm shift.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Impact
