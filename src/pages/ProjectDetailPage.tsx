import { ComponentType } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FreshlyProjectDetail from '../components/FreshlyProjectDetail';
import DIOTProjectDetail from '../components/DIOTProjectDetail';
import BigDataProjectDetail from '../components/BigDataProjectDetail.tsx';
import TechDocsProjectDetail from '../components/TechDocsProjectDetail';
import IndoIoTProjectDetail from '../components/IndoIoTProjectDetail';
import BPKProjectDetail from '../components/BPKProjectDetail';

/**
 * Case-study registry. To publish a new case study, add its component here
 * (and its data entry in src/data/projects.ts).
 */
const detailPages: Record<string, ComponentType> = {
  freshly: FreshlyProjectDetail,
  'diot-urban-farming': DIOTProjectDetail,
  'big-data': BigDataProjectDetail,
  'techdocs-ai': TechDocsProjectDetail,
  'indoiot-llm': IndoIoTProjectDetail,
  'bpk-rag-assessment': BPKProjectDetail,
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const Detail = id ? detailPages[id] : undefined;

  if (Detail) {
    return <Detail />;
  }

  return (
    <div className="min-h-screen pb-20 pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="group mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widecaps text-mist-400 transition-colors duration-500 hover:text-copper-300"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:-translate-x-1" />
          Back to Projects
        </Link>
        <p className="eyebrow mb-4">404 / Not found</p>
        <h1 className="font-display text-4xl font-medium tracking-tight text-mist-50">
          Project not found
        </h1>
      </div>
    </div>
  );
}
