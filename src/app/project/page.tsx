
import React from 'react';

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & Typescript based app for managing and organizing your task efficiently ",
    img: "/about-image.png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.Js and Typescript powered website to track time with an interactive countdown feature ",
    img: "/about-image.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.Js and Typescript based tool for fetching and displaying real-time weather data ",
    img: "/about-image.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Static Interactive Resume",
    desc: "A Typescript- base interactive resume built with Html and CSS, allowing users to showcase their skills dynamically ",
    img: "/about-image.png",
    tags: ["Html", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div className="p-10">
    <h1 className="text-4xl font-bold mb-10">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((project) => (
        <div key={project.id} className="border border-gray-300 p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
          <p className="mb-3">{project.desc}</p>
          <img src={project.img} alt={project.title} className="mb-3 rounded-lg" />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
export default Projects;
