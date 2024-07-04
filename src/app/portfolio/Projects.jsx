import React, { useState } from "react";
import { projects } from "./projectslists"; // Adjust the import path as needed

const ProjectData = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-6 py-8 ">
      <div className="mb-6 text-center">
        <button
          type="button"
          onClick={() => setFilter("All")}
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("web app")}
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Web Projects
        </button>
        <button
          type="button"
          onClick={() => setFilter("Blockchain application")}
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Blockchain Projects
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4  border-red-600"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.date}</p>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between ">
              <a
                href={project.github}
                className="text-blue-500 hover:underline "
              >
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  GitHub
                </button>
              </a>
              <a
                href={project.webapp}
                className="text-blue-500 hover:underline"
              >
                {" "}
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Live App
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectData;
