import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageWrapper from "../components/PageWrapper"

const aboutText = {
    about: `Hi! I'm Aismantas Skinulis, a passionate developer and fitness coach with a strong drive to build meaningful digital experiences. My journey started in physical training, but my curiosity led me into the tech world where I now combine logic and creativity to solve real-world problems.`,
    bio: `Name: Aismantas Skinulis
Age: 29
Location: Lithuania
Profession: Personal Trainer & Aspiring Front-End Developer
Interests: Fitness, Web Development, Motorcycles, AI, and Science Fiction`
}

export default function About() {
    const [activeTab, setActiveTab] = useState("about")

    return (
        <PageWrapper>
            <div className="p-6 max-w-4xl mx-auto text-white space-y-8 flex flex-col items-center">
                {/* Foto viršuje */}
                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg">
                    <img
                        src="/me.jpg"
                        alt="Aismantas"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Mygtukai */}
                <div className="flex justify-center gap-4">
                    {["about", "bio"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md font-semibold transition ${activeTab === tab
                                ? "bg-emerald-600 text-white"
                                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                                }`}
                        >
                            {tab === "about" ? "About Me" : "Personal Bio"}
                        </button>
                    ))}
                </div>

                {/* Tekstas su animacija */}
                <div className="min-h-[160px] px-4">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="whitespace-pre-line text-lg text-zinc-300 text-center"
                        >
                            {aboutText[activeTab]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </PageWrapper>
    )
}