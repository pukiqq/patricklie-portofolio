import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
            PL
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Patrick Lie
        </h1>
        <p className="text-2xl text-blue-600 font-semibold mb-6">
          IoT Engineer & Software Developer
        </p>

        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Fresh Graduate IT (APU) specializing in IoT systems, mobile applications, and cloud infrastructure.
          I build end-to-end products: sensors → cloud pipelines → mobile dashboards → intelligent insights.
        </p>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate about hardware-software integration, real-time data processing, and creating systems that solve real-world problems.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </Link>
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
