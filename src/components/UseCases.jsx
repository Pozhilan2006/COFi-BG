import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const UseCases = () => {
    const useCases = [
        {
            title: 'National Security Systems',
            description: 'Protect critical government infrastructure with resilient, self-healing defense that eliminates single points of failure.',
            icon: '🏛️',
            tags: ['Defense Networks', 'Intelligence Systems', 'Classified Infrastructure']
        },
        {
            title: 'Enterprise Networks',
            description: 'Zero-trust micro-segmentation for every application, preventing lateral movement and containing breaches instantly.',
            icon: '🏢',
            tags: ['SaaS Platforms', 'Internal Tools', 'Customer Data']
        },
        {
            title: 'Cloud Workloads',
            description: 'Autonomous security for dynamic, distributed cloud environments with per-container protection.',
            icon: '☁️',
            tags: ['Kubernetes', 'Serverless', 'Multi-Tenant']
        },
        {
            title: 'Critical Infrastructure',
            description: 'Self-healing security for systems that cannot fail — power grids, hospitals, transportation control.',
            icon: '⚡',
            tags: ['Energy Systems', 'Healthcare', 'Transportation']
        },
        {
            title: 'Consumer OS Security',
            description: 'Enterprise-grade protection for personal devices with minimal resource overhead and maximum privacy.',
            icon: '📱',
            tags: ['Desktop Apps', 'Mobile Security', 'IoT Devices']
        }
    ]

    return (
        <section className="relative min-h-screen py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                        Use Cases
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        From consumer devices to critical infrastructure
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => {
                        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

                        return (
                            <div key={index} ref={ref}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="h-full bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-neon-purple/50 transition-all duration-300"
                                >
                                    <div className="text-5xl mb-6">{useCase.icon}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {useCase.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {useCase.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple"
                                            >
                                                {tag}
                                            </span>
                                        ))}
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

export default UseCases
