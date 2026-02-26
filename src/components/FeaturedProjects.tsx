import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 'freshly',
      title: 'Freshly',
      subtitle: 'Food Freshness Monitoring & Real-Time Spoilage Alerts',
      description: 'End-to-end IoT system with ESP32, Flutter mobile app, Firebase backend, and ML spoilage prediction engine.',
      tags: ['ESP32', 'Flutter', 'Firebase', 'ML', 'Python'],
      status: 'Completed',
    },
    {
      id: 'diot-urban-farming',
      title: 'DIOT Urban Farming',
      subtitle: 'Smart Sensor Monitoring & Automation Pipeline',
      description: 'Distributed IoT network with MQTT/Node-RED, database integration, and real-time dashboard for urban farming.',
      tags: ['MQTT', 'Node-RED', 'IoT', 'Dashboard', 'Database'],
      status: 'Completed',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <p className="text-gray-600">Selected work across IoT, mobile, cloud, and ML</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  View case study <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
