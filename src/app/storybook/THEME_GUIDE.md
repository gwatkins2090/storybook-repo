# 🎨 Storybook Theme Guide - Pink/Magenta Edition

## Color Reference

### Quick Copy Colors

```css
/* Primary Background */
#0f172a  /* Dark navy */
#1e293b  /* Blue-gray */

/* Accent Colors */
#FF1744  /* Vibrant pink (primary accent) */
#ec4899  /* Bright magenta (secondary accent) */
#FF3838  /* Bright red (tertiary accent) */

/* Text Colors */
#f8fafc  /* White/off-white (primary text) */
#94a3b8  /* Light gray (secondary text) */

/* UI Elements */
#1e3a5f  /* Dark blue-gray (badge background) */
#334155  /* Slate gray (borders, inputs) */
#475569  /* Lighter slate (hover borders) */
```

---

## Typography Scale

### Headings
```tsx
// Page Title (h1)
className="text-4xl font-black text-[#f8fafc]"

// Section Title (h2)
className="text-3xl font-black text-[#f8fafc]"

// Component Title (h2)
className="text-2xl font-black text-[#f8fafc]"

// Card Title (h3)
className="text-xl font-bold text-[#f8fafc]"

// Control Label
className="text-base font-bold text-[#f8fafc]"
```

### Body Text
```tsx
// Primary Description
className="text-lg font-medium text-[#94a3b8]"

// Secondary Description
className="text-base text-[#94a3b8] font-medium"

// Small Text
className="text-sm font-semibold text-[#94a3b8]"
```

### Gradients
```tsx
// Title Gradient
className="bg-gradient-to-r from-[#FF1744] via-[#ec4899] to-[#FF3838] bg-clip-text text-transparent"

// Button Gradient
className="bg-gradient-to-r from-[#FF1744] to-[#ec4899]"

// Background Gradient
className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
```

---

## Component Patterns

### Primary Button
```tsx
<button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#ec4899] text-white font-bold text-lg shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:shadow-[0_0_50px_rgba(255,23,68,0.6)] transition-all duration-300">
  Button Text
</button>
```

### Secondary Button
```tsx
<button className="px-5 py-2.5 rounded-lg bg-[#1e293b] border-2 border-[#FF1744] text-[#f8fafc] hover:bg-[#FF1744] hover:shadow-[0_0_20px_rgba(255,23,68,0.5)] transition-all duration-300 font-semibold">
  Button Text
</button>
```

### Tab Button (Active)
```tsx
<button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#ec4899] text-white font-bold text-lg shadow-[0_0_30px_rgba(255,23,68,0.4)] scale-105 transition-all duration-300">
  Active Tab
</button>
```

### Tab Button (Inactive)
```tsx
<button className="px-8 py-4 rounded-xl bg-[#1e293b] border-2 border-[#334155] text-[#94a3b8] hover:border-[#FF1744] hover:text-[#f8fafc] font-bold text-lg transition-all duration-300">
  Inactive Tab
</button>
```

### Filter Button (Active)
```tsx
<button className="px-5 py-3 rounded-lg bg-[#1e3a5f] border-2 border-[#FF1744] text-[#f8fafc] shadow-[0_0_15px_rgba(255,23,68,0.3)] font-semibold transition-all duration-300">
  Active Filter
</button>
```

### Filter Button (Inactive)
```tsx
<button className="px-5 py-3 rounded-lg bg-[#1e293b]/50 border-2 border-[#334155] text-[#94a3b8] hover:border-[#ec4899] hover:text-[#f8fafc] font-semibold transition-all duration-300">
  Inactive Filter
</button>
```

---

## Card Patterns

### Component Card
```tsx
<div className="rounded-2xl bg-[#1e293b] border-2 border-[#334155] shadow-lg hover:border-[#FF1744] hover:shadow-[0_0_30px_rgba(255,23,68,0.3)] transition-all duration-300">
  {/* Content */}
</div>
```

### Example Card Header
```tsx
<div className="p-6 border-b-2 border-[#334155] bg-[#0f172a]/50">
  <h3 className="text-xl font-bold text-[#f8fafc] mb-2">Title</h3>
  <p className="text-base text-[#94a3b8] font-medium">Description</p>
</div>
```

### Control Card
```tsx
<div className="bg-[#1e293b] rounded-xl p-5 border-2 border-[#334155] hover:border-[#FF1744] transition-all duration-300">
  <label className="block text-base font-bold text-[#f8fafc] mb-3">
    Label: <span className="text-[#ec4899]">Value</span>
  </label>
  {/* Control */}
</div>
```

### Preview Card
```tsx
<div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border-2 border-[#FF1744] shadow-[0_0_40px_rgba(255,23,68,0.25)]">
  {/* Preview Content */}
</div>
```

---

## Input Patterns

### Range Slider
```tsx
<input
  type="range"
  className="w-full h-2 bg-[#334155] rounded-lg appearance-none cursor-pointer slider"
/>
```

### Color Picker
```tsx
<input
  type="color"
  className="w-14 h-14 rounded-lg cursor-pointer border-2 border-[#FF1744]"
/>
```

### Text Input
```tsx
<input
  type="text"
  className="px-4 py-3 bg-[#0f172a] border-2 border-[#334155] rounded-lg text-[#f8fafc] font-mono font-bold focus:border-[#FF1744] focus:outline-none"
/>
```

---

## Badge Patterns

### Category Badge
```tsx
<span className="px-4 py-1.5 rounded-full text-sm font-bold bg-[#1e3a5f] border-2 border-[#FF1744] text-[#f8fafc]">
  Category
</span>
```

---

## Code Display

### Code Block
```tsx
<pre className="bg-[#0f172a] rounded-xl p-6 overflow-x-auto border-2 border-[#334155]">
  <code className="text-base text-[#ec4899] font-mono leading-relaxed">
    {code}
  </code>
</pre>
```

---

## Glow Effects

### Button Glow
```css
/* Default */
shadow-[0_0_20px_rgba(255,23,68,0.4)]

/* Hover */
shadow-[0_0_30px_rgba(255,23,68,0.6)]

/* Active/Strong */
shadow-[0_0_40px_rgba(255,23,68,0.8)]
```

### Card Glow
```css
/* Subtle */
shadow-[0_0_15px_rgba(255,23,68,0.3)]

/* Medium */
shadow-[0_0_30px_rgba(255,23,68,0.3)]

/* Strong */
shadow-[0_0_40px_rgba(255,23,68,0.25)]
```

### Header Glow
```css
shadow-[0_4px_20px_rgba(255,23,68,0.15)]
```

---

## Animation Patterns

### Hover Scale
```tsx
className="hover:scale-105 transition-all duration-300"
```

### Border Transition
```tsx
className="border-2 border-[#334155] hover:border-[#FF1744] transition-all duration-300"
```

### Glow Transition
```tsx
className="shadow-[0_0_20px_rgba(255,23,68,0.4)] hover:shadow-[0_0_30px_rgba(255,23,68,0.6)] transition-all duration-300"
```

---

## Spacing Scale

### Padding
```tsx
p-3   // Small elements
p-5   // Medium elements (controls)
p-6   // Large elements (headers)
p-8   // Extra large (content areas)
```

### Margin Bottom
```tsx
mb-2  // Tight spacing
mb-3  // Normal spacing
mb-6  // Section spacing
mb-8  // Large section spacing
```

### Gap
```tsx
gap-2  // Tight
gap-3  // Normal
gap-4  // Comfortable
gap-8  // Wide
```

---

## Border Radius

```tsx
rounded-lg   // Small elements (8px)
rounded-xl   // Medium elements (12px)
rounded-2xl  // Large cards (16px)
rounded-full // Pills/badges
```

---

## Icon Sizes

```tsx
w-4 h-4   // Small icons (buttons)
w-5 h-5   // Medium icons (tabs)
w-6 h-6   // Large icons (headings)
w-8 h-8   // Extra large icons
w-10 h-10 // Hero icons
```

---

## Accessibility

### Focus States
```tsx
focus:border-[#FF1744] focus:outline-none
```

### Reduced Motion
```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Usage Examples

### Complete Button Example
```tsx
<button
  onClick={handleClick}
  className="px-8 py-4 rounded-xl flex items-center gap-3 bg-gradient-to-r from-[#FF1744] to-[#ec4899] text-white font-bold text-lg shadow-[0_0_30px_rgba(255,23,68,0.4)] hover:shadow-[0_0_50px_rgba(255,23,68,0.6)] transition-all duration-300"
>
  <Icon className="w-5 h-5" />
  Button Text
</button>
```

### Complete Card Example
```tsx
<div className="rounded-2xl bg-[#1e293b] border-2 border-[#334155] shadow-lg hover:border-[#FF1744] hover:shadow-[0_0_30px_rgba(255,23,68,0.3)] transition-all duration-300">
  <div className="p-6 border-b-2 border-[#334155] bg-[#0f172a]/50">
    <h3 className="text-xl font-bold text-[#f8fafc] mb-2">Card Title</h3>
    <p className="text-base text-[#94a3b8] font-medium">Card description</p>
  </div>
  <div className="p-8">
    {/* Card content */}
  </div>
</div>
```

---

## 🎯 Design Principles

1. **High Contrast**: Always use `#f8fafc` text on dark backgrounds
2. **Bold Typography**: Use `font-bold` or `font-black` for emphasis
3. **Generous Spacing**: Don't be afraid of whitespace
4. **Vibrant Accents**: Pink/magenta for all interactive elements
5. **Smooth Transitions**: 300ms duration for all animations
6. **Glow Effects**: Add depth with shadow glows
7. **Consistent Borders**: 2px borders for all cards/buttons
8. **Rounded Corners**: xl or 2xl for modern feel

---

**This theme is designed for maximum readability and visual impact!** 🚀

