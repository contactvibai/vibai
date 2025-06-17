import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import ParallaxElement from '../components/ui/ParallaxElement';
import Button from '../components/ui/Button';
import { Users, Lightbulb, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Freshers Trained', value: '150+' },
    { label: 'Success Rate', value: '85%' },
    { label: 'Company Partners', value: '25+' },
    { label: 'Average Salary', value: '₹15K/mo' },
  ];

  const values = [
    { 
      icon: <Lightbulb className="h-8 w-8 text-primary-500" />, 
      title: 'Skill Over Credentials',
      description: 'We believe in your abilities, not your papers. Our assessment focuses on aptitude and potential, not degrees or English fluency.'
    },
    { 
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />, 
      title: 'Learn While You Earn',
      description: 'Get paid from day one as you acquire industry-relevant skills. Our model ensures financial stability while you grow professionally.'
    },
    { 
      icon: <Users className="h-8 w-8 text-primary-500" />, 
      title: 'Inclusive Opportunity',
      description: 'We remove traditional barriers to entry in the tech industry. Your background, location, or language skills don\'t limit your potential.'
    },
    { 
      icon: <Award className="h-8 w-8 text-primary-500" />, 
      title: 'Real-World Excellence',
      description: 'Work on actual products used by real customers. Learn practical skills that matter in the industry and build a portfolio of real achievements.'
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Former tech lead with 8+ years experience. Passionate about democratizing tech education."
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Full-stack developer and educator. Believes in practical, hands-on learning approaches."
    },
    {
      name: "Amit Patel",
      role: "Program Director",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Curriculum designer with expertise in electronics and embedded systems."
    },
    {
      name: "Sneha Reddy",
      role: "Head of Training",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mechanical engineer turned educator. Focuses on practical skill development."
    },
    {
      name: "Vikram Singh",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Software architect with expertise in AI/ML integration and modern web technologies."
    },
    {
      name: "Kavya Nair",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Operations specialist ensuring smooth program delivery and student success."
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
                About <span className="text-gradient">Vibai Innovixs</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up">
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                We're reimagining how careers begin. No interviews, no degree requirements, no language barriers—just an opportunity to prove your skills and build your future.
              </p>
            </AnimatedSection>
            
            {/* <AnimatedSection delay={0.5} className="flex justify-center">
              <ParallaxElement speed={-0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.03 }}
                    >
                      <div className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-dark-500 dark:text-dark-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ParallaxElement>
            </AnimatedSection> */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 relative">
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
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="md:w-1/2">
              <AnimatedSection delay={0.4} direction="right">
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
                
                <Button href="/portfolio" variant="outline">
                  See Our Success Stories
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              These core principles guide everything we do at Vibai Innovixs and shape how we approach talent development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                delay={0.2 + index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-xl p-8 hover-card h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-display font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-dark-600 dark:text-dark-300">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
     {/* <section id="team" className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              The passionate individuals behind Vibai Innovixs who are committed to transforming careers and creating opportunities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <motion.div 
                  className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden hover-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 dark:text-primary-400 text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Careers Section */}
      <section id="careers" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-1">
            <div className="bg-white dark:bg-dark-950 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                  <AnimatedSection delay={0.1} direction="left">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                      Join Our Team
                    </h2>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-300 mb-4">
                      We're always looking for talented individuals to join our growing team. At Vibai Innovixs, we practice what we preach—your skills and passion matter more than your background.
                    </p>
                    
                    <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
                      We offer competitive salaries, flexible remote work options, and a supportive environment where you can make a real difference in people's lives.
                    </p>
                    
                    <div className="space-y-4">
                      {['Trainers & Mentors', 'Software Developers', 'Curriculum Designers'].map((position) => (
                        <motion.div 
                          key={position}
                          className="flex items-center"
                          whileHover={{ x: 5 }}
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
                      <h3 className="font-display font-semibold text-xl mb-4">
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
                        <Button href="/contact" fullWidth>
                          View All Positions
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