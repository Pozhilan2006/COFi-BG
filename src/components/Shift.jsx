import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Shift = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <section className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
            <div className="max-w-6xl mx-auto text-center" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.2 }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white">
                        The Shift
                    </h2>
                </motion.div>

                <div className="space-y-8 mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 leading-tight"
                    >
                        Security shouldn't wait.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 leading-tight"
                    >
                        It should defend, adapt, isolate, and heal — <span className="text-neon-blue">instantly</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 leading-tight"
                    >
                        Just like an <span className="text-neon-purple">immune system</span>.
                    </motion.p>
                </div>

                {/* Network Diagram Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="relative mt-20"
                >
                    <div className="relative w-full max-w-3xl mx-auto h-64 rounded-2xl border border-neon-blue/30 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 neon-border overflow-hidden">
                        {/* Animated Grid */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="grid grid-cols-8 grid-rows-8 h-full">
                                {[...Array(64)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                                        transition={{
                                            duration: 2,
                                            delay: i * 0.02,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                        className="border border-neon-blue/20"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Center Glow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-32 h-32 rounded-full bg-neon-blue/30 blur-2xl"
                            />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-2xl font-semibold text-neon-blue neon-glow">
                                AI-Native Security
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Shift
