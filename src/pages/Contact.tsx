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
  MapPin,
  Clock
} from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shababakbar.dev@gmail.com',
      link: 'mailto:shababakbar.dev@gmail.com'
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left: Contact Information (2/3 width on large screens) */}
            <motion.div
              className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-blue-600 hover:text-blue-700 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Connect & Services (stacked) */}
            <div className="space-y-8">
              {/* Connect With Me */}
              <motion.div
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Services I Offer */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services I Offer</h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
