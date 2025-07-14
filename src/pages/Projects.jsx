// src/pages/Projects.jsx
export default function Projects() {
    const projects = [
        {
            title: "Tricking Site",
            description: "Modern React-based site with Vite, Tailwind, and routing.",
            link: "https://github.com/Icema159/tricking-site",
        },
        {
            title: "Baldai Website",
            description: "A stylish furniture business site with categories and a modern layout.",
            link: "https://github.com/Icema159/baldai-website",
        },
        {
            title: "ToDo Tailwind",
            description: "A dark-mode ToDo app built with React, Tailwind, and local storage.",
            link: "https://github.com/Icema159/todo_tailwind",
        },
    ];

    return (
        <div className="p-10 text-white">
            <h1 className="text-3xl font-bold mb-8">My GitHub Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 hover:border-emerald-500 transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}