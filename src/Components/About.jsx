import React from 'react'
import {User, Code} from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#f0f2f5]">
        <section id="about" className="w-full py-24 md:py-32">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block p-1.5 rounded-full bg-[#f0f2f5] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff]">
                <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6a98f0] to-[#4f74e3]">
                  <h2 className="text-xl font-bold text-white">About Me</h2>
                </div>
              </div>
              <h3 className="text-3xl font-bold tracking-tighter text-[#333] md:text-4xl mt-6">
                My Journey as a Developer
              </h3>
              <p className="max-w-[800px] text-[#666] md:text-lg/relaxed mt-4">
                With over 5 years of experience in web development, I've worked on a variety of projects from small
                business websites to complex web applications. My passion lies in creating clean, efficient code that
                delivers exceptional user experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              <div className="rounded-2xl bg-[#f0f2f5] p-8 shadow-[10px_10px_20px_#d1d3d5,-10px_-10px_20px_#ffffff] transition-all duration-300 hover:shadow-[15px_15px_30px_#d1d3d5,-15px_-15px_30px_#ffffff]">
                <div className="mb-6 p-4 rounded-xl bg-[#f0f2f5] shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] inline-block">
                  <User className="h-8 w-8 text-[#4f74e3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#333] mb-4">Background</h3>
                <p className="text-[#666] leading-relaxed">
                  I hold a Bachelor's degree in Computer Science and have continuously expanded my skills through
                  self-learning and professional development. My journey began with HTML and CSS, and I've since
                  mastered modern frameworks and technologies to create seamless digital experiences.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f0f2f5] p-8 shadow-[10px_10px_20px_#d1d3d5,-10px_-10px_20px_#ffffff] transition-all duration-300 hover:shadow-[15px_15px_30px_#d1d3d5,-15px_-15px_30px_#ffffff]">
                <div className="mb-6 p-4 rounded-xl bg-[#f0f2f5] shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] inline-block">
                  <Code className="h-8 w-8 text-[#4f74e3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#333] mb-4">Philosophy</h3>
                <p className="text-[#666] leading-relaxed">
                  I believe in writing clean, maintainable code that solves real problems. My approach combines
                  technical excellence with a deep understanding of user needs, resulting in solutions that are both
                  powerful and intuitive. Every line of code has a purpose.
                </p>
              </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default About