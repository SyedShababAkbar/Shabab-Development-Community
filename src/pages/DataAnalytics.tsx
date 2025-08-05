import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Database, 
  FileSpreadsheet, 
  Brain,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Users,
  DollarSign,
  Calendar,
  Activity
} from 'lucide-react';

const DataAnalytics = () => {
  const services = [
    {
      icon: FileSpreadsheet,
      title: 'Excel Dashboard Design',
      description: 'Custom, interactive dashboards with advanced charts, KPIs, and dynamic data visualization',
      features: ['Interactive Charts', 'Dynamic Pivot Tables', 'Automated Reporting', 'Custom KPIs']
    },
    {
      icon: Database,
      title: 'Data Cleaning & Preparation',
      description: 'Transform messy data into clean, structured datasets ready for analysis',
      features: ['Data Validation', 'Duplicate Removal', 'Format Standardization', 'Missing Data Handling']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis & Reporting',
      description: 'Identify patterns, trends, and insights from your business data',
      features: ['Statistical Analysis', 'Forecast Modeling', 'Performance Metrics', 'Business Intelligence']
    },
    {
      icon: PieChart,
      title: 'Custom KPIs and Charts',
      description: 'Design meaningful metrics and visualizations tailored to your business needs',
      features: ['Goal Tracking', 'Performance Indicators', 'Visual Analytics', 'Real-time Updates']
    },
    {
      icon: Activity,
      title: 'Dynamic Pivot Tables & Slicers',
      description: 'Interactive data exploration tools for deep-dive analysis',
      features: ['Data Segmentation', 'Filter Controls', 'Cross-tabulation', 'Drill-down Analysis']
    },
    {
      icon: Brain,
      title: 'Power BI Integration',
      description: 'Advanced business intelligence solutions with Microsoft Power BI',
      features: ['Cloud Dashboards', 'Real-time Data', 'Mobile Reports', 'Automated Refresh']
    }
  ];

  const sampleDashboards = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Track revenue, conversion rates, and sales team performance',
      metrics: ['Revenue Tracking', 'Lead Conversion', 'Sales Funnel', 'Team Performance'],
      icon: DollarSign,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Monitor employee metrics, recruitment, and workforce analytics',
      metrics: ['Employee Turnover', 'Recruitment KPIs', 'Performance Reviews', 'Attendance Tracking'],
      icon: Users,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Student Performance Dashboard',
      description: 'Educational analytics for tracking student progress and outcomes',
      metrics: ['Grade Analysis', 'Attendance Rates', 'Course Performance', 'Learning Outcomes'],
      icon: Calendar,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Finance Overview Panel',
      description: 'Comprehensive financial tracking and budget analysis',
      metrics: ['Budget vs Actual', 'Cash Flow', 'Expense Categories', 'Financial Ratios'],
      icon: BarChart3,
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              💼 Data Analytics Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Excel Dashboards | Reports & Cleaning | Business Intelligence
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90">
              I offer complete data services using Excel, Power BI, and Python for businesses 
              and individuals. Transform your raw data into actionable insights with professional 
              dashboards and comprehensive analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://excel-dashboard-portfolio-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Portfolio
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Data Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw data to actionable insights - complete end-to-end analytics services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Dashboards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🖼️ Sample Dashboard Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional dashboards designed for different industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sampleDashboards.map((dashboard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${dashboard.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <dashboard.icon className="h-8 w-8 text-gray-700 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {dashboard.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{dashboard.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {dashboard.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${dashboard.color} mr-2`}></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Link Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
          >
            <FileSpreadsheet className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              View My Complete Excel Portfolio
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore detailed examples of my work including interactive dashboards, 
              complex data analysis, and business intelligence solutions
            </p>
            <a
              href="https://excel-dashboard-portfolio-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🌐 Visit Portfolio Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose My Data Analytics Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional expertise with a focus on delivering actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-300">
                Deep understanding of data patterns and statistical analysis to provide meaningful insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileSpreadsheet className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored dashboards and reports designed specifically for your business needs and goals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-300">
                Track record of delivering high-quality analytics solutions that drive business decisions
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
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your data analytics needs and create powerful insights for your business
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
                href="https://excel-dashboard-portfolio-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Portfolio
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;