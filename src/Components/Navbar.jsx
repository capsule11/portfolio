import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Sun, Moon, Code } from "lucide-react";

const Navbar = () => {
  
  return (
    <div className="bg-[#f0f2f5]">
      <header className="top-0 z-50 w-full backdrop-blur-md bg-[#f0f2f5]/80">
        <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-[#555]"
          >
            <div className="p-2 rounded-xl bg-[#f0f2f5] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] transition-all duration-300">
              <Code className="h-5 w-5 text-[#555] " />
            </div>
            <span className="text-lg">Sahil Jaiswal</span>
          </a>

          <nav className="hidden md:flex gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#555] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#555] after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl bg-[#f0f2f5] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] text-[#555] hover:shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] transition-all">
              <Sun className="h-5 w-5 hidden" />
              <Moon className="h-5 w-5" />
            </button>
            <button className="inline-block px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#6a98f0] to-[#4f74e3] text-white shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] transition-all duration-300">
              <a href="#contact">
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
