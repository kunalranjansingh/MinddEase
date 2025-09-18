# MindEase Youth Mental Wellness Website - Design Guidelines

## Design Approach: Reference-Based with Social Media Inspiration
Drawing from successful mental health and wellness platforms like Headspace, Calm, and modern healthcare apps, with social platform usability patterns for the community features.

## Core Design Principles
- **Calming & Trustworthy**: Soft, approachable aesthetics that reduce anxiety
- **Accessible**: High contrast, clear typography, intuitive navigation
- **Youth-Focused**: Modern, engaging without being childish
- **Multilingual First**: Clean design that adapts to different text lengths

## Color Palette
**Light Mode:**
- Primary: 210 45% 25% (Deep calming blue)
- Secondary: 150 30% 45% (Soft sage green)
- Background: 210 15% 98% (Warm off-white)
- Text: 210 20% 15% (Dark blue-gray)

**Dark Mode:**
- Primary: 210 40% 70% (Lighter blue)
- Secondary: 150 25% 65% (Muted green)
- Background: 210 25% 8% (Deep blue-black)
- Text: 210 10% 92% (Light blue-gray)

## Typography
- **Primary Font**: Inter (Google Fonts) - clean, readable, multilingual support
- **Secondary Font**: Nunito (Google Fonts) - friendly, approachable for headings
- **Scale**: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl

## Layout System
**Spacing Primitives**: 2, 4, 6, 8, 12, 16 units (p-2, m-4, gap-6, etc.)
- Generous whitespace for breathing room
- Consistent 16-unit container padding
- 6-8 unit component spacing

## Component Library

### Navigation
- Sticky header with language switcher (flag icons + dropdown)
- Hamburger menu for mobile with smooth slide-out
- Breadcrumb navigation for resources section

### Hero Section
- Large, calming gradient background (210 45% 25% to 150 30% 45%)
- Centered content with generous padding
- CTA buttons with variant="outline" and blurred backgrounds over hero

### Cards & Content
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadows for depth
- Hover states with gentle scale transforms
- Resource cards with category color coding

### Forms
- Rounded input fields with soft borders
- Focus states with primary color outlines
- Error states in warm red (0 65% 55%)
- Success states in secondary green

### Community Features
- Avatar circles for user profiles
- Chat bubbles with different styling for users/moderators
- Reaction buttons with emoji support
- Progress indicators for challenges

## Key Sections Structure
1. **Hero**: Welcome message, language switcher, main CTA
2. **Quick Access**: Crisis resources, chat now, find resources
3. **Features Grid**: Self-assessment, resources, community, challenges
4. **Testimonials**: User success stories
5. **Footer**: Support links, crisis hotlines, social media

## Images
- **Hero Background**: Abstract, calming geometric patterns or soft nature imagery
- **Feature Icons**: Custom illustrations in primary/secondary colors
- **Resource Thumbnails**: Category-based imagery (books, videos, articles)
- **Avatar Placeholders**: Diverse, inclusive default avatars
- **No large hero image** - focus on gradient backgrounds and illustrations

## Accessibility Features
- High contrast ratios (4.5:1 minimum)
- Focus indicators on all interactive elements
- Screen reader-friendly labels
- Keyboard navigation support
- Crisis resources always accessible via persistent button

## Responsive Behavior
- Mobile-first approach
- Collapsible navigation
- Stacked layouts on small screens
- Touch-friendly button sizes (minimum 44px)
- Adaptive text sizing for different languages

This design creates a safe, welcoming digital space that prioritizes user wellbeing while maintaining professional credibility and multilingual accessibility.