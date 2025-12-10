import { motion } from 'framer-motion'

const AIAdvantage = () => {
    const advantages = [
        {
            title: 'Real-Time Threat Interpretation',
            description: 'LLMs analyze attack patterns in natural language, understanding context and intent beyond simple pattern matching.',
            icon: '🧠'
        },
        {
            title: 'Zero-Trust Micro-Segmentation',
            description: 'Every application exists in its own isolated security bubble. No implicit trust, ever.',
            icon: '🔒'
        },
        {
            title: 'Autonomous Response & Healing',
            description: 'AI nodes make split-second decisions to isolate, destroy, and regenerate without human intervention.',
            icon: '⚡'
        },
        {
            title: 'Behavioral Anomaly Detection',
            description: 'Machine learning models learn normal behavior patterns and instantly flag deviations.',
            icon: '📊'
        }
    ]

    return (
        <section id="ai-advantage" className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI-Native</span> Security?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        LLMs and on-device reasoning create capabilities impossible with traditional approaches
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{advantage.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">{advantage.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">{advantage.description}</p>
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
                        On-Device AI = <span className="text-secondary">Privacy + Speed</span>
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        All AI processing happens locally on your infrastructure. No data leaves your network. No cloud dependencies.
                        Microsecond response times with absolute privacy guarantees.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default AIAdvantage
