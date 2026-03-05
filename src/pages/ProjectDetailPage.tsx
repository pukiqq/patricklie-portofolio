import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import FreshlyProjectDetail from '../components/FreshlyProjectDetail';

export default function ProjectDetailPage() {
  const { id } = useParams();

  if (id === 'freshly') {
    return <FreshlyProjectDetail />;
  }

  if (id === 'diot-urban-farming') {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DIOT Urban Farming</h1>
            <p className="text-2xl text-gray-600">Smart Sensor Monitoring & Automation Pipeline</p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-12 p-6 bg-blue-50 rounded-xl">
            <div>
              <p className="text-sm text-gray-600">Role</p>
              <p className="font-semibold text-gray-900">Lead Engineer</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Timeline</p>
              <p className="font-semibold text-gray-900">6 months</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-semibold text-gray-900">Completed</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Repository</p>
              <p className="font-semibold text-gray-900">Upon request</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                DIOT is a distributed IoT network specifically designed for urban farming applications. It combines real-time sensor monitoring, intelligent automation rules, and data analytics to help urban farmers optimize growing conditions and resource usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem</h2>
              <p className="text-gray-700 leading-relaxed">
                Urban farmers struggle with manual monitoring of multiple growing zones. Environmental conditions vary across locations, and responding to threshold violations requires constant attention. This manual approach is inefficient and prone to human error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
              <div className="space-y-3">
                <p className="text-gray-700">The system consists of five key components:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Distributed sensor nodes with environmental monitoring</li>
                  <li>MQTT message broker for reliable device communication</li>
                  <li>Node-RED orchestration layer for automation rules</li>
                  <li>Cloud database for time-series data storage</li>
                  <li>Interactive dashboard for farmer operators</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-700 text-sm">Live sensor data from 50+ nodes with minimal latency</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Automation Rules</h3>
                  <p className="text-gray-700 text-sm">Node-RED workflows for intelligent condition responses</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-700 text-sm">Historical trends and pattern analysis for optimization</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Alert System</h3>
                  <p className="text-gray-700 text-sm">Instant notifications for threshold violations</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The architecture follows a distributed pattern with clear separation of concerns:
              </p>
              <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-600 font-medium">
                [Architecture Diagram Placeholder]
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Reduced manual monitoring overhead by 80%</li>
                <li>Scalable architecture supporting 50+ sensor nodes</li>
                <li>Real-time alert system with 99.5% uptime</li>
                <li>Data analytics enabling predictive crop adjustments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Contribution</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Designed and implemented the entire IoT infrastructure</li>
                <li>Configured MQTT broker and Node-RED automation layer</li>
                <li>Built backend services for data processing and storage</li>
                <li>Developed responsive web dashboard for farmers</li>
                <li>Implemented real-time synchronization protocols</li>
                <li>Conducted end-to-end testing and performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalability with Node Count</h3>
                  <p className="text-gray-700">Implemented connection pooling and message batching to handle high-frequency updates from multiple nodes without performance degradation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Network Reliability</h3>
                  <p className="text-gray-700">Built retry logic and offline buffering to ensure data delivery even in unstable network conditions typical of rural farming areas.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Integrity</h3>
                  <p className="text-gray-700">Implemented transaction logs and audit trails to maintain data consistency and provide farmers with reliable historical records.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Improvements</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Machine learning models for predictive crop health</li>
                <li>Mobile app for on-the-go monitoring</li>
                <li>Integration with weather APIs for better forecasting</li>
                <li>Advanced analytics for yield optimization</li>
                <li>Multi-farm management dashboard</li>
              </ul>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/pukiqq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
              >
                <Github className="h-5 w-5 mr-2" /> View Repository
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium"
              >
                <ArrowLeft className="h-5 w-5 mr-2" /> Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Project not found</h1>
      </div>
    </div>
  );
}
