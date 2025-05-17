import React from "react";
import { ExternalLink } from "lucide-react";
import projectsData from "../Data/projectsData";

const Projects = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <section id="project" className="w-full py-24">
        <div className="mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-1.5 rounded-full bg-[#f0f2f5] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff]">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6a98f0] to-[#4f74e3]">
                <h2 className="text-xl font-bold text-white">Projects</h2>
              </div>
            </div>
            <h3 className="text-3xl font-bold tracking-tighter text-[#333] md:text-4xl mt-6">
              My Recent Work
            </h3>
            <p className="max-w-[800px] text-[#666] md:text-lg/relaxed mt-4">
              Here are some of the projects I've worked on recently.
            </p>
          </div>

          <div className="flex flex-col gap-12 mt-16">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#f0f2f5] overflow-hidden shadow-[10px_10px_20px_#d1d3d5,-10px_-10px_20px_#ffffff] transition-all duration-300 hover:shadow-[15px_15px_30px_#d1d3d5,-15px_-15px_30px_#ffffff] group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6a98f0]/20 to-[#4f74e3]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover aspect-video md:aspect-auto transition-transform duration-500 group-hover:scale-105"
                      src={project.imageUrl}
                    />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 rounded-full bg-[#f0f2f5] shadow-[3px_3px_6px_#d1d3d5,-3px_-3px_6px_#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink className="h-4 w-4 text-[#4f74e3]" />
                    </a>
                  </div>
                  <div className="p-8 w-full md:w-3/5">
                    <h4 className="text-2xl font-bold text-[#333] mb-2">
                      {project.title}
                    </h4>
                    <p className="text-[#4f74e3] font-medium mb-4">
                      {project.description}
                    </p>
                    <p className="text-[#666] mb-6">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 rounded-xl bg-[#f0f2f5] text-[#666] text-sm font-medium shadow-[3px_3px_6px_#d1d3d5,-3px_-3px_6px_#ffffff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
