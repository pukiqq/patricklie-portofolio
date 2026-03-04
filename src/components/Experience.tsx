import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Alva Production',
      role: 'Software Engineer Intern (App Development)',
      type: 'Remote (WFH)',
      period: '2024',
      tech: ['Flutter', 'Android Studio'],
      highlights: [
        'Developed and maintained Flutter-based mobile applications, contributing to UI screens, reusable components, and feature implementation.',
        'Supported testing, debugging, and iterative improvements on an existing codebase to improve stability and user experience.',
        'Assisted with integration tasks and coordinated progress updates within an ongoing development roadmap.',
      ],
    },
    {
      company: 'Allianz',
      role: 'Insurance Agent',
      type: '',
      period: '2022 – 2023',
      tech: [],
      highlights: [
        'Built strong customer communication and consultation skills by understanding client needs and explaining solutions clearly.',
        'Strengthened problem-solving and interpersonal skills through handling questions, follow-ups, and service support.',
        'Developed discipline and accountability by managing client interactions and maintaining consistent progress tracking.',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
          <p className="text-gray-600">
            A snapshot of my work experience, focusing on practical contributions, collaboration, and professional growth.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                  <p className="text-lg text-gray-700 font-medium mb-2">{exp.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {exp.type && (
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.type}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              {exp.tech.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Tech:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Highlights</p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
          <p className="text-gray-700 text-lg">
            Open to <span className="font-semibold text-blue-600">Internship or Full-Time opportunities</span> in Software Engineering, Mobile Development, IoT, or Cloud-related roles.
          </p>
        </div>
      </div>
    </section>
  );
}
