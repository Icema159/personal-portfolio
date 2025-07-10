import BentoBox from "./BentoBox";
export default function BentoGrid() {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="bg-emerald-950 rounded-xl border border-emerald-800 p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Kairė – 4 dėžutės */}
                <div className="md:col-span-2 grid grid-cols-2 gap-3">
                    <BentoBox title="100+" subtitle="Completed Projects" />
                    <BentoBox title="Webflow Expert" />
                    <BentoBox title="50+" subtitle="Satisfied Clients" />
                    <BentoBox title="6" subtitle="Years Design Experience" />
                </div>

                {/* Dešinė – aprašymas */}
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 flex flex-col justify-between">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-2">
                            Your ultimate webflow partner
                        </h3>
                        <p className="text-zinc-400 text-sm">
                            Eliminate the hassle of dealing with developers lacking design sensibility,
                            and trust in someone who possesses the expertise, passion, and vision
                            to realize your ideas as you've imagined them.
                        </p>
                    </div>
                    <div className="mt-4">
                        <a href="#" className="text-blue-400 text-sm underline">Get in touch →</a>
                    </div>
                </div>
            </div>
        </div>
    )
}