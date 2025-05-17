import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-[#f0f2f5]">
        <div className="mx-auto px-12 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <button className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-[#f0f2f5] text-[#4f74e3] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:text-white hover:bg-gradient-to-r from-[#6a98f0] to-[#4f74e3]">
                  Available for hire
                </button>
                <h1 className="text-4xl font-bold tracking-tight text-[#333] sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-[#4f74e3]">Sahil Jaiswal</span>
                </h1>
                <p className="max-w-[600px] text-[#666] text-lg md:text-xl leading-relaxed">
                  Full-stack web developer crafting beautiful, functional, and
                  user-friendly digital experiences with modern technologies.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <button className="inline-block px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#6a98f0] to-[#4f74e3] text-white border-none shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] transition-all duration-300">
                  <a href="#projects" className="flex items-center">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </button>
                <button
                  variant="outline"
                  className="inline-block px-4 py-1.5 rounded-xl bg-[#f0f2f5] text-[#555] border-none shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
                >
                  <a href="https://drive.google.com/file/d/17CLTGk0mZeVcWZoKTCrYuXF-udw6Ex2b/view" className="flex items-center">
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </button>
              </div>
              <div className="flex gap-6 pt-4">
                {[
                  {
                    icon: <Github className="h-5 w-5" />,
                    href: "https://github.com/capsule11",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5" />,
                    href: "https://www.linkedin.com/in/sahil550/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Mail className="h-5 w-5" />,
                    href: "mailto:sahiljaiswal550@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#f0f2f5] text-[#555] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6a98f0] to-[#4f74e3] blur-2xl opacity-20"></div>
                <div className="relative p-2 rounded-full bg-[#f0f2f5] shadow-[10px_10px_20px_#d1d3d5,-10px_-10px_20px_#ffffff]">
                  <div className="rounded-full overflow-hidden border-4 border-[#f0f2f5]">
                    <img
                      alt="Developer portrait"
                      className="aspect-square object-cover w-full"
                      height="450"
                      src="/Images/profilepic.png"
                      width="450"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
