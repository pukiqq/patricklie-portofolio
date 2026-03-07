import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FreshlyProjectDetail from '../components/FreshlyProjectDetail';
import DiotProjectDetail from '../components/DiotProjectDetail';

export default function ProjectDetailPage() {
  const { id } = useParams();

  if (id === 'freshly') {
    return <FreshlyProjectDetail />;
  }

  if (id === 'diot-urban-farming') {
    return <DiotProjectDetail />;
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Project not found</h1>
      </div>
    </div>
  );
}
