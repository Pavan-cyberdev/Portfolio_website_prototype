# Pavankumar S - Personal Portfolio

A fast, responsive, and minimalist personal portfolio for **Pavankumar S** (1st-year B.Tech student in IoT & Cybersecurity). Features the **Sentry X** zero-trust runtime security gateway prototype (built at Hackurity 2026), IoT project showcases, and interactive DSA & cybersecurity milestone trackers.

---

## 📁 Project Architecture & Folder Structure

```
├── public/
│   └── resume.pdf                 # Placeholder PDF for "Download Resume" button
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # 3-Zone top bar with dark/light mode toggle & resume link
│   │   ├── Hero.tsx               # Monogram "PS" emblem, typing effect & intro CTAs
│   │   ├── AboutSection.tsx       # Honest 1st-person engineering philosophy
│   │   ├── SkillsSection.tsx      # Categorized skills matrix with "Learning" markers
│   │   ├── SentryXSection.tsx     # Featured 24-hr Hackurity case study & live simulation
│   │   ├── ProjectsAndCertifications.tsx # IoT Mini Projects & Certifications placeholders
│   │   ├── ExperienceSection.tsx  # Hackurity 2026 24-hr hackathon breakdown & reflections
│   │   ├── LearningJourney.tsx    # Interactive DSA in C++ & Cybersecurity checklist
│   │   ├── ContactSection.tsx     # Working contact form with Formspree + mailto fallback
│   │   └── Footer.tsx             # Unboxed clean footer & social links
│   ├── utils/
│   │   ├── sentry-simulator.ts    # Pure zero-trust evaluation logic for Sentry X
│   │   └── sentry-simulator.test.ts # Unit tests run via Node test runner (npx tsx --test)
│   ├── content.ts                 # 💡 SINGLE FILE TO EDIT: all personal info, projects & links
│   ├── App.tsx                    # Root layout & theme provider
│   ├── index.css                  # Tailwind CSS v4 variables & grid styles
│   └── main.tsx                   # React 19 entry point
│
└── vanilla-portfolio/             # 🚀 PURE VANILLA HTML/CSS/JS VERSION (Zero dependencies)
    ├── index.html                 # Semantic HTML5 layout
    ├── style.css                  # Clean responsive CSS with dark/light modes
    ├── content.js                 # 💡 Easy-to-edit JavaScript data object
    ├── app.js                     # Dynamic rendering engine & demo simulator
    └── resume.pdf                 # Resume placeholder
```

---

## 🛠️ How to Edit Your Content in One Place

You do **not** need to touch any UI or component code. To update anything, open:
- For the React app: **`src/content.ts`**
- For the static/vanilla app: **`vanilla-portfolio/content.js`**

Here is what you can customize:
1. **GitHub URL**: Add your Sentry X repo link to `featuredProject.githubUrl`.
2. **Mini Projects**: Replace placeholder descriptions and GitHub links in `miniProjects`.
3. **Certifications**: Add certificate names, issuing bodies, and verification URLs in `certifications`.
4. **Formspree ID**: Replace `"YOUR_FORM_ID_HERE"` in `personal.formspreeEndpoint` (or leave it as-is to use the automatic mailto fallback to `pavangamer1248@gmail.com`).
5. **Resume PDF**: Replace `public/resume.pdf` with your real resume.

---

## 🚀 Free Deployment Guide

### Option A: Deploy with Vercel (Recommended for React Vite)
1. Push this repository to your GitHub account (`github.com/Pavan-cyberdev/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on a free `*.vercel.app` domain in ~30 seconds.

### Option B: Deploy Free on GitHub Pages (Using the Vanilla version)
If you prefer zero build steps and want to host purely on GitHub:
1. Push the contents of the `vanilla-portfolio/` folder to a GitHub repository named `Pavan-cyberdev.github.io` (or a `portfolio` repo).
2. In your GitHub repo, go to **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, choose `main`, and select `/ (root)`.
4. Click **Save**. Your site is now live at `https://pavan-cyberdev.github.io`.

### Option C: Connecting a Custom Domain (e.g. `pavankumar.dev`)
1. Buy a domain from Namecheap, Cloudflare, or GoDaddy.
2. In Vercel: go to **Project Settings** &rarr; **Domains** &rarr; Enter your domain.
3. In your domain registrar's DNS settings, add:
   - Type `A`, Name `@`, Value `76.76.21.21` (Vercel IP)
   - Type `CNAME`, Name `www`, Value `cname.vercel-dns.com`
4. SSL certificates are generated automatically for free.
