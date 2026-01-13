# Portfolio Website - Implementation Walkthrough

A modern, aesthetically stunning portfolio website built for Saransh Aggarwal, designed to showcase AI/ML, web development, data science, and DevOps projects.

## Project Overview

| Aspect | Details |
|--------|---------|
| **Framework** | Next.js 16 with App Router |
| **Styling** | Tailwind CSS + Custom CSS |
| **Animations** | Framer Motion |
| **Language** | TypeScript |
| **Deployment** | Vercel-ready |

---

## Implemented Features

### ✅ Page Sections

1. **Hero Section**
   - Animated gradient background
   - Staggered text animations
   - Social links (GitHub, LinkedIn)
   - Scroll indicator

2. **About Section**
   - Personal bio
   - Skill highlight cards (AI/ML, Full-Stack, Cloud, Data Science)
   - Stats bento grid

3. **Projects Section**
   - 6 project cards with glassmorphism design
   - Category filtering (All, AI/ML, Web Dev, Data Science, DevOps)
   - AnimatePresence for smooth filter transitions
   - YouTube demo links

4. **Skills Section**
   - Tabbed categories with animated indicator
   - Progress bars with fill animations
   - Technology badges

5. **Contact Section**
   - Validated form (React Hook Form + Zod)
   - GitHub and LinkedIn links
   - Availability badge

### ✅ Project Detail Pages

- Dynamic routes for each project (`/projects/[slug]`)
- Embedded YouTube video demos
- Full project descriptions
- Tech stack badges
- Back navigation

---

## Key Design Elements

| Element | Implementation |
|---------|----------------|
| **Color Scheme** | Dark mode with Electric Indigo (#6366F1) + Cyan (#22D3EE) |
| **Glassmorphism** | `.glass-card` with backdrop-blur |
| **Gradient Text** | `.gradient-text` on headings |
| **Typography** | Space Grotesk (display), Inter (body), JetBrains Mono (code) |

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
