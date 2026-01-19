import ScrambledText from '../../UI/ScrambledText/ScrambledText'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background - just subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-charcoal/20 to-dark" />

      {/* Hero Content - Centered */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-cream">
          <ScrambledText 
            text="Gleb Vassiliev" 
            className="font-mono"
            speed={30}
            fadeInDelay={200}
          />
        </h1>
      </div>

      {/* Scroll Indicator - Minimal */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-sage to-transparent" />
      </div>
    </section>
  )
}

export default Hero