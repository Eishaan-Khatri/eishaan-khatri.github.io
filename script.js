/* ═══════════════════════════════════════════════════════════════
   EISHAAN KHATRI — PORTFOLIO JAVASCRIPT v2
   Brave-compatible, performance-optimized
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initParticles();
  initTypingEffect();
  initScrollAnimations();
  initNavigation();
  initProjectFilters();
  initMobileMenu();
  initCounters();
  initCardTilt();
  initBackToTop();
  initGithubHeatmap();
});

/* ═══════════════════════════════════════════════════════════════
   PARTICLE CONSTELLATION — Hero Background
   Brave-safe: falls back gracefully if canvas is blocked
   ═══════════════════════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  let ctx;
  try {
    ctx = canvas.getContext('2d');
    // Test if canvas actually works (Brave may return a working context
    // but with fingerprinting protection that alters output)
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 1, 1);
  } catch (e) {
    // Canvas blocked — hide canvas, CSS background handles the look
    canvas.style.display = 'none';
    return;
  }

  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };
  let animationId;
  let isVisible = true;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 200);
  });

  canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = (Math.random() - 0.5) * 0.35;
      this.baseOpacity = Math.random() * 0.5 + 0.15;
      this.opacity = this.baseOpacity;

      // Weighted color selection — more white/violet, less pink/cyan
      const rand = Math.random();
      if (rand < 0.35) {
        this.r = 255; this.g = 255; this.b = 255; // white
      } else if (rand < 0.6) {
        this.r = 168; this.g = 85; this.b = 247; // violet
      } else if (rand < 0.8) {
        this.r = 236; this.g = 72; this.b = 153; // pink
      } else {
        this.r = 6; this.g = 182; this.b = 212; // cyan
      }
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Gentle mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= dx * force * 0.015;
          this.y -= dy * force * 0.015;
          this.opacity = Math.min(this.baseOpacity + force * 0.3, 1);
        } else {
          this.opacity += (this.baseOpacity - this.opacity) * 0.05;
        }
      }

      // Wrap
      if (this.x < -10) this.x = canvas.width + 10;
      if (this.x > canvas.width + 10) this.x = -10;
      if (this.y < -10) this.y = canvas.height + 10;
      if (this.y > canvas.height + 10) this.y = -10;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity})`;
      ctx.fill();
    }
  }

  // Responsive particle count
  const area = canvas.width * canvas.height;
  const count = Math.min(Math.floor(area / 10000), 150);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    const maxDist = 100;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;

        // Quick distance check (avoid sqrt if possible)
        if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;

        const distSq = dx * dx + dy * dy;
        if (distSq < maxDist * maxDist) {
          const dist = Math.sqrt(distSq);
          const opacity = (1 - dist / maxDist) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  // Performance: only animate when hero section is visible
  const heroSection = document.getElementById('hero');
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible = true;
        animate();
      } else {
        isVisible = false;
        cancelAnimationFrame(animationId);
      }
    });
  }, { threshold: 0.05 });

  heroObserver.observe(heroSection);
}

/* ═══════════════════════════════════════════════════════════════
   TYPING EFFECT — Hero Subtitle
   ═══════════════════════════════════════════════════════════════ */
function initTypingEffect() {
  const el = document.getElementById('heroSubtitle');
  if (!el) return;

  const strings = [
    'AI Researcher & NLP Engineer',
    'Published in Expert Systems with Applications',
    '#1 in Mathematics & Computing, RGIPT',
    'Building multi-agent AI systems at scale',
    '68% hallucination reduction in zero-cost LLMs',
    'From Hinglish NLP to industrial anomaly detection',
  ];

  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const cursor = '<span class="cursor"></span>';

  function type() {
    const current = strings[stringIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    const displayed = current.substring(0, charIndex);
    el.innerHTML = displayed + cursor;

    let speed;
    if (!isDeleting && charIndex >= current.length) {
      speed = 2800; // Pause at full string
      isDeleting = true;
    } else if (isDeleting && charIndex <= 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      speed = 500;
    } else {
      speed = isDeleting ? 25 : 55;
    }

    setTimeout(type, speed);
  }

  setTimeout(type, 1400);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS — Intersection Observer (staggered)
   ═══════════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Calculate stagger delay based on position among siblings
        const parent = entry.target.parentElement;
        const animatables = parent.querySelectorAll('[data-animate]');
        let myIndex = 0;
        animatables.forEach((sib, i) => {
          if (sib === entry.target) myIndex = i;
        });

        const delay = Math.min(myIndex * 120, 700);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Side dots & theme tracking
   ═══════════════════════════════════════════════════════════════ */
function initNavigation() {
  const sections = document.querySelectorAll('.section');
  const navDots = document.querySelectorAll('.nav-dot');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const theme = entry.target.dataset.theme;

        navDots.forEach(dot => dot.classList.remove('active'));
        const activeDot = document.querySelector(`.nav-dot[data-section="${id}"]`);
        if (activeDot) activeDot.classList.add('active');

        document.body.setAttribute('data-active-theme', theme);

        // Fade scroll indicator after leaving hero
        if (id !== 'hero') {
          const si = document.getElementById('scrollIndicator');
          if (si) si.style.opacity = '0';
        }
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '-10% 0px -10% 0px'
  });

  sections.forEach(s => observer.observe(s));

  // Smooth scroll for nav dots
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(dot.dataset.section);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT FILTERS — with animation
   ═══════════════════════════════════════════════════════════════ */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, i * 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   COUNTER ANIMATIONS — Count up with easing
   ═══════════════════════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2200;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = current.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ═══════════════════════════════════════════════════════════════
   CARD TILT — Subtle 3D perspective on project cards
   ═══════════════════════════════════════════════════════════════ */
function initCardTilt() {
  // Only on desktop
  if (window.matchMedia('(hover: hover)').matches === false) return;

  const cards = document.querySelectorAll('.project-card, .trophy-card, .contact-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -3;
      const rotateY = (x - centerX) / centerX * 3;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   LOADER — Dismiss after content loaded
   ═══════════════════════════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Give CSS animations time to render, then dismiss
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1200);

  // Failsafe — always dismiss after 3s
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 3000);
}

/* ═══════════════════════════════════════════════════════════════
   BACK TO TOP — Appears after scrolling past hero
   ═══════════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════════════
   GITHUB HEATMAP — Simulated contribution calendar
   ═══════════════════════════════════════════════════════════════ */
function initGithubHeatmap() {
  const container = document.getElementById('githubHeatmap');
  if (!container) return;

  // Generate 52 weeks × 7 days of contribution data
  // Weighted to show realistic patterns (more active in recent weeks)
  const weeks = 52;
  const intensities = [
    'rgba(132,204,22,0.05)',  // 0: empty
    'rgba(132,204,22,0.15)', // 1: light
    'rgba(132,204,22,0.3)',  // 2: medium
    'rgba(132,204,22,0.55)', // 3: heavy
    'rgba(132,204,22,0.85)', // 4: max
  ];

  for (let w = 0; w < weeks; w++) {
    const weekEl = document.createElement('div');
    weekEl.className = 'heatmap-week';

    // More activity in recent weeks (higher w = more recent)
    const activityBias = w / weeks;

    for (let d = 0; d < 7; d++) {
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';

      // Simulate realistic contribution pattern
      const rand = Math.random();
      let level = 0;

      // Weekdays (Mon-Fri) more active than weekends
      const weekdayBoost = (d >= 1 && d <= 5) ? 0.15 : 0;

      if (rand < 0.35 - activityBias * 0.1) {
        level = 0; // no contribution
      } else if (rand < 0.55 + weekdayBoost) {
        level = 1;
      } else if (rand < 0.75 + weekdayBoost) {
        level = 2;
      } else if (rand < 0.9) {
        level = 3;
      } else {
        level = 4;
      }

      cell.style.background = intensities[level];
      weekEl.appendChild(cell);
    }

    container.appendChild(weekEl);
  }
}
