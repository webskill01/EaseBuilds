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
  FaLightbulb,
  FaPaintBrush,
  FaTools,
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
  const [activeStep, setActiveStep] = useState(0)
  
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

  // Development process steps
const processSteps = [
  { 
    number: '01', 
    title: 'Discovery & Planning', 
    description: 'We understand your business goals, target audience, and project requirements through detailed consultation.',
    Icon: FaLightbulb,
    details: ['Requirement analysis', 'Competitor research', 'Strategy planning']
  },
  { 
    number: '02', 
    title: 'Design & Prototyping', 
    description: 'Creating beautiful, user-friendly interfaces with modern design principles and your brand identity.',
    Icon: FaPaintBrush,
    details: ['Wireframing', 'UI/UX design', 'Interactive prototypes']
  },
  { 
    number: '03', 
    title: 'Development & Testing', 
    description: 'Building with modern technologies, writing clean code, and ensuring everything works perfectly.',
    Icon: FaTools,
    details: ['Frontend development', 'Backend integration', 'Quality assurance']
  },
  { 
    number: '04', 
    title: 'Launch & Support', 
    description: 'Deploying your website, providing training, and offering ongoing maintenance and support.',
    Icon: FaRocket,
    details: ['Deployment', 'Training', 'Ongoing support']
  },
  ]

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
  src="/images/portfolio-hero.jpg"
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
                { number: '50+', label: 'Projects Delivered' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '5.0', label: 'Star Rating' },
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
<section className="py-8 bg-white border-y border-gray-200 overflow-hidden">
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
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
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
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                    <Image
                      src={project.image || "/images/image4.jpg"}
                      alt={`${project.businessName} - ${project.industry} Website Project in Patiala Punjab`}

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
                  <div className="p-6">
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

                    {/* Results */}
                    {project.results && (
                      <div className="pt-4 border-t border-gray-100">
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          {Object.entries(project.results).slice(0, 2).map(([key, value], idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 leading-tight">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Improved Stepper with Next/Previous Buttons */}
<section className="py-10 bg-white">
  <div className="container-custom">
    <ScrollReveal direction="up">
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Development Process
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          From concept to launch, a proven methodology for success
        </p>
      </div>
    </ScrollReveal>

    <div className="max-w-5xl mx-auto">
      {/* Desktop Horizontal Stepper */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200 mx-24">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
              animate={{ width: `${(activeStep / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-4">
            {processSteps.map((step, index) => {
              const StepIcon = step.Icon
              return (
                <div key={index} className="relative">
                  <motion.div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 transition-all duration-300 ${
                        index <= activeStep
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                      animate={index === activeStep ? { scale: [1, 1.08, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {index < activeStep ? (
                        <FaCheckCircle className="text-3xl" />
                      ) : (
                        <StepIcon className="text-3xl" />
                      )}
                    </motion.div>

                    {/* Step Number */}
                    <div className={`text-xs font-bold mb-2 ${
                      index <= activeStep ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      STEP {step.number}
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-center font-bold text-sm ${
                      index <= activeStep ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Active Step Details Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl border-2 border-blue-100 shadow-xl"
          >
            <div className="flex items-start gap-6">
              {/* Large Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  {React.createElement(processSteps[activeStep].Icon, { 
                    className: "text-4xl text-white" 
                  })}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {processSteps[activeStep].title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {processSteps[activeStep].description}
                  </p>
                  <ul className="space-y-3">
                    {processSteps[activeStep].details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                        <span className="font-medium">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-blue-200">
              <motion.button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                whileHover={{ scale: activeStep === 0 ? 1 : 1.05 }}
                whileTap={{ scale: activeStep === 0 ? 1 : 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                }`}
              >
                <FaArrowLeft />
                Previous
              </motion.button>

              {/* Step Indicator */}
              <div className="flex items-center gap-2">
                {processSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeStep 
                        ? 'w-2 bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
                disabled={activeStep === 3}
                whileHover={{ scale: activeStep === 3 ? 1 : 1.05 }}
                whileTap={{ scale: activeStep === 3 ? 1 : 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeStep === 3
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                }`}
              >
                Next
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Vertical Stepper with Navigation */}
      <div className="lg:hidden">
        {/* Mobile Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
          {processSteps.map((step, index) => {
            const StepIcon = step.Icon
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  index === activeStep
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <StepIcon className="text-lg" />
                <span className="text-sm whitespace-nowrap">Step {step.number}</span>
              </button>
            )
          })}
        </div>

        {/* Mobile Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              {React.createElement(processSteps[activeStep].Icon, { 
                className: "text-2xl text-white" 
              })}
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600 mb-1">
                STEP {processSteps[activeStep].number}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {processSteps[activeStep].title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {processSteps[activeStep].description}
          </p>

          <ul className="space-y-2 mb-6">
            {processSteps[activeStep].details.map((detail, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold ${
                activeStep === 0
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-blue-600 text-white'
              }`}
            >
              <FaArrowLeft />
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
              disabled={activeStep === 3}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold ${
                activeStep === 3
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-blue-600 text-white'
              }`}
            >
              Next
              <FaArrowRight />
            </button>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {processSteps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeStep 
                  ? 'w-1.5 bg-blue-600' 
                  : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
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
                  href="tel:+916283380110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-2xl text-lg"
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
