import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Facebook, 
  Youtube,
  ExternalLink,
  Send,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'syedshababakbar@gmail.com',
      link: 'mailto:syedshababakbar@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available for Remote Work',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/syed-shabab-akbar-b58411279/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/SyedShababAkbar',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/shababxagents?igsh=NGpwbG5tbm5zbGhr',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1ApwZsmDis/',
      color: 'hover:text-blue-800'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@automate_with_shabab',
      color: 'hover:text-red-600'
    }
  ];

  const services = [
    'AI & Automation Solutions',
    'Web Development',
    'Mobile App Development',
    'Data Analytics & Excel Dashboards',
    'Custom Software Development',
    'API Integration',
    'Database Design',
    'Technical Consulting'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              📬 Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90">
              Whether you need AI automation, web development, mobile apps, or data analytics solutions, 
              I'm here to provide professional expertise and exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>
                <form action="https://formsubmit.co/shababakbar.dev@gmail.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project, requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <info.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Services Quick List */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Services I Offer
                </h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
              <p className="text-gray-600 text-sm">
                Project timelines vary based on complexity. Simple websites take 1-2 weeks, 
                while complex applications may take 4-8 weeks. I'll provide a detailed timeline 
                during our initial consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600 text-sm">
                Yes! I offer ongoing maintenance, updates, and support packages to ensure 
                your project continues to run smoothly after launch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="font-semibold text-gray-900 mb-2">What's your pricing structure?</h3>
              <p className="text-gray-600 text-sm">
                Pricing depends on project scope and complexity. I offer competitive rates 
                and can work with both fixed-price and hourly arrangements. Contact me for a 
                personalized quote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Can you work with existing teams?</h3>
              <p className="text-gray-600 text-sm">
                Absolutely! I'm experienced in collaborative development and can integrate 
                seamlessly with your existing team and workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's turn your ideas into reality with professional development services
            </p>
            <a
              href="mailto:shababakbar.dev@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Send Email Now
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;