# React + TypeScript + Vite

# 🚀 IbkCodes Portfolio | Engineering with Purpose

A high-performance, responsive portfolio built with a focus on smooth user experience, modern aesthetics (MBA-Hybrid branding), and clean code architecture.

---

## 🎨 The Aesthetic
The project utilizes a custom **Teal & Lime** color palette designed to bridge the gap between "Corporate Professional" and "Creative Engineer." 

- **Primary:** `#00CED1` (Teal) - Signifying trust and clarity.
- **Accent:** `Lime-400` - Signifying energy and action.
- **Glassmorphism:** Used for cards to create depth without clutter.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Form Handling** | Formspree API |
| **Deployment** | Vercel / GitHub Actions |

## ✨ Key Features

- **Dynamic Animations:** Staggered list entries and hover-reactive project cards using Framer Motion.
- **Responsive Architecture:** Mobile-first design using Tailwind's grid and flexbox systems.
- **Dark Mode Support:** Fully optimized slate-950 theme for night-time viewing.
- **Functional Contact Form:** Integrated with Formspree for real-time lead generation without a backend.
- **Type Safety:** 100% TypeScript for robust code and easier scaling.

## 🏗️ Architecture & Thought Process

I chose **Vite** over Create React App for its superior build speed and modern Hot Module Replacement (HMR). My component structure follows an "Atomic" approach:
1. **Components:** Reusable UI blocks like `ProjectCard` and `ContactDetail`.
2. **Sections:** Layout wrappers like `ProjectsSection` and `AboutMe`.
3. **Data:** Decoupled animation variants and project data to keep components clean and readable.




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
