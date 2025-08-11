# Project Explanation: Altibbe Frontend & Blog Platform

## Overview
This project is a modern web application for Altibbe, focused on health innovation, transparency, and community engagement. It is built with React (TypeScript), Vite, and Tailwind CSS, and integrates a blog system powered by Sanity CMS. The project is modular, scalable, and designed for both content management and interactive user experience.

---

## Project Structure

- **src/**: Main frontend React application.
- **altibbe-blog/**: Blog system, likely with Sanity schemas and configuration.
- **sanity-studio/**: Sanity Studio backend for content management.
- **public/**: Static assets (images, SVGs).
- **Configuration files**: ESLint, Tailwind, Vite, TypeScript, etc.

---

## Application Flow

### Entry Point
- **index.html**: The root HTML file.
- **src/main.tsx**: Bootstraps the React app and renders `<App />` into the DOM.

### App Component (`src/App.tsx`)
- Sets up React Router for navigation.
- Handles a page wipe animation on load.
- Defines main routes:
  - `/` → HomePage
  - `/our-work` → OurWorkPage
  - `/hedamo` → HedamoPage
  - `/about` → AboutPage
  - `/collaborate` → CollaboratePage
  - `/blog-media` → BlogMediaPage
  - `/contact` → ContactPage
- Renders a global footer.

---

## Navigation & Layout

### Navbar (`src/components/Navbar.tsx`)
- Responsive navigation bar with dropdowns for each main section.
- Sections:
  - Our Work
  - Hedamo
  - About
  - Blog & Media
  - Collaborate
  - Contact Us
- Each section has sub-links for deeper navigation.
- Mobile drawer for small screens.

### Footer (`src/components/Footer.tsx`)
- Four columns: XDC (about), Network, Developers, Community.
- Social and resource links.
- Copyright.

---

## Main Pages & Components

### Home Page (`src/pages/v2/HomePage.tsx`)
- **Hero**: Large banner with health innovation messaging.
- **IntroBlurb**: Mission and vision statement.
- **SmoothWrapper**: Visual effect section with paper curl animation.
- **SplitScreenIntro**: Two-column section (image + text) about Altibbe's health ecology, Hedamo, and transparency services.
- **PoweredBy**: Animated grid of key categories/industries.
- **LiveMainnetBanner**: Banner with Altibbe's journey and a call to action.

### Blog & Media Page (`src/pages/About.tsx`)
- **BlogMediaHero**: Animated hero section with SVG image.
- **BlogPosts**: Fetches and displays blog posts (from Sanity or static fallback), with modal for full post view.
- **SocialMediaFeed**: Shows recent social posts and multimedia content.

---

## Blog System
- **altibbe-blog/**: Contains Sanity schemas and configuration for blog content.
- **BlogPosts**: Uses a service to fetch blog data, supports both static and live (Sanity) content.
- **Blog Modal**: In-depth view of a blog post with author, tags, and formatted content.

---

## Sanity Studio
- **sanity-studio/**: Content management system for blog posts, authors, and categories.
- Editors can manage content that appears on the frontend.

---

## Services & Utilities
- **blogService.ts**: Handles fetching and formatting blog data.
- **sanityClient.ts**: Connects to Sanity CMS.
- **hooks/**: Custom React hooks for scroll animation, color, etc.

---

## Styling & Animations
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Framer Motion**: Animations and transitions.
- **AOS**: Animate on scroll effects.

---

## Key Features
- Modular, scalable React architecture.
- Responsive design with mobile-first navigation.
- Dynamic blog and media content powered by Sanity.
- Rich animations and visual effects.
- Clear separation of concerns for maintainability.

---

## Where It Starts & Ends
- **Starts**: `index.html` → `src/main.tsx` → `src/App.tsx` (routing)
- **Ends**: Renders the requested page/component, with global navigation and footer always present.
- **Content**: Pulled from Sanity (if configured) or static fallback.

---

## Section & Component Map

- **Navbar**: All pages, top navigation.
- **Footer**: All pages, bottom section.
- **HomePage**: Hero, IntroBlurb, SmoothWrapper, SplitScreenIntro, PoweredBy, LiveMainnetBanner.
- **BlogMediaPage**: BlogMediaHero, BlogPosts, SocialMediaFeed.
- **Other Pages**: OurWorkPage, HedamoPage, AboutPage, CollaboratePage, ContactPage (each with their own hero and content components).

---

## Conclusion
This project is a full-featured, modern web platform for Altibbe, combining a robust frontend with a flexible content management system. It is designed for extensibility, maintainability, and a rich user experience.
