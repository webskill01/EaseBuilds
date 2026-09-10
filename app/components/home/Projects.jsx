'use client'

// Ultra-Optimized Portfolio Projects Section

import { FaExternalLinkAlt, FaRocket, FaPhone, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

import Image from 'next/image'
import ScrollReveal from '../animations/ScrollReveal'
import { getFeaturedProjects } from '@/lib/portfolioData'

// single source of truth — see lib/portfolioData.js
// Task 7.6: three is a glance, the full set lives on /portfolio and the
// "See all our work" link below routes there.
const projects = getFeaturedProjects().slice(0, 3)


export default function Projects() {
  // ponytail: this was a JS carousel - two chevron buttons, a dot row, an index
  // in state, a resize listener recomputing itemsPerView, and a spring-animated
  // translate. All of it replaced by overflow-x-auto + scroll snap, which is
  // what a phone user reaches for anyway: they swipe, they do not hunt for a
  // 40px chevron. Native scrolling is also keyboard- and screen-reader-native
  // and costs no JS. Desktop shows all three at once, so nothing scrolls there.
  return (
    <section 
      id="portfolio" 
      className="section-padding relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Simplified Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* SEO-Optimized Header */}
        <ScrollReveal direction="up" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <FaRocket className="text-sm" aria-hidden="true" />
              Our Success Stories
            </span>
          </div>
          
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Work we have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              actually shipped
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 mb-2">
            Every site below is live and linked, so you can open it and judge it
            yourself. From a taxi booking service in Patiala to a cleaning company
            in Melbourne.
          </p>
          
          {/* Success Metrics Badge */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-green-700">5 Live Client Sites</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full">
              <span className="text-xs sm:text-sm font-semibold text-blue-700">10 Automation Systems</span>
            </div>
          </div>
        </ScrollReveal>

                {/* Swipeable track. The last card is deliberately narrower than the
            viewport on mobile so the next one peeks in - that edge is what tells
            a user it scrolls, and it replaces the chevrons doing that job. */}
        <div className="relative">
          <div
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-strip -mx-4 px-4 pb-4 sm:mx-0 sm:px-0"
            role="group"
            aria-label="Featured projects, scroll horizontally"
          >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
                >
                  <div
                    onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                    className="group cursor-pointer h-full"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} aria-hidden="true" />
                        
                        {/* Image */}
                        <Image
                          src={project.image}
                          alt={`${project.title} - Professional website developed by EaseBuilds for ${project.location}. ${project.clientType} website with ${project.metrics}.`}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                          <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                              <FaExternalLinkAlt className="text-blue-600 text-xl sm:text-2xl" />
                            </div>
                            <span className="text-white text-sm sm:text-base font-bold bg-black/30 px-4 py-2 rounded-full">
                              Visit Live Website
                            </span>
                          </div>
                        </div>

                        {/* Featured & Metrics Badges */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                          {project.featured && (
                            <div className="bg-white/95 px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
                              <span className="text-[10px] sm:text-xs font-bold text-blue-600">⭐ Featured</span>
                            </div>
                          )}
                          {project.metrics && (
                            <div className="bg-green-500/95 px-3 py-1.5 rounded-full shadow-lg">
                              <span className="text-[10px] sm:text-xs font-bold text-white">{project.metrics}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-block text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                            <span className="text-[10px] sm:text-xs text-gray-500">{project.clientType}</span>
                          </div>
                          
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                            {project.title}
                            <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </h3>
                          
                          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          {/* Location Badge */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full mb-3 border border-gray-200">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-semibold text-gray-700">📍 {project.location}</span>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[10px] sm:text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                            ))}
          </div>

          <p className="mt-3 text-center text-xs text-gray-500 sm:hidden">
            Swipe to see more projects
          </p>
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.3} className="mt-10">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl p-6 shadow-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Want Results Like These?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your business in <strong className="text-white">Patiala</strong>! 
              Get a professional website that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+916283380110" 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3  bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:scale-105 transition-all text-sm sm:text-base"
              >
                <FaPhoneAlt className="text-lg" />
                Call Now
              </a>
              <a 
                href="https://wa.me/916283380110?text=Hi%2C%20I%20want%20a%20website%20like%20your%20portfolio%20projects" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
