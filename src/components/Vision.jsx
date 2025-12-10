import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Vision = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <section className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-black">
            <div className="max-w-5xl mx-auto text-center" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.2 }}
                    className="space-y-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                    >
                        Security must evolve
                        <span className="block mt-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-violet bg-clip-text text-transparent">
                            as fast as the threats
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto"
                    >
                        AI is the only path forward.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="pt-12"
                    >
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-2">
                                <div className="text-5xl font-bold text-neon-blue">100%</div>
                                <div className="text-gray-400">Autonomous</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-5xl font-bold text-neon-purple">&lt;50ms</div>
                                <div className="text-gray-400">Response Time</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-5xl font-bold text-neon-violet">∞</div>
                                <div className="text-gray-400">Adaptive Learning</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="pt-12"
                    >
                        <p className="text-xl text-gray-500 italic max-w-3xl mx-auto leading-relaxed">
                            "The future of cybersecurity isn't about building higher walls.
                            It's about creating living systems that adapt, learn, and evolve faster than any attacker."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Vision
