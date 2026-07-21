import { Github } from 'lucide-react';
import CaseHero from './case/CaseHero';

export default function BPKProjectHero() {
  return (
    <CaseHero
      title="BPK RAG Pipeline"
      subtitle="Zero-Hallucination Extraction from Indonesian Audit Documents"
      description="An end-to-end Retrieval-Augmented Generation pipeline that ingests Indonesian government audit publications (Badan Pemeriksa Keuangan — 'Warta Pemeriksa') and extracts strictly-formatted, zero-hallucination structured data from dense, multi-column financial audit text."
      facts={[
        { label: 'Role', value: 'Solo Developer' },
        { label: 'Period', value: 'June 2026' },
      ]}
      techStack={['Python', 'LangGraph', 'ChromaDB', 'Groq', 'Ollama', 'Pydantic', 'pdfplumber']}
      status="Completed"
      links={[
        {
          label: 'GitHub',
          href: 'https://github.com/PatrickLie-dev/bpk-rag-assessment',
          icon: <Github className="h-4 w-4" />,
          primary: true,
        },
      ]}
    />
  );
}
