import { Calendar, User, ExternalLink } from 'lucide-react';

export default function ProjectHero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Freshly
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Food Freshness Monitoring & Real-Time Spoilage Alerts
            </p>
            <p className="text-lg text-gray-700 mb-8">
              End-to-end IoT system (ESP32 → Firebase → Flutter) with rule-based notifications and an ML insight engine on Google Compute Engine.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <User className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Role</p>
                  <p className="text-gray-600">Solo</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Timeline</p>
                  <p className="text-gray-600">Final Year Project</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['ESP32', 'Flutter', 'Firebase', 'Cloud Functions', 'Compute Engine', 'Flask', 'Scikit-learn'].map((tech) => (
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
              <div className="pt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Repository available upon request
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 rounded-xl p-8 flex items-center justify-center">
          <p className="text-gray-500 text-center">
            [System Overview Image: Phone UI + Sensor Box + Architecture Diagram]
          </p>
        </div>
      </div>
    </div>
  );
}
