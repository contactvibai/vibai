import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { Users, Lightbulb, TrendingUp, Award, CheckCircle2, Zap, Target, Rocket, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

  // Cycle through values
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through mission statements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMissionIndex((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const values = [
    { 
      icon: <Lightbulb className="h-8 w-8 text-primary-500" />, 
      title: 'Skill Over Credentials',
      description: 'We believe in your abilities, not your papers. Our assessment focuses on aptitude and potential, not degrees or English fluency.',
      color: 'from-blue-500 to-purple-500'
    },
    { 
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />, 
      title: 'Learn While You Earn',
      description: 'Get paid from day one as you acquire industry-relevant skills. Our model ensures financial stability while you grow professionally.',
      color: 'from-green-500 to-teal-500'
    },
    { 
      icon: <Users className="h-8 w-8 text-primary-500" />, 
      title: 'Inclusive Opportunity',
      description: 'We remove traditional barriers to entry in the tech industry. Your background, location, or language skills don\'t limit your potential.',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: <Award className="h-8 w-8 text-primary-500" />, 
      title: 'Real-World Excellence',
      description: 'Work on actual products used by real customers. Learn practical skills that matter in the industry and build a portfolio of real achievements.',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const missionStatements = [
    {
      icon: <Target className="h-12 w-12 text-accent-500" />,
      title: "Our Mission",
      description: "To democratize access to tech careers by removing traditional barriers and focusing on potential over credentials.",
      highlight: "Breaking barriers"
    },
    {
      icon: <Heart className="h-12 w-12 text-accent-500" />,
      title: "Our Vision",
      description: "A world where talent is recognized regardless of background, and everyone has the opportunity to build a meaningful career in technology.",
      highlight: "Inclusive future"
    },
    {
      icon: <Globe className="h-12 w-12 text-accent-500" />,
      title: "Our Impact",
      description: "Creating a ripple effect of positive change by transforming individual lives and contributing to a more diverse tech ecosystem.",
      highlight: "Global change"
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
                About <span className="text-gradient">Vibai Innovixs</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up">
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                We're reimagining how careers begin. No interviews, no degree requirements, no language barriers—just an opportunity to prove your skills and build your future.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission/Vision Dynamic Section */}
      <section className="py-16 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1} direction="up">
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/5 rounded-full -mr-20 -mt-20"></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMissionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-accent-100 dark:bg-accent-900/20 rounded-xl mr-6">
                        {missionStatements[currentMissionIndex].icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold">
                          {missionStatements[currentMissionIndex].title}
                        </h2>
                        <p className="text-accent-600 dark:text-accent-400 font-medium">
                          {missionStatements[currentMissionIndex].highlight}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-400">
                      {missionStatements[currentMissionIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Mission indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {missionStatements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMissionIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentMissionIndex ? 'bg-accent-500' : 'bg-dark-300 dark:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedSection delay={0.2} direction="left">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-primary-500/10 filter blur-3xl z-0"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-accent-500/10 filter blur-3xl z-0"></div>
                  
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-xl dark:shadow-dark-900/30 z-10"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Team collaborating" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">Building the Future</h3>
                        <p className="text-white/80">One opportunity at a time</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="md:w-1/2">
              <AnimatedSection delay={0.4} direction="right">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full mb-6">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span className="font-medium">Our Journey</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">
                  Founded in 2023, Vibai Innovixs began with a simple observation: the tech industry was missing out on incredible talent because of unnecessary barriers to entry.
                </p>
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">
                  We saw capable individuals being rejected for lacking the right degree, not speaking perfect English, or failing traditional interview processes that don't measure real-world skill.
                </p>
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
                  That's why we created VCAP—a programme that flips the traditional hiring model on its head. We hire first, train comprehensively, and focus on what truly matters: your ability to learn and contribute.
                </p>
                
                <Button href="/contact" variant="outline">
                  Join Our Mission
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Enhanced */}
      <section id="values" className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              These core principles guide everything we do at Vibai Innovixs and shape how we approach talent development.
            </p>
          </AnimatedSection>

          {/* Featured Value Showcase */}
          <div className="max-w-4xl mx-auto mb-12">
            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${values[currentValueIndex].color}`}></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentValueIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-xl mr-6">
                        {values[currentValueIndex].icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold">
                          {values[currentValueIndex].title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          Core Value #{currentValueIndex + 1}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-400">
                      {values[currentValueIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Value indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {values.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentValueIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentValueIndex ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* Careers Section - Enhanced */}
      <section id="careers" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-1">
            <div className="bg-white dark:bg-dark-950 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                  <AnimatedSection delay={0.1} direction="left">
                    <div className="flex items-center mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Users className="h-12 w-12 text-primary-500 mr-4" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Join Our Team
                      </h2>
                    </div>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">
                      We're always looking for talented individuals to join our growing team. At Vibai Innovixs, we practice what we preach—your skills and passion matter more than your background.
                    </p>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
                      We offer competitive salaries, flexible remote work options, and a supportive environment where you can make a real difference in people's lives.
                    </p>
                    
                    <div className="space-y-4">
                      {['Trainers & Mentors', 'Software Developers', 'Curriculum Designers'].map((position, index) => (
                        <motion.div 
                          key={position}
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <CheckCircle2 className="text-primary-500 mr-2 h-5 w-5" />
                          <span className="font-medium">{position}</span>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
                
                <div className="md:w-1/3">
                  <AnimatedSection delay={0.3} direction="right">
                    <div className="bg-dark-50 dark:bg-dark-800 p-6 rounded-lg">
                      <h3 className="font-display font-semibold text-xl mb-4 flex items-center">
                        <Rocket className="h-6 w-6 text-accent-500 mr-2" />
                        Current Openings
                      </h3>
                      
                      <div className="space-y-4">
                        {[
                          { title: 'Senior Developer', type: 'Remote • Full-time' },
                          { title: 'Program Manager', type: 'Remote • Full-time' },
                          { title: 'Content Creator', type: 'Remote • Part-time' }
                        ].map((job, index) => (
                          <motion.a 
                            key={job.title}
                            href="/contact"
                            className="block p-4 bg-white dark:bg-dark-900 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors border border-dark-200 dark:border-dark-700"
                            whileHover={{ x: 5 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <div className="font-medium text-dark-900 dark:text-white">
                              {job.title}
                            </div>
                            <div className="text-sm text-dark-500 dark:text-dark-400">
                              {job.type}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Button href="/contact#form" fullWidth>
                          Get More Info
                        </Button>
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

export default About;