import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Glitch/Text Effect Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text block">Hi, I'm</span>
            <span className="block mt-2 text-white hover:tracking-wider transition-all duration-300">
              Your Name
            </span>
          </h1>

          {/* Animated Typing Effect Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            <span className="inline-block">
              Full Stack Developer
            </span>
            <span className="inline-block ml-2 text-primary-400 animate-pulse">
              |
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/projects"
              className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 hover-lift card-glow transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 glass-effect text-primary-400 rounded-lg font-semibold hover:bg-white/20 hover-lift transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero