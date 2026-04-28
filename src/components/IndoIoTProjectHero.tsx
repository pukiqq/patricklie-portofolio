import { User, Calendar, ExternalLink, Github } from 'lucide-react';

export default function IndoIoTProjectHero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IndoIoT LLM
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Indonesian-Language IoT Assistant via Fine-Tuned LLM
            </p>
            <p className="text-lg text-gray-700 mb-8">
              An end-to-end AI project fine-tuning Qwen2.5-3B-Instruct with QLoRA for IoT technical Q&A in Bahasa Indonesia — trained on a custom 760-sample dataset, tracked with MLflow, and deployed publicly on HuggingFace Spaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/PatrickLie-dev/indoiot-llm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-medium text-sm gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://huggingface.co/spaces/Pat-L/indoiot-llm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm gap-2"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a
                href="https://huggingface.co/Pat-L/indoiot-qwen2.5-lora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-sm gap-2"
              >
                <ExternalLink className="h-4 w-4" /> HuggingFace Model
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
                  <p className="text-gray-600">April 2026 (~2 weeks)</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'QLoRA', 'Qwen2.5', 'PEFT', 'Groq', 'Gradio', 'HuggingFace', 'MLflow', 'Docker'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Status</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
