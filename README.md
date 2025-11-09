# Hartery's Family Restaurant Website

This repository contains the source code for the official website of Hartery's Family Restaurant, a family-owned restaurant in Stephenville, NL. The project is a modern, responsive, single-page application built with Next.js 16, React 19, and TypeScript.

---

## Features

- **Modern Single-Page Design:** A smooth, fast, single-page interface with navigation links to the Hero, Menu, About, and Contact sections.
- **Responsive & Mobile-Friendly:** Designed to work beautifully on all device sizes, featuring a collapsible hamburger menu for mobile navigation.
- **Dynamic Scroll Header:** The navigation bar is transparent on page load and dynamically transitions to a solid white background with a shadow upon scrolling.
- **Smooth Animations:** Sections gracefully fade in on scroll using **Framer Motion** and **React Intersection Observer**.
- **PWA Ready:** Includes a web app manifest, allowing users to "Add to Home Screen" on their mobile devices for a native-app-like experience.
- **Analytics Integrated:** Built-in support for **Vercel Analytics** and **Speed Insights** to monitor traffic and performance.

---

## Tech Stack

This project is built with a modern, performant tech stack:

- **Framework:** [Next.js](https://nextjs.org/) (v16.0.1)
- **Library:** [React](https://react.dev/) (v19.2.0)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Heroicons](https://heroicons.com/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** Pre-configured for [Vercel](https://vercel.com/)

---

## Getting Started

Follow these instructions to get a local copy up and running for development and testing.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (v20.9.0 or later is recommended) and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joshualomond/harterys.git
   ```

2. Navigate to the project directory:

   ```bash
   cd harterys
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

**Development Server:**

To run the app in development mode with hot-reloading:

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

**Production Build:**

To create a production-ready build:

```bash
npm run build
```

To run the optimized production build:

```bash
npm run start
```

**Linting:**

To run the ESLint linter to check for code quality and errors:

```bash
npm run lint
```

---

## Project Structure

The project uses the Next.js App Router for its structure.

- `app/`: Contains all routes, pages, and components.
- `app/page.tsx`: The main entry point for the single-page layout, assembling all the components.
- `app/layout.tsx`: The root layout for the application. It sets up the HTML shell, metadata, and loads the project's custom fonts (**Playfair Display** and **Lato**).
- `app/components/`: Contains all the reusable React components used to build the page:
  - `Header.tsx`: The site's main navigation.
  - `Hero.tsx`: The top "Welcome" section with the background image.
  - `About.tsx`: The "About Us" section.
  - `Menu.tsx`: The "Our Menu" section.
  - `Contact.tsx`: The "Contact Us" section with address, phone, and Facebook link.
  - `Footer.tsx`: The site footer with navigation and developer credit.
  - `ScrollAnimation.tsx`: A wrapper component that provides the fade-in animation.
- `public/`: Contains all static assets, such as the `hero-background.jpg` image, icons, and placeholder images.
- `tailwind.config.ts`: The configuration file for Tailwind CSS. It defines the project's custom design tokens, including fonts (Lato, Playfair Display) and the color palette (e.g., `primary: "#A72608"`)
