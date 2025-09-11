// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "dark" ? "☀️ Light" : "🌙 Dark";

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️ Light" : "🌙 Dark";
});

// Project filtering
const filterBtns = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach((project) => {
      const tech = project.dataset.tech;
      const shouldShow = filter === "all" || tech.includes(filter);

      if (shouldShow) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

// Add active class to filter buttons
document.querySelector('[data-filter="all"]').classList.add("active");

// Skills animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".bar");
      bars.forEach((bar) => {
        const value = bar.dataset.value;
        setTimeout(() => {
          bar.style.width = value + "%";
        }, 100);
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Modal functionality
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalCode = document.getElementById("modal-code");
const modalPreview = document.getElementById("modal-preview");
const modalRepo = document.getElementById("modal-repo");
const modalLive = document.getElementById("modal-live");

// Project data
const projectData = {
  author: {
    title: "Author Taxon Cleaner",
    description:
      "A comprehensive fullstack application for the Symbiota2 ecosystem that handles large-scale taxonomic data cleaning operations. Features include chunked file processing for handling large datasets, Redis caching for performance optimization, BullMQ job queues for background processing, and real-time progress tracking.",
    code: `# Key Technologies & Architecture
            - Frontend: Angular 15+ with TypeScript
            - Backend: NestJS with Express
            - Database: MariaDB with TypeORM
            - Caching: Redis for session and data caching
            - Queue System: BullMQ for background jobs
            - Monorepo: Nx workspace for code organization
            - Deployment: Docker containers with CI/CD

            # Key Features
            - Chunked file upload and processing
            - Real-time progress tracking via WebSockets
            - Background job processing with retry logic
            - Comprehensive error handling and logging
            - Export functionality with multiple formats`,
    repo: "https://github.com/ali-rezaye/author-taxon-cleaner",
    live: "https://author-taxon-cleaner.demo.com",
    preview: `<!DOCTYPE html>
            <html><head><style>
            body { font-family: Arial, sans-serif; padding: 20px; background: #f0f8ff; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .progress { background: #e0e0e0; border-radius: 10px; overflow: hidden; margin: 10px 0; }
            .progress-bar { background: #4caf50; height: 20px; width: 75%; transition: width 0.3s ease; }
            .feature { padding: 10px; margin: 10px 0; border-left: 4px solid #667eea; background: #f8f9ff; }
            </style></head><body>
            <div class="container">
            <div class="header">
            <h2>Author Taxon Cleaner Dashboard</h2>
            <p>Processing taxonomic data with advanced algorithms</p>
            </div>
            <div class="feature">
            <strong>File Processing:</strong> Chunked upload system for large datasets
            </div>
            <div class="feature">
            <strong>Progress Tracking:</strong> Real-time job status updates
            <div class="progress"><div class="progress-bar"></div></div>
            <small>Processing: 750/1000 records (75% complete)</small>
            </div>
            <div class="feature">
            <strong>Background Jobs:</strong> BullMQ queue system for scalable processing
            </div>
            <div class="feature">
            <strong>Export Options:</strong> CSV, Excel, and JSON formats supported
            </div>
            </div>
            </body></html>`,
  },
  symbiota: {
    title: "Symbiota2 Documentation Site",
    description:
      "A modern documentation website built for the Symbiota2 project migration. Built with Angular and featuring responsive design, search functionality, interactive examples, and comprehensive API documentation. Deployed as a static site for optimal performance and reliability.",
    code: `# Technologies Used
                - Frontend: Angular 15+ with Angular Universal for SSR
                - Styling: Tailwind CSS for utility-first styling
                - Search: Client-side search with Lunr.js
                - Deployment: Static site generation and CDN deployment
                - Documentation: Markdown-based content management

                # Features Implemented
                - Responsive design optimized for all devices
                - Advanced search functionality
                - Interactive code examples
                - Version-controlled documentation
                - Automated deployment pipeline`,
    repo: "https://github.com/ali-rezaye/symbiota2-docs",
    live: "https://symbiota2.org",
    preview: `<!DOCTYPE html>
            <html><head><style>
            body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; background: #1a202c; color: white; }
            .header { background: linear-gradient(135deg, #4a5568, #2d3748); padding: 20px; }
            .nav { display: flex; gap: 20px; align-items: center; }
            .logo { font-size: 24px; font-weight: bold; color: #63b3ed; }
            .content { padding: 40px 20px; max-width: 1200px; margin: 0 auto; }
            .hero { text-align: center; margin-bottom: 40px; }
            .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
            .card { background: #2d3748; padding: 20px; border-radius: 8px; border: 1px solid #4a5568; }
            .card h3 { color: #63b3ed; margin: 0 0 10px 0; }
            .badge { background: #48bb78; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            </style></head><body>
            <div class="header">
            <div class="nav">
            <div class="logo">Symbiota2</div>
            <span>Documentation</span>
            <span class="badge">v2.0</span>
            </div>
            </div>
            <div class="content">
            <div class="hero">
            <h1>Symbiota2 Documentation</h1>
            <p>Comprehensive guide for the next-generation biodiversity data platform</p>
            </div>
            <div class="cards">
            <div class="card">
            <h3>Getting Started</h3>
            <p>Quick setup guide and basic concepts</p>
            </div>
            <div class="card">
            <h3>API Reference</h3>
            <p>Complete REST API documentation</p>
            </div>
            <div class="card">
            <h3>Migration Guide</h3>
            <p>Step-by-step migration from Symbiota v1</p>
            </div>
            </div>
            </div>
            </body></html>`,
  },
  odin: {
    title: "The Odin Project Demos",
    description:
      "A collection of polished frontend projects completed as part of The Odin Project curriculum. Each demo showcases different aspects of modern web development including responsive design, accessibility best practices, interactive JavaScript features, and clean component architecture.",
    code: `# Project Collection
            - Calculator: Advanced calculator with keyboard support
            - Etch-a-Sketch: Interactive drawing canvas
            - Rock Paper Scissors: Game with animations
            - Restaurant Page: Dynamic content loading
            - Todo App: Local storage and filtering
            - Weather App: API integration and error handling

            # Key Focus Areas
            - Semantic HTML and accessibility
            - Responsive CSS Grid and Flexbox layouts
            - Vanilla JavaScript ES6+ features
            - API integration and error handling
            - Progressive enhancement principles`,
    repo: "https://github.com/ali-rezaye/odin-project",
    live: "https://ali-rezaye.github.io/odin-project",
    preview: `<!DOCTYPE html>
            <html><head><style>
            body { font-family: 'Segoe UI', sans-serif; margin: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
            .container { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); max-width: 500px; width: 90%; }
            .title { text-align: center; color: #333; margin-bottom: 30px; }
            .demo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; }
            .demo-card { background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 8px; padding: 15px; text-align: center; transition: all 0.3s ease; cursor: pointer; }
            .demo-card:hover { background: #667eea; color: white; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3); }
            .demo-card h4 { margin: 0 0 8px 0; font-size: 14px; }
            .demo-card p { margin: 0; font-size: 12px; opacity: 0.8; }
            .badge { background: #28a745; color: white; padding: 3px 6px; border-radius: 3px; font-size: 10px; margin-top: 5px; display: inline-block; }
            </style></head><body>
            <div class="container">
            <h1 class="title">🎯 Odin Project Demos</h1>
            <div class="demo-grid">
            <div class="demo-card">
            <h4>Calculator</h4>
            <p>Advanced calculator with keyboard support</p>
            <span class="badge">Interactive</span>
            </div>
            <div class="demo-card">
            <h4>Etch-a-Sketch</h4>
            <p>Drawing canvas with color options</p>
            <span class="badge">Canvas</span>
            </div>
            <div class="demo-card">
            <h4>Rock Paper Scissors</h4>
            <p>Animated game with score tracking</p>
            <span class="badge">Game</span>
            </div>
            <div class="demo-card">
            <h4>Restaurant Page</h4>
            <p>Dynamic content with navigation</p>
            <span class="badge">SPA</span>
            </div>
            <div class="demo-card">
            <h4>Todo App</h4>
            <p>Task management with persistence</p>
            <span class="badge">Storage</span>
            </div>
            <div class="demo-card">
            <h4>Weather App</h4>
            <p>Live weather data integration</p>
            <span class="badge">API</span>
            </div>
            </div>
            </div>
            </body></html>`,
  },
};

// Open project modal
document.addEventListener("click", (e) => {
  if (e.target.dataset.action === "open") {
    const projectId = e.target.dataset.id;
    const project = projectData[projectId];

    if (project) {
      modalTitle.textContent = project.title;
      modalDesc.textContent = project.description;
      modalCode.textContent = project.code;
      modalRepo.href = project.repo;
      modalLive.href = project.live;
      modalPreview.srcdoc = project.preview;

      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");

      // Trap focus in modal
      modalClose.focus();
    }
  }
});

// Close modal
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

// Contact form
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const copyContactBtn = document.getElementById("copy-contact");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("c-name").value;
  const email = document.getElementById("c-email").value;
  const message = document.getElementById("c-msg").value;

  // Create mailto link
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );
  const mailtoLink = `mailto:ali.elham1252@gmail.com?subject=${subject}&body=${body}`;

  // Show loading state
  formStatus.innerHTML =
    '<span class="loading"></span> Opening email client...';

  // Open mailto link
  window.location.href = mailtoLink;

  setTimeout(() => {
    formStatus.innerHTML =
      '<span class="success">✅ Email client opened! Please send the message from your email app.</span>';
    contactForm.reset();
  }, 1000);
});

// Copy contact info
copyContactBtn.addEventListener("click", async () => {
  const contactInfo = `Ali Rezaye - Full-Stack JavaScript Developer
Email: ali.elham1252@gmail.com
Phone: +93 791 870 614
GitHub: https://github.com/ali-rezaye
LinkedIn: https://linkedin.com/in/ali-rezaye`;

  try {
    await navigator.clipboard.writeText(contactInfo);
    copyContactBtn.innerHTML = "✅ Copied!";
    setTimeout(() => {
      copyContactBtn.innerHTML = "📋 Copy Contact";
    }, 2000);
  } catch (err) {
    copyContactBtn.innerHTML = "❌ Copy failed";
    setTimeout(() => {
      copyContactBtn.innerHTML = "📋 Copy Contact";
    }, 2000);
  }
});

// Download resume functionality
function downloadResume() {
  // Create a sample resume content
  const resumeContent = `ALI REZAYE
Full-Stack JavaScript Developer

CONTACT
Email: ali.elham1252@gmail.com
Phone: +93 791 870 614
Location: Kabul, Afghanistan
GitHub: github.com/ali-rezaye
LinkedIn: linkedin.com/in/ali-rezaye

SUMMARY
Self-taught full-stack developer specializing in Angular frontends and NestJS backends. 
Experience with modern development practices including monorepo architecture, 
containerization, and scalable backend systems.

TECHNICAL SKILLS
• Frontend: Angular, TypeScript, HTML5, CSS3, JavaScript ES6+
• Backend: Node.js, NestJS, Express.js
• Databases: MariaDB, PostgreSQL, Redis
• Tools: Docker, Nx Monorepo, Git, CI/CD
• Queue Systems: BullMQ, Redis
• Other: REST APIs, WebSockets, TypeORM

PROJECTS
Author Taxon Cleaner (2024)
Fullstack application for Symbiota2 with chunked file processing, 
Redis caching, and BullMQ job queues.

Symbiota2 Documentation Site (2024)
Angular-based documentation site with search functionality and 
responsive design.

EDUCATION
The Odin Project - Full Stack JavaScript Path (In Progress)
Self-directed learning in web development fundamentals, 
algorithms, and backend development.

LANGUAGES
English: Fluent
`;

  // Create and download the file
  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Ali_Rezaye_Resume.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  // Show feedback
  const btn = document.getElementById("download-resume");
  const originalText = btn.innerHTML;
  btn.innerHTML = "✅ Downloaded!";
  setTimeout(() => {
    btn.innerHTML = originalText;
  }, 2000);
}

// Update current time
function updateCurrentTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Kabul",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const timeString = now.toLocaleTimeString("en-US", options);
  const currentTimeEl = document.getElementById("current-time");
  if (currentTimeEl) {
    currentTimeEl.innerHTML = `Afghanistan Time: ${timeString} (GMT+4:30)`;
  }
}

// Update time every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll-triggered animations
const animateElements = document.querySelectorAll(".animate-in");
const animateObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        animateObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  animateObserver.observe(el);
});

// Performance monitoring
window.addEventListener("load", () => {
  setTimeout(() => {
    if (window.performance && window.performance.timing) {
      const loadTime =
        window.performance.timing.loadEventEnd -
        window.performance.timing.navigationStart;
      console.log(`Page loaded in ${loadTime}ms`);
    }
  }, 0);
});

// Add active nav highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "-20% 0px -70% 0px",
  }
);

sections.forEach((section) => {
  navObserver.observe(section);
});

console.log("🚀 Portfolio loaded successfully!");
console.log("📧 Contact: ali.elham1252@gmail.com");
console.log("💻 GitHub: https://github.com/ali-rezaye");
