import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Calendar, 
  Brain, 
  Mail, 
  Monitor, 
  FileText, 
  Github, 
  Youtube,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Auto-fetch Assignments',
      description: 'Automatically connects with Google Classroom to fetch all your assignments',
    },
    {
      icon: Brain,
      title: 'AI Task Breakdown',
      description: 'Uses ChatGPT to generate intelligent task breakdowns and study guides',
    },
    {
      icon: Mail,
      title: 'Smart Reminders',
      description: 'WhatsApp and email notifications to keep you on track with deadlines',
    },
    {
      icon: Monitor,
      title: 'Desktop App',
      description: 'Complete desktop application with Flask + Electron + React',
    },
    {
      icon: FileText,
      title: 'Document Integration',
      description: 'PDF and document reader integration for comprehensive analysis',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Classroom Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Automate Your Academic Workflow with AI 🤖📚
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90">
              A powerful assistant that connects with Google Classroom, fetches assignments, 
              and generates intelligent task breakdowns using ChatGPT. Helps students stay 
              on top of deadlines and understand how to approach each task without cheating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/installation-guide"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Installation Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://github.com/SyedShababAkbar/AI-Classroom-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub Repository
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay organized and excel in your academic journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resources & Links
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Complete Setup Guide
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Step-by-step tutorial covering Google Cloud setup, API integration, 
                OpenAI configuration, and desktop app deployment.
              </p>
              <Link
                to="/installation-guide"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View Full Tutorial
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <Github className="h-8 w-8 text-gray-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Source Code
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Access the complete source code, documentation, and contribute 
                to the project on GitHub.
              </p>
              <div className="space-y-3">
                <a
                  href="https://github.com/SyedShababAkbar/AI-Classroom-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </a>
                <div className="flex items-center text-gray-500">
                  <Youtube className="mr-2 h-4 w-4" />
                  <span>YouTube Tutorial (Coming Soon)</span>
                </div>
              </div>
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
              Ready to Transform Your Study Workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started today and experience the power of AI-assisted learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/installation-guide"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Setup Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Support
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;