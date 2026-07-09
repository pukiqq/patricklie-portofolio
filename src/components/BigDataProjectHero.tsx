import CaseHero from './case/CaseHero';

export default function BigDataProjectHero() {
  return (
    <CaseHero
      title="Chronic Disease Predictive Analytics"
      subtitle="Patient Segmentation Using K-Means Clustering"
      description="Unsupervised machine learning approach to segment diabetes patient profiles using demographic and symptom data, enabling targeted early intervention strategies through data-driven patient grouping."
      facts={[
        { label: 'Role', value: 'Individual Contribution' },
        { label: 'Area', value: 'Unsupervised ML / Clustering' },
      ]}
      techStack={['Python', 'PowerBI', 'Pandas', 'Scikit-learn', 'Matplotlib', 'PCA', 'K-Means']}
      status="Completed"
    />
  );
}
