/* ============================================
   Shubham Gothale - Portfolio Website JS
   Interactive animations & effects
   ============================================ */

(function () {
  'use strict';

  // ---- Particle Network Background ----
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = 0, mouseY = 0;
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Mouse interaction
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const force = (150 - dist) / 150;
        this.x -= dx * force * 0.02;
        this.y -= dy * force * 0.02;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 3000), 300);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const opacity = (1 - dist / 200) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawConnections();
    animationId = requestAnimationFrame(animateParticles);
  }

  function startParticles() {
    resizeCanvas();
    initParticles();
    animateParticles();
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Start particles on load
  startParticles();

  // ---- Typing Effect ----
  const typingEl = document.getElementById('typingText');
  const titles = [
    'Research Intern @ TRDDC',
    'Machine Learning Engineer @ Quantiphi',
    'Associate Tech Lead - AI @ Zycus',
    'Senior Software AI Engineer-1 @ Gupshup',
    'Senior Data Scientist @ Simplify Healthcare',
    'AI/ML Engineer',
    'AI Agent Developer',
    'Deep Learning Practitioner',
    'RAG Pipeline Architect',
    'NLP Enthusiast',
    'Full-Stack AI Developer'
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typingEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400; // Pause before next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Start typing after a short delay
  setTimeout(typeEffect, 800);

  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ---- Mobile Menu Toggle ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ---- Scroll Reveal Animation ----
  const revealElements = document.querySelectorAll('.reveal, .animate-fade-up');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ---- Skill Bar Animation ----
  const skillBars = document.querySelectorAll('.bar-fill');

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => barObserver.observe(bar));

  // ---- Counter Animation ----
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, 0, target, 1500, suffix);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((num) => counterObserver.observe(num));

  function animateCounter(el, start, end, duration, suffix) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + range * eased);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ---- Cursor Glow Effect ----
  const cursorGlow = document.getElementById('cursorGlow');
  let glowTimeout;

  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.classList.add('active');

    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => {
      cursorGlow.classList.remove('active');
    }, 100);
  });

  // ---- 3D Tilt Effect for Project Cards ----
  const tiltCards = document.querySelectorAll('[data-tilt]');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 72; // Navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Active Nav Link Highlight ----
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (navLink) {
          if (entry.isIntersecting) {
            navLink.style.color = 'var(--accent-primary)';
          } else {
            navLink.style.color = '';
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-72px 0px -50% 0px'
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // ---- Contact Form Handling (Google Sheets Backend) ----
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      // Show loading state
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Sending...`;
      btn.disabled = true;

      // Google Sheets Apps Script webhook
      const sheetUrl = 'https://script.google.com/macros/s/AKfycbzi7xMP0fmhSxC-2kY2BMDtIhcG09ZnJBx7mYKP8RJ0Gan9lr-demWl98K5dWTNja6h/exec';


      fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })
      .then(() => {
        // no-cors returns opaque response, but the Apps Script processes it
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!`;
        contactForm.reset();
      })
      .catch(() => {
        // Fallback to mailto only on network error
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Opening Email Client...`;
        const mailtoSubject = encodeURIComponent(subject || 'Portfolio Inquiry from ' + name);
        const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:shubhamgothale2503@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      })
      .finally(() => {
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 3000);
      });
    });
  }

  // ---- Footer Year ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Pause particles when hero is not visible (performance) ----
  const heroSection = document.getElementById('hero');

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(animationId);
        } else {
          animateParticles();
        }
      });
    },
    { threshold: 0 }
  );

  heroObserver.observe(heroSection);

  // ---- Skill Category Drag & Drop ----
  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    let draggedItem = null;

    const dragItems = skillsGrid.querySelectorAll('.skill-category');
    dragItems.forEach(item => {
      item.setAttribute('draggable', 'true');

      item.addEventListener('dragstart', function(e) {
        draggedItem = this;
        setTimeout(() => this.classList.add('dragging'), 0);
      });

      item.addEventListener('dragend', function() {
        setTimeout(() => {
          this.classList.remove('dragging');
          draggedItem = null;
          dragItems.forEach(d => d.classList.remove('drag-over'));
        }, 0);
      });

      item.addEventListener('dragover', function(e) {
        e.preventDefault();
        if (this !== draggedItem) {
          this.classList.add('drag-over');
        }
      });

      item.addEventListener('dragleave', function() {
        this.classList.remove('drag-over');
      });

      item.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (this !== draggedItem) {
          const items = Array.from(skillsGrid.querySelectorAll('.skill-category'));
          const draggedIndex = items.indexOf(draggedItem);
          const dropIndex = items.indexOf(this);

          if (draggedIndex < dropIndex) {
            skillsGrid.insertBefore(draggedItem, this.nextSibling);
          } else {
            skillsGrid.insertBefore(draggedItem, this);
          }
        }
      });
    });
  }

  // ---- Console Easter Egg ----
  console.log(
    '%c✨ Shubham Gothale - Portfolio %c\n' +
    '%cAI/ML Engineer & AI Agent Developer\n' +
    '%cInterested in collaborating? Reach out!\n' +
    'Email: shubhamgothale2503@gmail.com',
    'color: #00d4ff; font-size: 20px; font-weight: bold;',
    'color: #7b2ff7; font-size: 14px;',
    'color: #ffffff; font-size: 12px;',
    'color: #888; font-size: 11px;'
  );

})();

