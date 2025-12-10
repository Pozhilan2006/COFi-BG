import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Collapse = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 })
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 })
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 })
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 })

    const failures = [
        {
            ref: ref1,
            inView: inView1,
            text: "One firewall. One failure point.",
            delay: 0
        },
        {
            ref: ref2,
            inView: inView2,
            text: "One breach → entire system exposed.",
            delay: 0.2
        },
        {
            ref: ref3,
            inView: inView3,
            text: "Zero autonomy. Zero adaptation.",
            delay: 0.4
        },
        {
            ref: ref4,
            inView: inView4,
            text: "Security that reacts only after damage is done.",
            delay: 0.6
        }
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-white"
                >
                    The Cybersecurity <span className="text-red-500">Collapse</span>
                </motion.h2>

                <div className="space-y-16">
                    {failures.map((failure, index) => (
                        <div key={index} ref={failure.ref}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={failure.inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: failure.delay }}
                                className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 leading-tight"
                            >
                                {failure.text}
                            </motion.div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block px-8 py-4 border border-red-500/30 rounded-lg bg-red-950/10">
                        <p className="text-xl md:text-2xl text-red-400 font-medium">
                            Traditional security architectures are fundamentally broken.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Collapse
