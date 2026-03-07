import { ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import { Network, Cloud, Database, ChartBar as BarChart, Bell, CircleCheck as CheckCircle } from 'lucide-react';

export default function DiotProjectDetail() {
  const base = import.meta.env.BASE_URL;
  const diagram = [`${base}images/diot/diagram.png`];
  const arduinocode = [`${base}images/diot/arduinocode.png`];
  const emqx = [`${base}images/diot/emqx.png`];
  const grafana = [`${base}images/diot/grafana.png`];
  const mqtt = [`${base}images/diot/mqtt.png`];
  const nodered = [`${base}images/diot/nodered.png`];
  const remotered = [`${base}images/diot/remotered.png`];

  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                DIOT Urban Farming
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Smart Sensor Monitoring & Automation Pipeline
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Distributed IoT network designed for urban farming with real-time sensor monitoring, MQTT-based communication, automation rules, and analytics dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Overview</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div>
                    <p className="font-medium text-gray-900">Role</p>
                    <p className="text-gray-600">Solo Developer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <p className="font-medium text-gray-900">Timeline</p>
                    <p className="text-gray-600">6 months</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['MQTT', 'Node-RED', 'EMQX', 'InfluxDB', 'Grafana', 'Arduino', 'IoT'].map((tech) => (
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
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <ImageCarousel images={diagram} alt="System Architecture" height="h-96" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            DIOT is a distributed IoT network specifically designed for urban farming applications. It combines real-time sensor monitoring, intelligent automation rules, and data analytics to help urban farmers optimize growing conditions and resource usage.
          </p>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Problem</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Urban farmers struggle with manual monitoring of multiple growing zones. Environmental conditions vary across locations, and responding to threshold violations requires constant attention. This manual approach is inefficient and prone to human error.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Solution</h2>
          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <Network className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Distributed Sensor Nodes</h3>
                <p className="text-gray-600">Environmental monitoring across multiple growing zones</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">MQTT Message Broker</h3>
                <p className="text-gray-600">Reliable device communication using EMQX</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <Network className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Node-RED Orchestration</h3>
                <p className="text-gray-600">Automation rules and workflow management</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">InfluxDB Time-Series Storage</h3>
                <p className="text-gray-600">Efficient storage for sensor data</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Grafana Dashboard</h3>
                <p className="text-gray-600">Interactive visualization for farmer operators</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Live sensor data from 50+ nodes with minimal latency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Temperature, humidity, soil moisture monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">MQTT protocol for reliable message delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automation Rules</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Node-RED workflows for intelligent responses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Threshold-based automated actions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom logic for different growing zones</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Grafana visualization of historical trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pattern analysis for optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom dashboards for different user roles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alert System</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Instant notifications for threshold violations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Multiple notification channels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Configurable alert priorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">System Architecture</h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MQTT Communication</h3>
                <ImageCarousel images={mqtt} alt="MQTT Setup" height="h-80" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">EMQX Broker</h3>
                <ImageCarousel images={emqx} alt="EMQX Configuration" height="h-80" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Node-RED Workflows</h3>
                <ImageCarousel images={nodered} alt="Node-RED Flows" height="h-80" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Remote Dashboard</h3>
                <ImageCarousel images={remotered} alt="Remote RED Dashboard" height="h-80" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Arduino Code</h3>
                <ImageCarousel images={arduinocode} alt="Arduino Implementation" height="h-80" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grafana Analytics</h3>
                <ImageCarousel images={grafana} alt="Grafana Dashboard" height="h-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Efficiency Gain</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">80%</p>
              <p className="text-gray-700">Reduced manual monitoring overhead</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-700">Sensor nodes supported</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Uptime</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">99.5%</p>
              <p className="text-gray-700">System availability</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">My Contribution</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 text-lg">Designed and implemented the entire IoT infrastructure</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 text-lg">Configured MQTT broker (EMQX) and Node-RED automation layer</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 text-lg">Built backend services for data processing and storage (InfluxDB)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 text-lg">Developed responsive web dashboard using Grafana</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 text-lg">Implemented real-time synchronization protocols</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <span className="text-gray-700 text-lg">Conducted end-to-end testing and performance optimization</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalability with Node Count</h4>
              <p className="text-gray-700">Implemented connection pooling and message batching to handle high-frequency updates from multiple nodes without performance degradation.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Network Reliability</h4>
              <p className="text-gray-700">Built retry logic and offline buffering to ensure data delivery even in unstable network conditions typical of rural farming areas.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
              <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Integrity</h4>
              <p className="text-gray-700">Implemented transaction logs and audit trails to maintain data consistency and provide farmers with reliable historical records.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Future Improvements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Intelligence Enhancement</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Machine learning models for predictive crop health</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Integration with weather APIs for better forecasting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Advanced analytics for yield optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">User Experience</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Mobile app for on-the-go monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Multi-farm management dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Voice-activated controls and alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in the implementation details?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss this project and explore opportunities to work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:patricklie995@gmail.com"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/pukiqq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-500 transition font-medium flex items-center justify-center gap-2"
            >
              <Github className="h-5 w-5" /> Repository
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Repository available upon request
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
