import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMotion } from '../context/MotionContext';
import AnimatedSection from '../components/ui/AnimatedSection';
import { HashLink } from 'react-router-hash-link';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { ArrowRight, GraduationCap, Home as HomeIcon, Briefcase, CheckCircle, Code as CodeXml, Cpu, Target, TrendingUp, Award, Zap, Sparkles, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  const { prefersReducedMotion } = useMotion();
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [currentTextHighlight, setCurrentTextHighlight] = useState(0);
  const [currentVstartFeature, setCurrentVstartFeature] = useState(0);
  const highlights = ['Software', 'Electronics', 'Mechanical'];

  // Cycle through highlights
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Cycle through text highlights
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentTextHighlight((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Cycle through Vstart features
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentVstartFeature((prev) => (prev + 1) % 3);
    }, 3500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Animation variants for text highlighting
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };
  
  const backgroundVariants = {
    initial: { 
      scaleX: 0,
      originX: 0
    },
    animate: { 
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      scaleX: 0,
      originX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    { 
      icon: <CheckCircle className="h-8 w-8 text-primary-500" />, 
      title: '₹15,000/month salary',
      description: 'Get paid from day one while you learn and work on real projects'
    },
    { 
      icon: <HomeIcon className="h-8 w-8 text-primary-500" />, 
      title: '100% Work from Home',
      description: 'No need to relocate or commute. Work from wherever you\'re comfortable'
    },
    { 
      icon: <CodeXml className="h-8 w-8 text-primary-500" />, 
      title: 'Choose your path',
      description: 'Select from Software, Electronics, or Mechanical engineering tracks'
    },
    { 
      icon: <Cpu className="h-8 w-8 text-primary-500" />, 
      title: 'AI-Powered Roles',
      description: 'Work on cutting-edge technologies and real product development'
    }
  ];

  const vstartFeatures = [
    {
      icon: <GraduationCap className="h-12 w-12 text-accent-500" />,
      title: "Learn While Studying",
      description: "Perfect for college students who want to gain real industry experience alongside their academic studies.",
      highlight: "₹4,000/month stipend"
    },
    {
      icon: <Rocket className="h-12 w-12 text-accent-500" />,
      title: "Fast-Track to Career",
      description: "Get a head start on your career with hands-on experience that makes you job-ready before graduation.",
      highlight: "Real project experience"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-accent-500" />,
      title: "Flexible Schedule",
      description: "Work around your class schedule with flexible hours designed for student life.",
      highlight: "Study-friendly timing"
    }
  ];

  const staggerDelay = 0.3;
  const textHighlights = [
    { text: "No Interview Conducted", color: "bg-red-500/20", textColor: "text-red-600 dark:text-red-400" },
    { text: "No Degree Asked", color: "bg-blue-500/20", textColor: "text-blue-600 dark:text-blue-400" },
    { text: "No English Required", color: "bg-green-500/20", textColor: "text-green-600 dark:text-green-400" },
    { text: "No Skills Mandatory", color: "bg-purple-500/20", textColor: "text-purple-600 dark:text-purple-400" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="pt-12 md:pt-16 pb-20 md:pb-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pt-8">
              <AnimatedSection delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                  {textHighlights.map((highlight, index) => (
                    <motion.span
                      key={highlight.text}
                      initial="initial"
                      animate="animate"
                      variants={textVariants}
                      className="relative block mb-3"
                    >
                      <AnimatePresence mode="wait">
                        {currentTextHighlight === index && (
                          <motion.div
                            key={`highlight-${index}`}
                            className={`absolute top-0 left-0 ${highlight.color} rounded-lg`}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={backgroundVariants}
                          >
                            <span className="block opacity-0 px-2">{highlight.text}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span className={`relative z-10 px-2 ${currentTextHighlight === index ? highlight.textColor : ''}`}>
                        {highlight.text}
                      </span>
                    </motion.span>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4 * staggerDelay, duration: 0.5 }}
                    className="text-gradient mt-4"
                  >
                    Only Passion. Effort.
                  </motion.div>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="mb-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5 * staggerDelay, duration: 0.5 }}
                    className="text-xl md:text-2xl font-display italic text-primary-600 dark:text-primary-400 mb-4"
                  >
                    "Where your journey begins — not with proof, but with purpose."
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 6 * staggerDelay, duration: 0.5 }}
                    className="text-lg md:text-xl font-medium text-accent-600 dark:text-accent-400 mb-8"
                  >
                    "We build humans with AI, not replace them."
                  </motion.p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button href="/services" size="lg">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button href="/about" variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            <div className="md:w-1/2 md:mt-16">
              <ParallaxElement speed={-0.1} className="relative">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-500/10 rounded-full filter blur-xl"></div>
                  
                  <motion.div 
                    className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30"
                    initial={prefersReducedMotion ? {} : { y: 20, opacity: 0 }}
                    animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative h-64 w-full bg-dark-100 dark:bg-dark-800 rounded-lg mb-6 overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"
                        animate={{ 
                          background: [
                            'linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), rgba(249, 115, 22, 0.2))',
                            'linear-gradient(to bottom right, rgba(79, 70, 229, 0.2), rgba(239, 68, 68, 0.2))',
                            'linear-gradient(to bottom right, rgba(16, 185, 129, 0.2), rgba(245, 158, 11, 0.2))',
                          ]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          repeatType: 'reverse' 
                        }}
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div 
                            className="text-sm uppercase tracking-widest font-medium text-dark-500 dark:text-dark-400 mb-1"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            Choose your path
                          </motion.div>
                          
                          <div className="h-14 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                              {highlights.map((highlight, index) => (
                                <motion.div
                                  key={highlight}
                                  className="absolute text-3xl font-display font-bold text-dark-900 dark:text-white"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={currentHighlight === index ? { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { duration: 0.5 }
                                  } : {}}
                                  exit={{ opacity: 0, y: -20 }}
                                >
                                  {highlight}
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <motion.div 
                          key={feature.title}
                          className="flex items-start p-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800/50 transition-colors"
                          initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="mr-4 mt-0.5">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-display font-semibold text-dark-900 dark:text-white">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-dark-500 dark:text-dark-400">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-dark-200 dark:border-dark-700">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <HashLink
                          smooth
                          to="/contact#form"
                          className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                        >
                          Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                        </HashLink>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </section>

      {/* For Freshers Section - Enhanced */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-primary-500/5"></div>
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-300 rounded-full mb-6">
              <Target className="h-5 w-5 mr-2" />
              <span className="font-medium">For Freshers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Break the <span className="text-gradient">"No Experience"</span> Cycle
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-4xl mx-auto">
              Tired of rejections? Start your career journey with our <strong>VCAP - Vibai Career Assurance Programme</strong>. 
              We hire first, train comprehensively, and pay you from day one.
            </p>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Main Content */}
              <div className="space-y-8">
                <AnimatedSection delay={0.2} direction="left">
                  <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full -mr-16 -mt-16"></div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-accent-100 dark:bg-accent-900/20 rounded-lg mr-4">
                          <Briefcase className="h-8 w-8 text-accent-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold">VCAP Programme</h3>
                          <p className="text-accent-600 dark:text-accent-400 font-medium">Career Assurance for Freshers</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                        From day one, you'll be part of real projects used by actual customers. No fake tasks. 
                        No fluff. Just hands-on learning and real contributions that matter.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <motion.div 
                          className="flex items-center p-3 bg-success-50 dark:bg-success-900/10 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                          <span className="font-medium">₹15,000/month</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center p-3 bg-primary-50 dark:bg-primary-900/10 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3" />
                          <span className="font-medium">100% Remote</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center p-3 bg-accent-50 dark:bg-accent-900/10 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                          <span className="font-medium">Real Projects</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center p-3 bg-secondary-50 dark:bg-secondary-900/10 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <CheckCircle className="h-5 w-5 text-secondary-500 mr-3" />
                          <span className="font-medium">Guided Training</span>
                        </motion.div>
                      </div>
                      
                      <Button href="/contact" variant="secondary" fullWidth size="lg">
                        Apply for VCAP <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4} direction="left">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-1 shadow-xl">
                    <div className="bg-white dark:bg-dark-950 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold">Transform Your Career</h4>
                          <p className="text-dark-600 dark:text-dark-400 text-sm">
                            Join the revolution in career building
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="h-8 w-8 text-primary-500" />
                        </motion.div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-dark-600 dark:text-dark-400 mb-4">
                          Transform your career with our innovative approach to talent development.
                        </p>
                        <Button href="/contact" variant="outline" size="sm">
                          Get Started Today
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Side - Visual Elements */}
              <div className="space-y-6">
                <AnimatedSection delay={0.3} direction="right">
                  <div className="relative">
                    <motion.div 
                      className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4">
                          <TrendingUp className="h-8 w-8 text-primary-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">Your Effort {'>'}  Your Resume</h4>
                          <p className="text-dark-600 dark:text-dark-400 text-sm">Potential over papers</p>
                        </div>
                      </div>
                      <p className="text-dark-600 dark:text-dark-400">
                        We believe in what you can become—not just what you've done. VCAP is your chance to prove yourself, grow fast, and get ahead.
                      </p>
                    </motion.div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5} direction="right">
                  <div className="relative">
                    <motion.div 
                      className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-accent-100 dark:bg-accent-900/20 rounded-lg mr-4">
                          <Award className="h-8 w-8 text-accent-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">Real Work. Real Growth.</h4>
                          <p className="text-dark-600 dark:text-dark-400 text-sm">No fake projects</p>
                        </div>
                      </div>
                      <p className="text-dark-600 dark:text-dark-400">
                        From day one, you'll contribute to products used by real customers. Build your portfolio with meaningful work that showcases your capabilities.
                      </p>
                    </motion.div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.6} direction="right">
                  <div className="relative">
                    <motion.div 
                      className="bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl p-8 text-white shadow-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center mb-4">
                        <Zap className="h-8 w-8 mr-3" />
                        <h4 className="text-xl font-semibold">Start Your Journey</h4>
                      </div>
                      <p className="mb-6 opacity-90">
                        Join thousands who've launched their careers through VCAP. Your journey begins with a single step.
                      </p>
                      <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
                        Apply Now
                      </Button>
                    </motion.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Students Section - Enhanced with Dynamic Features */}
      <section className="py-20 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full mb-6">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span className="font-medium">For College Students</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vstart <span className="text-gradient">Internship Programme</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Still in college? Get a head start on your career with our internship programme designed specifically for students.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Dynamic Feature Showcase */}
              <div className="order-2 lg:order-1">
                <AnimatedSection delay={0.2} direction="left">
                  <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/5 rounded-full -mr-20 -mt-20"></div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentVstartFeature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                      >
                        <div className="flex items-center mb-6">
                          <div className="p-4 bg-accent-100 dark:bg-accent-900/20 rounded-xl mr-4">
                            {vstartFeatures[currentVstartFeature].icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-display font-bold">
                              {vstartFeatures[currentVstartFeature].title}
                            </h3>
                            <p className="text-accent-600 dark:text-accent-400 font-medium">
                              {vstartFeatures[currentVstartFeature].highlight}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                          {vstartFeatures[currentVstartFeature].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Feature indicators */}
                    <div className="flex justify-center space-x-2 mt-6">
                      {vstartFeatures.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentVstartFeature(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentVstartFeature ? 'bg-accent-500' : 'bg-dark-300 dark:bg-dark-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Static Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <AnimatedSection delay={0.3} direction="right">
                  <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700">
                    <div className="flex items-center mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4"
                      >
                        <CheckCircle className="h-6 w-6 text-primary-500" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold">Flexible Timing</h4>
                        <p className="text-dark-600 dark:text-dark-400 text-sm">Work around your class schedule</p>
                      </div>
                    </div>
                    <p className="text-dark-600 dark:text-dark-400">
                      Our internship is designed to complement your studies, not compete with them. Choose hours that work for you.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4} direction="right">
                  <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700">
                    <div className="flex items-center mb-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="p-3 bg-accent-100 dark:bg-accent-900/20 rounded-lg mr-4"
                      >
                        <Rocket className="h-6 w-6 text-accent-500" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold">Career Acceleration</h4>
                        <p className="text-dark-600 dark:text-dark-400 text-sm">Fast-track to full-time roles</p>
                      </div>
                    </div>
                    <p className="text-dark-600 dark:text-dark-400">
                      Top performers in Vstart can transition directly to VCAP upon graduation, skipping traditional hiring processes.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5} direction="right">
                  <div className="bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl p-1 shadow-xl">
                    <div className="bg-white dark:bg-dark-950 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold">Apply for Vstart</h4>
                          <p className="text-dark-600 dark:text-dark-400 text-sm">Start your journey today</p>
                        </div>
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sparkles className="h-8 w-8 text-accent-500" />
                        </motion.div>
                      </div>
                      <Button href="/contact" variant="secondary" fullWidth>
                        Apply for Vstart Internship
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              No formalities. No gatekeeping.
              <br />
              <span className="text-gradient">Just opportunity.</span>
            </h2>
            
            <p className="text-xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Join thousands of freshers who have launched their careers through our innovative programmes. Your journey to success starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="/contact" size="lg">
                Apply for VCAP
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Vstart Internship
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;