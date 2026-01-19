const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="glass-effect rounded-2xl p-8 md:p-12 space-y-6 hover-lift card-glow">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate developer with expertise in building modern web applications
            using React, TypeScript, and cutting-edge technologies. I love creating
            intuitive user experiences and solving complex problems through code.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            {['Problem Solving', 'Creative Design', 'Team Collaboration', 'Continuous Learning'].map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 glass-effect rounded-full text-sm text-primary-300 border border-primary-500/30 hover:border-primary-500/60 transition-colors"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About