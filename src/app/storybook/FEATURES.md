# Storybook Features Guide

## 🎨 Visual Overview

The Component Storybook is a custom-built showcase and testing environment with a beautiful, ethereal design that matches the Back To Sourcecode aesthetic.

## 🌟 Main Features

### 1. Header Section
- **Title**: "Component Storybook" with gradient text effect
- **Subtitle**: "Explore and test reusable components"
- **Back to Home**: Quick navigation link
- **Sticky Navigation**: Stays visible while scrolling

### 2. Tab Navigation

Two main modes accessible via prominent tabs:

#### 📖 Component Showcase
- Browse all components organized by category
- View live examples with descriptions
- Toggle between preview and code view
- Copy-ready code snippets

#### 🎮 Interactive Playground
- Real-time component customization
- Visual controls (sliders, color pickers)
- Live preview updates
- Auto-generated code based on settings

### 3. Category Filters (Showcase Mode)

Filter components by type:
- **All Components**: View everything
- **Hero Banners**: Full-featured hero sections
- **Sacred Geometry**: Mandala and Flower of Life
- **Spirit Components**: Buttons, text, containers

### 4. Component Cards

Each component showcase includes:

**Header Section:**
- Component icon with gradient background
- Component name
- Category badge
- Description

**Example Cards:**
- Example title and description
- Preview/Code toggle button
- Live component preview OR code snippet
- Glassmorphic card design with hover effects

### 5. Interactive Playground

**Left Panel (Sticky):**
- Live preview area with dark gradient background
- Reset button to restore defaults
- Generated code display

**Right Panel (Scrollable):**
- Control sections for each property
- Sliders with custom styling (gradient thumbs)
- Color pickers with hex input
- Real-time value display

**Available Controls:**

For Mandala:
- Size (100-500px)
- Layers (3-15)
- Opacity (0.1-1.0)
- Spin Duration (10-120s)
- Color A (color picker + hex)
- Color B (color picker + hex)

For Flower of Life:
- Size (200-600px)
- Rings (1-7)
- Opacity (0.1-1.0)
- Spin Duration (20-150s)
- Stroke Color (color picker + hex)

### 6. Background Effects

**Floating Orbs:**
- Purple orb (top-left) - slow floating animation
- Teal orb (bottom-right) - slow floating animation
- Subtle blur and opacity for depth

**Gradient Background:**
- Radial gradient from dark center
- Purple and teal color stops
- Creates ethereal atmosphere

## 🎯 Component Examples Included

### HeroBanner (3 examples)
1. **Basic Hero**
   - Simple title, subtitle, chips
   - Primary CTA button
   - 400px height for preview

2. **Custom Colors**
   - Purple gradient theme
   - Custom orb colors (red/yellow)
   - Demonstrates theming

3. **Minimal**
   - Performance-optimized
   - No orbs, reduced geometry opacity
   - Clean aesthetic

### Mandala (3 examples)
1. **Default Mandala**
   - 300px, 6 layers
   - Standard purple/teal colors
   - 60s rotation

2. **Custom Colors**
   - Red/yellow color scheme
   - 9 layers for complexity
   - Faster 45s rotation

3. **Fast Rotation**
   - 12 layers
   - 20s rotation (high energy)
   - Counter-clockwise direction

### Flower of Life (2 examples)
1. **Default Pattern**
   - 400px, 3 rings
   - Standard configuration
   - 80s rotation

2. **Complex Pattern**
   - 5 rings for intricate design
   - Custom teal stroke
   - Slower 100s rotation

### QuantumButton (2 examples)
1. **Button Variants**
   - All 4 variants displayed
   - All 4 sizes shown
   - Demonstrates variety

2. **Special Effects**
   - Consciousness effect
   - Glitch effect
   - Combined effects

### GlassMorphism (1 example)
1. **Intensity Levels**
   - 4 cards in grid
   - Low, medium, high, consciousness
   - With/without glow

### ConsciousnessText (2 examples)
1. **Text Variants**
   - Heading, mystical, code, body
   - Different sizes
   - Gradient and consciousness effects

2. **Typewriter Effect**
   - Animated typing
   - Gradient text
   - Demonstrates animation

## 🎨 Design System

### Colors
- **Primary**: Cosmic Purple (#7F39FB)
- **Secondary**: Quantum Teal (#00FFD4)
- **Background**: Dark gradients (#0a0a0f, #120a26)
- **Text**: White with various opacities
- **Borders**: White at 10% opacity

### Typography
- **Headings**: Bold, gradient text
- **Body**: Light gray (#c9c7d3)
- **Code**: Monospace, teal color

### Spacing
- Consistent padding (4, 6, 8 units)
- Card gaps (4, 6 units)
- Section spacing (12 units)

### Effects
- **Glassmorphism**: Backdrop blur with transparency
- **Gradients**: Linear and radial
- **Shadows**: Subtle with purple/teal glow
- **Animations**: Smooth transitions with Framer Motion

## 🚀 User Interactions

### Hover States
- Cards: Border color change to purple
- Buttons: Scale and shadow effects
- Sliders: Thumb enlarges with glow

### Click Actions
- Category filters: Switch active category
- Tab navigation: Switch between modes
- Code toggle: Show/hide code
- Playground controls: Update preview
- Reset button: Restore defaults

### Animations
- Page load: Fade in with slide up
- Tab switch: Smooth content transition
- Code toggle: Fade transition
- Background orbs: Continuous floating

## 📱 Responsive Design

### Desktop (>768px)
- Full navigation visible
- Two-column playground layout
- Grid layouts for examples

### Mobile (<768px)
- Simplified navigation
- Single-column layouts
- Touch-friendly controls
- Stacked playground panels

## ♿ Accessibility

- **Keyboard Navigation**: All interactive elements
- **Focus States**: Visible focus indicators
- **Reduced Motion**: Respects user preferences
- **Color Contrast**: WCAG compliant
- **Semantic HTML**: Proper heading hierarchy

## 🔧 Technical Implementation

### State Management
- React useState for local state
- Category selection
- Tab navigation
- Code visibility toggles
- Playground control values

### Performance
- Lazy loading for heavy components
- Optimized re-renders
- Smooth 60fps animations
- Efficient state updates

### Code Quality
- TypeScript for type safety
- Component composition
- Reusable patterns
- Clean separation of concerns

## 💡 Usage Tips

1. **Start with Showcase**: Browse examples first
2. **Use Playground**: Experiment with settings
3. **Copy Code**: Use generated snippets
4. **Try Combinations**: Mix different properties
5. **Check Mobile**: Test responsive behavior

## 🎯 Best For

- **Learning**: Understand component capabilities
- **Prototyping**: Quick visual experiments
- **Documentation**: Reference for developers
- **Testing**: Verify component behavior
- **Inspiration**: Discover new combinations

---

**Experience the storybook at `/storybook`** ✨

