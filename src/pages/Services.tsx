import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Bot, 
  BarChart3, 
  Layout,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Database,
  Palette,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies',
      technologies: ['React', 'Flask', 'WordPress', 'Node.js', 'TypeScript'],
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Modern UI/UX'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      technologies: ['React Native', 'Android Studio', 'Flutter', 'Ionic'],
      features: [
        'Cross-platform Development',
        'Native Performance',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Bot,
      title: 'AI & Automation Projects',
      description: 'Intelligent automation solutions and AI-powered applications',
      technologies: ['OpenAI API', 'Python', 'Machine Learning', 'NLP'],
      features: [
        'Google Classroom Integration',
        'ChatGPT Implementation',
        'Process Automation',
        'Data Processing Bots',
        'Smart Notifications'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Excel & Data Analytics',
      description: 'Comprehensive data analysis, visualization, and business intelligence solutions',
      technologies: ['Excel', 'Power BI', 'Python', 'SQL'],
      features: [
        'Interactive Dashboards',
        'Data Cleaning & Preparation',
        'Statistical Analysis',
        'Custom KPIs',
        'Automated Reports'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Layout,
      title: 'Custom Dashboards',
      description: 'Tailored admin panels, student portals, and CRM systems',
      technologies: ['React', 'Vue.js', 'Chart.js', 'D3.js'],
      features: [
        'Student Management Portals',
        'Admin Control Panels',
        'CRM Dashboards',
        'Real-time Analytics',
        'User Management Systems'
      ],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and target audience',
      icon: Settings
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Creating wireframes, mockups, and technical architecture',
      icon: Palette
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your solution with rigorous testing and quality assurance',
      icon: Code
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launching your project with ongoing maintenance and support',
      icon: Globe
    }
  ];

  const whyChooseMe = [
    'Full-stack development expertise',
    'Modern technology stack',
    'Responsive and user-friendly designs',
    'AI and automation specialization',
    'Data analytics proficiency',
    'Project management experience',
    'Ongoing support and maintenance',
    'Competitive pricing'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              💻 My Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              One-Stop Solution for Digital Needs
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90">
              💡 Want to build a digital tool, automate your process, or create a dashboard? 
              Let's work together to bring your ideas to life with cutting-edge technology and 
              professional expertise.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment - complete end-to-end development services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose My Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With expertise across multiple technologies and a passion for creating 
                innovative solutions, I deliver projects that exceed expectations and 
                drive real business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseMe.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
            >
              <div className="text-center">
                <Zap className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project requirements and create something amazing together.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technologies & Tools I Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern, reliable technologies for scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Python', 'Node.js', 'TypeScript', 'Flask', 'WordPress',
              'React Native', 'Android', 'Flutter', 'OpenAI', 'Excel', 'Power BI',
              'PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Git', 'Docker'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
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
              Let's Build Something Amazing
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your ideas into reality with professional development services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/data-analytics"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Data Services
                <BarChart3 className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;