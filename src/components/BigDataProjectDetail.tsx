import { ArrowLeft, Github, Brain, BarChart3, Database, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BigDataProjectHero from './BigDataProjectHero';
import ProjectSection from './ProjectSection';
import ImageCarousel from './ImageCarousel';

export default function BigDataProjectDetail() {
  const base = import.meta.env.BASE_URL;

  const elbowMethod = [
    `${base}images/bda/elbow.png`,
  ];
  const silhouetteScore = [
    `${base}images/bda/silhouette.png`,
  ];
  const pcaVisualization = [
    `${base}images/bda/pca.png`,
  ];
  const clusterProfiles = [
    `${base}images/bda/cluster-profiles.png`,
  ];
  const positiveDistribution = [
    `${base}images/bda/positive-distribution.png`,
  ];

  return (
    <div className="bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
      </div>

      <BigDataProjectHero />

      <ProjectSection title="The Problem" background="gray">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Healthcare datasets contain complex, mixed patterns that are difficult to interpret directly. Patient populations are inherently heterogeneous, with varying demographic characteristics and symptom profiles. Without proper segmentation, one-size-fits-all interventions miss opportunities for targeted early screening and personalized follow-up strategies.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Challenge:</strong> Mixed patient patterns unclear</span>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Solution:</strong> Cluster-based segmentation</span>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Outcome:</strong> Targeted interventions</span>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="My Contribution">
        <div className="space-y-6 mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Data Preparation & Feature Selection</h3>
              <p className="text-gray-600">Selected and scaled demographic and core symptom features relevant to diabetes risk profiling for clustering analysis</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Optimal Cluster Selection</h3>
              <p className="text-gray-600">Applied Elbow Method and Silhouette Score analysis to identify the ideal number of clusters with minimal loss and maximum separation quality</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">K-Means Clustering & Profiling</h3>
              <p className="text-gray-600">Executed K-Means algorithm and generated detailed cluster profiles summarizing key characteristics and patterns within each patient segment</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Stakeholder-Ready Visualizations</h3>
              <p className="text-gray-600">Delivered PCA visualizations, cluster profile tables, and distribution charts to communicate insights clearly to non-technical stakeholders</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Approach & Methodology" background="gray">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Preparation & Feature Scaling</h3>
            <p className="text-lg text-gray-700 mb-4">
              Selected demographic and core symptom features most relevant to diabetes risk profiling. Applied feature scaling (standardization) to normalize magnitudes, which is critical for distance-based algorithms like K-Means that rely on Euclidean distance calculations.
            </p>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-gray-700"><strong>Why it matters:</strong> Without scaling, features with larger ranges would disproportionately dominate the clustering, leading to biased and unreliable results.</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Optimal Cluster Selection</h3>
            <p className="text-lg text-gray-700 mb-4">
              Evaluated cluster quality using two complementary metrics:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Elbow Method (WCSS)</h4>
                <p className="text-gray-700">Plots within-cluster sum of squares against the number of clusters to identify the "elbow point" where diminishing returns occur, indicating optimal K.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Silhouette Score</h4>
                <p className="text-gray-700">Measures how similar each point is to its own cluster compared to other clusters. Ranges from -1 to 1, with higher values indicating better-separated, more cohesive clusters.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. K-Means Execution & Cluster Profiling</h3>
            <p className="text-lg text-gray-700 mb-4">
              Trained K-Means with the selected optimal K value. For each cluster, computed aggregate statistics (mean, median, distribution) across all features to generate interpretable cluster profiles. These profiles enable stakeholders to understand the characteristics of each patient segment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Dimensionality Reduction for Visualization</h3>
            <p className="text-lg text-gray-700 mb-4">
              Applied Principal Component Analysis (PCA) to reduce the high-dimensional feature space to 2 dimensions for visualization, preserving as much variance as possible while making cluster separation visible and intuitive.
            </p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Results & Deliverables">
        <div className="space-y-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Outputs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Cluster Assignments</h4>
                <p className="text-gray-700 text-sm">Patient population segmented into distinct groups based on demographic and symptom similarity</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Optimal K Selection</h4>
                <p className="text-gray-700 text-sm">Elbow Method and Silhouette Score analysis confirmed the ideal number of clusters</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Cluster Profiles</h4>
                <p className="text-gray-700 text-sm">Summary table of key characteristics (demographics, symptoms) for each patient segment</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Risk Distribution</h4>
                <p className="text-gray-700 text-sm">Chart showing diabetes-positive distribution across clusters to illustrate practical segment meaning</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Cluster Optimization Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h4 className="font-semibold">Elbow Method Plot</h4>
                </div>
                <div className="p-4">
                  <ImageCarousel images={elbowMethod} alt="Elbow Method - WCSS vs K" height="h-80" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h4 className="font-semibold">Silhouette Score Plot</h4>
                </div>
                <div className="p-4">
                  <ImageCarousel images={silhouetteScore} alt="Silhouette Score vs K" height="h-80" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Cluster Visualization & Profiling</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h4 className="font-semibold">PCA Cluster Visualization</h4>
                </div>
                <div className="p-4">
                  <ImageCarousel images={pcaVisualization} alt="PCA 2D Cluster Visualization" height="h-80" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h4 className="font-semibold">Cluster Profiling Table</h4>
                </div>
                <div className="p-4">
                  <ImageCarousel images={clusterProfiles} alt="Cluster Profile Summary" height="h-80" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h4 className="font-semibold">Diabetes-Positive Distribution by Cluster</h4>
            </div>
            <div className="p-6">
              <ImageCarousel images={positiveDistribution} alt="Distribution Chart" height="h-80" />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Key Insights" background="gray">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Segment-Specific Patterns</h4>
            <p className="text-gray-700">Each cluster exhibits distinct demographic and symptom signatures, validating the effectiveness of clustering for patient segmentation.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Risk Stratification</h4>
            <p className="text-gray-700">Diabetes prevalence varies meaningfully across clusters, enabling clinicians to prioritize high-risk groups for targeted intervention.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100">
            <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Actionable Insights</h4>
            <p className="text-gray-700">Clear, interpretable profiles support clinical decision-making and evidence-based screening protocols tailored to each segment.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="What I'd Improve Next" background="">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3">Clinical Validation</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Validate cluster usefulness with clinical constraints</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Incorporate domain expert review for external validity</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3">Algorithm Comparison</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Compare K-Means with Gaussian Mixture Models</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Test Agglomerative hierarchical clustering</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="font-semibold text-gray-900 mb-3">Robustness & Interpretability</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Advanced feature selection methods and sensitivity analysis</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Stability testing and robustness validation</span>
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