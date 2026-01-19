const About = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-cream tracking-tight">
          About
        </h2>
        
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-sage leading-relaxed font-light">
            I'm a passionate developer with expertise in building modern web applications
            using React, TypeScript, and cutting-edge technologies. I love creating
            intuitive user experiences and solving complex problems through code.
          </p>
          
          <p className="text-lg md:text-xl text-sage leading-relaxed font-light">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About