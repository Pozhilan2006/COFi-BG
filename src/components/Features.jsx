import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Features = () => {
    const capabilities = [
        {
            title: 'Autonomous Threat Isolation',
            description: 'Nodes detect and quarantine threats in <50ms without human intervention.',
            icon: '🎯',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Self-Healing in Real-Time',
            description: 'Compromised nodes self-destruct and regenerate clean copies instantly.',
            icon: '💚',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Behavioral AI Anomaly Detection',
            description: 'Machine learning models identify deviations from normal patterns.',
            icon: '🔍',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Reinforcement Learning Defense',
            description: 'System improves continuously, learning from every attack attempt.',
            icon: '🧠',
            gradient: 'from-violet-500 to-purple-500'
        },
        {
            title: 'Zero-Trust Per-Process Firewalls',
            description: 'Every application exists in its own isolated security micro-segment.',
            icon: '🔐',
            gradient: 'from-indigo-500 to-blue-500'
        }
    ]

    return (
        <section className="relative min-h-screen py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                        Key Capabilities
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                        AI-native security that adapts, learns, and evolves
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((capability, index) => {
                        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

                        return (
                            <div key={index} ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    <div className="group relative h-full bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden">
                                        {/* Gradient overlay on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                        <div className="relative z-10">
                                            <div className="text-5xl mb-6">{capability.icon}</div>
                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                                                {capability.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {capability.description}
                                            </p>
                                        </div>

                                        {/* Corner accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features
