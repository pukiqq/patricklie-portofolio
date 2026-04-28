import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'techdocs-ai',
      title: 'TechDocs AI',
      subtitle: 'RAG Chatbot for Technical Documentation',
      description: 'RAG chatbot that answers natural-language questions from PDF/TXT/MD technical docs using LangChain, ChromaDB, and Groq — deployed live on Railway with a REST API and MLflow evaluation pipeline.',
      longDescription: 'Solo end-to-end project covering document indexing, vector similarity retrieval, LLM answer synthesis with page-level source citations, production Docker deployment, and automated MLflow quality benchmarking.',
      tags: ['Python', 'LangChain', 'ChromaDB', 'Groq', 'Flask', 'Docker', 'Railway', 'MLflow', 'RAG'],
      status: 'In Progress',
      role: 'Solo Developer',
      timeline: 'April 2026',
      impact: [
        'Deployed live RAG API on Railway — answers grounded in document context with page citations.',
        'ChromaDB bundled into Docker image, eliminating external storage dependency on Railway.',
        'MLflow evaluation pipeline benchmarks latency and relevance score per deployment automatically.',
      ],
    },
    {
      id: 'indoiot-llm',
      title: 'IndoIoT LLM',
      subtitle: 'Indonesian-Language IoT Assistant via Fine-Tuned LLM',
      description: 'Fine-tuned Qwen2.5-3B-Instruct with QLoRA on a custom 760-sample Indonesian IoT dataset — trained on a consumer GPU 8GB, tracked with MLflow, and deployed publicly on HuggingFace Spaces.',
      longDescription: 'End-to-end AI project covering synthetic dataset generation via Groq API, QLoRA fine-tuning with 4-bit NF4 quantization, MLflow experiment tracking, HuggingFace Hub model registry, and Gradio web UI deployment.',
      tags: ['Python', 'QLoRA', 'Qwen2.5', 'PEFT', 'TRL', 'Groq', 'Gradio', 'HuggingFace', 'MLflow', 'Docker'],
      status: 'Completed',
      role: 'Solo Developer',
      timeline: 'April 2026 (~2 weeks)',
      impact: [
        'Fine-tuned 3B-parameter LLM on consumer GPU: eval loss 0.5297, token accuracy ~85.7%, training ~28 min.',
        'Proved full fine-tuning pipeline (data → train → deploy) is viable on 8GB VRAM with QLoRA.',
        'Model live on HuggingFace Spaces — publicly accessible Indonesian IoT assistant.',
      ],
    },
    {
      id: 'freshly',
      title: 'Freshly',
      subtitle: 'Food Freshness Monitoring & Real-Time Spoilage Alerts',
      description: 'End-to-end IoT system combining hardware sensors, mobile app, cloud infrastructure, and machine learning for intelligent food preservation monitoring.',
      longDescription: 'Solo final year project featuring an ESP32-based sensor hub, real-time Firebase synchronization, Flutter mobile dashboard, cloud-based alerting system, and ML-powered spoilage prediction.',
      tags: ['ESP32', 'Flutter', 'Firebase', 'Python', 'ML', 'Cloud Functions', 'Compute Engine'],
      status: 'Completed',
      role: 'Solo Developer',
      timeline: 'Final Year Project',
      impact: [
        'Delivered full end-to-end prototype (device + backend + mobile)',
        'Designed scalable architecture separating ML service from device/app',
        '99%+ model accuracy on controlled dataset',
      ],
    },
    {
      id: 'diot-urban-farming',
      title: 'DIOT Urban Farming',
      subtitle: 'Smart Sensor Monitoring & Automation Pipeline',
      description: 'Distributed IoT network designed for urban farming with real-time sensor monitoring, MQTT-based communication, automation rules, and analytics dashboard.',
      longDescription: 'Multi-sensor distributed system using MQTT/Node-RED for data orchestration, cloud database for time-series storage, and web dashboard for farmer operators.',
      tags: ['MQTT', 'Node-RED', 'IoT', 'Dashboard', 'Automation', 'Database', 'Analytics'],
      status: 'Completed',
      role: 'Solo Developer',
      timeline: '6 months',
      impact: [
        'Reduced manual monitoring by automating threshold-based responses (Node-RED rules).',
        'Designed to support multiple sensor nodes (scalable architecture).',
        'Real-time alert system for threshold violations',
      ],
    },
    {
      id: 'big-data',
      title: 'Chronic Disease Predictive Analytics',
      subtitle: 'Patient Segmentation with K-Means Clustering (Big Data)',
      description: 'Unsupervised learning project to segment diabetes patient profiles using demographic and core symptom features, enabling clearer risk-profile grouping for early screening insights.',
      longDescription: 'Implemented a clustering workflow to group patient risk profiles using K-Means. Performed feature scaling, selected optimal K using Elbow (WCSS) and Silhouette Score, and produced interpretable deliverables including PCA visualization, cluster profiling table, and distribution charts for stakeholder-friendly insights.',
      tags: ['Python', 'PowerBI', 'Pandas', 'Scikit-learn', 'K-Means', 'PCA', 'Elbow Method', 'Silhouette Score', 'Clustering'],
      status: 'Completed',
      role: 'Individual Contributor (Clustering & Deployment Visuals)',
      timeline: 'Big Data Analytics Assignment',
      impact: [
        'Segmented diabetes patient profiles into meaningful clusters using K-Means (unsupervised learning).',
        'Selected optimal cluster count using Elbow (WCSS/Inertia) and Silhouette Score to justify model configuration.',
        'Delivered interpretable outputs: PCA plot, cluster profile summaries, and diabetes-positive distribution chart across clusters.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600">
            Selected work across IoT, mobile, cloud, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group block">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-4">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-2">{project.subtitle}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-t border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Role</p>
                      <p className="font-semibold text-gray-900">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Timeline</p>
                      <p className="font-semibold text-gray-900">{project.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-semibold text-gray-900">{project.status}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read full case study <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
