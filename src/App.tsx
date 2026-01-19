import Hero from './components/Sections/Hero/Hero'
import About from './components/Sections/About/About'
import Skills from './components/Sections/Skills/Skills'
import ProjectsSection from './components/Sections/Projects/ProjectsSection'
import ContactSection from './components/Sections/Contact/ContactSection'
import Footer from './components/Layout/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App