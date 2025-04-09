# 🛍️ Moça Chic Fortaleza

![Moça Chic Logo](/public/icon.png)

A modern e-commerce platform for Moça Chic Fortaleza, a women's fashion store offering elegant and sophisticated clothing.

## 📋 Overview

Moça Chic Fortaleza is a women's fashion store specializing in exclusive, elegant, and sophisticated pieces. This website serves as both an online catalog and a digital platform for the brand, connecting customers with their collections and providing an easy way to make purchases via WhatsApp.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** 
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
  - [Tailwind Merge](https://github.com/dcastil/tailwind-merge) for merging Tailwind classes
  - [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate) for animations
- **Component Library:** Custom UI components with [shadcn/ui](https://ui.shadcn.com/) principles
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes) for theme management
- **Typography:** Google Fonts (Bodoni Moda SC, Montserrat)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Development Tools:**
  - TypeScript
  - ESLint
  - Prettier

## ✨ Features

- **Responsive Design:** Fully responsive layout that works across all devices
- **SEO Optimized:** Built-in SEO components and structured data with JSON-LD
- **Performance Focused:** Optimized images and assets for fast loading
- **WhatsApp Integration:** Direct customer communication via WhatsApp
- **Theme Support:** Light and dark mode with smooth transitions
- **Analytics:** Google Analytics and Meta Pixel integration
- **Interactive Elements:** 
  - Testimonials section
  - Product showcase
  - Simple chatbot for customer inquiries

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/MocaChic-Store.git
cd MocaChic-Store
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
pnpm build
```

To start the production build locally:
```bash
pnpm start
```

## 📁 Project Structure

```
MocaChic-Store/
├── app/                  # Next.js App Router pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Homepage
├── components/           # React components
│   ├── seo/              # SEO-related components
│   └── ui/               # UI components
│       ├── actions/      # Interactive components
│       └── basic/        # Fundamental UI elements
├── public/               # Static assets
│   └── images/           # Image assets
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📱 Contact

For inquiries about the Moça Chic Fortaleza store:
- **Email:** mocachicfortaleza@gmail.com
- **Phone:** (92) 99412-8570
- **Address:** Avenida Jurunas, AF-25, Cidade Nova, Manaus

## 📝 License

This project is proprietary and all rights are reserved by Moça Chic Fortaleza.