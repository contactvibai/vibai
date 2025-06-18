import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { MapPin, Mail, Phone, MessageSquare, Send, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    programme: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      division: '',
      programme: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    { 
      icon: <Mail className="h-6 w-6 text-primary-500" />, 
      title: 'Email Us',
      value: 'contact@vibaiinnovixs.com',
      action: 'mailto:contact@vibaiinnovixs.com'
    },
    { 
      icon: <Phone className="h-6 w-6 text-primary-500" />, 
      title: 'Call Us',
      value: '+91 98765 43210',
      action: 'tel:+919876543210'
    },
    { 
      icon: <MessageSquare className="h-6 w-6 text-primary-500" />, 
      title: 'Live Chat',
      value: 'Available 9 AM - 6 PM IST',
      action: '#chat'
    }
  ];

  const divisions = [
    { value: '', label: 'Select Division' },
    { value: 'software', label: 'Software Engineering' },
    { value: 'electronics', label: 'Electronics Engineering' },
    { value: 'mechanical', label: 'Mechanical Engineering' }
  ];

  const programmes = [
    { value: '', label: 'Select Programme' },
    { value: 'vcap', label: 'VCAP - Vibai Career Assurance Programme' },
    { value: 'vstart', label: 'Vstart Internship Programme' },
    { value: 'corporate', label: 'Corporate Partnership' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const formFields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your full name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: false },
    { 
      name: 'division', 
      label: 'Division of Interest', 
      type: 'select',
      options: divisions,
      required: true 
    },
    { 
      name: 'programme', 
      label: 'Programme', 
      type: 'select',
      options: programmes,
      required: true 
    },
    { 
      name: 'subject', 
      label: 'Subject', 
      type: 'text',
      placeholder: 'Brief subject of your inquiry',
      required: true 
    },
    { 
      name: 'message', 
      label: 'Your Message', 
      type: 'textarea', 
      placeholder: 'Tell us how we can help you...', 
      required: true 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.1} direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Get In <span className="text-gradient">Touch</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="up">
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
                Have questions about our programmes? Interested in partnering with us? Reach out today and our team will be happy to help.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="flex justify-center flex-wrap gap-4">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  className="flex items-center px-5 py-3 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-colors shadow-sm hover:shadow-md"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mr-3">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-dark-500 dark:text-dark-400">
                      {method.title}
                    </div>
                    <div className="font-medium">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30">
              <div className="lg:w-2/5 bg-gradient-to-br from-primary-500 to-accent-500 p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-white/20"></div>
                  <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-white/20"></div>
                  <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-white/20"></div>
                </div>
                
                <AnimatedSection delay={0.2} direction="left">
                  <h2 className="text-3xl font-display font-bold mb-6 relative z-10">
                    Contact Information
                  </h2>
                  
                  <p className="mb-8 opacity-90 relative z-10">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-6 relative z-10">
                    {[
                      { 
                        icon: <Phone className="h-5 w-5" />, 
                        text: "+91 98765 43210"
                      },
                      { 
                        icon: <Mail className="h-5 w-5" />, 
                        text: "contact@vibaiinnovixs.com"
                      },
                      { 
                        icon: <MapPin className="h-5 w-5" />, 
                        text: "123 Innovation Street, Bangalore, Karnataka, India"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="p-2 bg-white/10 rounded-lg mr-3">
                          {item.icon}
                        </div>
                        <span className="opacity-90">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mb-20"></div>
                </AnimatedSection>
              </div>
              
              <div className="lg:w-3/5 bg-white dark:bg-dark-900 p-8 md:p-12">
                <AnimatedSection delay={0.3} direction="right">
                  <h2 className="text-3xl font-display font-bold mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formFields.map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-dark-700 dark:text-dark-300 font-medium mb-2">
                          {field.label} {field.required && <span className="text-error-500">*</span>}
                        </label>
                        
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            rows={5}
                            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400"
                          />
                        ) : field.type === 'select' ? (
                          <select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            required={field.required}
                            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                          >
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400"
                          />
                        )}
                      </div>
                    ))}
                    
                    <div className="pt-2">
                      <Button type="submit" size="lg">
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Locations Section */}
     {/* <section className="py-16 md:py-24 relative bg-dark-50 dark:bg-dark-900/30">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              While we operate primarily remotely, we have physical offices in major tech hubs across India.
            </p>
          </AnimatedSection>

          <div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-xl dark:shadow-dark-900/30 border border-dark-200 dark:border-dark-700">
            <div className="aspect-video w-full bg-dark-200 dark:bg-dark-800 relative">
              {/* Placeholder for a map 
              <div className="absolute inset-0 bg-dark-100 dark:bg-dark-800 flex items-center justify-center">
                <div className="text-dark-500 dark:text-dark-400 text-center">
                  <p className="mb-4">Interactive Map would be displayed here</p>
                  <p className="text-sm">For demo purposes, a real map integration is not shown</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Bangalore', 'Hyderabad', 'Pune'].map((location) => (
                  <motion.div 
                    key={location}
                    className="hover-card p-4 rounded-lg border border-dark-200 dark:border-dark-700"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg text-primary-500">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-1">
                          {location}
                        </h3>
                        <p className="text-dark-600 dark:text-dark-400 text-sm mb-2">
                          123 Tech Park, {location} - 500001
                        </p>
                        <a 
                          href="#" 
                          className="text-primary-500 hover:text-primary-600 text-sm font-medium inline-flex items-center"
                        >
                          Get Directions
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section id="faq"  className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Find answers to common questions about our programmes and application process.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Do I need any specific educational qualifications to apply?",
                answer: "We don’t require any specific degrees. If you have the aptitude, passion, and a minimum of 15 years of basic education, you’re eligible — no formal qualifications needed."
              },
              {
                question: "How good does my English need to be?",
                answer: "You don't need to be fluent in English. Basic communication skills are enough, and you can work and learn in your preferred language."
              },
              {
                question: "Is the work 100% remote?",
                answer: "Yes, all our positions are fully remote. You can work from anywhere in India with a stable internet connection."
              },
              {
                question: "What if I have zero technical knowledge?",
                answer: "We look for aptitude and learning ability rather than existing knowledge. Our comprehensive training will teach you everything you need to succeed."
              },
              {
                question: "When do I get paid?",
                answer: "You start receiving your salary (₹15,000/month for VCAP or ₹4,000/month for Vstart internships) from the very first month, not after training."
              },
              {
                question: "What's the difference between VCAP and Vstart?",
                answer: "VCAP is our full-time Career Assurance Programme for freshers (₹15,000/month), while Vstart is our part-time Internship Programme for college students (₹4,000/month)."
              }
            ].map((faq, index) => (
              <AnimatedSection
                key={index}
                delay={0.2 + index * 0.1}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md dark:shadow-dark-900/20 border border-dark-200 dark:border-dark-700"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-display text-lg font-semibold cursor-pointer list-none">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-dark-600 dark:text-dark-300">
                    {faq.answer}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6} direction="up" className="text-center mt-12">
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              Still have questions? Reach out to our team directly.
            </p>
            <Button href="#form" variant="outline">
              Contact Support Team
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;