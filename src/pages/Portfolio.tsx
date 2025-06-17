import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { Play, Quote, User, Building, Briefcase, CalendarDays, MapPin, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Filter categories for projects
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const filters = ['all', 'software', 'electronics', 'mechanical'];

  // Real success stories
  const successStories = [
    {
      id: 1,
      name: "Arjun Mehta",
      title: "Junior Software Developer",
      path: "Software",
      company: "TechStart Solutions",
      testimonial: "I was working in a small shop in my village when I heard about VCAP. Despite having no formal education in computers, they saw my potential. Now I'm building web applications and earning ₹18,000 per month. My family couldn't believe the transformation!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      beforeSalary: "₹8,000",
      afterSalary: "₹18,000",
      duration: "6 months"
    },
    {
      id: 2,
      name: "Pooja Singh",
      title: "Electronics Technician",
      path: "Electronics",
      company: "IoT Innovations Pvt Ltd",
      testimonial: "Coming from a rural background with limited English, I never thought I could work in tech. VCAP's training in my local language helped me understand circuit design and PCB development. Today, I'm working on smart home devices.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      beforeSalary: "₹6,000",
      afterSalary: "₹16,000",
      duration: "5 months"
    },
    {
      id: 3,
      name: "Ravi Kumar",
      title: "CAD Designer",
      path: "Mechanical",
      company: "Design Pro Engineering",
      testimonial: "After multiple interview rejections due to my communication skills, VCAP gave me a chance to prove my design abilities. I learned 3D modeling and now create product designs that are manufactured and sold across India.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      beforeSalary: "₹10,000",
      afterSalary: "₹20,000",
      duration: "4 months"
    },
    {
      id: 4,
      name: "Sneha Patel",
      title: "Full Stack Developer",
      path: "Software",
      company: "Digital Solutions Inc",
      testimonial: "As a college dropout, I thought my career was over. VCAP not only gave me technical skills but also confidence. I started with basic web development and now I'm leading a small team of developers.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      beforeSalary: "₹0",
      afterSalary: "₹25,000",
      duration: "8 months"
    }
  ];

  // Sample projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      category: "software",
      image: "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      developer: "Arjun M.",
      description: "React Native app with payment integration"
    },
    {
      id: 2,
      title: "Smart Irrigation System",
      category: "electronics",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      developer: "Pooja S.",
      description: "IoT-based automated watering system"
    },
    {
      id: 3,
      title: "Ergonomic Chair Design",
      category: "mechanical",
      image: "https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      developer: "Ravi K.",
      description: "3D modeled office furniture design"
    },
    {
      id: 4,
      title: "Healthcare Dashboard",
      category: "software",
      image: "https://images.pexels.com/photos/3912366/pexels-photo-3912366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      developer: "Sneha P.",
      description: "Patient management system with analytics"
    },
    {
      id: 5,
      title: "Temperature Monitoring Device",
      category: "electronics",
      image: "https://images.pexels.com/photos/163143/notebook-pen-table-blank-163143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      developer: "Amit R.",
      description: "Industrial temperature sensor with alerts"
    },
    {
      id: 6,
      title: "Bicycle Frame Prototype",
      category: "mechanical",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      developer: "Priya M.",
      description: "Lightweight carbon fiber frame design"
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1} direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="text-gradient">Success Stories</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up">
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                See how Vibai Innovixs has transformed the lives of freshers with no previous industry experience or traditional qualifications.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} direction="up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">150+</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Lives Changed</div>
                </div>
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">85%</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Success Rate</div>
                </div>
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">₹18K</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Avg. Salary</div>
                </div>
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">6 mo</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Avg. Growth</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {successStories.map((story, index) => (
              <AnimatedSection
                key={story.id}
                delay={0.2 * index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className="max-w-5xl mx-auto"
              >
                <motion.div 
                  className="flex flex-col md:flex-row bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700"
                  whileHover={{ y: -5 }}
                >
                  <div className="md:w-2/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/50 to-accent-500/50 opacity-30"></div>
                    <img 
                      src={story.image}
                      alt={story.name} 
                      className="w-full h-60 md:h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-dark-600 dark:text-dark-400">Salary Growth</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-red-500">{story.beforeSalary}</span>
                        <span className="text-xs">→</span>
                        <span className="text-sm font-bold text-green-500">{story.afterSalary}</span>
                      </div>
                      <div className="text-xs text-dark-500">in {story.duration}</div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="flex items-center mb-4">
                        <Quote className="text-primary-500 w-8 h-8 mr-2" />
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full">
                          <span className="font-medium">{story.path} Path</span>
                        </div>
                      </div>
                      
                      <p className="text-dark-700 dark:text-dark-300 italic mb-6 text-lg">
                        "{story.testimonial}"
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <User className="h-5 w-5 text-dark-500 mr-2" />
                        <h3 className="font-display font-semibold text-xl">{story.name}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-y-2">
                        <div className="flex items-center mr-6">
                          <Briefcase className="h-4 w-4 text-dark-500 mr-2" />
                          <span className="text-dark-600 dark:text-dark-400 text-sm">{story.title}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-dark-500 mr-2" />
                          <span className="text-dark-600 dark:text-dark-400 text-sm">{story.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.5} direction="up" className="text-center mt-12">
            <Button href="/contact" variant="outline">
              Share Your Success Story
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Video <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Hear directly from our graduates about their journey from zero experience to successful careers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Arjun's Journey", role: "Software Developer", duration: "3:45" },
              { name: "Pooja's Transformation", role: "Electronics Engineer", duration: "4:12" },
              { name: "Ravi's Success", role: "CAD Designer", duration: "3:28" }
            ].map((video, index) => (
              <AnimatedSection
                key={video.name}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg dark:shadow-dark-900/30 hover-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative group">
                    <img 
                      src={`https://images.pexels.com/photos/3${index + 1}81217/pexels-photo-3${index + 1}81217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                      alt={video.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-900/50 group-hover:bg-dark-900/30 transition-colors flex items-center justify-center">
                      <motion.div 
                        className="bg-white/90 text-primary-500 rounded-full p-3"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="h-8 w-8" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-dark-900/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {video.name}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400 text-sm mb-3">
                      "{video.role} - From zero to hero in months"
                    </p>
                    <div className="flex items-center text-sm text-dark-500">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>2 months ago</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Projects Our <span className="text-gradient">Graduates Built</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mb-8">
              Real products and projects developed by Vibai Innovixs graduates across different disciplines.
            </p>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map(filter => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all ${
                    activeFilter === filter 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <AnimatedSection
                  key={project.id}
                  delay={0.1}
                  direction="up"
                >
                  <motion.div 
                    className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden hover-card h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative group h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-medium">View Project</span>
                          <motion.div 
                            className="bg-white/10 backdrop-blur-sm p-2 rounded-full"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ArrowUpRight className="h-5 w-5 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display font-semibold text-xl mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full text-sm capitalize">
                          {project.category}
                        </span>
                        <span className="text-sm text-dark-500 dark:text-dark-400">
                          by {project.developer}
                        </span>
                      </div>
                      <p className="text-dark-600 dark:text-dark-400 text-sm flex-1">
                        {project.description}
                      </p>
                      <div className="mt-4">
                        <Button href="/contact" variant="ghost" size="sm" className="text-sm">
                          Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 md:py-20 relative bg-white dark:bg-dark-950">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Companies That <span className="text-gradient">Trust Us</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Our graduates work with leading companies across industries, proving that skills matter more than credentials.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              'TechStart Solutions',
              'IoT Innovations',
              'Design Pro Eng.',
              'Digital Solutions',
              'Smart Systems Ltd'
            ].map((company, index) => (
              <AnimatedSection
                key={company}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <motion.div 
                  className="flex items-center justify-center p-6 bg-dark-50 dark:bg-dark-900/50 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors h-24"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-display font-bold text-dark-600 dark:text-dark-400">
                      {company}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1} direction="up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Write Your <span className="text-gradient">Success Story</span>?
              </h2>
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                Join thousands of others who have transformed their careers through our programmes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="/contact" size="lg">
                  Apply for VCAP
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Apply for Vstart Internship
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;