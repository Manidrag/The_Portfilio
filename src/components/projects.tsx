

import { useEffect, useState } from "react"
import { Github, ExternalLink, Code, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"


// Project type definition
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

// Sample projects data - replace with your actual projects
const projectsData: Project[] = [
  {
    id: 1,
    title: "MemBrain",
    description:
      "A full-stackNotes platform with ChatGpt,Gemini for transcriptiona nd semetic search user authentication and MongoDB",
    image: "/Hmembrain.png",
    technologies: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS", "Redux"],
    githubUrl: "https://github.com/Manidrag/The-Membrain",
    liveUrl: "https://sweet-licorice-a7d137.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Polling App",
    description:
      "A small project of Realtime polling.",
    image: "/hyipole.png",
    technologies: ["React", "Express", "Tailwind CSS",],
    githubUrl: "https://github.com/Manidrag/The-Human-Pole",
    liveUrl: "https://thedemopole.netlify.app/",
    featured: true,
  },
  
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing skills, projects, and contact information with modern design and animations.",
    image: "/theportgilio.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/project4",
    liveUrl: "",
    featured: false,
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState<number>(0)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)
  const [filter, setFilter] = useState<string>("all")
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(projectsData)

  // Update filtered projects when filter changes
  useEffect(() => {
    if (filter === "featured") {
      setFilteredProjects(projectsData.filter((project) => project.featured))
    } else {
      setFilteredProjects(projectsData)
    }

    // Reset active project when filter changes
    setActiveProject(0)
  }, [filter])

  // Update displayed projects in the grid
  useEffect(() => {
    setDisplayedProjects(filter === "featured" ? projectsData.filter((project) => project.featured) : projectsData)
  }, [filter])

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

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  // Check if we have any projects to display in the featured section
  const hasFeaturedProjects = filteredProjects.length > 0

  return (
    <div id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700">
          My Projects
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 animate-on-scroll opacity-0 transition-all duration-700 delay-200">
          Check out some of my recent work and personal projects
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
          <div className="flex space-x-4 bg-white p-1 rounded-full shadow-md">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "ghost"}
              onClick={() => setFilter("featured")}
              className="rounded-full"
            >
              Featured
            </Button>
          </div>
        </div>

        {/* Featured Project Showcase */}
        {hasFeaturedProjects && (
          <div className="mb-16 animate-on-scroll opacity-0 transition-all duration-1000 delay-400 translate-y-10">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Project Navigation */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Next project"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-0">
                {/* Project Image */}
                <div className="md:h-[500px] overflow-hidden">
                  <img
                    src={filteredProjects[activeProject]?.image || "/placeholder.svg?height=600&width=800"}
                    alt={filteredProjects[activeProject]?.title || "Project Image"}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {filteredProjects[activeProject]?.title || "Project Title"}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {filteredProjects[activeProject]?.description || "Project description goes here."}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[activeProject]?.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                          {tech}
                        </Badge>
                      )) || (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                          Technology
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                      <a
                        href={filteredProjects[activeProject]?.liveUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <a
                        href={filteredProjects[activeProject]?.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Pagination */}
              {filteredProjects.length > 1 && (
                <div className="flex justify-center p-4 bg-gray-50">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                        activeProject === index ? "bg-primary scale-125" : "bg-gray-300"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Projects Message */}
        {!hasFeaturedProjects && filter === "featured" && (
          <div className="text-center py-12 mb-8 bg-white rounded-xl shadow-md animate-on-scroll opacity-0 transition-all duration-700 delay-400">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No featured projects found</h3>
            <p className="text-gray-500 mb-4">Try viewing all projects instead</p>
            <Button onClick={() => setFilter("all")} variant="outline">
              View All Projects
            </Button>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-600 translate-y-10">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=500"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-white">Featured</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between gap-2">
                  <Button asChild variant="ghost" size="sm" className="flex-1 flex items-center justify-center gap-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1 flex items-center justify-center gap-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for No Projects */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">Try changing your filter criteria as you prefered</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-1000 delay-700">
          <p className="text-gray-600 mb-4">Interested in seeing more of my work?</p>
          <Button asChild variant="outline" className="flex items-center gap-2 mx-auto">
            <a href="https://github.com/Manidrag" target="_blank" rel="noopener noreferrer">
              <Code size={18} />
              View Git For All Projects
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Projects

