import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">Portfolio</Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`transition ${isActive('/projects') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Projects
            </Link>
            <button
              onClick={handleDownloadCV}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              CV
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
            <button
              onClick={handleDownloadCV}
              className="block w-full text-left text-gray-700 hover:text-blue-600"
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
