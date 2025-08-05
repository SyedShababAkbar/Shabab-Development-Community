import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown, 
  Cloud, 
  Key, 
  Download, 
  Settings, 
  Mail, 
  Smartphone,
  Monitor,
  Globe,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Copy,
  Terminal
} from 'lucide-react';

const InstallationGuide = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const CodeBlock = ({ children, language = 'bash' }: { children: string; language?: string }) => (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase">{language}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(children)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className="text-sm"><code>{children}</code></pre>
    </div>
  );

  const sections = [
    {
      id: 'overview',
      title: '🧠 AI Assignment Assistant — Full Setup Guide',
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Create a smart assignment assistant that integrates with Google Classroom and OpenAI, 
            fetches assignments, generates task breakdowns, and displays everything in a clean frontend 
            — with optional email, WhatsApp alerts, and desktop packaging.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">What You'll Build:</h4>
            <ul className="space-y-1 text-blue-800">
              <li>• Google Classroom API integration</li>
              <li>• AI-powered assignment analysis</li>
              <li>• Modern React frontend</li>
              <li>• Desktop application with Electron</li>
              <li>• Automated notifications system</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'google-cloud',
      title: '🔹 Part 1: Google Classroom API Integration',
      icon: Cloud,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
              Create Google Cloud Project
            </h4>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>• Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
              <li>• Click <strong>New Project</strong></li>
              <li>• Name it: <code className="bg-gray-100 px-2 py-1 rounded">AI Assignment Assistant</code></li>
              <li>• Save the Project ID</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
              Enable Classroom API & Configure OAuth Consent
            </h4>
            
            <div className="ml-8 space-y-4">
              <div>
                <h5 className="font-medium text-gray-900">2.1 Enable API</h5>
                <ul className="text-gray-700 mt-1 space-y-1">
                  <li>• Go to APIs & Services → Library</li>
                  <li>• Search: <strong>Google Classroom API</strong> → Click Enable</li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-gray-900">2.2 Set Up OAuth Consent Screen</h5>
                <ul className="text-gray-700 mt-1 space-y-1">
                  <li>• Go to APIs & Services → OAuth Consent Screen</li>
                  <li>• Choose <strong>External</strong></li>
                  <li>• Fill in App name: AI Assignment Assistant</li>
                  <li>• Add support email & developer contact</li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-gray-900">2.3 Add Scopes</h5>
                <p className="text-gray-700 mb-2">Click Add or Remove Scopes, and include:</p>
                <CodeBlock>{`https://www.googleapis.com/auth/classroom.courses.readonly
https://www.googleapis.com/auth/classroom.course-work.readonly
https://www.googleapis.com/auth/classroom.student-submissions.students.readonly
https://www.googleapis.com/auth/drive.readonly`}</CodeBlock>
              </div>

              <div>
                <h5 className="font-medium text-gray-900">2.4 Add Test Users</h5>
                <ul className="text-gray-700 mt-1 space-y-1">
                  <li>• Go to User Type → Test Users</li>
                  <li>• Add the Gmail address linked to your classroom</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
              Create OAuth 2.0 Credentials
            </h4>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>• Navigate to Credentials → Click Create Credentials → OAuth Client ID</li>
              <li>• Select <strong>Desktop App</strong></li>
              <li>• Download the credentials → rename to: <code className="bg-gray-100 px-2 py-1 rounded">credentials.json</code></li>
              <li>• Place it inside your project folder</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">4</span>
              Install Required Python Libraries
            </h4>
            <CodeBlock>{`pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">5</span>
              Test API Connection
            </h4>
            <p className="text-gray-700 mb-3 ml-8">Create a file: <code className="bg-gray-100 px-2 py-1 rounded">fetch_assignments_test.py</code></p>
            <details className="ml-8">
              <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">Click to view sample code</summary>
              <div className="mt-3">
                <CodeBlock language="python">{`from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import os
from datetime import datetime

TOKEN_PATH = "token.json"
CREDENTIALS_PATH = "credentials.json"
SCOPES = [
    'https://www.googleapis.com/auth/classroom.courses.readonly',
    'https://www.googleapis.com/auth/classroom.course-work.readonly',
    'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
    'https://www.googleapis.com/auth/drive.readonly'
]

def authenticate():
    creds = None
    if os.path.exists(TOKEN_PATH):
        creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_PATH, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_PATH, "w") as token:
            token.write(creds.to_json())
    return creds

def main():
    creds = authenticate()
    classroom_service = build('classroom', 'v1', credentials=creds)

    print("✅ Successfully authenticated!")
    courses = classroom_service.courses().list().execute().get('courses', [])
    for course in courses:
        print(f"{course['name']} (ID: {course['id']})")
        try:
            assignments = classroom_service.courses().courseWork().list(courseId=course['id']).execute().get('courseWork', [])
            for a in assignments:
                due = a.get('dueDate', {})
                due_str = f"{due.get('year', '')}-{due.get('month', '')}-{due.get('day', '')}" if due else "No due date"
                print(f"  → {a['title']} | Due: {due_str}")
        except Exception as e:
            print(f"⚠️ Error: {e}")

if __name__ == '__main__':
    main()`}</CodeBlock>
              </div>
            </details>
            <div className="ml-8 mt-3">
              <p className="text-gray-700 mb-2">Run the test:</p>
              <CodeBlock>{`python fetch_assignments_test.py`}</CodeBlock>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'openai',
      title: '🔹 Part 2: OpenAI API Setup',
      icon: Key,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">6</span>
              Get OpenAI API Key
            </h4>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>• Go to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenAI API Keys</a></li>
              <li>• Click <strong>Create new secret key</strong></li>
              <li>• Copy and save securely</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">7</span>
              Add API Key to Environment
            </h4>
            <div className="ml-8 space-y-4">
              <div>
                <h5 className="font-medium text-gray-900">Option A: Set System Environment Variable (Permanent)</h5>
                <ul className="text-gray-700 mt-1 space-y-1">
                  <li>• Variable Name: <code className="bg-gray-100 px-2 py-1 rounded">OPENAI_API_KEY</code></li>
                  <li>• Value: your actual key</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Option B: Set in Code (Temporary)</h5>
                <CodeBlock language="python">{`import openai, os
openai.api_key = os.getenv("OPENAI_API_KEY")`}</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'download',
      title: '🔹 Part 3: Download Project from GitHub',
      icon: Download,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">8</span>
              Clone or Download
            </h4>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>• Visit: <a href="https://github.com/SyedShababAkbar/AI-Classroom-Assistant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a></li>
              <li>• Click <strong>Download ZIP</strong></li>
              <li>• Extract → Open in VS Code</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'configuration',
      title: '🔹 Part 4: Local Configuration',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">9</span>
              Required Files
            </h4>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>• Add <code className="bg-gray-100 px-2 py-1 rounded">credentials.json</code> to root</li>
              <li>• Ensure <code className="bg-gray-100 px-2 py-1 rounded">.env</code> or <code className="bg-gray-100 px-2 py-1 rounded">OPENAI_API_KEY</code> is working</li>
              <li>• Set notification email (optional)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">10</span>
              Install Backend Dependencies
            </h4>
            <CodeBlock>{`cd backend
pip install -r requirements.txt`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">11</span>
              Run Backend
            </h4>
            <CodeBlock>{`python app.py`}</CodeBlock>
          </div>
        </div>
      )
    },
    {
      id: 'frontend',
      title: '🔹 Part 5: Frontend Interface Setup',
      icon: Monitor,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">12</span>
              Install Frontend Dependencies
            </h4>
            <CodeBlock>{`cd frontend
npm install
npm run dev`}</CodeBlock>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 ml-8 mt-4">
              <p className="text-green-800">
                ✅ You'll now see a full dashboard: courses, assignments, and AI responses.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'notifications',
      title: '🔹 Part 6: Notification System',
      icon: Mail,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">📧 Email Notifications</h4>
            <div className="ml-4 space-y-4">
              <div>
                <h5 className="font-medium text-gray-900">Step 1: Enable Gmail App Passwords</h5>
                <ul className="text-gray-700 mt-1 space-y-1">
                  <li>• Go to App Passwords</li>
                  <li>• Generate → Save the 16-digit password</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Step 2: Configure email_notifier.py</h5>
                <CodeBlock language="python">{`EMAIL_ADDRESS = 'your_gmail@gmail.com'
EMAIL_PASSWORD = 'your_app_password'`}</CodeBlock>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
                  <p className="text-yellow-800 text-sm">
                    🛡️ Security Tip: Avoid pushing this file to GitHub — use .env or config files.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">📲 WhatsApp Notifications (Optional)</h4>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Create a Twilio account</li>
              <li>• Get SID, Auth Token, Sandbox number</li>
              <li>• Use <code className="bg-gray-100 px-2 py-1 rounded">twilio.rest.Client</code> in your Python alert system</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'automation',
      title: '🔹 Part 7: Automation',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">📅 Set Cutoff Date</h4>
            <p className="text-gray-700 mb-2">In fetch_assignments.py:</p>
            <CodeBlock language="python">{`CUTOFF_DATE = datetime(2025, 8, 1)`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">🛠️ Task Scheduler (Windows)</h4>
            <p className="text-gray-700 mb-3">Automate daily fetch:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Open Task Scheduler</li>
              <li>• Create Basic Task → Trigger Daily</li>
              <li>• Action → Program: <code className="bg-gray-100 px-2 py-1 rounded">C:\Path\To\python.exe</code></li>
              <li>• Arguments: <code className="bg-gray-100 px-2 py-1 rounded">fetch_assignments.py</code></li>
              <li>• Set working directory to project path</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'desktop',
      title: '🔹 Part 8: Desktop App Packaging',
      icon: Monitor,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="bg-gray-100 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">13</span>
              Convert to Electron Desktop App
            </h4>
            <CodeBlock>{`npm install --save-dev electron-packager
npx electron-packager . ai-assistant-desktop --platform=win32 --arch=x64 --icon=icon.ico`}</CodeBlock>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="text-yellow-800">
                ✅ If error: spawn cmd.exe ENOENT → Add this to system PATH: <code className="bg-yellow-100 px-2 py-1 rounded">C:\Windows\System32\</code>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'deployment',
      title: '🔹 Part 9: Deployment (Optional)',
      icon: Globe,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">🌐 Host a Setup Guide Website (Vercel)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Build static Vite + Tailwind site</li>
              <li>• Push to GitHub</li>
              <li>• Deploy via <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vercel.com</a></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'checklist',
      title: '✅ Final Checklist',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Google Cloud OAuth setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Assignments fetching correctly</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>ChatGPT breakdowns generated</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>React UI running</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Optional email/WhatsApp alerts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Desktop App built with Electron</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Sensitive files excluded from GitHub</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dependencies',
      title: '📦 Dependencies',
      icon: Terminal,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">🔹 Python</h4>
            <CodeBlock>{`pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client openai python-docx PyMuPDF secure-smtplib
cd backend
pip install flask flask_cors requests python-dotenv`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">🔹 Node.js / React</h4>
            <CodeBlock>{`cd frontend
npm install
npm add axios react-router-dom react
npm install react react-dom lucide-react
npm install -D @types/react @types/react-dom @vitejs/plugin-react vite typescript
npm install -D tailwindcss postcss autoprefixer
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals
npm install -D @types/node
npm run dev`}</CodeBlock>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🎥 Full YouTube Tutorial</h4>
            <p className="text-blue-800">
              A complete video walkthrough for every step listed above is coming soon!
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Installation Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow this comprehensive step-by-step guide to set up your AI Assignment Assistant
          </p>
        </motion.div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="h-6 w-6 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                {expandedSections.has(section.id) ? (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {expandedSections.has(section.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 border-t border-gray-100"
                >
                  <div className="pt-4">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-blue-100 mb-6">
              If you encounter any issues during installation, feel free to reach out for support
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Support
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstallationGuide;