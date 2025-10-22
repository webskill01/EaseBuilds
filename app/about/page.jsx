"use client";

// Premium About Page - EaseBuilds - Best Web Developer in Patiala Punjab India
// Professional Design with Custom Background, Glassmorphism & Interactive Elements

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaRocket,
  FaUsers,
  FaHeart,
  FaLightbulb,
  FaBolt,
  FaHandshake,
  FaStar,
  FaPhone,
  FaWhatsapp,
  FaCheckCircle,
  FaAward,
  FaShieldAlt,
  FaCode,
  FaPalette,
  FaMobile,
  FaChartLine,
  FaPhoneAlt,
} from "react-icons/fa";
import ScrollReveal from "../components/animations/ScrollReveal";
import CountUp from "../components/animations/CountUp";
import Link from "next/link";
import HeroImage from "../components/HeroImage";

export default function AboutPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation & Simplicity",
      description:
        "We combine cutting-edge technology with simple, user-friendly designs. No confusing tech jargon - just clean, beautiful websites that work.",
      gradient: "from-amber-400 via-orange-400 to-yellow-500",
      shadowColor: "shadow-amber-500/20",
      iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
      borderColor: "border-amber-200/50",
    },
    {
      icon: FaBolt,
      title: "Speed & Performance",
      description:
        "Lightning-fast delivery in 2-4 weeks. Websites optimized for speed with 95+ PageSpeed scores. Your time and customer experience matter.",
      gradient: "from-blue-400 via-cyan-400 to-blue-500",
      shadowColor: "shadow-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
      borderColor: "border-blue-200/50",
    },
    {
      icon: FaHandshake,
      title: "Partnership & Trust",
      description:
        "We build lasting relationships, not just websites. Dedicated support in your language (Hindi, Punjabi, English) with local Patiala presence.",
      gradient: "from-purple-400 via-pink-400 to-purple-500",
      shadowColor: "shadow-purple-500/20",
      iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
      borderColor: "border-purple-200/50",
    },
    {
      icon: FaHeart,
      title: "Passion & Excellence",
      description:
        "Every project gets our full dedication. We genuinely care about your success and pour our expertise into creating exceptional websites.",
      gradient: "from-rose-400 via-pink-400 to-red-500",
      shadowColor: "shadow-rose-500/20",
      iconBg: "bg-gradient-to-br from-rose-100 to-pink-100",
      borderColor: "border-rose-200/50",
    },
  ];

  const expertise = [
    {
      icon: FaCode,
      title: "Modern Development",
      description: "React, Next.js, & latest technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaPalette,
      title: "Creative Design",
      description: "Beautiful, user-centric interfaces",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaMobile,
      title: "Mobile First",
      description: "100% responsive across all devices",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaChartLine,
      title: "SEO Focused",
      description: "Built to rank & drive traffic",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Happy Clients",
      sublabel: "in Patiala Punjab",
      icon: FaUsers,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      value: 100,
      suffix: "%",
      label: "Satisfaction",
      sublabel: "Rate Guaranteed",
      icon: FaStar,
      gradient: "from-emerald-500 to-green-600",
      delay: true,
    },
    {
      value: 4,
      prefix: "2-",
      suffix: "",
      label: "Weeks Delivery",
      sublabel: "Average Timeline",
      icon: FaRocket,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support",
      sublabel: "Always Available",
      icon: FaWhatsapp,
      gradient: "from-orange-500 to-amber-600",
      delay: true,
    },
  ];

  return (
    <>
      <main className="py-10 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Hero Section with Custom Background Image */}
        <section
          ref={heroRef}
          className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
        >
          {/* Background Image Layer */}
          <HeroImage
         src="/images/about-hero.jpg"
        alt="EaseBuilds Web Development Team Background"
      />

           <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-900/60" />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '50px 50px'
              }} />
          </div>

          {/* Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="container-custom relative z-10 py-10"
          >
            <div className="max-w-5xl mx-auto text-center">
              <ScrollReveal direction="up">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base font-semibold text-white">
                    About EaseBuilds
                  </span>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                  <span className="block">Best Web Development Company</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    in Patiala Punjab India
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-6">
                  The{" "}
                  <strong className="text-white">
                    best web development company in Patiala Punjab{" "}
                  </strong>
                  , transforming local businesses with stunning websites that
                  deliver real results.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#our-story"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-slate-900 font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all text-base sm:text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Story
                    <motion.span
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </motion.a>
                  <motion.a
                    href="tel:+916283380110"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all text-base sm:text-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPhoneAlt />
                    Get Started
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section - Glassmorphism Card */}
        <section id="our-story" className="py-10 relative">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="max-w-5xl mx-auto">
                {/* Glass Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-14 shadow-2xl border border-white/50 overflow-hidden"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full" />
                      <h2>
                        About EaseBuilds - Your Trusted Web Developer in Patiala
                      </h2>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                        At{" "}
                        <strong className="text-blue-600 font-bold">
                          EaseBuilds
                        </strong>
                        , we started with a vision: to make professional web
                        development accessible to every business in{" "}
                        <strong className="text-slate-900">
                          Patiala Punjab India
                        </strong>
                        . We saw talented local businesses struggling with
                        expensive, complicated web services that didn't deliver
                        results.
                      </p>

                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                        Today, we've helped over{" "}
                        <strong className="text-blue-600 font-bold">
                          50 businesses across Patiala
                        </strong>{" "}
                        launch stunning websites. From dental clinics and
                        architecture firms to e-commerce stores and educational
                        institutions, we've witnessed firsthand how the right
                        website can transform a business's growth trajectory.
                      </p>
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                        Being based in Patiala means we understand local
                        business needs. We speak your language (Hindi, Punjabi,
                        English), we know the market, and we're available for
                        face-to-face meetings whenever you need us. This local
                        connection, combined with world-class technical
                        expertise in{" "}
                        <Link
                          href="/services/custom-website-design"
                          className="text-blue-600 hover:text-blue-700 font-semibold underline"
                        >
                          custom website design
                        </Link>
                        ,{" "}
                        <Link
                          href="/services/ecommerce-development"
                          className="text-blue-600 hover:text-blue-700 font-semibold underline"
                        >
                          e-commerce development
                        </Link>
                        , and{" "}
                        <Link
                          href="/services/seo-services"
                          className="text-blue-600 hover:text-blue-700 font-semibold underline"
                        >
                          SEO services
                        </Link>{" "}
                        makes us the{" "}
                        <strong className="text-blue-600 font-bold">
                          best web developer in Patiala Punjab India
                        </strong>
                        .
                      </p>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-600 my-8"
                      >
                        <div className="flex items-start gap-4">
                          <FaHeart className="text-3xl text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                              "Your Success is Our Success"
                            </p>
                            <p className="text-base text-slate-700">
                              This philosophy drives everything we do. We don't
                              just build websites - we build partnerships. When
                              your business grows, we celebrate with you. When
                              you face challenges, we're here to help solve
                              them.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Expertise Section - Icon Grid */}
        <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2>Web Development Expertise in Patiala Punjab</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Combining creativity with cutting-edge technology
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {expertise.map((item, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <item.icon className="text-2xl text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - FIXED: Removed text color change on hover */}
        <section className="py-10">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <FaStar className="text-purple-600" />
                  <span className="text-sm font-bold text-purple-700">
                    Our Core Values
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  What Drives Us Forward
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  The principles that guide every project we deliver
                </p>
                <p>
                  These values have made EaseBuilds the{" "}
                  <strong>
                    most trusted web developer in Patiala Punjab India
                  </strong>
                  , earning us 100% client satisfaction and 50+ successful
                  projects.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl hover:${value.shadowColor} hover:shadow-2xl transition-all duration-500 border ${value.borderColor} overflow-hidden`}
                  >
                    {/* Animated Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      whileHover={{ scale: 1.1 }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 ${value.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center`}
                        >
                          <value.icon className="text-3xl text-white" />
                        </div>
                      </motion.div>

                      {/* FIXED: Removed hover text color change - keeps slate-900 always */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                    />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Dark Theme */}
        <section
          ref={statsRef}
          className="relative py-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />

          <div className="container-custom relative z-10">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-lg text-blue-200">
                  Real results for real businesses
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={
                    isStatsInView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.8, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 ${
                    stat.delay ? "lg:mt-12" : ""
                  }`}
                >
                  <div className="text-center">
                    <stat.icon className="text-4xl sm:text-5xl text-white/80 mx-auto mb-4" />
                    <motion.div
                      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {isStatsInView && (
                        <>
                          {stat.prefix}
                          <CountUp
                            value={stat.value}
                            suffix={stat.suffix || ""}
                            duration={2.5}
                          />
                        </>
                      )}
                    </motion.div>
                    <div className="text-base sm:text-lg font-bold text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">
                      {stat.sublabel}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Glass Card */}
        <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <div className="max-w-5xl mx-auto relative">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/95 rounded-3xl" />
                <div
                  className="absolute inset-0 rounded-3xl opacity-80"
                  style={{
                    backgroundImage:
                      'url("/images/services/custom4.jpg")',
                       backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
                  }}
                />

                <div className="relative  rounded-3xl p-8 border border-white/30 shadow-2xl text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                      <FaRocket className="text-4xl text-blue-600" />
                    </div>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Let's Build Something Amazing Together
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Ready to transform your business with a professional
                    website? Get a free consultation with the best web
                    development team in Patiala.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="tel:+916283380110"
                      className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-slate-900 font-bold rounded-xl shadow-2xl hover:shadow-white/50 transition-all text-lg"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPhoneAlt className="text-xl" />
                      <span>Call Now</span>
                    </motion.a>
                    <motion.a
                      href="https://wa.me/916283380110?text=Hi%20EaseBuilds,%20I'd%20like%20to%20discuss%20my%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-2xl transition-all text-lg"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-2xl" />
                      <span>WhatsApp Us</span>
                    </motion.a>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-300" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-300" />
                      <span>Response in 2-4 Hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-300" />
                      <span>No Hidden Costs</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
