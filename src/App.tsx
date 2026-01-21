import Hero from './components/Sections/Hero/Hero'
import About from './components/Sections/About/About'
import ProjectsSection from './components/Sections/Projects/ProjectsSection'
import ContactSection from './components/Sections/Contact/ContactSection'
import Footer from './components/Layout/Footer/Footer'
import Beams from './components/UI/Beams/Beams'
import FloatingSectionNav from './components/Layout/FloatingSectionNav/FloatingSectionNav'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Full-site background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Beams />
      </div>

      <Hero />
      <About />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <FloatingSectionNav />
    </div>
  )
}

export default App