'use client'

// Portfolio/Work Showcase Page - IMPROVED VERSION
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { 
  FaPhone, 
  FaWhatsapp, 
  FaStar, 
  FaCode,
  FaExternalLinkAlt,
  FaCheck,
  FaRocket,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaAws,
  FaDocker,
  FaPython,
  FaPhp,
  FaPhoneAlt
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiTypescript,
  SiFramer,
  SiExpress,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiStripe,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiSanity
} from 'react-icons/si'

import Link from 'next/link'
import ScrollReveal from '@/app/components/animations/ScrollReveal'
import portfolioProjects from '@/lib/portfolioData'
import HeroImage from '../components/HeroImage'

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // All projects (no filtering)
  const projects = portfolioProjects.slice(0, 6)

  // Active step state for stepper
  
// Technology icons - Essential modern stack
const technologies = [
  // Frontend
  { name: 'Next.js', Icon: SiNextdotjs, color: 'from-black to-gray-800', textColor: 'text-white' },
  { name: 'React', Icon: FaReact, color: 'from-blue-400 to-cyan-400', textColor: 'text-white' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'from-cyan-400 to-blue-500', textColor: 'text-white' },
  
  // Backend
  { name: 'Node.js', Icon: FaNodeJs, color: 'from-green-500 to-green-600', textColor: 'text-white' },
  { name: 'Express.js', Icon: SiExpress, color: 'from-gray-700 to-gray-900', textColor: 'text-white' },
  { name: 'GraphQL', Icon: SiGraphql, color: 'from-pink-500 to-purple-500', textColor: 'text-white' },
  
  // Databases
  { name: 'MongoDB', Icon: SiMongodb, color: 'from-green-500 to-green-700', textColor: 'text-white' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: 'from-blue-600 to-blue-700', textColor: 'text-white' },
  
  // Animation & Payment
  { name: 'Framer', Icon: SiFramer, color: 'from-pink-500 to-purple-600', textColor: 'text-white' },
  { name: 'Stripe', Icon: SiStripe, color: 'from-purple-600 to-indigo-600', textColor: 'text-white' },
  
  // Deployment & Services
  { name: 'Vercel', Icon: SiVercel, color: 'from-black to-gray-800', textColor: 'text-white' },
  { name: 'Firebase', Icon: SiFirebase, color: 'from-yellow-500 to-orange-500', textColor: 'text-white' },
  
  // Tools
  { name: 'Figma', Icon: FaFigma, color: 'from-purple-500 to-pink-500', textColor: 'text-white' },
  { name: 'GitHub', Icon: FaGithub, color: 'from-gray-800 to-black', textColor: 'text-white' },
]

  // Duplicate for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <>
      {/* Hero Section with Light Opacity Background */}
      <section 
        ref={heroRef}
        className="relative min-h-[50vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background Image with Light Opacity */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-600/10 z-10" />
          <HeroImage
  src="/images/portfolio-hero.webp"
  alt="Web Development Portfolio Patiala Punjab"
/>
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-30 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6 border border-blue-200"
            >
              <FaCode className="text-blue-600 text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-semibold text-blue-600">
                Our Work Showcase
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Web Development{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Portfolio
              </span>
              <br />
              Patiala Punjab India
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-900 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Explore our collection of custom websites, e-commerce platforms, and digital solutions 
              built for businesses in <strong className="text-blue-600">Patiala</strong>. Modern designs, 
              fast performance, and measurable results.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 text-gray-900"
            >
              {[
                { number: '15', label: 'Projects Shipped' },
                { number: '10', label: 'Systems in Production' },
                { number: '5.0', label: 'Google Rating' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-900">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Loop for Technologies */}
      {/* Infinite Logo Loop for Technologies */}
<section className="section-padding bg-white border-y border-gray-200 overflow-hidden">
  <div className="mb-6 text-center">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
      Technologies We Master
    </h3>
  </div>
  <div className="relative">
    {/* Gradient overlays for fade effect */}
    <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
    
    {/* Infinite scroll animation */}
    <motion.div
      className="flex gap-8 sm:gap-12"
      animate={{
        x: [0, -2400], // Adjust based on number of logos
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      }}
    >
      {duplicatedTechnologies.map((tech, index) => {
        const IconComponent = tech.Icon
        return (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center w-20 sm:w-24"
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${tech.color} ${tech.textColor} flex items-center justify-center mb-2 shadow-lg`}>
              <IconComponent className="text-3xl sm:text-4xl" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-600 text-center">
              {tech.name}
            </span>
          </div>
        )
      })}
    </motion.div>
  </div>
</section>

      {/* Projects Grid (No Filters) */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Real-world solutions delivering exceptional results
              </p>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full flex flex-col group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                    <Image
                      src={project.image || "/opengraph-image.png"}
                      alt={`${project.businessName} - ${project.category}, ${project.location}`}

                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay on Hover - Only External Link if URL exists */}
                    {project.url && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg"
                        >
                          <FaExternalLinkAlt />
                          Visit Site
                        </motion.a>
                      </div>
                    )}

                    {/* Industry Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                      {project.industry}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.businessName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Case study: problem -> build -> what changed (Task 7.5).
                        Was `project.results`, a key no project has, so this
                        never rendered. Native <details> keeps it collapsed
                        without a new component or any client state. */}
                    {project.challenge && (
                      <details className="mt-auto pt-4 border-t border-gray-100 group/case">
                        <summary className="cursor-pointer list-none text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2">
                          <FaCheck className="text-green-500 flex-shrink-0" />
                          Read the case study
                        </summary>

                        <div className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
                          <div>
                            <p className="font-semibold text-gray-900">The problem</p>
                            <p>{project.challenge}</p>
                          </div>

                          {project.solution && (
                            <div>
                              <p className="font-semibold text-gray-900">What we built</p>
                              <p>{project.solution}</p>
                            </div>
                          )}

                          {project.metrics && (
                            <div>
                              <p className="font-semibold text-gray-900">What changed</p>
                              <p>{project.metrics}</p>
                            </div>
                          )}
                        </div>
                      </details>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Task 7.7: the 4-step process stepper that used to sit here said the
          same thing as HowItWorks on the homepage, in different words and
          without the durations. /portfolio's job is to show the work; the
          homepage explains how it runs. One link replaces 275 lines. */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Wondering how a build actually runs?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Four steps, from the first conversation to a live site, with what
              each one takes.
            </p>
            <Link href="/#how-it-works" className="btn-primary">
              See the process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <FaRocket className="text-5xl mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-blue-100">
                Let's build something amazing together! Professional websites starting at ₹2,999
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/916283380110?text=Hi%20EaseBuilds%2C%20I%20saw%20your%20portfolio%20and%20want%20something%20similar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto btn-whatsapp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Message on WhatsApp
                </motion.a>

                <motion.a
                  href="tel:+916283380110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto btn bg-white text-blue-600 shadow-2xl"
                >
                  <FaPhoneAlt />
                  Call Us
                </motion.a>
                
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all text-lg"
                >
                  View Pricing
                  <FaArrowRight />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
