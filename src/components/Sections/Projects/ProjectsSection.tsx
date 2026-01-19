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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          A collection of projects I've worked on
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative glass-effect rounded-2xl overflow-hidden hover-lift card-glow"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary-400 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glass-effect text-primary-400 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 border-2 border-primary-400/50 rounded-2xl pointer-events-none animate-glow" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection