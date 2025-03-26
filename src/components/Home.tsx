"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { GitlabIcon as GitHub, Linkedin, Download, ChevronDown, Code, Zap, Monitor } from "lucide-react"
import { Link } from "react-scroll"
import resume from '../assets/Manish_Krishna_JoshiResume.pdf'



function Home() {
  const textRef = useRef<HTMLDivElement>(null)

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
  function Downloadk(){
     const link=document.createElement('a')
     link.href=resume
     link.download='Manish_Krishna_JoshiResume.pdf'
     link.click()
     link.remove()  

  }

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5  blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5  blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Profile Image */}
        <div className="lg:w-1/2 flex justify-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600  blur opacity-75 animate-pulse"></div>
            <div className="relative l overflow-hidden border-0 border-white shadow-xl h-64 w-64 md:h-80 md:w-80">
              <img
                src="/the-profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="lg:w-1/2 text-center lg:text-left space-y-6 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10"
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary flex items-center justify-center lg:justify-start">
            <Code className="w-5 h-5 mr-2 animate-pulse" />
            Hello, I Am
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            <span className="block">Manish Krishna Joshi</span>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient">
              Web Developer
            </span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
          Enthusiastic full-stack developer dedicated to building beautiful, functional, and user-friendly websites and applications. Always eager to learn, innovate, and bring ideas to life through code..
          </p>

          {/* Skills Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center">
              <Monitor className="w-3 h-3 mr-1" />
              Frontend
            </span>
            <span className="px-3 py-1 bg-gray-800/10 text-gray-800 rounded-full text-sm flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Backend
            </span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm flex items-center">
              <Code className="w-3 h-3 mr-1" />
              Full Stack
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Manidrag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <GitHub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manish-joshi-8268691b1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <Button onClick={()=>Downloadk()} className="flex cursor-grab items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <Download size={20}/ >
              <span>Resume</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
          <ChevronDown size={32} className="text-primary" />
        </Link>
      </div>
    </div>
  )
}

export default Home

