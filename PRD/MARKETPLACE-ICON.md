# Agentic Toolkit - Marketplace Icon Specification

## Icon Requirements

### Primary Icon (Plugin Logo)
**Filename**: `icon.png` or `icon.svg`

**Specifications**:
- **Dimensions**: 512x512 pixels (raster) or scalable vector
- **Format**: PNG (with transparency) or SVG
- **Background**: Transparent or solid background (recommend transparent)
- **Color**: Use Anthropic brand colors or professional tech aesthetics
  - Primary: Deep blue (#1f2937) or brand color
  - Accent: Cyan/turquoise for AI elements
  - Secondary: White or light gray for contrast

### Visual Concepts
The icon should convey:
- **Multi-Agent System**: Multiple interconnected elements representing different agents
- **Automation & Orchestration**: Flowing connections or unified nodes
- **Intelligence & AI**: Modern, tech-forward design
- **Development Focus**: Code/tech elements, but approachable

### Design Suggestions
1. **Stylized Nodes**: 3-4 connected circles/nodes representing agents working together
2. **Workflow Diagram**: Abstract flowchart showing agent orchestration
3. **Gear/Cog System**: Interlocking components representing collaboration
4. **Ascending Path**: Steps or nodes showing progression/optimization
5. **Abstract Agents**: Minimalist human figures or role icons connected by lines

### Color Palette
- **Primary Brand**: #1f2937 (deep gray/blue)
- **Accent 1**: #06b6d4 (cyan) - for AI/intelligence
- **Accent 2**: #3b82f6 (blue) - for tech/code
- **Neutral**: #f3f4f6 (light gray) - for contrast
- **White**: #ffffff - for text/contrast

### Icon Variants

#### Full Logo (512x512)
- Full toolkit name: "Agentic Toolkit"
- Icon + text combination
- Use for marketplace header

#### Icon Only (256x256, 128x128, 64x64)
- Minimal, scalable design
- Works at small sizes (favicon-size)
- Use for marketplace listings, tiles

#### Dark Mode Variant
- Alternative colors for dark backgrounds
- Ensure 4.5:1 contrast ratio minimum
- Use when platform supports dark themes

## File Structure
```
assets/
├── icon.png               # Primary 512x512 PNG
├── icon.svg               # Vector version (optional)
├── icon-256.png           # Medium size
├── icon-128.png           # Small size
├── icon-dark.png          # Dark mode variant
└── icon-favicon.ico       # Favicon (64x64)
```

## Marketplace Display

### Main Listing Card
- Icon size: 128x128 px
- Background: Light gray or white
- Padding: 16px
- Border radius: 8px

### Plugin Hero Section
- Icon size: 256x256 px
- Positioned: Left or center
- Text: Plugin name, tagline (right side)

### Variant Selection UI
- Lite variant: Simplified icon or badge
- Standard variant: Full icon
- Pro variant: Premium icon or special badge

## Recommended Tools for Creation
- **Figma**: For collaborative design
- **Adobe Illustrator**: For professional vector work
- **Sketch**: For UI/UX focused design
- **Inkscape**: For open-source vector editing
- **Canva**: For quick icon generation

## Icon Design Checklist
- [ ] Icon is recognizable at 64x64 pixels
- [ ] Colors follow brand guidelines
- [ ] Icon conveys "multi-agent" or "orchestration" concept
- [ ] Transparent background (if PNG)
- [ ] No fine details that lose quality when scaled down
- [ ] Accessible color contrast (4.5:1 WCAG AA)
- [ ] Professional, modern appearance
- [ ] Consistent with Claude/Anthropic brand aesthetic

## Placeholder Instructions

**Until custom icon is created**, use:
1. Simple geometric shape: circle, square, or hexagon
2. Anthropic brand color (#1f2937)
3. Abstract agent silhouettes (3-4 figures)
4. Connecting lines showing orchestration
5. Scalable SVG format

Example SVG structure:
```xml
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="256" cy="256" r="250" fill="#1f2937" opacity="0.1"/>

  <!-- Central node -->
  <circle cx="256" cy="256" r="60" fill="#06b6d4"/>

  <!-- Connected agent nodes -->
  <circle cx="150" cy="200" r="40" fill="#3b82f6" opacity="0.8"/>
  <circle cx="360" cy="200" r="40" fill="#3b82f6" opacity="0.8"/>
  <circle cx="256" cy="380" r="40" fill="#3b82f6" opacity="0.8"/>

  <!-- Connection lines -->
  <line x1="256" y1="256" x2="150" y2="200" stroke="#1f2937" stroke-width="3"/>
  <line x1="256" y1="256" x2="360" y2="200" stroke="#1f2937" stroke-width="3"/>
  <line x1="256" y1="256" x2="256" y2="380" stroke="#1f2937" stroke-width="3"/>
</svg>
```

## Notes
- Icon should be professional yet approachable
- Avoid overly complex designs that don't scale well
- Test icon at multiple sizes before final submission
- Consider how icon looks alongside other marketplace plugins
- Icon is critical for plugin discovery and brand recognition
