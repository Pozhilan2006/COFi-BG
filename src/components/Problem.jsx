import { motion } from 'framer-motion'

const Problem = () => {
    const problems = [
        {
            icon: '🎯',
            title: 'Single Point of Failure',
            description: 'One breach → entire system exposed. Traditional firewalls create catastrophic vulnerabilities.'
        },
        {
            icon: '🚫',
            title: 'No Application Isolation',
            description: 'Firewalls can\'t isolate threats per app. Malware spreads laterally across your entire infrastructure.'
        },
        {
            icon: '🩹',
            title: 'No Auto-Healing',
            description: 'When compromised, systems stay broken until manual intervention. Downtime costs millions.'
        },
        {
            icon: '⏱️',
            title: 'Manual Response Too Slow',
            description: 'Human response times are measured in hours. Modern attacks execute in milliseconds.'
        }
    ]

    return (
        <section id="problem" className="py-24 px-6 bg-gradient-to-b from-gray-900/20 to-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Modern Security <span className="text-red-400">Breaks</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Traditional cybersecurity architectures are fundamentally flawed
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-red-950/20 border border-red-900/50 rounded-xl p-6 hover:border-red-700/70 transition-colors"
                        >
                            <div className="text-4xl mb-4">{problem.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-red-400">{problem.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/50 rounded-xl px-8 py-6">
                        <p className="text-lg md:text-xl text-gray-200 font-semibold">
                            💡 The solution isn't better firewalls — it's <span className="text-secondary">eliminating the single point of failure entirely</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Problem
