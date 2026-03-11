import { User, Calendar, ExternalLink } from 'lucide-react';

export default function BigDataProjectHero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Chronic Disease Predictive Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Patient Segmentation Using K-Means Clustering
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Unsupervised machine learning approach to segment diabetes patient profiles using demographic and symptom data, enabling targeted early intervention strategies through data-driven patient grouping.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <User className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Role</p>
                  <p className="text-gray-600">Individual Contribution</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Area</p>
                  <p className="text-gray-600">Unsupervised ML / Clustering</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'PCA', 'K-Means'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Status</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}