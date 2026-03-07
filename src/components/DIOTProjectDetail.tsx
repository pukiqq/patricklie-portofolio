import { ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import DIOTProjectHero from './DIOTProjectHero.tsx';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';
import { Zap, GitBranch, Database, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

export default function DIOTProjectDetail() {
  const base = import.meta.env.BASE_URL;

  const diagram = [
    `${base}images/diot/diagram.png`,
  ];
  const arduinocode = [
    `${base}images/diot/arduinocode.png`,
  ];
  const emqx = [
    `${base}images/diot/emqx.png`,
  ];
  const grafana = [
    `${base}images/diot/grafana.png`,
  ];
  const mqtt = [
    `${base}images/diot/mqtt.png`,
  ];
  const nodered = [
    `${base}images/diot/nodered.png`,
  ];
  const remotered = [
    `${base}images/diot/remotered.png`,
  ];

  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
      </div>

      <DIOTProjectHero/>
        
      <ProjectSection title="Why DIOT?" background="gray">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Urban farmers need continuous monitoring across multiple growing zones without constant manual oversight. Environmental conditions vary by location, and responding to threshold violations requires reliable automation. DIOT bridges this gap with distributed sensors, intelligent rules, and real-time insights.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-center text-red-600">
                <AlertCircle className="h-6 w-6 mr-3" />
                <span>Manual checks → Late responses → Crop loss</span>
              </div>
              <div className="text-center text-gray-400">VS</div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span>Continuous monitoring → Instant automation → Optimized yield</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="What I Built">
        <div className="space-y-6 mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Distributed Sensor Network</h3>
              <p className="text-gray-600">50+ nodes monitoring environmental conditions across growing zones</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <GitBranch className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">MQTT Communication Layer</h3>
              <p className="text-gray-600">Reliable publish-subscribe messaging for real-time data flow</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Node-RED Automation Engine</h3>
              <p className="text-gray-600">Visual workflows for threshold-based automation and responses</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Time-Series Database</h3>
              <p className="text-gray-600">Persistent storage for historical trends and pattern analysis</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Grafana Analytics Dashboard</h3>
              <p className="text-gray-600">Interactive visualizations for real-time monitoring and insights</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">System Architecture</h3>
          <ImageCarousel images={diagram} alt="System Architecture Diagram" height="h-96" />
        </div>
      </ProjectSection>

      <ProjectSection title="Core Components" background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hardware & Sensors</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Arduino-based sensor nodes with environmental monitoring</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Temperature, humidity, light, and soil moisture sensors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Wireless connectivity via MQTT protocol</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Automation & Alerting</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Node-RED workflows for intelligent automation rules</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Real-time alerts for threshold violations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Scalable architecture supporting 50+ simultaneous nodes</span>
              </li>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Architecture Components">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">MQTT Broker</h4>
            <p className="text-gray-700 mb-4">
              EMQX message broker handles reliable publish-subscribe communication between distributed sensor nodes and the backend orchestration layer.
            </p>
            <ImageCarousel images={mqtt} alt="MQTT Broker Configuration" height="h-64" />
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">EMQX Setup</h4>
            <p className="text-gray-700 mb-4">
              Enterprise-grade MQTT broker deployment with clustering and persistence for high-availability messaging.
            </p>
            <ImageCarousel images={emqx} alt="EMQX Dashboard" height="h-64" />
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Arduino Firmware</h4>
            <p className="text-gray-700 mb-4">
              Sensor node code handling data collection from multiple sensors and MQTT publication.
            </p>
            <ImageCarousel images={arduinocode} alt="Arduino Firmware Code" height="h-64" />
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Node-RED Orchestration</h4>
            <p className="text-gray-700 mb-4">
              Visual automation workflows processing sensor data and triggering intelligent responses based on defined rules.
            </p>
            <ImageCarousel images={nodered} alt="Node-RED Flows" height="h-64" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Remote Node-RED Instance</h4>
            <p className="text-gray-700 mb-4">
              Distributed Node-RED deployment enabling edge processing and localized automation decisions.
            </p>
            <ImageCarousel images={remotered} alt="Remote Node-RED Setup" height="h-64" />
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Grafana Analytics</h4>
            <p className="text-gray-700 mb-4">
              Interactive dashboards visualizing real-time sensor data and historical trends for decision-making.
            </p>
            <ImageCarousel images={grafana} alt="Grafana Dashboard" height="h-64" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Data Flow & Integration" background="gray">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">End-to-End Process</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Sensor nodes collect environmental data continuously</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Data published to MQTT broker via wireless connection</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Node-RED subscribes and processes incoming messages</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Automation rules evaluate thresholds and trigger responses</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Data persisted in time-series database for analytics</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">Grafana displays real-time and historical insights</span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Impact">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Monitoring Efficiency</h4>
            <p className="text-gray-700">Reduced manual monitoring by 80% through automated threshold-based responses</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
            <p className="text-gray-700">Architecture supports 50+ sensor nodes with minimal latency degradation</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">System Reliability</h4>
            <p className="text-gray-700">99.5% uptime alert system with offline buffering and retry logic</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Engineering Challenges" background="gray">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Scalability with Node Count</h4>
            <p className="text-gray-700">Implemented connection pooling and message batching to handle high-frequency updates from multiple nodes without performance degradation.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <GitBranch className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Network Reliability</h4>
            <p className="text-gray-700">Built retry logic and offline buffering to ensure data delivery even in unstable network conditions typical of remote farming areas.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Data Integrity</h4>
            <p className="text-gray-700">Implemented transaction logs and audit trails to maintain data consistency and provide farmers with reliable historical records.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Future Improvements" background="gray">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Machine learning models for crop health prediction</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Weather integration for forecasting optimal conditions</span>
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
            </ul>
          </div>
        </div>
      </ProjectSection>

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