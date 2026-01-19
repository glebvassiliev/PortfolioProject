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
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-white tracking-tight">
          Contact
        </h2>

        <div className="space-y-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-gray-400 leading-relaxed font-light text-center max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-wider"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-wider"
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors font-light"
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors font-light"
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors resize-none font-light"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors font-light text-sm uppercase tracking-wider mt-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection