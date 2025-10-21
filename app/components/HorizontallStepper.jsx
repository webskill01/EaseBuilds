'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheck, FaClock, FaArrowRight } from "react-icons/fa"

export default function HorizontalStepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0)
  const isFirst = currentStep === 0
  const isLast = currentStep === steps.length - 1

  const colorVariants = [
    { gradient: "from-blue-600 to-cyan-500" },
    { gradient: "from-purple-600 to-pink-500" },
    { gradient: "from-green-600 to-emerald-500" },
    { gradient: "from-orange-600 to-red-500" },
  ]

  const currentColor = colorVariants[currentStep % colorVariants.length]
  const currentStepData = steps[currentStep]

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Stepper Icons Row */}
      <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto p-4">
        {steps.map((step, idx) => {
          const stepColor = colorVariants[idx % colorVariants.length]
          const isActive = idx === currentStep
          const isPast = idx < currentStep

          return (
            <div key={idx} className="flex items-center">
              <button
                onClick={() => setCurrentStep(idx)}
                className="flex flex-col items-center gap-2 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full
                    text-xl sm:text-2xl shadow-lg transition-all duration-300 relative
                    ${isActive
                      ? `bg-gradient-to-br ${stepColor.gradient} text-white scale-110 ring-4 ring-offset-2 ring-blue-200`
                      : isPast
                        ? `bg-gradient-to-br ${stepColor.gradient} text-white opacity-70`
                        : "bg-gray-200 text-gray-400"
                    }
                  `}
                >
                  {isPast && !isActive ? (
                    <FaCheck className="text-lg sm:text-xl" />
                  ) : (
                    <span className="text-base sm:text-xl font-bold">{step.step}</span>
                  )}
                  
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${stepColor.gradient}`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  )}
                </motion.div>

                <span className={`
                  hidden sm:block text-xs font-semibold transition-colors
                  ${isActive ? 'text-gray-900' : 'text-gray-500'}
                `}>
                  {step.title}
                </span>
              </button>

              {idx < steps.length - 1 && (
                <div className={`
                  w-8 sm:w-12 h-1 mx-1 sm:mx-2 rounded-full transition-colors duration-300
                  ${idx < currentStep ? `bg-gradient-to-r ${stepColor.gradient}` : 'bg-gray-200'}
                `} />
              )}
            </div>
          )
        })}
      </div>

      {/* Step Content Card - REDUCED HEIGHT */}
      <div className="relative h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-full top-0 left-0"
          >
            <div className={`
              bg-gradient-to-br ${currentColor.gradient}
              rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden
              relative h-full
            `}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                {/* Header - Compact */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-xl sm:text-2xl text-white shadow-lg">
                      <span className="font-bold">{currentStepData.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {currentStepData.title}
                      </h3>
                      <div className="flex items-center gap-1 text-white/90">
                        <FaClock className="text-xs" />
                        <span className="text-xs font-medium">{currentStepData.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-xs">
                    {currentStep + 1}/{steps.length}
                  </div>
                </div>

                {/* Description - Compact */}
                <p className="text-sm sm:text-base text-white/95 mb-4 leading-relaxed">
                  {currentStepData.description}
                </p>

                {/* Deliverables - Compact */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex-1 overflow-y-auto">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <FaCheck className="text-green-300 text-xs" />
                    Deliverables
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentStepData.deliverables.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 p-2 bg-white/10 rounded-lg"
                      >
                        <div className="w-4 h-4 flex items-center justify-center bg-white rounded-full flex-shrink-0 mt-0.5">
                          <FaCheck className="text-[8px] text-blue-600" />
                        </div>
                        <span className="text-white text-xs sm:text-sm leading-tight">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - NOW VISIBLE */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3 mt-4 sm:mt-0">
        <motion.button
          whileHover={{ scale: isFirst ? 1 : 1.05 }}
          whileTap={{ scale: isFirst ? 1 : 0.95 }}
          className={`
            w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm sm:text-base
            transition-all duration-300 flex items-center justify-center gap-2
            ${isFirst
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
            }
          `}
          onClick={() => setCurrentStep(i => Math.max(i - 1, 0))}
          disabled={isFirst}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: isLast ? 1 : 1.05 }}
          whileTap={{ scale: isLast ? 1 : 0.95 }}
          className={`
            w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm sm:text-base
            transition-all duration-300 flex items-center justify-center gap-2
            ${isLast
              ? "bg-green-500 text-white"
              : `bg-gradient-to-r ${currentColor.gradient} text-white shadow-lg hover:shadow-xl`
            }
          `}
          onClick={() => setCurrentStep(i => Math.min(i + 1, steps.length - 1))}
          disabled={isLast}
        >
          {isLast ? (
            <>
              <FaCheck />
              Complete!
            </>
          ) : (
            <>
              Next
              <FaArrowRight />
            </>
          )}
        </motion.button>
      </div>
    </div>
  )
}
