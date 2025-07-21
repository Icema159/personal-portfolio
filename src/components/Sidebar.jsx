import { Home, Folder, User, Mail } from "lucide-react"
import { FaDownload, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"
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
                {/* Profile photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg">
                    <img
                        src="/me.jpg"
                        alt="Aismantas"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Name */}
                <div className="text-white text-lg font-bold text-center">
                    Aismantas Skinulis
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-6 w-full items-center">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`}
                            key={index}
                            className="flex items-center gap-3 text-white hover:text-emerald-400 cursor-pointer"
                        >
                            <div className="text-xl">{item.icon}</div>
                            <span className="text-base">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Bottom: Socials */}
            <div className="flex flex-col items-center gap-5 text-zinc-400">
                <a href="https://github.com/Icema159" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-white text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/aismantas-skinulis-202bb8366/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-white text-xl" />
                </a>
                <a
                    href="https://www.facebook.com/aismantas.skinulis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="hover:text-white text-xl" />
                </a>
                <a
                    href="/cv-aismantas.pdf"
                    download
                    className="hover:text-white text-xl"
                    title="Download my CV"
                >
                    <FaDownload />
                </a>
            </div>
        </div>
    )
}