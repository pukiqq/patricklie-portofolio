/**
 * Single source of truth for project content.
 * To add a new project: append an entry here and (optionally) register a
 * detail component in src/pages/ProjectDetailPage.tsx.
 * All copy is rendered verbatim across the site.
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  /** Short blurb shown on the homepage featured card. */
  summary: string;
  /** Fuller description shown on the projects index. */
  description: string;
  longDescription: string;
  /** Tags shown on the homepage featured card. */
  featuredTags: string[];
  /** Tags shown on the projects index. */
  tags: string[];
  status: 'Completed' | 'In Progress';
  role: string;
  timeline: string;
  impact: string[];
  /** Featured on the homepage (ordered by `order`). */
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: 'techdocs-ai',
    title: 'TechDocs AI',
    subtitle: 'RAG Chatbot for Technical Documentation',
    summary:
      'RAG system answering natural-language questions from PDF/TXT/MD docs with page-level citations — built with LangChain, ChromaDB, and Groq, deployed live on Railway.',
    description:
      'RAG chatbot that answers natural-language questions from PDF/TXT/MD technical docs using LangChain, ChromaDB, and Groq — deployed live on Railway with a REST API and MLflow evaluation pipeline.',
    longDescription:
      'Solo end-to-end project covering document indexing, vector similarity retrieval, LLM answer synthesis with page-level source citations, production Docker deployment, and automated MLflow quality benchmarking.',
    featuredTags: ['LangChain', 'ChromaDB', 'Groq', 'Flask', 'Docker', 'RAG', 'MLflow'],
    tags: ['Python', 'LangChain', 'ChromaDB', 'Groq', 'Flask', 'Docker', 'Railway', 'MLflow', 'RAG'],
    status: 'Completed',
    role: 'Solo Developer',
    timeline: 'April 2026',
    impact: [
      'Deployed live RAG API on Railway — answers grounded in document context with page citations.',
      'ChromaDB bundled into Docker image, eliminating external storage dependency on Railway.',
      'MLflow evaluation pipeline benchmarks latency and relevance score per deployment automatically.',
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'indoiot-llm',
    title: 'IndoIoT LLM',
    subtitle: 'Indonesian-Language IoT Assistant via Fine-Tuned LLM',
    summary:
      'Fine-tuned Qwen2.5-3B on a 760-sample Indonesian IoT dataset using QLoRA on a consumer 8GB GPU — deployed on HuggingFace Spaces.',
    description:
      'Fine-tuned Qwen2.5-3B-Instruct with QLoRA on a custom 760-sample Indonesian IoT dataset — trained on a consumer GPU 8GB, tracked with MLflow, and deployed publicly on HuggingFace Spaces.',
    longDescription:
      'End-to-end AI project covering synthetic dataset generation via Groq API, QLoRA fine-tuning with 4-bit NF4 quantization, MLflow experiment tracking, HuggingFace Hub model registry, and Gradio web UI deployment.',
    featuredTags: ['QLoRA', 'Qwen2.5', 'PEFT', 'Groq', 'Gradio', 'HuggingFace', 'MLflow'],
    tags: ['Python', 'QLoRA', 'Qwen2.5', 'PEFT', 'TRL', 'Groq', 'Gradio', 'HuggingFace', 'MLflow', 'Docker'],
    status: 'Completed',
    role: 'Solo Developer',
    timeline: 'April 2026 (~2 weeks)',
    impact: [
      'Fine-tuned 3B-parameter LLM on consumer GPU: eval loss 0.5297, token accuracy ~85.7%, training ~28 min.',
      'Proved full fine-tuning pipeline (data → train → deploy) is viable on 8GB VRAM with QLoRA.',
      'Model live on HuggingFace Spaces — publicly accessible Indonesian IoT assistant.',
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'freshly',
    title: 'Freshly',
    subtitle: 'Food Freshness Monitoring & Real-Time Spoilage Alerts',
    summary:
      'End-to-end IoT system with ESP32, Flutter mobile app, Firebase backend, and ML spoilage prediction engine.',
    description:
      'End-to-end IoT system combining hardware sensors, mobile app, cloud infrastructure, and machine learning for intelligent food preservation monitoring.',
    longDescription:
      'Solo final year project featuring an ESP32-based sensor hub, real-time Firebase synchronization, Flutter mobile dashboard, cloud-based alerting system, and ML-powered spoilage prediction.',
    featuredTags: ['ESP32', 'Flutter', 'Firebase', 'ML', 'Python'],
    tags: ['ESP32', 'Flutter', 'Firebase', 'Python', 'ML', 'Cloud Functions', 'Compute Engine'],
    status: 'Completed',
    role: 'Solo Developer',
    timeline: 'Final Year Project',
    impact: [
      'Delivered full end-to-end prototype (device + backend + mobile)',
      'Designed scalable architecture separating ML service from device/app',
      '99%+ model accuracy on controlled dataset',
    ],
    featured: true,
    order: 3,
  },
  {
    id: 'diot-urban-farming',
    title: 'DIOT Urban Farming',
    subtitle: 'Smart Sensor Monitoring & Automation Pipeline',
    summary:
      'Distributed IoT network designed for urban farming with real-time sensor monitoring, MQTT-based communication, automation rules, and analytics dashboard.',
    description:
      'Distributed IoT network designed for urban farming with real-time sensor monitoring, MQTT-based communication, automation rules, and analytics dashboard.',
    longDescription:
      'Multi-sensor distributed system using MQTT/Node-RED for data orchestration, cloud database for time-series storage, and web dashboard for farmer operators.',
    featuredTags: ['MQTT', 'Node-RED', 'IoT', 'Dashboard', 'Automation'],
    tags: ['MQTT', 'Node-RED', 'IoT', 'Dashboard', 'Automation', 'Database', 'Analytics'],
    status: 'Completed',
    role: 'Solo Developer',
    timeline: '6 months',
    impact: [
      'Reduced manual monitoring by automating threshold-based responses (Node-RED rules).',
      'Designed to support multiple sensor nodes (scalable architecture).',
      'Real-time alert system for threshold violations',
    ],
    featured: false,
    order: 4,
  },
  {
    id: 'big-data',
    title: 'Chronic Disease Predictive Analytics',
    subtitle: 'Patient Segmentation with K-Means Clustering (Big Data)',
    summary:
      'Unsupervised learning project to segment diabetes patient profiles using demographic and core symptom features, enabling clearer risk-profile grouping for early screening insights.',
    description:
      'Unsupervised learning project to segment diabetes patient profiles using demographic and core symptom features, enabling clearer risk-profile grouping for early screening insights.',
    longDescription:
      'Implemented a clustering workflow to group patient risk profiles using K-Means. Performed feature scaling, selected optimal K using Elbow (WCSS) and Silhouette Score, and produced interpretable deliverables including PCA visualization, cluster profiling table, and distribution charts for stakeholder-friendly insights.',
    featuredTags: ['Python', 'K-Means', 'PCA', 'PowerBI', 'Scikit-learn'],
    tags: ['Python', 'PowerBI', 'Pandas', 'Scikit-learn', 'K-Means', 'PCA', 'Elbow Method', 'Silhouette Score', 'Clustering'],
    status: 'Completed',
    role: 'Individual Contributor (Clustering & Deployment Visuals)',
    timeline: 'Big Data Analytics Assignment',
    impact: [
      'Segmented diabetes patient profiles into meaningful clusters using K-Means (unsupervised learning).',
      'Selected optimal cluster count using Elbow (WCSS/Inertia) and Silhouette Score to justify model configuration.',
      'Delivered interpretable outputs: PCA plot, cluster profile summaries, and diabetes-positive distribution chart across clusters.',
    ],
    featured: false,
    order: 5,
  },
  {
    id: 'bpk-rag-assessment',
    title: 'BPK RAG Pipeline',
    subtitle: 'Zero-Hallucination Extraction from Indonesian Audit Documents',
    summary:
      'RAG pipeline extracting schema-validated financial figures from dense Indonesian government audit publications (BPK) with a two-way grounding + coverage hallucination guard — 5/5 figures, 100% accuracy.',
    description:
      'End-to-end RAG pipeline over BPK "Warta Pemeriksa" government audit publications, extracting strictly-formatted, zero-hallucination structured financial data using LangGraph, ChromaDB, and Groq.',
    longDescription:
      'Solo take-home assessment covering multi-column PDF parsing, deterministic query routing, retrieval-grounded extraction, and a self-correcting anti-hallucination validation gate that recovers dropped figures via targeted repair retries.',
    featuredTags: ['LangGraph', 'ChromaDB', 'Groq', 'RAG', 'Pydantic'],
    tags: ['Python', 'LangGraph', 'ChromaDB', 'Groq', 'Ollama', 'Pydantic', 'RAG', 'pdfplumber'],
    status: 'Completed',
    role: 'Solo Developer',
    timeline: 'June 2026',
    impact: [
      '5/5 JTB EPCC GPF financial issues extracted, 100% figure accuracy — every USD figure verbatim from source.',
      'Two-way hallucination guard (grounding + coverage) with automatic repair retry recovered a figure the first pass silently dropped.',
      'Cold startup cut from 47–76s to ~4.6s via a HuggingFace offline-mode fix; warm inference ~4.3s/query.',
    ],
    featured: true,
    order: 6,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort((a, b) => a.order - b.order);
