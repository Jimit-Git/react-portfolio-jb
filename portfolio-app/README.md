# Personal Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS featuring a terminal/hacker aesthetic with Matrix rain animations.

## Features

- **Dynamic Matrix Rain** - Animated binary rain effect on homepage hero
- **Smooth Page Transitions** - Fade/slide animations between pages
- **Responsive Design** - Mobile-friendly with hamburger menu
- **Theme** - Dark terminal aesthetic with green accents (#00ff41)
- **Custom Fonts** - Space Grotesk (headings), Inter (body)

## Pages

- **Home** (`/`) - Hero section with Matrix animation, core strengths, tech stack
- **Projects** (`/projects`) - Portfolio of projects with hover effects
- **Experience** (`/career`) - Career timeline with status indicators
- **Contact** (`/contact`) - Contact form with terminal styling

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── App.tsx         # Main app with routing
├── main.tsx        # Entry point
└── index.css       # Global styles & animations
```
