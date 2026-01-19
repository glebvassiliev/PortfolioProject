# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project incorporates stylistic elements inspired by React Bits, featuring smooth animations, glass morphism effects, and interactive components.

## ✨ Features

- **Modern Design**: Clean, professional design with glass morphism effects and gradient accents
- **Smooth Animations**: Interactive hover effects, floating particles, and smooth transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for seamless navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, SVGs, fonts
│   ├── components/
│   │   ├── Layout/        # Navbar, Footer
│   │   └── Sections/      # Hero, About, Skills, Projects, Contact
│   ├── pages/             # Home, Projects, Contact pages
│   ├── styles/
│   │   └── globals.css    # Global styles and Tailwind imports
│   ├── App.tsx            # Main app component with routing
│   └── main.tsx           # Entry point
├── index.html
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Styling Features

- **Glass Morphism**: Translucent backgrounds with backdrop blur
- **Gradient Text**: Eye-catching gradient text effects
- **Hover Effects**: Lift, glow, and scale animations on hover
- **Floating Particles**: Animated background particles
- **Smooth Scroll**: Smooth scrolling behavior throughout

## 🛠️ Customization

### Updating Colors

Edit the `tailwind.config.js` file to customize the color scheme. The primary color is currently set to blue shades.

### Adding Content

1. **Projects**: Edit `src/components/Sections/Projects/ProjectsSection.tsx`
2. **Skills**: Modify `src/components/Sections/Skills/Skills.tsx`
3. **About**: Update `src/components/Sections/About/About.tsx`
4. **Contact Info**: Change links in `src/components/Layout/Footer/Footer.tsx` and `src/components/Sections/Contact/ContactSection.tsx`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Update the navigation in `src/components/Layout/Navbar/Navbar.tsx`

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by [React Bits](https://github.com/DavidHDev/react-bits) design patterns
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)