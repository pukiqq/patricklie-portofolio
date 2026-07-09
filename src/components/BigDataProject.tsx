import { BarChart3, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BigDataProject() {
  return (
    <Link to="/project/big-data" className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center h-48">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Chronic Disease Predictive Analytics</h3>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-600 mb-4 flex-1">
            Patient segmentation using K-Means clustering to group diabetes patients by demographic and symptom profiles for targeted intervention.
          </p>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500 mb-2">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {['Unsupervised ML', 'Clustering', 'PCA'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-gray-200">
            <div className="flex items-center text-gray-700">
              <Brain className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm">K-Means Clustering Analysis</span>
            </div>
            <div className="flex items-center text-gray-700">
              <BarChart3 className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm">Elbow & Silhouette Analysis</span>
            </div>
            <div className="flex items-center text-gray-700">
              <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm">Cluster Profiling & Visualization</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 group-hover:bg-blue-50 transition-colors">
          <span className="text-blue-600 font-semibold group-hover:text-blue-700">View Case Study →</span>
        </div>
      </div>
    </Link>
  );
}