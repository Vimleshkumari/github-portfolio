import React from "react";

const projects = [
    { name: "Weather App", link: "https://github.com/your-username/weather-app" },
    { name: "To-Do List", link: "https://github.com/your-username/todo-list" },
];

export default function Projects() {
    return (
        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-6">
                {projects.map((proj, index) => (
                    <li key={index}>
                        <a href={proj.link} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                            {proj.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}