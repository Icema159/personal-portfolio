export default function BentoBox({ title, subtitle }) {
    return (
        <div className="w-32 md:w-40 aspect-square bg-zinc-900 rounded-lg border border-zinc-800 p-5 flex flex-col justify-center items-center hover:scale-[1.03] transition-transform duration-300">
            <h2 className="text-white text-xl font-bold text-center leading-tight">{title}</h2>
            {subtitle && (
                <p className="text-zinc-400 text-sm text-center mt-2 leading-snug">{subtitle}</p>
            )}
        </div>
    );
}