import { useEffect, useState } from "react"
import TextTransition, { presets } from "react-text-transition"

const ROLES = [
    "Aismantas Skinulis.",
    "a Software Developer.",
    "a Personal Trainer.",
    "a Former Soldier.",
]

export default function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((prev) => (prev + 1) % ROLES.length),
            2500
        )
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="p-6 flex justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white flex gap-3 whitespace-nowrap">
                <span>Hello I am</span>
                <TextTransition
                    springConfig={presets.gentle}
                    className="text-emerald-400 inline-block"
                >
                    {ROLES[index]}
                </TextTransition>
            </h1>
        </div>
    )
}