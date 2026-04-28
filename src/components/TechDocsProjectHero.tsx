import { User, Calendar, ExternalLink, Github } from 'lucide-react';

export default function TechDocsProjectHero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TechDocs AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              RAG Chatbot for Technical Documentation
            </p>
            <p className="text-lg text-gray-700 mb-8">
              A Retrieval-Augmented Generation system that lets users ask natural-language questions against PDF/TXT/MD technical docs — with grounded answers and page-level source citations, deployed live on Railway.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/PatrickLie-dev/techdocs-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-medium text-sm gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://techdocs-ai-production.up.railway.app/api/health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm gap-2"
              >
                <ExternalLink className="h-4 w-4" /> Live API
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <User className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Role</p>
                  <p className="text-gray-600">Solo Developer</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Period</p>
                  <p className="text-gray-600">April 2026 (In Progress)</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'LangChain', 'ChromaDB', 'Groq', 'Flask', 'Docker', 'Railway', 'MLflow'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Status</p>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
