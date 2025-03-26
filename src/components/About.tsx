"use client"

import { useEffect } from "react"
import { GraduationCap, Briefcase, User, Trophy, Heart, Star, Target, Lightbulb } from "lucide-react"

function About() {
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

  return (
    <div id="about" className="min-h-screen py-20 bg-gray-50 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block animate-on-scroll opacity-0 transition-all duration-700">
            <span className="inline-block relative">
              <span className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/10 animate-ping"></span>
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
            </span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 relative animate-on-scroll opacity-0 transition-all duration-700">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Me Content */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300 translate-x-[-50px]">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4 animate-pulse">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
              I'm a dedicated web developer with a good grasp of both front-end and back-end technologies. I enjoy crafting elegant solutions to complex problems and take pride in writing clean, efficient code.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With a background in computer science and a keen eye for design, I bring a unique perspective to every
                project. I'm constantly learning and exploring new technologies to stay at the forefront of web
                development.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-700">Passionate Coder</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700">Creative Thinker</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">Detail Oriented</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-gray-700">Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6 animate-on-scroll opacity-0 transition-all duration-1000 delay-500 translate-x-[50px]">
            {/* Education Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4 animate-bounce">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>

              <div className="ml-16">
                <h4 className="text-lg font-semibold text-gray-800">B.Tech in Computer Science and Engineering</h4>
                <p className="text-gray-600">University Name, 2019-2023</p>
                <p className="text-gray-500 mt-2">
                  Graduated with honors, focusing on web technologies and software development.
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4 animate-pulse">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Experience</h3>
              </div>

              <div className="ml-16">
                <h4 className="text-lg font-semibold text-gray-800">Full Stack Developer</h4>
                <p className="text-gray-600"></p>
                <p className="text-gray-500 mt-2">
                am new to the field, actively working on cutting-edge web applications using React, Node.js, and modern cloud technologies. Eager to learn and grow while building innovative solutions.
                </p>
              </div>
            </div>

            {/* Skills Card */}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

