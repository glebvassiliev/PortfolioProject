import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and interactive components.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-white tracking-tight">
          Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gray-800/50 border border-gray-800 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 text-sm text-gray-500 border border-gray-800 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-wider"
                      >
                        View Project →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-wider"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection