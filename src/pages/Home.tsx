import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMotion } from '../context/MotionContext';
import AnimatedSection from '../components/ui/AnimatedSection';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { ArrowRight, GraduationCap, Home as HomeIcon, Briefcase, CheckCircle, Code as CodeXml, Cpu, Users, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  const { prefersReducedMotion } = useMotion();
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [currentTextHighlight, setCurrentTextHighlight] = useState(0);
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

  const internshipFeatures = [
    { 
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />, 
      title: '₹4,000/month stipend',
    },
    { 
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />, 
      title: 'Work on Real Projects',
    },
    { 
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />, 
      title: 'Learn by Building',
    },
  ];

  const staggerDelay = 0.3;
  const textHighlights = [
    { text: "No Interview Conducted", color: "bg-red-500/20" },
    { text: "No Degree Asked", color: "bg-blue-500/20" },
    { text: "No English Required", color: "bg-green-500/20" },
    { text: "No Skills Mandatory", color: "bg-purple-500/20" }
  ];

  // Success metrics for startup
  const successMetrics = [
    { number: "150+", label: "Lives Changed" },
    { number: "85%", label: "Success Rate" },
    { number: "25+", label: "Partner Companies" },
    { number: "₹18K", label: "Avg. Salary" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pt-8">
              <AnimatedSection delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                  {textHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.text}
                      initial="initial"
                      animate="animate"
                      variants={textVariants}
                      className="relative inline-block mb-3"
                    >
                      <AnimatePresence mode="wait">
                        {currentTextHighlight === index && (
                          <motion.div
                            key={`highlight-${index}`}
                            className={`absolute inset-0 ${highlight.color} rounded-lg`}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={backgroundVariants}
                          />
                        )}
                      </AnimatePresence>
                      <span className="relative z-10 px-2">{highlight.text}</span>
                      <br />
                    </motion.div>
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
                
                {/* <h2 className="text-xl md:text-2xl font-display mb-8 text-dark-600 dark:text-dark-300">
                  Welcome to <strong>Vibai Innovixs</strong> – where we offer the 
                  <span className="text-primary-500 font-semibold"> Vibai Career Assurance Programme (VCAP)</span> and 
                  <span className="text-accent-500 font-semibold"> Vstart Internship</span> for college students.
                  We hire and train freshers with zero barriers.
                </h2> */}
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
                      <motion.a 
                        href="/contact"
                        className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </section>

{/* Success Metrics Section */}
     {/*} <section className="py-16 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Real numbers from our growing community of successful graduates.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <AnimatedSection
                key={metric.label}
                delay={0.2 + index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="text-center bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-2">
                    {metric.number}
                  </div>
                  <div className="text-sm md:text-base text-dark-500 dark:text-dark-400">
                    {metric.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* For Students Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              For <span className="text-gradient">College Students</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Still in college? Start your career journey early with our <strong>Vstart Internship Programme</strong>.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatedSection delay={0.2} direction="left">
                <div className="rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700">
                  <div className="p-8">
                    <div className      ="inline-flex items-center px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-300 rounded-full mb-6">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      <span className="font-medium">Vstart Internship Programme</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Learn by Building, Not Watching
                    </h3>
                    
                    <p className="text-dark-600 dark:text-dark-400 mb-6">
                      Get practical experience working on real projects while earning a stipend. Perfect for students looking to gain industry experience during their studies.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {internshipFeatures.map((feature, index) => (
                        <motion.div 
                          key={feature.title}
                          className="flex items-center"
                          initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <div className="mr-3">
                            {feature.icon}
                          </div>
                          <p className="font-medium">{feature.title}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button href="/contact" variant="secondary" fullWidth>
                      Apply for Vstart Internship
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div>
              <AnimatedSection delay={0.4} direction="right" className="space-y-6">
                <div className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl p-6 hover-card">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/20 text-primary-500 rounded-lg">
                        <Briefcase size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Real Work Experience</h4>
                      <p className="text-dark-600 dark:text-dark-400">
                        Work on actual projects used by real customers. Add meaningful experience to your resume.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl p-6 hover-card">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/20 text-primary-500 rounded-lg">
                        <Users size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Mentorship & Growth</h4>
                      <p className="text-dark-600 dark:text-dark-400">
                        Receive guidance from experienced professionals. Develop technical and soft skills.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl p-6 hover-card">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">Hear from our interns</h4>
                      <p className="text-dark-600 dark:text-dark-400">
                        See success stories from previous Vstart interns
                      </p>
                    </div>
                    <motion.a 
                      href="/portfolio"
                      className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>
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