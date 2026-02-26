import { ReactNode } from 'react';

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  background?: 'white' | 'gray';
}

export default function ProjectSection({ title, children, background = 'white' }: ProjectSectionProps) {
  const bgColor = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <div className={`${bgColor} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h2>
        {children}
      </div>
    </div>
  );
}
