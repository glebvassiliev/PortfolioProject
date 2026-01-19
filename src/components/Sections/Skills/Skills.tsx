const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vite', 'Figma'],
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-cream tracking-tight">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="space-y-6"
            >
              <h3 className="text-xl font-light mb-6 text-sage uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sage/70 font-light"
                  >
                    {skill}
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