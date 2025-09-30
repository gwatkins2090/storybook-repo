# Component Storybook

A custom-built component showcase and testing environment for the Back To Sourcecode project.

## 🎯 Purpose

This storybook serves as a living documentation and testing environment for all reusable components in the project. It provides:

- **Visual Examples**: See components in action with various configurations
- **Interactive Playground**: Experiment with component properties in real-time
- **Code Generation**: Get ready-to-use code snippets for each configuration
- **Category Filtering**: Browse components by type (Hero, Sacred Geometry, Spirit)

## 🚀 Access

Visit the storybook at: `/storybook`

## 📚 Features

### Component Showcase

Browse and explore all reusable components organized by category:

- **Hero Banners**: Full-featured hero sections with sacred geometry
- **Sacred Geometry**: Mandala and Flower of Life components
- **Spirit Components**: Buttons, text, and glassmorphic containers

Each component example includes:
- Live preview
- Description
- Toggle between preview and code view
- Copy-ready code snippets

### Interactive Playground

Experiment with component properties using interactive controls:

- **Real-time Updates**: See changes instantly as you adjust properties
- **Visual Controls**: Sliders, color pickers, and toggles
- **Code Generation**: Automatically generates code based on your settings
- **Reset Function**: Quickly return to default values

Available in playground:
- Mandala component
- Flower of Life component

## 🎨 Components Showcased

### HeroBanner
- Basic hero with title and CTAs
- Custom color themes
- Minimal performance-optimized version

### Mandala
- Default configuration
- Custom colors
- Fast rotation variants

### Flower of Life
- Standard pattern
- Complex multi-ring designs

### QuantumButton
- All variants (primary, secondary, ghost, consciousness)
- Different sizes
- Special effects (glitch, consciousness)

### GlassMorphism
- Intensity levels (low, medium, high, consciousness)
- With and without glow effects

### ConsciousnessText
- Text variants (heading, body, code, mystical)
- Typewriter effect
- Gradient and consciousness effects

## 🛠️ Technical Details

### File Structure

```
src/app/storybook/
├── page.tsx                    # Main storybook page
├── InteractivePlayground.tsx   # Interactive controls component
└── README.md                   # This file
```

### Technologies Used

- **React**: Component framework
- **Framer Motion**: Animations and transitions
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **Lucide React**: Icons

### Key Features

1. **Tab Navigation**: Switch between Showcase and Playground modes
2. **Category Filtering**: Filter components by type
3. **Code Toggle**: View component code or live preview
4. **Responsive Design**: Works on all screen sizes
5. **Thematic Styling**: Matches the ethereal, spirit-techno aesthetic

## 🎯 Use Cases

### For Developers

- **Component Discovery**: Find the right component for your needs
- **API Reference**: See all available props and configurations
- **Code Examples**: Copy working code snippets
- **Testing**: Experiment with different configurations

### For Designers

- **Visual Reference**: See how components look with different settings
- **Color Exploration**: Test different color schemes
- **Animation Preview**: See components in motion

### For Documentation

- **Living Documentation**: Always up-to-date with the codebase
- **Visual Examples**: Better than text descriptions
- **Interactive Learning**: Hands-on exploration

## 🚀 Adding New Components

To add a new component to the storybook:

1. **Add to showcases array** in `page.tsx`:

```tsx
{
  id: 'your-component',
  name: 'YourComponent',
  category: 'spirit', // or 'hero', 'sacred', 'quantum'
  icon: <YourIcon className="w-5 h-5" />,
  description: 'Component description',
  examples: [
    {
      id: 'example-1',
      title: 'Example Title',
      description: 'Example description',
      component: <YourComponent />,
      code: `<YourComponent />`,
    },
  ],
}
```

2. **Import the component** at the top of the file

3. **Add category** if it's a new type

4. **Test** the showcase to ensure it displays correctly

## 🎨 Styling Guidelines

The storybook follows the project's design system:

- **Colors**: Cosmic purple (#7F39FB) and quantum teal (#00FFD4)
- **Backgrounds**: Dark gradients with radial effects
- **Borders**: Subtle white/10 opacity
- **Typography**: Gradient text for headings
- **Animations**: Smooth transitions with Framer Motion

## 📝 Best Practices

1. **Keep Examples Simple**: Each example should demonstrate one concept
2. **Provide Context**: Include descriptions for each example
3. **Show Variations**: Include multiple configurations
4. **Code Accuracy**: Ensure code snippets match the preview
5. **Performance**: Optimize examples for smooth rendering

## 🔮 Future Enhancements

Potential additions:

- [ ] More interactive playgrounds for other components
- [ ] Props table documentation
- [ ] Search functionality
- [ ] Favorites/bookmarking
- [ ] Export configurations
- [ ] Dark/light mode toggle
- [ ] Responsive preview modes
- [ ] Accessibility testing tools
- [ ] Performance metrics
- [ ] Component composition examples

## 🌟 Tips

- **Use the Playground**: Best way to understand component capabilities
- **Copy Code**: Click the "Code" button to see implementation
- **Experiment**: Try different combinations in the playground
- **Check Categories**: Use filters to find specific component types
- **Bookmark**: Save `/storybook` for quick access

## 📖 Related Documentation

- [HeroBanner Documentation](../../components/hero/README.md)
- [Component Examples](../../components/hero/examples.tsx)
- [Setup Guide](../../components/hero/SETUP.md)

---

**Built with ✨ consciousness and 🌀 sacred geometry**

