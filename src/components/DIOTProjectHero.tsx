import CaseHero from './case/CaseHero';

export default function DIOTProjectHero() {
  return (
    <CaseHero
      title="DIOT Urban Farming"
      subtitle="Smart Monitoring & Automation Pipeline"
      description="Scalable IoT architecture for urban farming using MQTT messaging, Node-RED orchestration, automation rules, data logging, and dashboard visualization for real-time monitoring and control."
      facts={[
        { label: 'Role', value: 'Individual / Assignment' },
        { label: 'Timeline', value: 'DIOT Assignment' },
      ]}
      techStack={['ESP32', 'MQTT', 'EMQX', 'Node-RED', 'InfluxDB', 'Grafana', 'Automation Rules']}
      status="Completed"
      footnote="Repository available upon request"
    />
  );
}
