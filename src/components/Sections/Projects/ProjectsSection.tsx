const ProjectsSection = () => {
  const project = {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/25">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-cream tracking-tight">
            Projects
          </h2>

          <div className="group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-charcoal/50 border border-charcoal flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light text-cream tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-sage leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1 text-sm text-sage/70 border border-charcoal font-light"
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
                      className="text-sage hover:text-cream transition-colors font-light text-sm uppercase tracking-wider"
                    >
                      View Project →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage hover:text-cream transition-colors font-light text-sm uppercase tracking-wider"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection