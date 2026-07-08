import { Github, Send, Zap, GitBranch, Database, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';
import DIOTProjectHero from './DIOTProjectHero.tsx';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';
import CaseCTA from './case/CaseCTA';
import { IconFeature, CheckItem, TickItem, FlowStep, MiniCard, InsightCard } from './case/blocks';

export default function DIOTProjectDetail() {
  const base = import.meta.env.BASE_URL;

  const diagram = [`${base}images/diot/diagram.png`];
  const arduinocode = [`${base}images/diot/arduinocode.png`];
  const emqx = [`${base}images/diot/emqx.png`];
  const grafana = [`${base}images/diot/grafana.png`];
  const mqtt = [`${base}images/diot/mqtt.png`];
  const nodered = [`${base}images/diot/nodered.png`];
  const remotered = [`${base}images/diot/remotered.png`];

  const architectureComponents = [
    {
      title: 'MQTT Broker',
      text: 'EMQX message broker handles reliable publish-subscribe communication between distributed sensor nodes and the backend orchestration layer.',
      images: mqtt,
      alt: 'MQTT Broker Configuration',
    },
    {
      title: 'EMQX Setup',
      text: 'Enterprise-grade MQTT broker deployment with clustering and persistence for high-availability messaging.',
      images: emqx,
      alt: 'EMQX Dashboard',
    },
    {
      title: 'Arduino Firmware',
      text: 'Sensor node code handling data collection from multiple sensors and MQTT publication.',
      images: arduinocode,
      alt: 'Arduino Firmware Code',
    },
    {
      title: 'Node-RED Orchestration',
      text: 'Visual automation workflows processing sensor data and triggering intelligent responses based on defined rules.',
      images: nodered,
      alt: 'Node-RED Flows',
    },
    {
      title: 'Remote Node-RED Instance',
      text: 'Distributed Node-RED deployment enabling edge processing and localized automation decisions.',
      images: remotered,
      alt: 'Remote Node-RED Setup',
    },
    {
      title: 'Grafana Analytics',
      text: 'Interactive dashboards visualizing real-time sensor data and historical trends for decision-making.',
      images: grafana,
      alt: 'Grafana Dashboard',
    },
  ];

  return (
    <div>
      <DIOTProjectHero />

      <ProjectSection title="Why DIOT?" background="gray">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            Urban farmers need continuous monitoring across multiple growing zones without constant manual oversight. Environmental conditions vary by location, and responding to threshold violations requires reliable automation. DIOT bridges this gap with distributed sensors, intelligent rules, and real-time insights.
          </p>
          <div className="panel space-y-4 p-8">
            <div className="flex items-center gap-3 text-clay">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span>Manual checks → Late responses → Crop loss</span>
            </div>
            <div className="text-center font-mono text-xs uppercase tracking-widecaps text-mist-500">vs</div>
            <div className="flex items-center gap-3 text-sage">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>Continuous monitoring → Instant automation → Optimized yield</span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="What I Built">
        <div className="mb-12 space-y-7">
          <IconFeature icon={<Zap className="h-5 w-5" />} title="Distributed Sensor Network">
            50+ nodes monitoring environmental conditions across growing zones
          </IconFeature>
          <IconFeature icon={<GitBranch className="h-5 w-5" />} title="MQTT Communication Layer">
            Reliable publish-subscribe messaging for real-time data flow
          </IconFeature>
          <IconFeature icon={<TrendingUp className="h-5 w-5" />} title="Node-RED Automation Engine">
            Visual workflows for threshold-based automation and responses
          </IconFeature>
          <IconFeature icon={<Database className="h-5 w-5" />} title="Time-Series Database">
            Persistent storage for historical trends and pattern analysis
          </IconFeature>
          <IconFeature icon={<TrendingUp className="h-5 w-5" />} title="Grafana Analytics Dashboard">
            Interactive visualizations for real-time monitoring and insights
          </IconFeature>
        </div>

        <div className="panel-quiet p-8">
          <h3 className="mb-5 font-display text-xl font-medium text-mist-50">System Architecture</h3>
          <ImageCarousel images={diagram} alt="System Architecture Diagram" height="h-96" />
        </div>
      </ProjectSection>

      <ProjectSection title="Core Components" background="gray">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-8">
            <h3 className="mb-5 font-display text-xl font-medium text-mist-50">Hardware & Sensors</h3>
            <ul className="space-y-3.5">
              <CheckItem>Arduino-based sensor nodes with environmental monitoring</CheckItem>
              <CheckItem>Temperature, humidity, light, and soil moisture sensors</CheckItem>
              <CheckItem>Wireless connectivity via MQTT protocol</CheckItem>
            </ul>
          </div>

          <div className="panel p-8">
            <h3 className="mb-5 font-display text-xl font-medium text-mist-50">Automation & Alerting</h3>
            <ul className="space-y-3.5">
              <CheckItem>Node-RED workflows for intelligent automation rules</CheckItem>
              <CheckItem>Real-time alerts for threshold violations</CheckItem>
              <CheckItem>Scalable architecture supporting 50+ simultaneous nodes</CheckItem>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Architecture Components">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {architectureComponents.map((component) => (
            <div key={component.title} className="panel-quiet p-7">
              <h4 className="font-display text-lg font-medium text-mist-50">{component.title}</h4>
              <p className="mb-5 mt-2 text-sm leading-relaxed text-mist-400">{component.text}</p>
              <ImageCarousel images={component.images} alt={component.alt} height="h-64" />
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Data Flow & Integration" background="gray">
        <div className="panel p-8">
          <h4 className="mb-5 font-medium text-mist-50">End-to-End Process</h4>
          <div className="space-y-3.5">
            <FlowStep index={1}>Sensor nodes collect environmental data continuously</FlowStep>
            <FlowStep index={2}>Data published to MQTT broker via wireless connection</FlowStep>
            <FlowStep index={3}>Node-RED subscribes and processes incoming messages</FlowStep>
            <FlowStep index={4}>Automation rules evaluate thresholds and trigger responses</FlowStep>
            <FlowStep index={5}>Data persisted in time-series database for analytics</FlowStep>
            <FlowStep index={6}>Grafana displays real-time and historical insights</FlowStep>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Impact">
        <div className="grid gap-4 md:grid-cols-3">
          <MiniCard title="Monitoring Efficiency">
            Reduced manual monitoring by 80% through automated threshold-based responses
          </MiniCard>
          <MiniCard title="Scalability">
            Architecture supports 50+ sensor nodes with minimal latency degradation
          </MiniCard>
          <MiniCard title="System Reliability">
            99.5% uptime alert system with offline buffering and retry logic
          </MiniCard>
        </div>
      </ProjectSection>

      <ProjectSection title="Engineering Challenges" background="gray">
        <div className="grid gap-4 md:grid-cols-3">
          <InsightCard icon={<Zap className="h-5 w-5" />} title="Scalability with Node Count">
            Implemented connection pooling and message batching to handle high-frequency updates from multiple nodes without performance degradation.
          </InsightCard>
          <InsightCard icon={<GitBranch className="h-5 w-5" />} title="Network Reliability">
            Built retry logic and offline buffering to ensure data delivery even in unstable network conditions typical of remote farming areas.
          </InsightCard>
          <InsightCard icon={<Database className="h-5 w-5" />} title="Data Integrity">
            Implemented transaction logs and audit trails to maintain data consistency and provide farmers with reliable historical records.
          </InsightCard>
        </div>
      </ProjectSection>

      <ProjectSection title="Future Improvements">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">Predictive Analytics</h4>
            <ul className="space-y-3">
              <TickItem>Machine learning models for crop health prediction</TickItem>
              <TickItem>Weather integration for forecasting optimal conditions</TickItem>
            </ul>
          </div>
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">User Experience</h4>
            <ul className="space-y-3">
              <TickItem>Mobile app for on-the-go monitoring</TickItem>
              <TickItem>Multi-farm management dashboard</TickItem>
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
