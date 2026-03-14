import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-700">
                  patricklie995@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">LinkedIn</p>
                <a href="https://my.linkedin.com/in/patrick-lie-315964302" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  patrick-lie-315964302
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <Github className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">GitHub</p>
                <a href="https://github.com/PatrickLie-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  PatrickLie-dev
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Prefer WhatsApp? Send me a message directly.
              </p>

              <a
                href="https://wa.me/6285183158476?text=Hi%20Patrick%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center"
              >
                Message me on WhatsApp
                <Send className="h-5 w-5 ml-2" />
              </a>

              <p className="text-xs text-gray-500">
                Typically replies within 24 hours.
              </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
