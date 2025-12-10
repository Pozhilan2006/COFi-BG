import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const Solution = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
    const [activeNode, setActiveNode] = useState(null)

    const nodes = [
        { id: 1, x: 20, y: 30, app: 'Browser' },
        { id: 2, x: 50, y: 20, app: 'Email' },
        { id: 3, x: 80, y: 35, app: 'Slack' },
        { id: 4, x: 35, y: 60, app: 'Database' },
        { id: 5, x: 65, y: 70, app: 'API' },
    ]

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                setActiveNode(prev => {
                    if (prev === null) return 1
                    if (prev >= nodes.length) return null
                    return prev + 1
                })
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [inView])

    return (
        <section className="relative min-h-screen py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-violet bg-clip-text text-transparent">
                            Cognitive Firewall
                        </span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-950/50 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-neon-blue mb-4">Distributed Intelligence</h3>
                            <p className="text-gray-400 leading-relaxed">
                                A system composed of many tiny autonomous AI nodes. Each node protects one app, one container, one process.
                            </p>
                        </div>

                        <div className="bg-gray-950/50 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-neon-purple mb-4">Instant Response</h3>
                            <p className="text-gray-400 leading-relaxed">
                                If attacked, nodes isolate themselves in &lt;50ms, preventing lateral movement and system-wide compromise.
                            </p>
                        </div>

                        <div className="bg-gray-950/50 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-neon-violet mb-4">Self-Healing</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Compromised nodes repair via local AI reasoning, then spawn clean clones to maintain protection.
                            </p>
                        </div>

                        <div className="bg-gray-950/50 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-neon-blue mb-4">Network Learning</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Threat signatures are reported to the network. The entire system becomes smarter with every attempted attack.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Solution
