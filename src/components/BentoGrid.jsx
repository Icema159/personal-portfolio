import BentoBox from "./BentoBox";
import { Link } from "react-router-dom";
export default function BentoGrid() {
    return (
        <div className="relative p-6 max-w-6xl mx-auto">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/30 via-emerald-800/20 to-emerald-900/30 blur-lg" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-950 rounded-xl p-6">
                {/* Kairė – 4 dėžutės */}
                <div className="md:col-span-2 grid grid-cols-2 gap-3">
                    <BentoBox title="3+" subtitle="Completed Projects" />
                    <BentoBox title="Webflow beginner" />
                    <BentoBox title="1+" subtitle="Satisfied Clients" />
                    <BentoBox title="1" subtitle="Year Design Experience" />
                </div>

                {/* Dešinė – aprašymas */}
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 flex flex-col justify-between">
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-4">
                            Your ultimate Webflow partner
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Eliminate the hassle of dealing with developers lacking design sensibility,
                            and trust in someone who possesses the expertise, passion, and vision
                            to realize your ideas as you've imagined them.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Link
                            to="/contact"
                            className="text-emerald-400 hover:text-white text-base font-medium underline transition-colors duration-200"
                        >
                            Get in touch →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}