import { Github, Send, Brain, BarChart3, Database, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import BigDataProjectHero from './BigDataProjectHero';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';
import CaseCTA from './case/CaseCTA';
import { IconFeature, TickItem, MiniCard, InsightCard } from './case/blocks';

export default function BigDataProjectDetail() {
  const base = import.meta.env.BASE_URL;

  const elbowMethod = [`${base}images/bda/elbow.png`];
  const silhouetteScore = [`${base}images/bda/silhouette.png`];
  const pcaVisualization = [`${base}images/bda/pca.png`];
  const clusterProfiles = [`${base}images/bda/cluster-profiles.png`];
  const positiveDistribution = [`${base}images/bda/positive-distribution.png`];

  return (
    <div>
      <BigDataProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-mist-300">
            Healthcare datasets contain complex, mixed patterns that are difficult to interpret directly. Patient populations are inherently heterogeneous, with varying demographic characteristics and symptom profiles. Without proper segmentation, one-size-fits-all interventions miss opportunities for targeted early screening and personalized follow-up strategies.
          </p>
          <div className="panel space-y-3 p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Challenge:</strong> Mixed patient patterns unclear
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Solution:</strong> Cluster-based segmentation
              </span>
            </div>
            <div className="pl-2 font-mono text-mist-500">↓</div>
            <div className="flex items-start gap-3">
              <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper-300" />
              <span className="text-mist-300">
                <strong className="text-mist-50">Outcome:</strong> Targeted interventions
              </span>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="My Contribution">
        <div className="space-y-7">
          <IconFeature icon={<Database className="h-5 w-5" />} title="Data Preparation & Feature Selection">
            Selected and scaled demographic and core symptom features relevant to diabetes risk profiling for clustering analysis
          </IconFeature>
          <IconFeature icon={<BarChart3 className="h-5 w-5" />} title="Optimal Cluster Selection">
            Applied Elbow Method and Silhouette Score analysis to identify the ideal number of clusters with minimal loss and maximum separation quality
          </IconFeature>
          <IconFeature icon={<Brain className="h-5 w-5" />} title="K-Means Clustering & Profiling">
            Executed K-Means algorithm and generated detailed cluster profiles summarizing key characteristics and patterns within each patient segment
          </IconFeature>
          <IconFeature icon={<TrendingUp className="h-5 w-5" />} title="Stakeholder-Ready Visualizations">
            Delivered PCA visualizations, cluster profile tables, and distribution charts to communicate insights clearly to non-technical stakeholders
          </IconFeature>
        </div>
      </ProjectSection>

      <ProjectSection title="Approach & Methodology" background="gray">
        <div className="space-y-10">
          <div>
            <h3 className="mb-4 font-display text-xl font-medium text-mist-50">
              <span className="mr-3 font-mono text-sm text-copper-400">1.</span>
              Data Preparation & Feature Scaling
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-mist-300">
              Selected demographic and core symptom features most relevant to diabetes risk profiling. Applied feature scaling (standardization) to normalize magnitudes, which is critical for distance-based algorithms like K-Means that rely on Euclidean distance calculations.
            </p>
            <div className="rounded-2xl border border-copper-500/20 bg-copper-500/[0.06] p-6">
              <p className="leading-relaxed text-mist-200">
                <strong className="text-copper-300">Why it matters:</strong> Without scaling, features with larger ranges would disproportionately dominate the clustering, leading to biased and unreliable results.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-xl font-medium text-mist-50">
              <span className="mr-3 font-mono text-sm text-copper-400">2.</span>
              Optimal Cluster Selection
            </h3>
            <p className="mb-5 text-lg leading-relaxed text-mist-300">
              Evaluated cluster quality using two complementary metrics:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="panel p-7">
                <h4 className="mb-3 font-medium text-mist-50">Elbow Method (WCSS)</h4>
                <p className="text-sm leading-relaxed text-mist-400">
                  Plots within-cluster sum of squares against the number of clusters to identify the "elbow point" where diminishing returns occur, indicating optimal K.
                </p>
              </div>
              <div className="panel p-7">
                <h4 className="mb-3 font-medium text-mist-50">Silhouette Score</h4>
                <p className="text-sm leading-relaxed text-mist-400">
                  Measures how similar each point is to its own cluster compared to other clusters. Ranges from -1 to 1, with higher values indicating better-separated, more cohesive clusters.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-xl font-medium text-mist-50">
              <span className="mr-3 font-mono text-sm text-copper-400">3.</span>
              K-Means Execution & Cluster Profiling
            </h3>
            <p className="text-lg leading-relaxed text-mist-300">
              Trained K-Means with the selected optimal K value. For each cluster, computed aggregate statistics (mean, median, distribution) across all features to generate interpretable cluster profiles. These profiles enable stakeholders to understand the characteristics of each patient segment.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-xl font-medium text-mist-50">
              <span className="mr-3 font-mono text-sm text-copper-400">4.</span>
              Dimensionality Reduction for Visualization
            </h3>
            <p className="text-lg leading-relaxed text-mist-300">
              Applied Principal Component Analysis (PCA) to reduce the high-dimensional feature space to 2 dimensions for visualization, preserving as much variance as possible while making cluster separation visible and intuitive.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Deliverables">
        <div className="space-y-10">
          <div className="panel-quiet p-8">
            <h3 className="mb-6 font-display text-xl font-medium text-mist-50">Key Outputs</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <MiniCard title="Cluster Assignments">
                Patient population segmented into distinct groups based on demographic and symptom similarity
              </MiniCard>
              <MiniCard title="Optimal K Selection">
                Elbow Method and Silhouette Score analysis confirmed the ideal number of clusters
              </MiniCard>
              <MiniCard title="Cluster Profiles">
                Summary table of key characteristics (demographics, symptoms) for each patient segment
              </MiniCard>
              <MiniCard title="Risk Distribution">
                Chart showing diabetes-positive distribution across clusters to illustrate practical segment meaning
              </MiniCard>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xl font-medium text-mist-50">Cluster Optimization Analysis</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <figure className="panel overflow-hidden !p-0">
                <figcaption className="border-b border-white/[0.07] px-6 py-4 font-mono text-xs uppercase tracking-wider text-copper-300">
                  Elbow Method Plot
                </figcaption>
                <div className="p-4">
                  <ImageCarousel images={elbowMethod} alt="Elbow Method - WCSS vs K" height="h-80" />
                </div>
              </figure>
              <figure className="panel overflow-hidden !p-0">
                <figcaption className="border-b border-white/[0.07] px-6 py-4 font-mono text-xs uppercase tracking-wider text-copper-300">
                  Silhouette Score Plot
                </figcaption>
                <div className="p-4">
                  <ImageCarousel images={silhouetteScore} alt="Silhouette Score vs K" height="h-80" />
                </div>
              </figure>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xl font-medium text-mist-50">Cluster Visualization & Profiling</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <figure className="panel overflow-hidden !p-0">
                <figcaption className="border-b border-white/[0.07] px-6 py-4 font-mono text-xs uppercase tracking-wider text-copper-300">
                  PCA Cluster Visualization
                </figcaption>
                <div className="p-4">
                  <ImageCarousel images={pcaVisualization} alt="PCA 2D Cluster Visualization" height="h-80" />
                </div>
              </figure>
              <figure className="panel overflow-hidden !p-0">
                <figcaption className="border-b border-white/[0.07] px-6 py-4 font-mono text-xs uppercase tracking-wider text-copper-300">
                  Cluster Profiling Table
                </figcaption>
                <div className="p-4">
                  <ImageCarousel images={clusterProfiles} alt="Cluster Profile Summary" height="h-80" />
                </div>
              </figure>
            </div>
          </div>

          <figure className="panel overflow-hidden !p-0">
            <figcaption className="border-b border-white/[0.07] px-6 py-4 font-mono text-xs uppercase tracking-wider text-copper-300">
              Diabetes-Positive Distribution by Cluster
            </figcaption>
            <div className="p-6">
              <ImageCarousel images={positiveDistribution} alt="Distribution Chart" height="h-80" />
            </div>
          </figure>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Insights" background="gray">
        <div className="grid gap-4 md:grid-cols-3">
          <InsightCard icon={<Brain className="h-5 w-5" />} title="Segment-Specific Patterns">
            Each cluster exhibits distinct demographic and symptom signatures, validating the effectiveness of clustering for patient segmentation.
          </InsightCard>
          <InsightCard icon={<TrendingUp className="h-5 w-5" />} title="Risk Stratification">
            Diabetes prevalence varies meaningfully across clusters, enabling clinicians to prioritize high-risk groups for targeted intervention.
          </InsightCard>
          <InsightCard icon={<BarChart3 className="h-5 w-5" />} title="Actionable Insights">
            Clear, interpretable profiles support clinical decision-making and evidence-based screening protocols tailored to each segment.
          </InsightCard>
        </div>
      </ProjectSection>

      <ProjectSection title="What I'd Improve Next">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">Clinical Validation</h4>
            <ul className="space-y-3">
              <TickItem>Validate cluster usefulness with clinical constraints</TickItem>
              <TickItem>Incorporate domain expert review for external validity</TickItem>
            </ul>
          </div>
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">Algorithm Comparison</h4>
            <ul className="space-y-3">
              <TickItem>Compare K-Means with Gaussian Mixture Models</TickItem>
              <TickItem>Test Agglomerative hierarchical clustering</TickItem>
            </ul>
          </div>
          <div className="panel p-7">
            <h4 className="mb-4 font-medium text-mist-50">Robustness & Interpretability</h4>
            <ul className="space-y-3">
              <TickItem>Advanced feature selection methods and sensitivity analysis</TickItem>
              <TickItem>Stability testing and robustness validation</TickItem>
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
