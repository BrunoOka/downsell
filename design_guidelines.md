# Design Guidelines: Fitness Pack Downsell Page

## Design Approach
**Reference-Based Approach**: Inspired by high-converting sales pages like ClickFunnels, Kajabi, and modern Brazilian e-commerce landing pages. Focus on urgency, scarcity, and emotional triggers with vibrant, energetic aesthetics.

## Core Design Principles
- **Maximum Urgency**: Countdown timer, limited-time messaging, last-chance psychology
- **Vibrant Energy**: Orange→gold gradients or lime green accents reflecting fitness/action
- **Above-the-fold focus**: All critical elements visible without scrolling
- **Trust & Security**: Payment badges, guarantees, immediate access messaging

## Typography
- **Headlines**: Bold, impactful sans-serif (Montserrat Bold or Poppins Bold), 32-40px for main headline
- **Subheadings**: Semi-bold, 20-24px for section headers
- **Body**: Regular weight, 16-18px for benefits and descriptions
- **CTAs**: All caps, bold, 18-20px for maximum visibility
- **Urgency text**: Red/orange accents for time-sensitive messaging

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8 for consistent rhythm (p-4, m-6, gap-8)
**Container**: Max-width container (max-w-5xl) centered, compact single-screen layout

## Color Strategy
- **Primary CTA**: Vibrant orange→gold gradient (#FF6B35 → #FFB347) with neon glow
- **Background**: Dark charcoal (#1A1A1A) or deep navy for contrast
- **Accent**: Lime green (#A4DE02) for alternative highlights
- **Decline button**: Dark gray (#2B2B2B)
- **Text**: White primary, light gray secondary
- **Urgency elements**: Bright red (#FF3333) for countdown/warnings

## Component Library

### Hero Section
- **Layout**: Full-width with fitness action image (person training: squat/deadlift/pushup) on left 40%, content on right 60%
- **Image treatment**: Vibrant color grading, high energy, motion captured
- **Headline zone**: Large bold text with emoji integration, urgency messaging
- **Countdown**: Prominent digital timer with red background, pulsating animation

### Primary CTA Button
- **Size**: Extra large (w-full max-w-md, py-6 px-8)
- **Visual**: Orange→gold gradient with soft pulsating animation (scale 1.0→1.05)
- **Effects**: Neon glow (box-shadow with orange/gold), subtle drop shadow
- **Hover**: Intensified glow, slight scale increase (1.05→1.08)
- **Text**: "💪 QUERO O PACK ESSENCIAL POR R$5,00" in white, bold, uppercase

### Decline Button
- **Size**: Medium, less prominent than CTA
- **Visual**: Flat dark gray (#2B2B2B), no gradients
- **Hover**: Slight darkening (#1F1F1F)
- **Text**: "❌ Não quero aproveitar esta última chance" in light gray

### Benefits Grid
- **Layout**: 2x2 grid on desktop, stack on mobile
- **Items**: 
  - 🎥 25 vídeos práticos
  - 📘 PDF essencial
  - 📱 Acesso vitalício
  - 💸 Garantia 7 dias
- **Style**: Icon + bold title + brief description, white cards on dark background

### Trust Elements
- **Badges**: Secure payment icons, money-back guarantee seal
- **Placement**: Below CTA, centered row
- **Style**: Small, subtle, professional (not distracting from CTA)

## Images
**Required Image**: Large fitness action photo showing person performing squat, deadlift, or pushup
- **Placement**: Hero section, left side or full-width background with overlay
- **Treatment**: High contrast, vibrant color grading, energy/motion captured
- **Quality**: Professional, authentic (not stock-looking), diverse representation

## Animations
- **Countdown timer**: Minimal tick animation
- **Primary CTA**: Subtle continuous pulse (1s intervals)
- **CTA hover**: Smooth glow intensification
- **Keep minimal**: Focus attention, not distract

## Accessibility
- High contrast ratios (white on dark backgrounds)
- Clear focus states for keyboard navigation
- Readable font sizes (minimum 16px)
- Alt text for fitness image

## Critical UX Elements
1. **Urgency Stack**: Countdown → Scarcity message → Limited-time pricing
2. **Value Proposition**: Clear before/after pricing (R$49 → R$4.99)
3. **Risk Reversal**: 7-day guarantee prominently displayed
4. **Social Proof**: "Última oportunidade" messaging throughout
5. **Single Focus**: One goal - get user to click primary CTA

## Responsive Behavior
- **Desktop**: Side-by-side layout (image left, content right)
- **Mobile**: Stack vertically, maintain CTA prominence
- **Compact**: Entire page fits in one viewport on desktop when possible