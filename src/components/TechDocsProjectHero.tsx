import { Github, ExternalLink } from 'lucide-react';
import CaseHero from './case/CaseHero';

export default function TechDocsProjectHero() {
  return (
    <CaseHero
      title="TechDocs AI"
      subtitle="RAG Chatbot for Technical Documentation"
      description="A Retrieval-Augmented Generation system that lets users ask natural-language questions against PDF/TXT/MD technical docs — with grounded answers and page-level source citations, deployed live on Railway."
      facts={[
        { label: 'Role', value: 'Solo Developer' },
        { label: 'Period', value: 'April 2026 (In Progress)' },
      ]}
      techStack={['Python', 'LangChain', 'ChromaDB', 'Groq', 'Flask', 'Docker', 'Railway', 'MLflow']}
      status="In Progress"
      links={[
        {
          label: 'GitHub',
          href: 'https://github.com/PatrickLie-dev/techdocs-ai',
          icon: <Github className="h-4 w-4" />,
        },
        {
          label: 'Live API',
          href: 'https://techdocs-ai-production.up.railway.app/api/health',
          icon: <ExternalLink className="h-4 w-4" />,
          primary: true,
        },
      ]}
    />
  );
}
