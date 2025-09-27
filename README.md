# Electric Xtra - Cyberpunk Landing Page

A futuristic cyberpunk-themed landing page built with React, Vite, and Tailwind CSS. This project converts an HTML/CSS/JS template into a modern React application with reusable components.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Fully responsive layout that works on all devices
- **Cyberpunk Aesthetics**: Neon glows, animated backgrounds, and futuristic design elements
- **Interactive Components**: Animated text rotators, floating particles, and smooth scrolling
- **Component-Based**: Reusable and maintainable component structure
- **Tailwind CSS**: Modern utility-first CSS framework with custom cyberpunk theme

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Custom Fonts** - Orbitron and Rajdhani for cyberpunk typography
- **CSS Animations** - Custom keyframe animations for effects

## 🎨 Components

- `Navbar` - Responsive navigation with smooth scrolling
- `Hero` - Animated hero section with text rotator
- `Features` - Interactive tabbed feature showcase
- `About` - Information sections with stats
- `Contact` - Contact form with validation
- `Footer` - Footer with links and social media
- `BackgroundEffects` - Animated grid and gradient backgrounds
- `FloatingParticles` - Animated particle system

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎯 Development Server

The development server runs on `http://localhost:5173` (or next available port).

Features include:
- Hot Module Replacement (HMR)
- Fast refresh
- Error overlay
- Optimized development experience

## 🌟 Customization

### Theme Colors

The project uses a custom Tailwind color palette defined in `tailwind.config.js`:

- `electric-blue`: #00f5ff
- `electric-purple`: #8b5cf6
- `electric-pink`: #ec4899
- `electric-cyan`: #06b6d4

### Fonts

- **Orbitron**: For headings and tech-style text
- **Rajdhani**: For body text and UI elements

### Animations

Custom animations are defined in `src/index.css`:
- `float`: Floating animation for elements
- `glow`: Neon glow effect
- `glitch`: Cyberpunk glitch effect
- `grid-move`: Moving grid background

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design Features

- **Animated Backgrounds**: Moving grid patterns and gradient overlays
- **Particle System**: Floating neon particles with random colors
- **Glass Morphism**: Backdrop blur effects on cards and modals
- **Neon Effects**: Glowing borders and text effects
- **Smooth Animations**: CSS transitions and keyframe animations

## 🔧 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── BackgroundEffects.jsx
│   ├── Contact.jsx
│   ├── Features.jsx
│   ├── FloatingParticles.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── Navbar.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve the `index.html` file for all routes

## 📄 License

This project is based on TemplateMo 596 Electric Xtra template and converted to modern React.

## 🤝 Contributing

Feel free to contribute to this project by submitting issues or pull requests.

---

Built with ⚡ by the Electric Xtra team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
