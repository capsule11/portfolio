import React from "react";
import {
  Code,
  FileJson,
  FileType,
  Atom,
  Layers,
  Wind,
  Server,
  ServerCog,
  FileCode,
  Database,
  Network,
  Share2,
  GitBranch,
  Box,
  Cloud,
  Flame,
} from "lucide-react";

const Skills = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <section
        id="skills"
        className="w-full py-24 md:py-32 bg-gradient-to-b from-[#f0f2f5] to-[#e8eaed]"
      >
        <div className="mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-1.5 rounded-full bg-[#f0f2f5] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff]">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6a98f0] to-[#4f74e3]">
                <h2 className="text-xl font-bold text-white">Skills</h2>
              </div>
            </div>
            <h3 className="text-3xl font-bold tracking-tighter text-[#333] md:text-4xl mt-6">
              Technical Expertise
            </h3>
            <p className="max-w-[800px] text-[#666] md:text-lg/relaxed mt-4">
              I've developed a diverse skill set that allows me to handle all
              aspects of web development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Frontend",
                skills: [
                  { name: "HTML5", icon: <Code className="h-5 w-5" /> },
                  { name: "CSS3", icon: <Code className="h-5 w-5" /> },
                  {
                    name: "JavaScript",
                    icon: <FileJson className="h-5 w-5" />,
                  },
                  {
                    name: "TypeScript",
                    icon: <FileType className="h-5 w-5" />,
                  },
                  { name: "React", icon: <Atom className="h-5 w-5" /> },
                  { name: "Next.js", icon: <Layers className="h-5 w-5" /> },
                  { name: "Tailwind CSS", icon: <Wind className="h-5 w-5" /> },
                ],
              },
              {
                title: "Backend",
                skills: [
                  { name: "Node.js", icon: <Server className="h-5 w-5" /> },
                  { name: "Express", icon: <ServerCog className="h-5 w-5" /> },
                  { name: "Python", icon: <FileCode className="h-5 w-5" /> },
                  { name: "Django", icon: <Database className="h-5 w-5" /> },
                  { name: "GraphQL", icon: <Network className="h-5 w-5" /> },
                  { name: "REST APIs", icon: <Share2 className="h-5 w-5" /> },
                ],
              },
              {
                title: "Other",
                skills: [
                  { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
                  { name: "Docker", icon: <Box className="h-5 w-5" /> },
                  { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
                  { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
                  {
                    name: "PostgreSQL",
                    icon: <Database className="h-5 w-5" />,
                  },
                  { name: "Firebase", icon: <Flame className="h-5 w-5" /> },
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#f0f2f5] p-8 shadow-[10px_10px_20px_#d1d3d5,-10px_-10px_20px_#ffffff] transition-all duration-300 hover:shadow-[15px_15px_30px_#d1d3d5,-15px_-15px_30px_#ffffff]"
              >
                <h3 className="text-2xl font-bold text-[#333] mb-6 pb-4 border-b border-[#e0e0e0]">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f2f5] shadow-[3px_3px_6px_#d1d3d5,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d3d5,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-[#f0f2f5] shadow-[inset_2px_2px_4px_#d1d3d5,inset_-2px_-2px_4px_#ffffff] text-[#4f74e3] group-hover:text-[#6a98f0] transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-[#555] font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
