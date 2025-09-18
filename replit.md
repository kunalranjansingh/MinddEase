# MindEase Youth Mental Wellness Platform

## Overview

MindEase is a comprehensive youth mental wellness platform that provides 24/7 AI-powered support through multiple therapeutic modalities. The application combines modern web technologies with mental health best practices to create a safe, accessible digital space for young people. The platform features an AI chatbot for emotional support, creative expression tools (Emotion Sandbox), dream reframing capabilities (Dream Journal), personal reflection spaces, and emergency SOS assistance. Built with accessibility and multilingual support in mind, particularly focusing on English and Hindi languages to serve diverse youth populations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state with React Context for local state management
- **Styling**: Tailwind CSS with a custom design system inspired by mental health platforms like Headspace and Calm
- **Component Library**: Radix UI primitives with shadcn/ui components for accessibility-first design
- **Internationalization**: Custom translation system supporting English and Hindi with Google Fonts integration for proper multilingual typography

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript for full-stack type safety
- **Session Management**: Express sessions with configurable storage (memory-based for development, extensible to PostgreSQL)
- **Authentication**: Session-based authentication with bcrypt password hashing
- **API Design**: RESTful endpoints with consistent error handling and request/response patterns

### Data Storage Strategy
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for scalability
- **Schema**: User management with extensible design for mental health data
- **Local Storage**: Client-side usage tracking for achievements and analytics
- **Sessions**: Secure session storage with CSRF protection and HTTP-only cookies

### Design System
- **Theme**: Dual-mode light/dark theme with calming color palette (deep blues, sage greens)
- **Accessibility**: High contrast ratios, keyboard navigation, screen reader support
- **Typography**: Inter and Nunito fonts with special support for Devanagari script
- **Layout**: Responsive design with consistent spacing primitives and component patterns
- **Animations**: Subtle animations for breathing exercises and calming visual elements

### Mental Health Features Architecture
- **AI Integration**: Structured for OpenAI API integration with fallback mock responses
- **Emergency Support**: Always-visible SOS button with immediate access to coping strategies
- **Progress Tracking**: Local storage-based achievement system with real usage analytics
- **Content Safety**: Design patterns focused on positive reframing and emotional validation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, Wouter for routing, React Hook Form with Zod validation
- **UI Components**: Radix UI primitive components, Lucide React icons, Recharts for data visualization
- **Development**: Vite build system, TypeScript compiler, Tailwind CSS, PostCSS

### Backend Services
- **Database**: Neon Database (PostgreSQL), Drizzle ORM with PostgreSQL adapter
- **Authentication**: bcrypt for password hashing, express-session for session management
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### External APIs (Planned)
- **AI Services**: OpenAI API for conversational AI, content generation, and dream reframing
- **Mental Health Resources**: Integration points for crisis helplines and professional resources
- **Analytics**: Usage tracking for therapeutic effectiveness measurement

### Third-Party Integrations
- **Google Fonts**: Inter and Noto Sans Devanagari for multilingual typography
- **Replit Platform**: Development environment integration with error handling and cartographer tools
- **Session Storage**: connect-pg-simple for PostgreSQL session storage in production

### Development & Deployment
- **Package Management**: npm with lockfile for consistent dependency versions
- **Build Process**: Vite for client bundling, esbuild for server bundling
- **Environment**: Node.js runtime with Express.js server framework
- **Database Migrations**: Drizzle Kit for schema management and migrations