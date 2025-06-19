import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import { MapPin, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

// 1. Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";

// --- IMPORTANT: Add your Firebase project configuration here ---
const firebaseConfig = {
  apiKey: "AIzaSyBbSSqyVgvH7rZ33DT4-XvUEiOkuy9VcY8",
  authDomain: "vibai-68d6d.firebaseapp.com",
  projectId: "vibai-68d6d",
  storageBucket: "vibai-68d6d.firebasestorage.app",
  messagingSenderId: "125358594452",
  appId: "1:125358594452:web:01d45194aa4b6e1b885781"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- State for OTP Flow ---
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  
  // Ref to hold the reCAPTCHA widget ID
  const recaptchaWidgetId = useRef<number | null>(null);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    programme: '',
    subject: '',
    message: '',
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
  });

  // --- Setup reCAPTCHA Verifier for Phone Auth (Runs only ONCE) ---
  useEffect(() => {
    console.log("Setting up reCAPTCHA verifier...");
    try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': () => {
            console.log("reCAPTCHA challenge solved (in callback).");
          },
          'expired-callback': () => {
            console.log("reCAPTCHA expired. Please try sending OTP again.");
          }
        });

        // Render the verifier and store the widget ID
        window.recaptchaVerifier.render().then((widgetId) => {
            console.log("reCAPTCHA rendered successfully with widgetId:", widgetId);
            recaptchaWidgetId.current = widgetId;
        }).catch(err => {
            console.error("reCAPTCHA render error:", err);
            setStatus("Could not render reCAPTCHA. Please refresh.");
        });

    } catch (error) {
        console.error("Failed to initialize RecaptchaVerifier:", error);
        setStatus("Could not initialize reCAPTCHA. Please refresh.");
    }

  }, [auth]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- Function to Send OTP ---
  const handleSendOtp = async () => {
    console.log("1. Send OTP button clicked.");
    if (isVerified || !formData.phone || formData.phone.length < 10) {
        setStatus("Please enter a valid phone number with country code.");
        return;
    }
    
    if (!window.recaptchaVerifier) {
        console.error("recaptchaVerifier not initialized.");
        setStatus("reCAPTCHA not ready. Please wait a moment and try again.");
        return;
    }
    
    setStatus("Sending OTP...");
    console.log("2. Preparing to send OTP.");
    
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = `+${formData.phone}`;
    
    try {
        console.log("3. Calling signInWithPhoneNumber...");
        const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
        
        console.log("4. signInWithPhoneNumber was successful.");
        setConfirmationResult(result);
        setOtpSent(true);
        setStatus("OTP sent successfully! Please check your phone.");
        
    } catch (error) {
        console.error("5. Error in handleSendOtp:", error);
        setStatus("Failed to send OTP. Please check the console for details.");
        
        // Reset the reCAPTCHA for the next attempt
        if (recaptchaWidgetId.current !== null) {
            // @ts-ignore
            window.grecaptcha.reset(recaptchaWidgetId.current);
            console.log("6. reCAPTCHA has been reset after an error.");
        }
    }
  };

  // --- Function to Verify OTP ---
  const handleVerifyOtp = async () => {
      if (!confirmationResult || !otp) {
          setStatus("Please enter the 6-digit OTP.");
          return;
      }
      try {
          setStatus("Verifying OTP...");
          await confirmationResult.confirm(otp);
          setIsVerified(true);
          setOtpSent(false);
          setStatus("Phone number verified successfully!");
      } catch (error) {
          console.error("Error verifying OTP:", error);
          setStatus("Invalid OTP. Please try again.");
      }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.phone && !isVerified) {
        setStatus("Please verify your phone number before submitting.");
        return;
    }

    setIsSubmitting(true);
    setStatus("Sending....");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Form Submitted Successfully!");
        setFormData({
            name: '', email: '', phone: '', division: '',
            programme: '', subject: '', message: '',
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
        });
        setIsVerified(false); 
      } else {
        console.error("Submission Error:", result);
        setStatus(result.message);
      }
    } catch (error) {
      console.error("Network or other error:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: <Mail className="h-6 w-6 text-primary-500" />, title: 'Email Us', value: 'contact@vibai-innovixs.com', action: 'mailto:contact@vibai-innovixs.com' },
    { icon: <Phone className="h-6 w-6 text-primary-500" />, title: 'Call Us', value: '+91 98765 XXXXX', action: 'tel:+9198765XXXXX' },
    { icon: <MessageSquare className="h-6 w-6 text-primary-500" />, title: 'Live Chat', value: 'Available 9 AM - 6 PM IST', action: '#chat' }
  ];

  const divisions = [
    { value: '', label: 'Select Division' }, { value: 'software', label: 'Software Engineering' },
    { value: 'electronics', label: 'Electronics Engineering' }, { value: 'mechanical', label: 'Mechanical Engineering' }
  ];

  const programmes = [
    { value: '', label: 'Select Programme' }, { value: 'vcap', label: 'VCAP' },
    { value: 'vstart', label: 'Vstart Internship' }, { value: 'corporate', label: 'Corporate Partnership' },
    { value: 'other', label: 'Other Inquiry' }
  ];
  
  const formFields = [
    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your full name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', required: true },
    { name: 'division', label: 'Division of Interest', type: 'select', options: divisions, required: true },
    { name: 'programme', label: 'Programme', type: 'select', options: programmes, required: true },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Brief subject of your inquiry', required: true },
    { name: 'message', label: 'Your Message', type: 'textarea', placeholder: 'Tell us how we can help you...', required: true }
  ];


  return (
    <>
      <div id="recaptcha-container"></div> {/* Firebase reCAPTCHA container */}
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
                          text: "+91 98765 XXXXX"
                        },
                        { 
                          icon: <Mail className="h-5 w-5" />, 
                          text: "contact@vibai-innovixs.com"
                        },
                        { 
                          icon: <MapPin className="h-5 w-5" />, 
                          text: "Madhapur, Hyderabad, Telangana, India"
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
                  <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formFields.map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-dark-700 dark:text-dark-300 font-medium mb-2">
                          {field.label} {field.required && <span className="text-error-500">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.name} name={field.name} value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange} placeholder={field.placeholder} required={field.required}
                            rows={5}
                            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400"
                          />
                        ) : field.type === 'select' ? (
                          <select
                            id={field.name} name={field.name} value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange} required={field.required}
                            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                          >
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type} id={field.name} name={field.name} value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange} placeholder={field.placeholder} required={field.required}
                            className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-400"
                          />
                        )}
                      </div>
                    ))}

                    {/* --- Phone Number Field with OTP --- */}
                    <div>
                        <label htmlFor="phone" className="block text-dark-700 dark:text-dark-300 font-medium mb-2">Phone Number</label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="tel" id="phone" name="phone" value={formData.phone}
                                onChange={handleChange} placeholder="919876543210" disabled={otpSent || isVerified}
                                className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg disabled:bg-dark-100 dark:disabled:bg-dark-800"
                            />
                            {!isVerified ? (
                                <button type="button" onClick={handleSendOtp} disabled={otpSent} className="px-4 py-3 bg-gray-200 dark:bg-dark-700 rounded-lg disabled:opacity-50 whitespace-nowrap">
                                    Send OTP
                                </button>
                            ) : (
                                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                            )}
                        </div>
                    </div>
                    
                    {/* --- OTP Input Field (conditional) --- */}
                    {otpSent && !isVerified && (
                        <div>
                            <label htmlFor="otp" className="block text-dark-700 dark:text-dark-300 font-medium mb-2">Enter OTP</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text" id="otp" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)}
                                    placeholder="6-digit code"
                                    className="w-full px-4 py-3 border border-dark-300 dark:border-dark-700 rounded-lg"
                                />
                                <button type="button" onClick={handleVerifyOtp} className="px-4 py-3 bg-primary-500 text-white rounded-lg whitespace-nowrap">
                                    Verify OTP
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting || (!!formData.phone && !isVerified)}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                      </button>
                    </div>

                    {status && (
                        <p className={`text-center mt-4 p-3 rounded-lg ${
                            status.includes("Successfully") ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" :
                            status.includes("verified") ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" :
                            "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                        }`}>
                            {status}
                        </p>
                    )}
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              { question: "Do I need any specific educational qualifications to apply?", answer: "We don’t require any specific degrees. If you have the aptitude, passion, and a minimum of 15 years of basic education, you’re eligible — no formal qualifications needed." },
              { question: "How good does my English need to be?", answer: "You don't need to be fluent in English. Basic communication skills are enough, and you can work and learn in your preferred language." },
              { question: "Is the work 100% remote?", answer: "Yes, all our positions are fully remote. You can work from anywhere in India with a stable internet connection." },
              { question: "What if I have zero technical knowledge?", answer: "We look for aptitude and learning ability rather than existing knowledge. Our comprehensive training will teach you everything you need to succeed." },
              { question: "When do I get paid?", answer: "You start receiving your salary (₹15,000/month for VCAP or ₹4,000/month for Vstart internships) from the very first month, not after training." },
              { question: "What's the difference between VCAP and Vstart?", answer: "VCAP is our full-time Career Assurance Programme for freshers (₹15,000/month), while Vstart is our part-time Internship Programme for college students (₹4,000/month)." }
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
            <a href="#form" className="inline-block px-6 py-3 border border-primary-500 text-primary-500 font-medium rounded-md hover:bg-primary-500 hover:text-white transition-colors duration-300">
              Contact Support Team
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;

// A type declaration to avoid TypeScript errors with the window object
declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
        grecaptcha: any;
    }
}
