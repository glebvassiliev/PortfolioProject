import GradientText from '../../UI/GradientText/GradientText'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Glass Panel */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="glass-effect rounded-3xl px-8 py-12 md:px-12 md:py-16 shadow-2xl shadow-black/30">
          <GradientText
            colors={['#274862', '#cfe7fc', '#70a6ce', '#76b3c8', '#ffffff']}
            animationSpeed={5}
            showBorder={false}
            className="custom-class text-center text-6xl md:text-8xl lg:text-9xl font-light tracking-tight"
          >
            Gleb Vassiliev
          </GradientText>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-sage to-transparent" />
      </div>
    </section>
  )
}

export default Hero