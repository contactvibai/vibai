import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { useMotion } from '../context/MotionContext';
import AnimatedSection from '../components/ui/AnimatedSection';
import { HashLink } from 'react-router-hash-link';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { ArrowRight, GraduationCap, Home as HomeIcon, Briefcase, CheckCircle, Code as CodeXml, Cpu, Users, ExternalLink, Target, TrendingUp, Award, Zap, Star, Clock, MapPin } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter: React.FC<{ 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string;
  decimals?: number;
}> = ({ end, duration = 2, prefix = '', suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(end * easeOutQuart);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Home: React.FC = () => {
  const { prefersReducedMotion } = useMotion();
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [currentTextHighlight, setCurrentTextHighlight] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const highlights = ['Software', 'Electronics', 'Mechanical'];

  // Live statistics that update
  const [liveStats, setLiveStats] = useState({
    studentsPlaced: 150,
    companiesPartnered: 25,
    averageSalary: 18000,
    successRate: 85
  });

  // Testimonials carousel
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Software Developer",
      company: "TechStart Solutions",
      text: "VCAP changed my life. From a small village to working remotely for a tech company!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Pooja Singh", 
      role: "Electronics Engineer",
      company: "IoT Innovations",
      text: "No English barrier, no degree requirement. Just pure skill-based opportunity.",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ravi Kumar",
      role: "CAD Designer", 
      company: "Design Pro Engineering",
      text: "From rejection to success. VCAP gave me the chance I needed to prove myself.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  // Simulate live updates to statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        studentsPlaced: prev.studentsPlaced + Math.floor(Math.random() * 2),
        companiesPartnered: prev.companiesPartnered + (Math.random() > 0.95 ? 1 : 0),
        averageSalary: prev.averageSalary + Math.floor(Math.random() * 100 - 50),
        successRate: Math.min(95, prev.successRate + (Math.random() > 0.9 ? 1 : 0))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  // Cycle through testimonials
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

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

   const fresherFeatures = [
    { 
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />, 
      title: '₹15,000/month assured salary',
    },
    { 
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />, 
      title: 'Work on Real Projects',
    },
    { 
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />, 
      title: 'Practical, Guided Training',
    },
  ];

  const internshipFeatures = [
    { 
      icon: <CheckCircle className="h-6 w-6 text-primary-500" />, 
      title: '₹4,000/month stipend',
    },
    { 
      icon: <CheckCircle className="h-6 w-6 text-primary-500" />, 
      title: 'Work on Real Projects',
    },
    { 
      icon: <CheckCircle className="h-6 w-6 text-primary-500" />, 
      title: 'Learn by Building',
    },
  ];
  

  const staggerDelay = 0.3;
  const textHighlights = [
    { text: "No Interview Conducted", color: "bg-red-500/20", textColor: "text-red-600 dark:text-red-400" },
    { text: "No Degree Asked", color: "bg-blue-500/20", textColor: "text-blue-600 dark:text-blue-400" },
    { text: "No English Required", color: "bg-green-500/20", textColor: "text-green-600 dark:text-green-400" },
    { text: "No Skills Mandatory", color: "bg-purple-500/20", textColor: "text-purple-600 dark:text-purple-400" }
  ];

  // Success metrics with live updates
  const successMetrics = [
    { 
      number: liveStats.studentsPlaced, 
      label: "Lives Changed", 
      icon: <Users className="h-6 w-6" />,
      color: "text-primary-500",
      bgColor: "bg-primary-100 dark:bg-primary-900/20"
    },
    { 
      number: liveStats.successRate, 
      label: "Success Rate", 
      suffix: "%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-success-500",
      bgColor: "bg-success-100 dark:bg-success-900/20"
    },
    { 
      number: liveStats.companiesPartnered, 
      label: "Partner Companies", 
      suffix: "+",
      icon: <Briefcase className="h-6 w-6" />,
      color: "text-accent-500",
      bgColor: "bg-accent-100 dark:bg-accent-900/20"
    },
    { 
      number: liveStats.averageSalary / 1000, 
      label: "Avg. Salary", 
      prefix: "₹",
      suffix: "K",
      decimals: 1,
      icon: <Award className="h-6 w-6" />,
      color: "text-secondary-500",
      bgColor: "bg-secondary-100 dark:bg-secondary-900/20"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero"  className="pt-12 md:pt-16 pb-20 md:pb-8 relative overflow-hidden">
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
      // Check this className carefully. It must include all three centering classes.
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

      {/* Live Statistics Section */}
      <section className="py-16 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full mb-6">
              <Zap className="h-5 w-5 mr-2" />
              <span className="font-medium">Live Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="text-gradient">Growing Impact</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Real numbers from our growing community of successful graduates. Updated in real-time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {successMetrics.map((metric, index) => (
              <AnimatedSection
                key={metric.label}
                delay={0.2 + index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="text-center bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full -mr-8 -mt-8"></div>
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${metric.bgColor} rounded-lg mb-4`}>
                    <div className={metric.color}>
                      {metric.icon}
                    </div>
                  </div>
                  
                  <div className={`text-3xl md:text-4xl font-display font-bold ${metric.color} mb-2`}>
                    <AnimatedCounter 
                      end={metric.number} 
                      prefix={metric.prefix} 
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                    />
                  </div>
                  <div className="text-sm md:text-base text-dark-500 dark:text-dark-400">
                    {metric.label}
                  </div>
                  
                  {/* Live indicator */}
                  <motion.div 
                    className="absolute top-2 left-2 w-2 h-2 bg-success-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <AnimatedSection delay={0.6} direction="up" className="mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning-400 fill-current" />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-lg md:text-xl text-dark-700 dark:text-dark-300 italic mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <img 
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-dark-900 dark:text-white">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-sm text-dark-500 dark:text-dark-400">
                          {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* For Freshers Section - Redesigned */}
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
                          <h4 className="text-lg font-semibold">Success Stories</h4>
                          <p className="text-dark-600 dark:text-dark-400 text-sm">
                            Many before you have broken the cycle
                          </p>
                        </div>
                        <motion.a 
                          href="/portfolio"
                          className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-500"
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary-500">
                            <AnimatedCounter end={liveStats.studentsPlaced} suffix="+" />
                          </div>
                          <div className="text-xs text-dark-500">Lives Changed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-success-500">
                            <AnimatedCounter end={liveStats.successRate} suffix="%" />
                          </div>
                          <div className="text-xs text-dark-500">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent-500">
                            ₹<AnimatedCounter end={liveStats.averageSalary / 1000} decimals={1} suffix="K" />
                          </div>
                          <div className="text-xs text-dark-500">Avg. Salary</div>
                        </div>
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
                          <h4 className="text-xl font-semibold">Your Effort &gt; Your Resume</h4>
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
                        <h4 className="text-xl font-semibold">Ready to Start?</h4>
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
                    <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full mb-6">
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
                    
                    <Button href="/contact" variant="primary" fullWidth>
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
                      <div className="p-3 bg-accent-100 dark:bg-accent-900/20 text-accent-500 rounded-lg">
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
                      <div className="p-3 bg-accent-100 dark:bg-accent-900/20 text-accent-500 rounded-lg">
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