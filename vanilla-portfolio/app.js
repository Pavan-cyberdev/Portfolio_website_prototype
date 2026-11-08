/**
 * Pavankumar S - Portfolio Vanilla App Engine
 * Reads `portfolioData` from content.js and renders all sections dynamically.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  if (!data) return;

  // 1. Theme toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const isDarkStored = localStorage.getItem('theme') !== 'light';
  if (!isDarkStored) {
    document.body.classList.add('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
    });
  }

  // 2. Typing Effect in Hero
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const phrases = [
      "building runtime security tools",
      "learning DSA in C++",
      "exploring IoT & microcontrollers",
      "researching zero-trust for AI agents"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (!isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(type, isDeleting ? 40 : 80);
    }
    type();
  }

  // 3. Render Skills
  const skillsContainer = document.getElementById('skills-grid');
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills
      .map(
        (s) => `
      <div class="card" style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-weight: 600; font-size: 0.95rem;">${s.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">${s.category}</div>
        </div>
        ${s.isLearning ? '<span class="learning-badge">Learning</span>' : ''}
      </div>
    `
      )
      .join('');
  }

  // 4. Render Mini Projects
  const miniProjectsContainer = document.getElementById('mini-projects-grid');
  if (miniProjectsContainer && data.miniProjects) {
    miniProjectsContainer.innerHTML = data.miniProjects
      .map(
        (p, idx) => `
      <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); margin-bottom: 0.5rem;">
            <span>Project 0${idx + 1}</span>
            <span style="color: #fcd34d;">Placeholder</span>
          </div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${p.title}</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5;">${p.description}</p>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="color: var(--teal-accent);">${p.tech.join(' · ')}</span>
          <span style="color: var(--text-dim);">${p.githubUrl ? `<a href="${p.githubUrl}">Repo &rarr;</a>` : '[Add link in content.js]'}</span>
        </div>
      </div>
    `
      )
      .join('');
  }

  // 5. Render Certifications
  const certsContainer = document.getElementById('certs-grid');
  if (certsContainer && data.certifications) {
    certsContainer.innerHTML = data.certifications
      .map(
        (c, idx) => `
      <div class="card">
        <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); margin-bottom: 0.5rem;">
          <span>Certificate 0${idx + 1}</span>
          <span>${c.year}</span>
        </div>
        <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem;">${c.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">Issuer: ${c.issuer}</p>
        <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">
          ${c.credentialUrl ? `<a href="${c.credentialUrl}" style="color: var(--violet-accent);">View Credential &rarr;</a>` : '[Add link in content.js]'}
        </div>
      </div>
    `
      )
      .join('');
  }

  // 6. Render Learning Checklist
  const checklistContainer = document.getElementById('learning-checklist-grid');
  if (checklistContainer && data.learningChecklist) {
    checklistContainer.innerHTML = data.learningChecklist
      .map(
        (item) => `
      <div class="card" style="display: flex; gap: 1rem; align-items: flex-start;">
        <span style="font-size: 1.2rem; line-height: 1;">${item.status === 'completed' ? '✅' : item.status === 'in-progress' ? '⏳' : '⚪'}</span>
        <div>
          <div style="font-weight: 600; font-size: 0.9rem;">${item.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">${item.notes || ''}</div>
          <div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--teal-accent); margin-top: 0.4rem;">${item.category} · ${item.status.toUpperCase()}</div>
        </div>
      </div>
    `
      )
      .join('');
  }

  // 7. Interactive Sentry X Scenario Demo Runner
  const scenarioButtons = document.querySelectorAll('.scenario-btn');
  const consoleOutput = document.getElementById('console-output');

  if (scenarioButtons && consoleOutput && data.featuredProject.demoScenarios) {
    function runScenario(index) {
      const sc = data.featuredProject.demoScenarios[index];
      scenarioButtons.forEach((btn, i) => {
        btn.style.borderColor = i === index ? 'var(--teal-accent)' : 'var(--border-color)';
      });
      consoleOutput.innerHTML = `
        <div style="color: var(--teal-accent); margin-bottom: 0.5rem;">// INVOCATION: ${sc.name}</div>
        <div style="color: var(--text-dim); margin-bottom: 0.5rem;">DISPATCHED: ${JSON.stringify(sc.payload)}</div>
        <div style="color: ${sc.status === 200 ? 'var(--teal-accent)' : sc.status === 403 ? '#f43f5e' : '#f59e0b'}; font-weight: bold; margin-top: 0.5rem;">
          RESULT: HTTP ${sc.status} [${sc.verdict}]
        </div>
        <div style="color: var(--text-main); margin-top: 0.25rem;">${sc.details}</div>
      `;
    }

    scenarioButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => runScenario(idx));
    });

    runScenario(0);
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const endpoint = data.personal.formspreeEndpoint;
      const isPlaceholder = endpoint.includes('YOUR_FORM_ID_HERE');

      const name = document.getElementById('c-name').value;
      const email = document.getElementById('c-email').value;
      const message = document.getElementById('c-message').value;

      if (isPlaceholder) {
        // Mailto fallback
        window.location.href = `mailto:${data.personal.email}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
        if (formStatus) formStatus.textContent = 'Redirecting to your email client...';
      } else {
        if (formStatus) formStatus.textContent = 'Submitting...';
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, message })
        })
          .then((res) => {
            if (res.ok) {
              if (formStatus) formStatus.textContent = 'Message sent successfully!';
              contactForm.reset();
            } else {
              window.location.href = `mailto:${data.personal.email}`;
            }
          })
          .catch(() => {
            window.location.href = `mailto:${data.personal.email}`;
          });
      }
    });
  }
});
