export default function Skills() {
  const skillCategories = [
    {
      name: 'IoT/Embedded',
      skills: ['ESP32', 'Arduino IDE', 'Sensors (Temperature sensors, Gas sensors, and many more)', 'I2C/Analog'],
    },
    {
      name: 'Mobile',
      skills: ['Flutter', 'Firebase', 'FCM Notifications', 'Real-time Sync'],
    },
    {
      name: 'Cloud & Backend',
      skills: ['Firebase Firestore', 'Cloud Functions', 'Google Compute Engine', 'Cloud Run', 'MQTT',
  'Node-RED', 'EMQX', 'InfluxDB', 'Grafana'],
    },
    {
      name: 'Data & ML',
      skills: ['Python', 'Flask', 'Scikit-learn', 'Random Forest', 'Data Analysis'],
    },
    {
      name: 'Web',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      name: 'Tools & Practices',
      skills: ['Git', 'REST APIs', 'System Design', 'Testing & Validation'],
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills & Technologies</h2>
          <p className="text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
