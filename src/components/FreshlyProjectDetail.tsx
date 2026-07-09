import { Github, Send, AlertCircle, CheckCircle, Database, Cpu, Cloud, Brain, TestTube, TrendingUp } from 'lucide-react';
import FreshlyProjectHero from './FreshlyProjectHero';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';
import CaseCTA from './case/CaseCTA';
import { IconFeature, CheckItem, TickItem, FlowStep, MiniCard, InsightCard, Code } from './case/blocks';

export default function FreshlyProjectDetail() {
  const base = import.meta.env.BASE_URL;
  const higharchitecture = [`${base}images/freshly/higharchitecture.png`];
  const homepage = [
    `${base}images/freshly/homepage1.png`,
    `${base}images/freshly/homepage2.png`,
    `${base}images/freshly/homepage3.png`,
  ];
  const historypage = [
    `${base}images/freshly/historypage1.png`,
    `${base}images/freshly/historypage2.png`,
  ];
  const notificationpage = [`${base}images/freshly/notificationpage.png`];
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
  const airqualitygraph = [`${base}images/freshly/airqualitygraph.png`];
  const deploymentdiagram = [`${base}images/freshly/deploymentdiagram.png`];
  const firestorecollection = [`${base}images/freshly/firestorecollection.png`];
  const prototype = [`${base}images/freshly/prototype.png`];

  const screenCarousels = [
    { label: 'Home Dashboard', images: homepage },
    { label: 'Historical Charts', images: historypage },
    { label: 'Alert Rules', images: alertpage },
    { label: 'Notifications', images: notificationpage },
    { label: 'Visualizations', images: visualizationpage },
    { label: 'Settings', images: settingpage },
  ];

  const validationRows = [
    { test: 'Sensor validation', expected: 'Accurate readings within tolerance' },
    { test: 'End-to-end data flow', expected: 'Consistent data from device to app' },
    { test: 'Alert threshold logic', expected: 'Triggers at correct values' },
    { test: 'Rate limiting (10 min)', expected: 'No spam notifications' },
    { test: 'ML model evaluation', expected: 'High accuracy on test split' },
  ];

  return (
    <div>
      <FreshlyProjectHero />

      <ProjectSection title="Why Freshly?" background="gray">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            Food waste often happens because fridge conditions aren't monitored continuously and spoilage indicators are noticed too late. Freshly monitors environmental signals in real time and sends timely alerts so users can act earlier.
          </p>
          <div className="panel space-y-4 p-8">
            <div className="flex items-center gap-3 text-clay">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span>Manual checking → Too late → Waste</span>
            </div>
            <div className="text-center font-mono text-xs uppercase tracking-widecaps text-mist-500">vs</div>
            <div className="flex items-center gap-3 text-sage">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>Continuous monitoring → Early alert → Action</span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="What I Built">
        <div className="mb-12 space-y-7">
          <IconFeature icon={<Cpu className="h-5 w-5" />} title="ESP32 Sensor Hub">
            Collecting fridge environment readings in real-time
          </IconFeature>
          <IconFeature icon={<Database className="h-5 w-5" />} title="Real-time Sync to Firebase">
            Seamless data flow to Firestore for instant access
          </IconFeature>
          <IconFeature icon={<TrendingUp className="h-5 w-5" />} title="Flutter App Dashboard">
            Live dashboard with historical trends visualization
          </IconFeature>
          <IconFeature icon={<Cloud className="h-5 w-5" />} title="Cloud Functions Alerting">
            Rule-based alerts with anti-spam rate limiting
          </IconFeature>
          <IconFeature icon={<Brain className="h-5 w-5" />} title="ML Insight Engine">
            Flask + Scikit-learn on Compute Engine VM for advanced analysis
          </IconFeature>
        </div>

        <div className="panel-quiet p-8">
          <h3 className="mb-5 font-display text-xl font-medium text-mist-50">System Architecture</h3>
          <ImageCarousel images={higharchitecture} alt="System Architecture Diagram" height="h-96" />
        </div>
      </ProjectSection>

      <ProjectSection title="Core Features" background="gray">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-8">
            <h3 className="mb-5 font-display text-xl font-medium text-mist-50">Real-time Monitoring</h3>
            <ul className="space-y-3.5">
              <CheckItem>Live sensor dashboard (temperature/humidity/gas-related indicators)</CheckItem>
              <CheckItem>Push notifications when thresholds are exceeded</CheckItem>
              <CheckItem>10-minute rate limiting to prevent spam</CheckItem>
            </ul>
          </div>

          <div className="panel p-8">
            <h3 className="mb-5 font-display text-xl font-medium text-mist-50">Smart Insights</h3>
            <ul className="space-y-3.5">
              <CheckItem>Spoilage-risk estimation using ML model (Random Forest)</CheckItem>
              <CheckItem>Historical view of readings and alerts</CheckItem>
              <CheckItem>Pattern tracking for better food management</CheckItem>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {screenCarousels.map((item) => (
            <figure key={item.label} className="shell">
              <div className="panel-quiet overflow-hidden !p-2">
                <ImageCarousel images={item.images} alt={item.label} height="h-80 md:h-[420px] lg:h-[520px]" />
              </div>
              <figcaption className="px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-wider text-mist-400">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="IoT Device & Sensors">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg leading-relaxed text-mist-300">
              ESP32-based sensor hub programmed via Arduino IDE with multiple sensors integrated via I2C and analog input.
            </p>
            <ul className="space-y-3.5">
              <TickItem>
                <strong className="text-mist-50">Sensors:</strong> BME680, BH1750, MQ-135
              </TickItem>
              <TickItem>
                <strong className="text-mist-50">Connection:</strong> I2C and analog input interfaces
              </TickItem>
              <TickItem>
                <strong className="text-mist-50">Data transmission:</strong> Wi-Fi to Firestore
              </TickItem>
            </ul>
          </div>
          <div className="space-y-4">
            <ImageCarousel images={prototype} alt="Device Prototype Photos" height="h-80" />
            <ImageCarousel images={higharchitecture} alt="Block Diagram" height="h-80 md:h-[420px] lg:h-[520px]" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Backend & Alerting" background="gray">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            Firestore stores live readings and user-defined alert rules. Cloud Functions evaluate rules against incoming sensor readings, apply a 10-minute rate limit to prevent spam, send push notifications via FCM, and log alerts under <Code>users/{'{userId}'}/alerts</Code> for in-app visibility.
          </p>
          <div className="space-y-4">
            <div className="panel p-7">
              <h4 className="mb-4 font-medium text-mist-50">Data Flow</h4>
              <div className="space-y-3">
                <FlowStep index={1}>New sensor data arrives</FlowStep>
                <FlowStep index={2}>Function trigger evaluates rules</FlowStep>
                <FlowStep index={3}>Rate limit check (10 min)</FlowStep>
                <FlowStep index={4}>Send FCM notification</FlowStep>
                <FlowStep index={5}>Write alert log to Firestore</FlowStep>
              </div>
            </div>
            <ImageCarousel images={firestorecollection} alt="Firestore Collections Structure" height="h-80" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="ML Spoilage Risk Model">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <MiniCard title="Model">Random Forest classifier (Scikit-learn)</MiniCard>
          <MiniCard title="Dataset">Controlled apple spoilage (~12,000 data points)</MiniCard>
          <MiniCard title="Accuracy">&gt;99% (controlled dataset)</MiniCard>
        </div>

        <div className="panel-quiet mb-8 p-8">
          <h4 className="mb-4 font-medium text-mist-50">Features Used</h4>
          <div className="flex flex-wrap gap-2">
            {['Temperature', 'Humidity', 'IAQ', 'TVOC', 'Ammonia PPM'].map((feature) => (
              <span key={feature} className="chip">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ImageCarousel images={airqualitygraph} alt="Confusion Matrix / Accuracy Chart" height="h-80" />
          <ImageCarousel images={deploymentdiagram} alt="Deployment Diagram" height="h-80" />
        </div>

        <div className="mt-6 rounded-2xl border border-copper-500/20 bg-copper-500/[0.06] p-6">
          <p className="leading-relaxed text-mist-200">
            <strong className="text-copper-300">Deployment:</strong> Served via Flask on a Compute Engine VM (stateful 24/7), separated from device/app for reliability and independent iteration.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Validation" background="gray">
        <div className="panel overflow-hidden !p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widecaps text-mist-400">Test Case</th>
                  <th className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widecaps text-mist-400">Expected Result</th>
                  <th className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widecaps text-mist-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {validationRows.map((row) => (
                  <tr key={row.test} className="transition-colors duration-300 hover:bg-white/[0.02]">
                    <td className="px-6 py-4 text-mist-50">{row.test}</td>
                    <td className="px-6 py-4 text-mist-400">{row.expected}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-sage/25 bg-sage/10 px-3 py-1 font-mono text-xs text-sage">
                        <span className="h-1 w-1 rounded-full bg-sage" aria-hidden="true" />
                        Passed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Engineering Challenges">
        <div className="grid gap-4 md:grid-cols-3">
          <InsightCard icon={<AlertCircle className="h-5 w-5" />} title="Notification Spam">
            Prevented notification spam by adding rate limiting in Cloud Functions.
          </InsightCard>
          <InsightCard icon={<Cloud className="h-5 w-5" />} title="ML Service Separation">
            Separated ML inference into a VM-based service for reliability and independent iteration.
          </InsightCard>
          <InsightCard icon={<TestTube className="h-5 w-5" />} title="Sensor Integration">
            Integrated mixed I2C + analog sensors and ensured stable readings before deployment.
          </InsightCard>
        </div>
      </ProjectSection>

      <ProjectSection title="Next Steps" background="gray">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">Data & Model Improvements</h4>
            <ul className="space-y-3">
              <TickItem>Expand dataset across multiple food types</TickItem>
              <TickItem>Improve generalization with varied storage conditions</TickItem>
            </ul>
          </div>
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">User Experience</h4>
            <ul className="space-y-3">
              <TickItem>Add user personalization and adaptive thresholds</TickItem>
              <TickItem>Optimize device power and enclosure design</TickItem>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <CaseCTA
        title="Interested in the implementation details?"
        sub="Let's discuss this project and explore opportunities to work together."
        links={[
          { label: 'Contact Me', href: 'mailto:patricklie995@gmail.com', icon: <Send className="h-4 w-4" /> },
          {
            label: 'Repository',
            href: 'https://github.com/PatrickLie-dev',
            icon: <Github className="h-4 w-4" />,
            external: true,
          },
        ]}
        footnote="Repository available upon request"
      />
    </div>
  );
}
