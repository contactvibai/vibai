import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle, GraduationCap, Briefcase, Building2, Code, Cpu, Wrench, Users } from 'lucide-react';

const Services: React.FC = () => {
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
      skills: ["Web Development", "Mobile Apps", "AI/ML Integration", "Cloud Solutions", "Backend Systems"]
    },
    {
      icon: <Cpu className="h-16 w-16 text-primary-500" />,
      title: "Electronics",
      description: "Master electronic design, PCB layout, embedded systems programming, and IoT device development.",
      skills: ["Circuit Design", "PCB Layout", "Embedded Systems", "IoT Solutions", "Hardware Testing"]
    },
    {
      icon: <Wrench className="h-16 w-16 text-primary-500" />,
      title: "Mechanical",
      description: "Focus on mechanical design, 3D modeling, CAD/CAM, manufacturing processes, and product development.",
      skills: ["3D Modeling", "CAD/CAM", "Product Design", "Manufacturing", "Simulation"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1} direction="up">
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

      {/* VCAP Program Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedSection delay={0.2} direction="left">
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
                        {['Software', 'Electronics', 'Mechanical'].map(path => (
                          <span 
                            key={path} 
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                          >
                            {path}
                          </span>
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

      {/* Career Paths Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <AnimatedSection
                key={path.title}
                delay={0.2 + index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl p-8 h-full flex flex-col hover-card relative overflow-hidden"
                  whileHover={{ y: -5 }}
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
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
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
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                          ₹4,000/month
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                          Real Projects
                        </span>
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
                  <h3 className="text-xl font-semibold mb-4">Programme Highlights</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                      <p>₹4,000 monthly stipend</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                      <p>Work on real products used by customers</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                      <p>Flexible hours that work with your class schedule</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                      <p>Potential fast-track to VCAP after graduation</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success-500 mr-3" />
                      <p>Certificate of completion and recommendation letter</p>
                    </div>
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

      {/* For Companies Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Briefcase className="h-10 w-10 text-primary-500" />,
                title: "Hire VCAP Graduates",
                description: "Access a pipeline of trained professionals who have proven their skills through real project work."
              },
              {
                icon: <Users className="h-10 w-10 text-primary-500" />,
                title: "Co-develop Training",
                description: "Work with us to design training programmes tailored to your company's specific technical needs."
              },
              {
                icon: <Building2 className="h-10 w-10 text-primary-500" />,
                title: "Outsource Projects",
                description: "Let our teams handle your development needs with quality work at competitive rates."
              }
            ].map((option, index) => (
              <AnimatedSection
                key={option.title}
                delay={0.2 + index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl p-8 text-center hover-card h-full"
                  whileHover={{ y: -5 }}
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

      {/* Application Section */}
      <section id="apply" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-1 shadow-xl dark:shadow-primary-500/20">
              <div className="bg-white dark:bg-dark-950 rounded-xl p-8 md:p-12">
                <AnimatedSection delay={0.1} direction="up" className="text-center mb-10">
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
                        <Briefcase className="h-6 w-6 text-primary-500 mr-3" />
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
                        <GraduationCap className="h-6 w-6 text-accent-500 mr-3" />
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
                      <h3 className="text-xl font-semibold mb-6">
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
                          <div key={step.step} className="flex">
                            <div className="mr-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500 font-bold">
                                {index + 1}
                              </div>
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
                          </div>
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