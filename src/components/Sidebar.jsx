import { Home, Folder, User, Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const navItems = [
    { icon: <Home />, label: "Home" },
    { icon: <Folder />, label: "Projects" },
    { icon: <User />, label: "About" },
    { icon: <Mail />, label: "Contact" },
]

export default function Sidebar() {
    return (
        <div className="w-80 h-screen bg-zinc-950 p-6 flex flex-col justify-between border-r border-zinc-800">
            {/* Top section */}
            <div className="flex flex-col items-center space-y-8">
                {/* Profile placeholder */}
                <div className="w-24 h-24 rounded-full bg-zinc-800" />
                {/* Name */}
                <div className="text-white text-lg font-bold text-center">
                    Aismantas Skinulis
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-6 w-full items-center">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-white hover:text-emerald-400 cursor-pointer"
                        >
                            <div className="text-xl">{item.icon}</div>
                            <span className="text-base">{item.label}</span>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Bottom: Socials */}
            <div className="flex flex-col items-center gap-5 text-zinc-400">
                <a href="#"><FaGithub className="hover:text-white text-xl" /></a>
                <a href="#"><FaLinkedin className="hover:text-white text-xl" /></a>
                <a href="#"><FaEnvelope className="hover:text-white text-xl" /></a>
            </div>
        </div>
    )
}