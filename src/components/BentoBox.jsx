export default function BentoBox({ title, subtitle }) {
    return (
        <div className="w-64 md:w-80 aspect-square bg-zinc-900 rounded-lg border border-zinc-800 p-5 flex flex-col justify-center items-center 
hover:border-emerald-400 hover:shadow-[0_0_20px_2px_rgba(16,185,129,0.5)] transition-all duration-300">
            <h2 className="text-white text-3xl font-bold text-center leading-tight">{title}</h2>
            {subtitle && (
                <p className="text-zinc-400 text-sm text-center mt-3 leading-snug">{subtitle}</p>
            )}
        </div>
    );
}