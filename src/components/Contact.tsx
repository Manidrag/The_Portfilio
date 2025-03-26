"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { GitlabIcon as GitHub, Linkedin, Mail, Phone, MapPin, Send, Loader2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    <div id="contact" className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden flex justify-center items-center">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-on-scroll opacity-0 transition-all duration-700">
            <span className="inline-block relative">
              <span className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/10 animate-ping"></span>
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            </span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="flex gap-12 items-center  justify-center">
          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300 translate-x-[-50px]">
            <div className="bg-white rounded-2xl shadow-xl  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 p-32">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-700 font-medium">manikrishna95joshi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700 font-medium">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Manidrag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                  >
                    <GitHub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manish-joshi-8268691b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

         
         
        </div>
      </div>
    </div>
  )
}

export default Contact

