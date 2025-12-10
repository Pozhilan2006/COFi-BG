const Footer = () => {
    return (
        <footer className="relative py-16 px-6 border-t border-gray-900 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © 2024 Cognitive Firewall. AI Hackathon Submission.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-neon-blue transition-colors">Privacy</a>
                        <a href="#" className="hover:text-neon-blue transition-colors">Terms</a>
                        <a href="#" className="hover:text-neon-blue transition-colors">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
