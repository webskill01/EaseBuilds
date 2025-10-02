'use client'
import { motion } from 'framer-motion'
import { FaComments, FaPencilRuler, FaCode, FaRocket, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const steps = [
  {
    icon: FaComments,
    number: '01',
    title: 'Tell Us Your Vision',
    description: 'Share your goals and ideas. We create a plan together.',
    gradient: 'from-blue-500 to-primary-600',
    bg: 'bg-blue-50'
  },
  {
    icon: FaPencilRuler,
    number: '02',
    title: 'Design & Planning',
    description: 'We design your mockup and get your approval first.',
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50'
  },
  {
    icon: FaCode,
    number: '03',
    title: 'Build Your Website',
    description: 'Clean code, fast performance, beautiful design.',
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50'
  },
  {
    icon: FaRocket,
    number: '04',
    title: 'Launch & Grow',
    description: 'We launch and train you. Watch your business grow!',
    gradient: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50'
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isMobile])

  return (
    <section className="relative py-10 bg-gradient-to-br from-primary-50 via-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            How We Work
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Simple process from idea to launch - no tech jargon, just results
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          {/* Add padding to prevent badge cutoff */}
          <div className="relative pt-4 pb-2">
            {/* Carousel Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4 pt-5">
                    {/* Added overflow-visible to parent */}
                    <div className={`${step.bg} rounded-2xl p-6 shadow-lg border-2 border-white relative overflow-visible`}>
                      {/* Step Number Badge - Fixed positioning */}
                      <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-base shadow-lg z-10`}>
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                        <step.icon className="text-2xl text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots - Fixed sizing */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeStep === index 
                      ? 'w-6 h-2 bg-primary-600' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative group pt-4"
            >
              {/* Connecting Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-14 left-full w-full items-center justify-center -z-10">
                  <FaArrowRight className="text-primary-300 text-xl group-hover:text-primary-500 transition-colors duration-300" />
                </div>
              )}

              {/* Card with overflow-visible */}
              <div className={`${step.bg} rounded-xl lg:rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 relative border-2 border-white group-hover:-translate-y-1 overflow-visible`}>
                {/* Step Number Badge - Fixed sizing and positioning */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center font-bold text-base shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${step.gradient} rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="text-xl lg:text-2xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <a 
            href="#contact" 
            className="inline-block btn-primary px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
