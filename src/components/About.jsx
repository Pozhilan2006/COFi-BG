import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Innovation</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Reimagining cybersecurity through biological intelligence
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-primary">The Old Way</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Today's systems depend on <span className="text-red-400 font-semibold">"one big firewall"</span> — a single point of failure protecting your entire infrastructure.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            When that firewall is breached, attackers gain access to everything. One vulnerability compromises the entire system.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Innovation</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We replace the monolithic firewall with <span className="text-secondary font-semibold">hundreds of tiny AI security nodes</span> — each protecting a single application or process.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Each node can autonomously isolate, quarantine, self-heal, clone, and adapt. Inspired by biological immune systems and distributed intelligence.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 bg-gray-900/60 border border-gray-700 rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                        Why This Is <span className="text-accent">Fundamentally Different</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-4xl mb-3">🧬</div>
                            <h4 className="font-semibold text-lg mb-2">Biological Inspiration</h4>
                            <p className="text-gray-400 text-sm">
                                Like immune cells that identify, isolate, and destroy threats
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-3">🤖</div>
                            <h4 className="font-semibold text-lg mb-2">AI-Native Design</h4>
                            <p className="text-gray-400 text-sm">
                                Built from the ground up with LLMs and on-device reasoning
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-3">🔄</div>
                            <h4 className="font-semibold text-lg mb-2">Self-Healing</h4>
                            <p className="text-gray-400 text-sm">
                                Automatically recovers from attacks without human intervention
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
