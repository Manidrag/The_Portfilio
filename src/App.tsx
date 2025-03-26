"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Projects from "./components/projects"

export default function App() {
  // Add smooth scrolling effect
  useEffect(() => {
    // Add a class to body when page loads with a fade-in effect
    document.body.classList.add("opacity-0")
    setTimeout(() => {
      document.body.classList.remove("opacity-0")
      document.body.classList.add("transition-opacity", "duration-1000", "opacity-100")
    }, 100)

    // Clean up
    return () => {
      document.body.classList.remove("transition-opacity", "duration-1000", "opacity-100")
    }
  }, [])

  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects/>
   
      <Contact/>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

