import { ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectHero from './ProjectHero';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';
import { AlertCircle, CheckCircle, Database, Cpu, Cloud, Brain, TestTube, TrendingUp } from 'lucide-react';

export default function FreshlyProjectDetail() {
  const base = import.meta.env.BASE_URL;
  const higharchitecture = [
  `${base}images/freshly/higharchitecture.png`,
];
  const homepage = [
  `${base}images/freshly/homepage1.png`,
  `${base}images/freshly/homepage2.png`,
  `${base}images/freshly/homepage3.png`,
];
  const historypage = [
  `${base}images/freshly/historypage1.png`,
  `${base}images/freshly/historypage2.png`,
];
  const notificationpage = [
  `${base}images/freshly/notificationpage.png`,
];
  const alertpage = [
  `${base}images/freshly/alertpage1.png`,
  `${base}images/freshly/alertpage2.png`,
  `${base}images/freshly/alertpage3.png`,
  `${base}images/freshly/alertpage4.png`,
];
  const settingpage = [
  `${base}images/freshly/settingpage.png`,
  `${base}images/freshly/settingpage1.png`,
  `${base}images/freshly/settingpage2.png`,
  `${base}images/freshly/settingpage3.png`,
  `${base}images/freshly/settingpage4.png`,
];
  const visualizationpage = [
  `${base}images/freshly/visualizationpage1.png`,
  `${base}images/freshly/visualizationpage2.png`,
  `${base}images/freshly/visualizationpage3.png`,
];
  const airqualitygraph = [
  `${base}images/freshly/airqualitygraph.png`,
];
  const deploymentdiagram = [
  `${base}images/freshly/deploymentdiagram.png`,
];
  const firestorecollection = [
  `${base}images/freshly/firestorecollection.png`,
];
  const prototype = [
  `${base}images/freshly/prototype.png`,
];
  const sensorbox = [
  `${base}images/freshly/sensorbox.png`,
];
  const screenCarousels = [
  { label: 'Home Dashboard', images: homepage },
  { label: 'Historical Charts', images: historypage },
  { label: 'Alert Rules', images: alertpage },
  { label: 'Notifications', images: notificationpage },
  { label: 'Visualizations', images: visualizationpage }, 
  { label: 'Settings', images: settingpage },
];
  
  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
      </div>

      <ProjectHero />

      <ProjectSection title="Why Freshly?" background="gray">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Food waste often happens because fridge conditions aren't monitored continuously and spoilage indicators are noticed too late. Freshly monitors environmental signals in real time and sends timely alerts so users can act earlier.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-center text-red-600">
                <AlertCircle className="h-6 w-6 mr-3" />
                <span>Manual checking → Too late → Waste</span>
              </div>
              <div className="text-center text-gray-400">VS</div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span>Continuous monitoring → Early alert → Action</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="What I Built">
        <div className="space-y-6 mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Cpu className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">ESP32 Sensor Hub</h3>
              <p className="text-gray-600">Collecting fridge environment readings in real-time</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Real-time Sync to Firebase</h3>
              <p className="text-gray-600">Seamless data flow to Firestore for instant access</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Flutter App Dashboard</h3>
              <p className="text-gray-600">Live dashboard with historical trends visualization</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Cloud className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Cloud Functions Alerting</h3>
              <p className="text-gray-600">Rule-based alerts with anti-spam rate limiting</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">ML Insight Engine</h3>
              <p className="text-gray-600">Flask + Scikit-learn on Compute Engine VM for advanced analysis</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">System Architecture</h3>
          <ImageCarousel images={[higharchitecture]} alt="System Architecture Diagram" height="h-96" />
        </div>
      </ProjectSection>

      <ProjectSection title="Core Features" background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Live sensor dashboard (temperature/humidity/gas-related indicators)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Push notifications when thresholds are exceeded</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">10-minute rate limiting to prevent spam</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Spoilage-risk estimation using ML model (Random Forest)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Historical view of readings and alerts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pattern tracking for better food management</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
  {screenCarousels.map((item) => (
    <div key={item.label} className="bg-white rounded-lg shadow-md overflow-hidden p-2">
      <ImageCarousel images={item.images} alt={item.label} height="h-80 md:h-[420px] lg:h-[520px]" />
    </div>
  ))}
        </div>
      </ProjectSection>
''
      <ProjectSection title="IoT Device & Sensors">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              ESP32-based sensor hub programmed via Arduino IDE with multiple sensors integrated via I2C and analog input.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700"><strong>Sensors:</strong> BME680, BH1750, MQ-135</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700"><strong>Connection:</strong> I2C and analog input interfaces</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700"><strong>Data transmission:</strong> Wi-Fi to Firestore</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageCarousel images={[prototype]} alt="Device Prototype Photos" height="h-80" />
            <ImageCarousel images={[higharchitecture]} alt="Block Diagram" height="h-80" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Backend & Alerting" background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Firestore stores live readings and user-defined alert rules. Cloud Functions evaluate rules against incoming sensor readings, apply a 10-minute rate limit to prevent spam, send push notifications via FCM, and log alerts under <code className="bg-gray-200 px-2 py-1 rounded">users/{'{userId}'}/alerts</code> for in-app visibility.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Data Flow</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">New sensor data arrives</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Function trigger evaluates rules</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Rate limit check (10 min)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Send FCM notification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Write alert log to Firestore</span>
                </div>
              </div>
            </div>
            <ImageCarousel images={[firestorecollection]} alt="Firestore Collections Structure" height="h-80" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="ML Spoilage Risk Model">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Model</h4>
            <p className="text-gray-700">Random Forest classifier (Scikit-learn)</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Dataset</h4>
            <p className="text-gray-700">Controlled apple spoilage (~12,000 data points)</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
            <p className="text-gray-700">&gt;99% (controlled dataset)</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">Features Used</h4>
          <div className="flex flex-wrap gap-3">
            {['Temperature', 'Humidity', 'IAQ', 'TVOC', 'Ammonia PPM'].map((feature) => (
              <span key={feature} className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ImageCarousel images={[airqualitygraph]} alt="Confusion Matrix / Accuracy Chart" height="h-80" />
          <ImageCarousel images={[deploymentdiagram]} alt="Deployment Diagram" height="h-80" />
        </div>

        <div className="mt-6 p-6 bg-blue-50 rounded-xl">
          <p className="text-gray-700">
            <strong>Deployment:</strong> Served via Flask on a Compute Engine VM (stateful 24/7), separated from device/app for reliability and independent iteration.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Validation" background="gray">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Test Case</th>
                <th className="px-6 py-4 text-left">Expected Result</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Sensor validation</td>
                <td className="px-6 py-4">Accurate readings within tolerance</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Passed</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">End-to-end data flow</td>
                <td className="px-6 py-4">Consistent data from device to app</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Passed</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Alert threshold logic</td>
                <td className="px-6 py-4">Triggers at correct values</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Passed</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Rate limiting (10 min)</td>
                <td className="px-6 py-4">No spam notifications</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Passed</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">ML model evaluation</td>
                <td className="px-6 py-4">High accuracy on test split</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Passed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ProjectSection>

      <ProjectSection title="Engineering Challenges">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Notification Spam</h4>
            <p className="text-gray-700">Prevented notification spam by adding rate limiting in Cloud Functions.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">ML Service Separation</h4>
            <p className="text-gray-700">Separated ML inference into a VM-based service for reliability and independent iteration.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <TestTube className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Sensor Integration</h4>
            <p className="text-gray-700">Integrated mixed I2C + analog sensors and ensured stable readings before deployment.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Next Steps" background="gray">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3">Data & Model Improvements</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Expand dataset across multiple food types</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Improve generalization with varied storage conditions</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3">User Experience</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Add user personalization and adaptive thresholds</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Optimize device power and enclosure design</span>
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
