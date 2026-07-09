import ImageCarousel from './ImageCarousel';

export default function DIOTProject() {
  const base = import.meta.env.BASE_URL;

  const overview = [
    `${base}images/diot/diagram.png`,
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">System Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A distributed IoT network designed for urban farming with real-time sensor monitoring, MQTT-based communication, Node-RED automation, and analytics dashboard for continuous environmental optimization.
        </p>
        <div className="bg-gray-50 rounded-xl p-8">
          <ImageCarousel images={overview} alt="System Architecture Diagram" height="h-96" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Technologies</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              MQTT Protocol
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Node-RED
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              EMQX Broker
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Grafana Analytics
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Core Capabilities</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              50+ Sensor Nodes
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Real-time Monitoring
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Automated Responses
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Alert System
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}