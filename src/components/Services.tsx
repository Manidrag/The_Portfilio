"use client"

import { useEffect } from "react"
import {
  Code,
  Server,
  Database,
  Layout,
  Globe,
  Gauge,
  Cpu,
  Braces,
  FileJson,
  Palette,
  Layers,
  Sparkles,
  Workflow,
  GitBranch,
  Boxes,
  Rocket,
  Zap,
  Cloud,
} from "lucide-react"

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const frontendSkills = [
    { name: "React", icon: <Code className="w-6 h-6" />, color: "bg-blue-500" },
    { name: "HTML5", icon: <Layout className="w-6 h-6" />, color: "bg-orange-500" },
    { name: "CSS3", icon: <Palette className="w-6 h-6" />, color: "bg-blue-400" },
    { name: "JavaScript", icon: <Braces className="w-6 h-6" />, color: "bg-yellow-400" },
    { name: "Tailwind CSS", icon: <Gauge className="w-6 h-6" />, color: "bg-cyan-500" },
    { name: "TypeScript", icon: <FileJson className="w-6 h-6" />, color: "bg-blue-600" },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <Server className="w-6 h-6" />, color: "bg-green-600" },
    { name: "Express.js", icon: <Zap className="w-6 h-6" />, color: "bg-gray-700" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "bg-green-500" },
    { name: "SQL", icon: <Database className="w-6 h-6" />, color: "bg-blue-600" },
    { name: "RESTful APIs", icon: <Globe className="w-6 h-6" />, color: "bg-purple-500" },
    { name: "Firebase", icon: <Cloud className="w-6 h-6" />, color: "bg-yellow-500" },
  ]

  const otherSkills = [
    { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Docker", icon: <Boxes className="w-5 h-5" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    { name: "Redux", icon: <Layers className="w-5 h-5" /> },
    { name: "Next.js", icon: <Rocket className="w-5 h-5" /> },
   
   
    { name: "Webpack", icon: <Boxes className="w-5 h-5" /> },
  
  ]

  return (
    <div id="services" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block animate-on-scroll opacity-0 transition-all duration-700">
            <span className="inline-block relative">
              <span className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/10 animate-ping"></span>
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            </span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700">
            My Skills
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            I specialize in building modern, responsive web applications using the latest technologies and best
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Frontend Skills */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300 translate-y-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="bg-gradient-to-r from-primary to-purple-600 p-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
                <h2 className="text-2xl font-bold text-white flex items-center relative z-10">
                  <Layout className="mr-3 h-6 w-6 animate-pulse" />
                  Front-End Development
                </h2>
                <p className="text-white/80 mt-2 relative z-10">Creating beautiful, responsive user interfaces</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {frontendSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-3 rounded-lg border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      <div
                        className={`${skill.color} p-2 rounded-md text-white mr-3 transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}
                      >
                        {skill.icon}
                      </div>
                      <p className="text-gray-700 font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-500 translate-y-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
                <h2 className="text-2xl font-bold text-white flex items-center relative z-10">
                  <Server className="mr-3 h-6 w-6 animate-pulse" />
                  Back-End Development
                </h2>
                <p className="text-white/80 mt-2 relative z-10">Building robust server-side applications</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {backendSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center p-3 rounded-lg border border-gray-100 hover:border-gray-800/20 hover:bg-gray-800/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      <div
                        className={`${skill.color} p-2 rounded-md text-white mr-3 transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}
                      >
                        {skill.icon}
                      </div>
                      <p className="text-gray-700 font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 animate-on-scroll opacity-0 transition-all duration-1000 delay-700 translate-y-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center">
              <Cpu className="mr-2 h-6 w-6 text-primary" />
              Other Skills & Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {otherSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

