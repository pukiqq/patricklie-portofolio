import CaseHero from './case/CaseHero';

export default function ProjectHero() {
  return (
    <CaseHero
      title="Freshly"
      subtitle="Food Freshness Monitoring & Real-Time Spoilage Alerts"
      description="End-to-end IoT system (ESP32 → Firebase → Flutter) with rule-based notifications and an ML insight engine on Google Compute Engine."
      facts={[
        { label: 'Role', value: 'Solo' },
        { label: 'Timeline', value: 'Final Year Project' },
      ]}
      techStack={['ESP32', 'Flutter', 'Firebase', 'Cloud Functions', 'Compute Engine', 'Flask', 'Scikit-learn']}
      status="Completed"
      footnote="Repository available upon request"
    />
  );
}
