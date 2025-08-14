import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { ExternalLink, Github, Play, Smartphone, Truck, GraduationCap, Monitor, Building2, ArrowRight, Code, Users, Calendar, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Grocery Mobile App",
      category: "Mobile Application",
      description: "A comprehensive grocery shopping app with real-time inventory, smart recommendations, and seamless checkout experience.",
      icon: <Smartphone className="h-12 w-12 text-primary-500" />,
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Real-time inventory tracking",
        "AI-powered product recommendations",
        "Multiple payment gateway integration",
        "Order tracking and delivery scheduling",
        "Digital receipt and loyalty program"
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe API"],
      status: "Live",
      users: "10K+ active users",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "Delivery Mobile App",
      category: "Logistics Platform",
      description: "End-to-end delivery management system connecting customers, delivery partners, and businesses in real-time.",
      icon: <Truck className="h-12 w-12 text-primary-500" />,
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Real-time GPS tracking",
        "Dynamic route optimization",
        "Multi-vendor marketplace",
        "In-app communication system",
        "Automated dispatch management"
      ],
      tech: ["Flutter", "Express.js", "PostgreSQL", "Redis", "Google Maps API"],
      status: "Live",
      users: "25K+ deliveries completed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Learning Management System SaaS",
      category: "Educational Platform",
      description: "Comprehensive LMS platform enabling institutions to create, manage, and deliver online courses with advanced analytics.",
      icon: <GraduationCap className="h-12 w-12 text-primary-500" />,
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Interactive course builder",
        "Advanced student analytics",
        "Multi-tenant architecture",
        "Integrated video conferencing",
        "Automated grading system"
      ],
      tech: ["React", "Django", "PostgreSQL", "AWS", "WebRTC"],
      status: "Live",
      users: "500+ institutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "App-less Mobile OS",
      category: "Operating System",
      description: "Revolutionary mobile OS that eliminates traditional apps, providing seamless web-based experiences with native performance.",
      icon: <Monitor className="h-12 w-12 text-primary-500" />,
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Progressive Web App integration",
        "Native-level performance",
        "Unified notification system",
        "Cross-platform compatibility",
        "Advanced security framework"
      ],
      tech: ["C++", "WebAssembly", "JavaScript", "Linux Kernel", "WebGL"],
      status: "Beta",
      users: "1K+ beta testers",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "ERP - No Support Required",
      category: "Enterprise Software",
      description: "Self-managing ERP system with AI-driven automation that requires minimal human intervention and zero technical support.",
      icon: <Building2 className="h-12 w-12 text-primary-500" />,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "AI-powered automation",
        "Self-healing system architecture",
        "Predictive maintenance alerts",
        "Zero-configuration deployment",
        "Intelligent workflow optimization"
      ],
      tech: ["Python", "TensorFlow", "Kubernetes", "PostgreSQL", "Redis"],
      status: "Live",
      users: "200+ enterprises",
      color: "from-indigo-500 to-purple-500"
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
                <Code className="h-16 w-16 text-primary-500" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="text-gradient">Projects</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up">
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                Discover the innovative solutions we've built - from mobile applications to enterprise systems, each project showcases our commitment to excellence and cutting-edge technology.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} direction="up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">5</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Live Projects</div>
                </div>
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">50K+</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Active Users</div>
                </div>
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">15+</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Technologies</div>
                </div>
                <div className="bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark-200 dark:border-dark-700">
                  <div className="text-2xl font-bold text-primary-500">99%</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Uptime</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      <section className="py-16 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.1} direction="up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Featured <span className="text-gradient">Project</span>
              </h2>
            </AnimatedSection>

            <div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700">
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedProject}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-64 lg:h-full"
                    >
                      <img 
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${projects[selectedProject].color} opacity-20`}></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          projects[selectedProject].status === 'Live' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
                        }`}>
                          {projects[selectedProject].status}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedProject}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4">
                          {projects[selectedProject].icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold">
                            {projects[selectedProject].title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400">
                            {projects[selectedProject].category}
                          </p>
                        </div>
                      </div>

                      <p className="text-dark-600 dark:text-dark-400 mb-6">
                        {projects[selectedProject].description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Star className="h-5 w-5 text-accent-500 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {projects[selectedProject].features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Users className="h-5 w-5 text-accent-500 mr-2" />
                          Impact
                        </h4>
                        <p className="text-sm text-dark-600 dark:text-dark-400">
                          {projects[selectedProject].users}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[selectedProject].tech.slice(0, 4).map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </Button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="p-6 bg-dark-50 dark:bg-dark-800/50 border-t border-dark-200 dark:border-dark-700">
                <div className="flex justify-center space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProject(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === selectedProject ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              All <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Explore our complete portfolio of innovative solutions across different domains and technologies.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700 hover-card h-full flex flex-col cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                          : 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-3">
                        {React.cloneElement(project.icon, { className: "h-6 w-6 text-primary-500" })}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-dark-600 dark:text-dark-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-dark-500 dark:text-dark-400">
                        {project.users}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary-500" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1} direction="up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Build Something <span className="text-gradient">Amazing</span>?
              </h2>
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                Join our team and work on cutting-edge projects that make a real impact. Your next big opportunity is just one click away.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="/contact" size="lg">
                  Join Our Team
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Learn About Our Programs
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;