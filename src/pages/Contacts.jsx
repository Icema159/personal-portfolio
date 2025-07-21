import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="p-6 max-w-2xl mx-auto text-white">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-8">Let's Collaborate</h2>

            {/* Animated Contact Form */}
            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-lg"
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        className="p-3 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition"
                >
                    Send Message
                </button>
            </motion.form>
        </div>
    );
}