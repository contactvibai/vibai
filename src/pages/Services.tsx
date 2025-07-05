import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle, GraduationCap, Briefcase, Building2, Code, Cpu, Wrench, Users, Zap, Sparkles, Rocket, Clock, Target } from 'lucide-react';

const Services: React.FC = () => {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [currentCompanyFeature, setCurrentCompanyFeature] = useState(0);

  // Cycle through career paths
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPathIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through company features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanyFeature((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const programFeatures = [
    {
      icon: <CheckCircle className="h-6 w-6 text-success-500" />,
      text: '₹15,000/month salary from day one'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-success-500" />,
      text: 'Fully remote work environment'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-success-500" />,
      text: 'Structured learning path with practical training'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-success-500" />,
      text: 'Real product work experience'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-success-500" />,
      text: 'Performance-based growth opportunities'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-success-500" />,
      text: 'No prior industry experience required'
    }
  ];

  const paths = [
    {
      icon: <Code className="h-16 w-16 text-primary-500" />,
      title: "Software",
      description: "Learn software development with focus on AI integration, web and mobile app development, and backend engineering.",
      skills: ["AI Web Developer", "Front-End AI Engineer", "Smart UI Builder", "AI Mobile App Developer", "Smart App Engineer", "Cross-Platform AI Coder", "ML Model Developer",
        "AI Solutions Engineer","Data & Intelligence Engineer","Cloud AI Engineer","DevOps & Automation Specialist","Cloud Infrastructure Developer","AI Backend Developer","API & Systems Engineer",
        "Logic Automation Developer"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Cpu className="h-16 w-16 text-primary-500" />,
      title: "Electronics",
      description: "Master electronic design, PCB layout, embedded systems programming, and IoT device development.",
      skills: ["AI Circuit Architect","Smart Circuit Designer","Ai Logic Circuit Engineer","AI PCB Designer","AutoLayout Engineer","Precision Board Planner","Embedded AI Engineer","AI Firmware Developer",
"Real-Time Systems Coder","AIoT Systems Engineer","Smart Device Integrator","Connected Systems Developer","AI Test Automation Engineer","Smart Hardware Validator","Diagnostics & Quality AI Engineer"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Wrench className="h-16 w-16 text-primary-500" />,
      title: "Mechanical",
      description: "Focus on mechanical design, 3D modeling, CAD/CAM, manufacturing processes, and product development.",
      skills: ["AI 3D Design Specialist","Generative Modeler","Intelligent Shape Architect","AI CAD/CAM Engineer","Smart Machining Designer","Automated Drafting Specialist","AI Product Designer",
"User-Centric AI Creator","Smart Form & Function Engineer","AI Manufacturing Planner","Intelligent Production Engineer","Smart Factory Integrator","AI Simulation Analyst","Predictive Systems Modeler","Virtual Test Engineer"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const companyFeatures = [
    {
      icon: <Briefcase className="h-12 w-12 text-primary-500" />,
      title: "Hire VCAP Graduates",
      description: "Access a pipeline of trained professionals who have proven their skills through real project work.",
      highlight: "Pre-trained talent pool"
    },
    {
      icon: <Users className="h-12 w-12 text-primary-500" />,
      title: "Co-develop Training",
      description: "Work with us to design training programmes tailored to your company's specific technical needs.",
      highlight: "Custom curriculum design"
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary-500" />,
      title: "Outsource Projects",
      description: "Let our teams handle your development needs with quality work at competitive rates.",
      highlight: "Cost-effective solutions"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1} direction="up">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Zap className="h-16 w-16 text-primary-500" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="text-gradient">Programmes</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up">
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                Break into the tech industry without traditional barriers. Our innovative programmes focus on skills, not credentials.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VCAP Program Section - Enhanced */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedSection delay={0.2} direction="left">
                <div className="inline-flex items-center px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-300 rounded-full mb-6">
                  <Target className="h-5 w-5 mr-2" />
                  <span className="font-medium">For Freshers</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  VCAP - Vibai Career Assurance Programme
                </h2>
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
                  VCAP is designed for freshers looking to launch their careers in tech without facing the traditional barriers of interviews, degrees, or language requirements.
                </p>
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
                  We hire based on potential, provide comprehensive training on real-world skills, and guarantee a ₹15,000 monthly salary from day one. Choose from Software, Electronics, or Mechanical engineering tracks.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {programFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="mr-2">
                        {feature.icon}
                      </div>
                      <p className="text-dark-700 dark:text-dark-300">
                        {feature.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <Button href="/contact" size="lg">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-1/2">
              <ParallaxElement speed={-0.1}>
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="VCAP Program" 
                    className="w-full h-96 md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        Start Your Career Journey
                      </h3>
                      <p className="text-white/80 mb-4">
                        No barriers. Just opportunities.
                      </p>
                      <div className="flex space-x-2">
                        {['Software', 'Electronics', 'Mechanical'].map((path, index) => (
                          <motion.span 
                            key={path} 
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ delay: index * 0.5, duration: 2, repeat: Infinity }}
                          >
                            {path}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section - Enhanced with Dynamic Features */}
      <section className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Choose Your <span className="text-gradient">Career Path</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Select the field that aligns with your interests and start your journey with VCAP.
            </p>
          </AnimatedSection>

          {/* Featured Path Showcase */}
          <div className="max-w-4xl mx-auto mb-12">
            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${paths[currentPathIndex].color}`}></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPathIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-xl mr-6">
                        {paths[currentPathIndex].icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold">
                          {paths[currentPathIndex].title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          Engineering Track
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                      {paths[currentPathIndex].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {paths[currentPathIndex].skills.slice(0, 8).map(skill => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded-full text-sm">
                        +{paths[currentPathIndex].skills.length - 8} more
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Path indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {paths.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPathIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentPathIndex ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* All Paths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <AnimatedSection
                key={path.title}
                delay={0.2 + index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl p-8 h-full flex flex-col hover-card relative overflow-hidden cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => setCurrentPathIndex(index)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 dark:bg-primary-500/10 rounded-full -mr-16 -mt-16"></div>
                  
                  <div className="mb-6 relative">
                    {path.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold mb-3">
                    {path.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-400 mb-6 flex-grow">
                    {path.description}
                  </p>
                  
                  <div className="border-t border-dark-200 dark:border-dark-700 pt-4 mt-auto">
                    <h4 className="font-medium text-dark-900 dark:text-white mb-3">
                      Sample Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.slice(0, 3).map(skill => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      <span className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded-full text-xs">
                        +{path.skills.length - 3} more
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section - Enhanced */}
      <section id="internship" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <ParallaxElement speed={0.0}>
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Student Internship" 
                    className="w-full h-96 md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        Vstart Internship Programme
                      </h3>
                      <p className="text-white/80 mb-4">
                        For college students looking to get a head start
                      </p>
                      <div className="flex space-x-2">
                        <motion.span 
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ₹4,000/month
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ delay: 1, duration: 2, repeat: Infinity }}
                        >
                          Real Projects
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ParallaxElement>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <AnimatedSection delay={0.2} direction="right">
                <div className="inline-flex items-center px-4 py-2 bg-accent-100 dark:bg-accent-900/20 text-accent-600 dark:text-accent-300 rounded-full mb-6">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span className="font-medium">For College Students</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Vstart Internship Programme
                </h2>
                
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
                  Still in college? Get a head start on your career with our internship programme designed specifically for students. Earn while you learn and gain valuable industry experience.
                </p>
                
                <div className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Sparkles className="h-6 w-6 text-accent-500 mr-2" />
                    Programme Highlights
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { icon: <CheckCircle className="h-5 w-5 text-success-500" />, text: "₹4,000 monthly stipend" },
                      { icon: <CheckCircle className="h-5 w-5 text-success-500" />, text: "Work on real products used by customers" },
                      { icon: <CheckCircle className="h-5 w-5 text-success-500" />, text: "Flexible hours that work with your class schedule" },
                      { icon: <CheckCircle className="h-5 w-5 text-success-500" />, text: "Potential fast-track to VCAP after graduation" },
                      { icon: <CheckCircle className="h-5 w-5 text-success-500" />, text: "Certificate of completion and recommendation letter" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="mr-3">{item.icon}</div>
                        <p>{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <Button href="/contact" variant="secondary" size="lg">
                  Apply for Internship <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section - Enhanced */}
      <section id="companies" className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full mb-6">
              <Building2 className="h-5 w-5 mr-2" />
              <span className="font-medium">For Companies</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Partner With Us
            </h2>
            
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Tap into a pool of trained, motivated talent ready to contribute to your company's growth.
            </p>
          </AnimatedSection>

          {/* Dynamic Feature Showcase */}
          <div className="max-w-4xl mx-auto mb-12">
            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full -mr-20 -mt-20"></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCompanyFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-xl mr-6">
                        {companyFeatures[currentCompanyFeature].icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold">
                          {companyFeatures[currentCompanyFeature].title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {companyFeatures[currentCompanyFeature].highlight}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-400">
                      {companyFeatures[currentCompanyFeature].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Feature indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {companyFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCompanyFeature(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentCompanyFeature ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Company Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {companyFeatures.map((option, index) => (
              <AnimatedSection
                key={option.title}
                delay={0.2 + index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl p-8 text-center hover-card h-full cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => setCurrentCompanyFeature(index)}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-full">
                      {option.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-400 mb-6">
                    {option.description}
                  </p>
                  
                  <Button href="/contact" variant="outline">
                    Learn More
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section - Enhanced */}
      <section id="apply" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-1 shadow-xl dark:shadow-primary-500/20">
              <div className="bg-white dark:bg-dark-950 rounded-xl p-8 md:p-12">
                <AnimatedSection delay={0.1} direction="up" className="text-center mb-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <Rocket className="h-16 w-16 text-primary-500" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Apply Now
                  </h2>
                  <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                    Take the first step toward your new career. No resume required.
                  </p>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <AnimatedSection delay={0.2} direction="left" className="space-y-4">
                    <div className="bg-dark-50 dark:bg-dark-900/50 rounded-xl p-6 border border-dark-200 dark:border-dark-800">
                      <div className="flex items-center mb-4">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <Briefcase className="h-6 w-6 text-primary-500 mr-3" />
                        </motion.div>
                        <h3 className="text-xl font-semibold">VCAP Programme</h3>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                          <p className="text-dark-700 dark:text-dark-300">For freshers with zero industry experience</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                          <p className="text-dark-700 dark:text-dark-300">₹15,000/month salary from day one</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                          <p className="text-dark-700 dark:text-dark-300">Full-time, fully remote position</p>
                        </li>
                      </ul>
                      <Button href="/contact" fullWidth>
                        Apply for VCAP
                      </Button>
                    </div>
                    
                    <div className="bg-dark-50 dark:bg-dark-900/50 rounded-xl p-6 border border-dark-200 dark:border-dark-800">
                      <div className="flex items-center mb-4">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <GraduationCap className="h-6 w-6 text-accent-500 mr-3" />
                        </motion.div>
                        <h3 className="text-xl font-semibold">Vstart Internship</h3>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                          <p className="text-dark-700 dark:text-dark-300">For current college students</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                          <p className="text-dark-700 dark:text-dark-300">₹4,000/month stipend</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5" />
                          <p className="text-dark-700 dark:text-dark-300">Part-time, flexible schedule</p>
                        </li>
                      </ul>
                      <Button href="/contact" variant="secondary" fullWidth>
                        Apply for Internship
                      </Button>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.3} direction="right">
                    <div className="bg-dark-50 dark:bg-dark-900/50 rounded-xl p-6 border border-dark-200 dark:border-dark-800 h-full">
                      <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <Clock className="h-6 w-6 text-primary-500 mr-2" />
                        Application Process
                      </h3>
                      
                      <div className="space-y-6">
                        {[
                          {
                            step: "Step 1",
                            title: "Online Application",
                            description: "Fill a simple form—no resume or formal documents required"
                          },
                          {
                            step: "Step 2",
                            title: "Skill Assessment",
                            description: "Complete a practical assessment to demonstrate your abilities"
                          },
                          {
                            step: "Step 3",
                            title: "Onboarding",
                            description: "Receive your offer and join our team immediately"
                          }
                        ].map((step, index) => (
                          <motion.div 
                            key={step.step} 
                            className="flex"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <div className="mr-4">
                              <motion.div 
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 font-bold"
                                whileHover={{ scale: 1.1 }}
                              >
                                {index + 1}
                              </motion.div>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium mb-1">
                                {step.title}
                              </h4>
                              <p className="text-dark-600 dark:text-dark-400">
                                {step.description}
                              </p>
                              
                              {index < 2 && (
                                <div className="h-8 ml-5 border-l border-dashed border-primary-300 dark:border-primary-700"></div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                        <p className="text-sm text-dark-700 dark:text-dark-300">
                          <strong>Note:</strong> The entire application process can be completed in your preferred language. No English proficiency required.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;