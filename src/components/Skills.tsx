import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

interface SkillCategory {
  name: string;
  skills: string[];
  /** 12-column bento span on desktop. */
  span: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: 'IoT/Embedded',
      skills: ['ESP32', 'Arduino IDE', 'Sensors (Temperature sensors, Gas sensors, and many more)', 'I2C/Analog'],
      span: 'lg:col-span-5',
    },
    {
      name: 'Cloud & Backend',
      skills: ['Firebase Firestore', 'Cloud Functions', 'Google Compute Engine', 'Cloud Run', 'MQTT',
  'Node-RED', 'EMQX', 'InfluxDB', 'Grafana'],
      span: 'lg:col-span-7',
    },
    {
      name: 'Data & ML',
      skills: ['Python', 'Flask', 'Scikit-learn', 'Random Forest', 'Data Analysis', 'K-Means', 'PCA', 'Elbow Method', 'Silhouette Score', 'PowerBI'],
      span: 'lg:col-span-7',
    },
    {
      name: 'Mobile',
      skills: ['Flutter', 'Firebase', 'FCM Notifications', 'Real-time Sync'],
      span: 'lg:col-span-5',
    },
    {
      name: 'Web',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      span: 'lg:col-span-5',
    },
    {
      name: 'Tools & Practices',
      skills: ['Git', 'REST APIs', 'System Design', 'Testing & Validation'],
      span: 'lg:col-span-7',
    },
  ];

  return (
    <section id="skills" className="relative border-y border-white/[0.05] bg-ink-900 py-28 md:py-36">
      <div className="mx-auto max-w-wrap px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          label="Capabilities"
          title="Skills & Technologies"
          sub="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {skillCategories.map((category, i) => (
            <Reveal key={category.name} delay={(i % 3) * 90} className={`md:col-span-1 ${category.span}`}>
              <TiltCard strength={3} className="h-full rounded-2xl">
                <div className="panel h-full p-7 transition-colors duration-500 hover:border-white/[0.12]">
                  <div className="mb-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-medium text-mist-50">
                      {category.name}
                    </h3>
                    <span className="font-mono text-[10px] tracking-widecaps text-mist-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
