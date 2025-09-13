# Ali Rezaye - Full-Stack Developer Portfolio

A modern, responsive portfolio website showcasing full-stack JavaScript development skills with advanced interactive features that employers love to see.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL Here]

## ✨ Key Features

### 🎨 Modern Design & UX

- **Dark/Light Theme Toggle** - Persistent theme switching with localStorage
- **Smooth Animations** - CSS transitions and scroll-triggered animations
- **Glassmorphism Effects** - Modern visual design with backdrop filters
- **Responsive Design** - Mobile-first approach, works on all devices
- **Accessible Navigation** - WCAG compliant with proper focus management

### 🚀 Advanced Interactive Features

- **Project Filtering System** - Dynamic content filtering with smooth transitions
- **Modal Dialogs** - Interactive project previews with embedded demos
- **Animated Progress Bars** - Skill visualization triggered by scroll intersection
- **Real-time Clock** - Live Afghanistan timezone display
- **Scroll-triggered Animations** - Engaging user experience with IntersectionObserver

### 💼 Professional Contact System

- **Gmail Direct Integration** - Opens compose window with pre-filled content
- **WhatsApp Integration** - Direct messaging for instant communication
- **Smart Clipboard Copy** - Professional message formatting
- **LinkedIn Integration** - Professional networking connection
- **Multiple Contact Methods** - Reliable alternatives to broken mailto: links

### ⚡ Technical Excellence

- **Semantic HTML5** - Proper document structure and accessibility
- **Modern CSS** - Custom properties, Grid, Flexbox, and animations
- **Vanilla JavaScript** - No dependencies, lightweight and fast
- **Performance Optimized** - Lazy loading and efficient observers
- **SEO Friendly** - Proper meta tags and semantic structure

## 🛠 Technologies Used

| Category        | Technologies                              |
| --------------- | ----------------------------------------- |
| **Frontend**    | HTML5, CSS3, JavaScript (ES6+)            |
| **Styling**     | CSS Grid, Flexbox, CSS Custom Properties  |
| **Fonts**       | Google Fonts (Inter)                      |
| **APIs**        | Clipboard API, IntersectionObserver API   |
| **Storage**     | localStorage for theme persistence        |
| **Performance** | Native lazy loading, optimized animations |

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── README.md              # This file
├── assets/                # (Optional) Images and resources
│   └── Ali_Rezaye_Resume.txt
└── screenshots/           # (Optional) Portfolio screenshots
    ├── desktop-dark.png
    ├── desktop-light.png
    └── mobile-responsive.png
```

## 🎯 Featured Projects

### 1. Author Taxon Cleaner

- **Tech Stack**: Angular, NestJS, Redis, BullMQ, MariaDB, Nx
- **Features**: Chunked file processing, real-time progress tracking, background jobs
- **Live Demo**: Interactive preview in modal

### 2. Symbiota2 Documentation Site

- **Tech Stack**: Angular, Static deployment
- **Features**: Responsive design, search functionality, comprehensive docs
- **Status**: Deployed and live

### 3. The Odin Project Demos

- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Multiple interactive demos, accessibility improvements
- **Focus**: Frontend fundamentals and clean code practices

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
base: 320px+ /* Mobile devices */ 768px+ /* Tablets */ 1024px+ /* Desktop */
  1200px+; /* Large screens */
```

## 🎨 Color Scheme & Theming

### Dark Theme (Default)

```css
--bg: #0a0a0a
--surface: #111111
--border: #222222
--text: #ffffff
--accent: #00d9ff
```

### Light Theme

```css
--bg: #ffffff
--surface: #f8fafc
--border: #e2e8f0
--text: #1e293b
--accent: #00d9ff
```

## 🚀 Quick Start

1. **Clone or Download** the portfolio files
2. **Open `index.html`** in your browser
3. **Customize** the content with your information
4. **Deploy** to your preferred hosting platform

## ✏️ Customization Guide

### Personal Information

Update these sections in `index.html`:

```html
<!-- Header Brand -->
<div class="logo">AR</div>
<!-- Your initials -->
<div class="title">Your Name</div>
<div>Your Title/Description</div>

<!-- Contact Information -->
<div>📞 Your Phone</div>
<div>📧 your.email@example.com</div>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourname">LinkedIn</a>
```

### Projects Section

Modify the `projectData` object in the JavaScript:

```javascript
const projectData = {
  yourproject: {
    title: "Your Project Name",
    description: "Project description...",
    code: `# Your tech stack and features`,
    repo: "https://github.com/yourusername/project",
    live: "https://yourproject.demo.com",
    preview: `<!-- Your HTML preview -->`,
  },
};
```

### Skills & Progress Bars

Update skill percentages:

```html
<div class="bar" data-value="85"></div>
<!-- Change percentage -->
```

### Contact Information

Replace with your actual contact details:

```javascript
const contactInfo = `Your Name - Your Title
📧 Email: your.email@example.com
📱 Phone: +your-phone
💼 LinkedIn: your-linkedin-url
💻 GitHub: your-github-url`;
```

## 🌟 Performance Features

- **Intersection Observer** - Efficient scroll-based animations
- **CSS Custom Properties** - Dynamic theming without JavaScript
- **Optimized Images** - Lazy loading and proper sizing
- **Minimal Dependencies** - Pure vanilla JavaScript
- **Efficient DOM Queries** - Cached selectors and event delegation

## 🔧 Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 10.1+   |
| Edge    | 79+     |

### Required APIs

- CSS Custom Properties
- IntersectionObserver API
- Clipboard API (for copy functions)
- localStorage (for theme persistence)

## 📊 Accessibility Features

- **Semantic HTML** - Proper heading hierarchy and landmark roles
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators and modal focus trapping
- **ARIA Labels** - Screen reader support
- **Color Contrast** - WCAG AA compliant contrast ratios
- **Reduced Motion** - Respects prefers-reduced-motion settings

## 🚀 Deployment Options

### Static Hosting

- **GitHub Pages** - Free hosting with custom domain support
- **Netlify** - Drag and drop deployment with form handling
- **Vercel** - Fast deployment with edge functions
- **Firebase Hosting** - Google's hosting with CDN

### Quick Deploy Commands

#### GitHub Pages

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
# Enable Pages in repository settings
```

#### Netlify

```bash
# Drag and drop the portfolio folder to netlify.com
# Or connect GitHub repository for auto-deployment
```

## 📈 SEO Optimization

The portfolio includes:

- Proper meta tags and Open Graph data
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design
- Accessible navigation
- Clean URLs (when deployed)

## 🤝 Contributing

If you find bugs or want to suggest improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ali Rezaye** - Full-Stack JavaScript Developer

- 📧 Email: ali.elham1252@gmail.com
- 📱 Phone: +93 791 870 614
- 💼 LinkedIn: [linkedin.com/in/ali-rezaye](https://linkedin.com/in/ali-rezaye)
- 💻 GitHub: [github.com/ali-rezaye](https://github.com/ali-rezaye)
- 📍 Location: Kabul, Afghanistan

---

## 🎯 Portfolio Highlights

> "Available for remote work immediately. Open to employer-sponsored relocation and resettlement pathways."

### Tech Stack Expertise

- **Frontend**: Angular, TypeScript, HTML5, CSS3, JavaScript
- **Backend**: Node.js, NestJS, Express.js
- **Databases**: MariaDB, PostgreSQL, Redis
- **Tools**: Docker, Nx Monorepo, Git, CI/CD
- **Specialties**: Queue Systems (BullMQ), WebSockets, REST APIs

---

⭐ **Star this repository if you found it helpful!**

_Last updated: September 2025_
