import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/25">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-cream tracking-tight">
            Contact
          </h2>

          <div className="space-y-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-sage leading-relaxed font-light text-center max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                <a
                  href="mailto:your.email@example.com"
                  className="text-sage hover:text-cream transition-colors font-light text-sm uppercase tracking-wider"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/gleb-vassiliev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-cream transition-colors font-light text-sm uppercase tracking-wider"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/glebvassiliev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-cream transition-colors font-light text-sm uppercase tracking-wider"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-charcoal text-sage placeholder-charcoal focus:outline-none focus:border-sage transition-colors font-light"
                  placeholder="Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-charcoal text-sage placeholder-charcoal focus:outline-none focus:border-sage transition-colors font-light"
                  placeholder="Email"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-charcoal text-sage placeholder-charcoal focus:outline-none focus:border-sage transition-colors resize-none font-light"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 border border-charcoal text-sage hover:text-cream hover:border-sage transition-colors font-light text-sm uppercase tracking-wider mt-8"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection