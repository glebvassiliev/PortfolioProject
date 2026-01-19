const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
      icon: '💻',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
      icon: '⚙️',
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vite', 'Figma'],
      icon: '🛠️',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-effect rounded-2xl p-8 hover-lift card-glow group"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    <span className="hover:text-primary-400 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills