import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Architecture = () => {
    const layers = [
        {
            name: 'Application Layer',
            description: 'Your apps, containers, and processes',
            color: 'from-blue-500 to-cyan-500',
            icon: '📱'
        },
        {
            name: 'Security Node Layer',
            description: 'Dedicated AI firewall for each application',
            color: 'from-purple-500 to-pink-500',
            icon: '🛡️'
        },
        {
            name: 'AI Reasoning Engine',
            description: 'Real-time threat analysis and decision making',
            color: 'from-violet-500 to-purple-500',
            icon: '🧠'
        },
        {
            name: 'Distributed Knowledge Graph',
            description: 'Shared threat intelligence across all nodes',
            color: 'from-indigo-500 to-blue-500',
            icon: '🌐'
        },
        {
            name: 'Self-Healing Engine',
            description: 'Autonomous isolation, repair, and regeneration',
            color: 'from-cyan-500 to-teal-500',
            icon: '💚'
        }
    ]

    return (
        <section className="relative min-h-screen py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                        How It Works
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        A layered architecture for autonomous security
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {layers.map((layer, index) => {
                        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

                        return (
                            <div key={index} ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className={`relative overflow-hidden rounded-2xl border ${inView ? 'border-neon-blue/50 neon-border' : 'border-gray-800'
                                        } bg-gradient-to-r ${layer.color} p-[2px] transition-all duration-500`}>
                                        <div className="bg-gray-950 rounded-2xl p-8 md:p-10">
                                            <div className="flex items-start gap-6">
                                                <div className="text-5xl">{layer.icon}</div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                                                        {layer.name}
                                                    </h3>
                                                    <p className="text-lg text-gray-400 leading-relaxed">
                                                        {layer.description}
                                                    </p>
                                                </div>
                                                <div className="hidden md:block">
                                                    <motion.div
                                                        animate={inView ? {
                                                            scale: [1, 1.1, 1],
                                                            opacity: [0.5, 1, 0.5]
                                                        } : {}}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                        className="text-4xl font-bold text-neon-blue/30"
                                                    >
                                                        {String(index + 1).padStart(2, '0')}
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-8 py-4 border border-neon-blue/30 rounded-lg bg-neon-blue/5">
                        <p className="text-xl text-gray-300">
                            Each layer operates autonomously while contributing to system-wide intelligence
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Architecture
