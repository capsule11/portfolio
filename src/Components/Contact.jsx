import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#f0f2f5]">
      <section
        id="contact"
        className="w-full py-24 md:py-32 bg-gradient-to-b from-[#e8eaed] to-[#f0f2f5]"
      >
        <div className="mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-1.5 rounded-full bg-[#f0f2f5] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff]">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6a98f0] to-[#4f74e3]">
                <h2 className="text-xl font-bold text-white">Contact</h2>
              </div>
            </div>
            <h3 className="text-3xl font-bold tracking-tighter text-[#333] md:text-4xl mt-6">
              Get In Touch
            </h3>
            <p className="max-w-[800px] text-[#666] md:text-lg/relaxed mt-4">
              Interested in working together? Feel free to reach out!
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-16">
              <div className="rounded-2xl bg-[#f0f2f5] p-8 shadow-[10px_10px_20px_#d1d3d5,-10px_-10px_20px_#ffffff]">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#555]">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-3 rounded-xl bg-[#f0f2f5] text-[#555] shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#4f74e3] transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#555]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-[#f0f2f5] text-[#555] shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#4f74e3] transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-[#555]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl bg-[#f0f2f5] text-[#555] shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#4f74e3] transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#555]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[150px] px-4 py-3 rounded-xl bg-[#f0f2f5] text-[#555] shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] focus:outline-none focus:ring-2 focus:ring-[#4f74e3] transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6a98f0] to-[#4f74e3] text-white border-none shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="flex justify-center gap-8 mt-12">
                {[
                  { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/capsule11" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/in/sahil550/" },
                  { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:sahiljaiswal550@gmail.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#f0f2f5] text-[#555] shadow-[5px_5px_10px_#d1d3d5,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d3d5,inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
