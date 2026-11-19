<div align="center">
  <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/">
    <img src="./assets/hero.svg" width="100%" alt="Christian James Dizon — Full Stack Developer, System Builder, Consultant" />
  </a>

  <br />
  <br />

  <p>
    <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/#contact">
      <img src="https://img.shields.io/badge/Discuss_your_project_%E2%86%97-f5f5f5?style=for-the-badge" alt="Discuss your project" />
    </a>
    &nbsp;
    <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/">
      <img src="https://img.shields.io/badge/Portfolio_%E2%86%97-141414?style=for-the-badge&logo=vercel&logoColor=f5f5f5" alt="Portfolio" />
    </a>
    &nbsp;
    <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/resume.pdf">
      <img src="https://img.shields.io/badge/R%C3%A9sum%C3%A9_PDF_%E2%86%93-141414?style=for-the-badge" alt="Download Résumé PDF" />
    </a>
    &nbsp;
    <a href="https://github.com/cjgdizon/cjgdizon/issues/new?template=guestbook.md&title=guestbook%3A+Hey+Christian!">
      <img src="https://img.shields.io/badge/Sign_Guestbook_%E2%86%97-141414?style=for-the-badge&logo=github&logoColor=d7e5e5" alt="Sign Guestbook" />
    </a>
  </p>

  <p>
    <a href="#projects"><code>Projects</code></a> &nbsp;·&nbsp;
    <a href="#about"><code>About</code></a> &nbsp;·&nbsp;
    <a href="#skills"><code>Skills</code></a> &nbsp;·&nbsp;
    <a href="#activity"><code>Activity</code></a> &nbsp;·&nbsp;
    <a href="#guestbook"><code>Guestbook</code></a> &nbsp;·&nbsp;
    <a href="#contact"><code>Contact</code></a>
  </p>
</div>

---

## Projects

<sub>Click <b>Inspect highlights</b> inside any card to explore architecture, engineering decisions, and live links.</sub>

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <sub><code>Developer · 2026</code></sub>
      <h3><a href="https://github.com/cjgdizon/PennyWise">PennyWise ↗</a></h3>
      <p>A personal finance app for tracking spending, budgets, bills, and savings offline.</p>
      <p><code>React</code> <code>TypeScript</code> <code>Tailwind CSS</code> <code>PWA</code> <code>IndexedDB</code></p>
      <p>
        <a href="https://pennywise-pi.vercel.app"><b>Live ↗</b></a> &nbsp;·&nbsp;
        <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/projects/pennywise">Case study ↗</a> &nbsp;·&nbsp;
        <a href="https://github.com/cjgdizon/PennyWise">Source ↗</a>
      </p>
      <details>
        <summary><sub>Inspect highlights</sub></summary>
        <ul>
          <li>Browser-local persistence via <b>Dexie (IndexedDB)</b> — no signup or bank connection required.</li>
          <li>Separate accounts, transfers, category budgets, and bill payments linked to expenses.</li>
          <li>Savings goals reserve funds without counting as spending; integer-based money math with guarded DB migrations.</li>
          <li>Filtered CSV exports, printable PDF reports, and backup imports with conflict previews.</li>
        </ul>
      </details>
    </td>
    <td width="50%" valign="top">
      <sub><code>Full-stack developer · 2026</code></sub>
      <h3><a href="https://github.com/cjgdizon/perfume-store">AMIRA ↗</a></h3>
      <p>An online perfume store with real batch-level inventory tracking and concurrency locks.</p>
      <p><code>Angular</code> <code>Spring Boot</code> <code>Java</code> <code>MySQL</code> <code>Docker</code></p>
      <p>
        <a href="https://amira-perfume-store.vercel.app"><b>Live ↗</b></a> &nbsp;·&nbsp;
        <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/projects/amira">Case study ↗</a> &nbsp;·&nbsp;
        <a href="https://github.com/cjgdizon/perfume-store">Source ↗</a>
      </p>
      <details>
        <summary><sub>Inspect highlights</sub></summary>
        <ul>
          <li>Stock reserved on order, deducted on payment, restored on cancel — protected with <b>database locks</b> so two buyers can't take the last bottle.</li>
          <li>Owner dashboard reporting expiring, low-stock, and slow-moving perfume batches.</li>
          <li>Customer and owner roles with BCrypt hashing and one-time password-reset links.</li>
          <li>Full stack starts with <code>docker compose up</code>; full integration test covering order → pay → cancel.</li>
        </ul>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <sub><code>Group Project · 2026</code></sub>
      <h3><a href="https://github.com/cjgdizon/BrightSmile">BrightSmile (DentaSync) ↗</a></h3>
      <p>Scheduling, dental charts, and online booking for a three-branch dental practice.</p>
      <p><code>Next.js</code> <code>TypeScript</code> <code>PostgreSQL</code> <code>Drizzle ORM</code> <code>Playwright</code></p>
      <p>
        <a href="https://brightsmile.pro"><b>Live ↗</b></a> &nbsp;·&nbsp;
        <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/projects/dentasync">Case study ↗</a> &nbsp;·&nbsp;
        <a href="https://github.com/cjgdizon/BrightSmile">Source ↗</a>
      </p>
      <details>
        <summary><sub>Inspect highlights</sub></summary>
        <ul>
          <li>Multi-branch chair calendar modeling visit durations and chair cleaning buffers.</li>
          <li>Tooth-by-tooth dental treatment charting plus waiting-room QR intake forms with per-visitor rate limits.</li>
          <li>Role-based access control (owner, manager, staff) backed by an audit log on Supabase Postgres & Vercel.</li>
          <li>Unit, database, and Playwright E2E test suites covering a complete patient visit.</li>
        </ul>
      </details>
    </td>
    <td width="50%" valign="top">
      <sub><code>Hackathon · AppBuildersPH 2026</code></sub>
      <h3><a href="https://github.com/cjgdizon/HACKATON-LubakAlert">Lubak Alert ↗</a></h3>
      <p>An offline pothole warning PWA — YOLOv8n AI runs on the phone, zero internet needed.</p>
      <p><code>TypeScript</code> <code>PWA</code> <code>ONNX Runtime</code> <code>Node.js</code> <code>Python</code></p>
      <p>
        <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/projects/lubak-alert"><b>Case study ↗</b></a> &nbsp;·&nbsp;
        <a href="https://github.com/cjgdizon/HACKATON-LubakAlert">Source ↗</a>
      </p>
      <details>
        <summary><sub>Inspect highlights</sub></summary>
        <ul>
          <li>Runs <b>YOLOv8n</b> on-device via <code>onnxruntime-web</code> (WebGPU with WASM fallback); no camera frames leave the phone.</li>
          <li>Confirms detections with accelerometer & GPS, detecting potholes in 62/67 held-out positive test photos.</li>
          <li>Relays hazards to nearby riders via a local Wi-Fi hotspot hub (HTTPS/WebSocket), warning ~6 seconds ahead.</li>
          <li>330+ automated tests plus a two-phone rehearsal run in CI.</li>
        </ul>
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <sub><code>Personal Project · Latest</code></sub>
      <h3><a href="https://github.com/cjgdizon/crown-chess">Crown Chess ↗</a></h3>
      <p>Modern client-side chess web app powered by chess.js and Stockfish 17.1 WASM.</p>
      <p><code>React</code> <code>TypeScript</code> <code>Tailwind CSS</code> <code>chess.js</code> <code>Stockfish WASM</code></p>
      <p>
        <a href="https://github.com/cjgdizon/crown-chess"><b>Source ↗</b></a>
      </p>
      <details>
        <summary><sub>Inspect highlights</sub></summary>
        <ul>
          <li>Runs <b>Stockfish 17.1</b> directly in the browser via WebAssembly — zero backend latency.</li>
          <li>Full legal move validation, board state management, and game flow handled with <code>chess.js</code>.</li>
          <li>Responsive React + TypeScript + Tailwind CSS interface designed for clean, distraction-free play.</li>
        </ul>
      </details>
    </td>
    <td width="50%" valign="top">
      <sub><code>Solo Project · 2026</code></sub>
      <h3><a href="https://github.com/cjgdizon/tetris">Tetris Battle ↗</a></h3>
      <p>A competitive Tetris game for Windows: you against a configurable bot.</p>
      <p><code>Python</code> <code>pygame</code> <code>pytest</code></p>
      <p>
        <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/projects/tetris-battle"><b>Case study ↗</b></a> &nbsp;·&nbsp;
        <a href="https://github.com/cjgdizon/tetris">Source ↗</a>
      </p>
      <details>
        <summary><sub>Inspect highlights</sub></summary>
        <ul>
          <li>Modern guideline mechanics: SRS rotation with wall kicks, 7-bag generator, hold, ghost piece, and 5-piece preview.</li>
          <li>Garbage sending & cancelling, T-spins, combos, back-to-back bonuses, perfect clears, and escalating gravity every 30s.</li>
          <li>Configurable controls, handling (DAS, ARR, soft drop), and bot speed via settings, tested with <code>pytest</code>.</li>
        </ul>
      </details>
    </td>
  </tr>
</table>

<details>
  <summary><b>▸ Browse all 9 public repositories</b></summary>
  <br />

| Repository | Description | Primary |
| :--- | :--- | :--- |
| [`crown-chess`](https://github.com/cjgdizon/crown-chess) | Modern client-side chess web app with React, chess.js, and Stockfish 17.1 WASM | `TypeScript` |
| [`Portfolio`](https://github.com/cjgdizon/Portfolio) | Personal portfolio website (`cjd.`) showcasing projects, skills, and case studies | `TypeScript` |
| [`PennyWise`](https://github.com/cjgdizon/PennyWise) | Offline-first personal finance, budgeting, and savings PWA backed by IndexedDB | `TypeScript` |
| [`BrightSmile`](https://github.com/cjgdizon/BrightSmile) | Three-branch dental clinic scheduling, charting, and QR booking system | `TypeScript` |
| [`perfume-store`](https://github.com/cjgdizon/perfume-store) | AMIRA — full-stack perfume storefront with batch inventory locks | `Angular / Spring` |
| [`HACKATON-LubakAlert`](https://github.com/cjgdizon/HACKATON-LubakAlert) | Offline on-device YOLOv8n pothole warning PWA for AppBuildersPH 2026 | `TypeScript` |
| [`tetris`](https://github.com/cjgdizon/tetris) | Competitive Windows Tetris vs. bot with SRS, T-spins, and DAS/ARR tuning | `Python` |
| [`todo-app`](https://github.com/cjgdizon/todo-app) | Clean task management application built in TypeScript | `TypeScript` |
| [`cjgdizon`](https://github.com/cjgdizon/cjgdizon) | This interactive GitHub profile README, custom SVG visuals & GitHub Actions | `Markdown / SVG` |

</details>

---

## About

### The developer behind the work.

> I'm an Information Technology student at **Mapúa University**. I build complete software, from the database to the interface — including a perfume store with concurrency-safe inventory tracking, a multi-branch dental practice system, and an offline pothole warning app built for a local AI hackathon.
>
> I'm currently looking for an **internship** where I can contribute to working software and learn from experienced engineers.

<details open>
  <summary><b>▸ Experience & education</b></summary>
  <br />

| Period | Role / Program | Organization |
| :--- | :--- | :--- |
| `2024 – 2027` | **B.S. in Information Technology** | Mapúa University |
| `2026` | **AppBuilder 2026 Hackathon** — Local AI Track (`Lubak Alert`) | AppBuildersPH |

</details>

<details>
  <summary><b>▸ What I build — end-to-end capabilities</b></summary>
  <br />

| Pillar | Pipeline | Focus |
| :--- | :--- | :--- |
| **Storefronts** | `Catalog → checkout` | Real inventory reservations, concurrency locks, batch reporting, and clean buyer/owner workflows. |
| **Booking systems** | `Branches → appointments` | Multi-branch chair calendars, QR intake flows, rate-limited public forms, and role-based audit logs. |
| **Full-stack development** | `Interface → database` | Accessible frontends, typed APIs, relational schemas, offline-first PWAs, and automated E2E/unit test suites. |

</details>

---

## Skills

### Tools & continued learning.

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h4>Frontend</h4>
      <p>
        <img src="https://img.shields.io/badge/TypeScript-141414?style=flat-square&logo=typescript&logoColor=3178C6" alt="TypeScript" />
        <img src="https://img.shields.io/badge/Angular-141414?style=flat-square&logo=angular&logoColor=DD0031" alt="Angular" />
        <img src="https://img.shields.io/badge/React-141414?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
        <img src="https://img.shields.io/badge/Next.js-141414?style=flat-square&logo=nextdotjs&logoColor=f5f5f5" alt="Next.js" />
        <img src="https://img.shields.io/badge/Tailwind_CSS-141414?style=flat-square&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS" />
        <img src="https://img.shields.io/badge/PWA-141414?style=flat-square&logo=pwa&logoColor=a855f7" alt="PWA" />
        <img src="https://img.shields.io/badge/Accessibility-141414?style=flat-square&logoColor=f5f5f5" alt="Accessibility" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h4>Backend</h4>
      <p>
        <img src="https://img.shields.io/badge/Java-141414?style=flat-square&logo=openjdk&logoColor=f5f5f5" alt="Java" />
        <img src="https://img.shields.io/badge/Spring_Boot-141414?style=flat-square&logo=springboot&logoColor=6DB33F" alt="Spring Boot" />
        <img src="https://img.shields.io/badge/Node.js-141414?style=flat-square&logo=nodedotjs&logoColor=5FA04E" alt="Node.js" />
        <img src="https://img.shields.io/badge/REST_APIs-141414?style=flat-square" alt="REST APIs" />
        <img src="https://img.shields.io/badge/WebSocket-141414?style=flat-square&logo=socketdotio&logoColor=f5f5f5" alt="WebSocket" />
        <img src="https://img.shields.io/badge/MySQL-141414?style=flat-square&logo=mysql&logoColor=4479A1" alt="MySQL" />
        <img src="https://img.shields.io/badge/PostgreSQL-141414?style=flat-square&logo=postgresql&logoColor=4169E1" alt="PostgreSQL" />
        <img src="https://img.shields.io/badge/Drizzle_ORM-141414?style=flat-square&logo=drizzle&logoColor=C5F74F" alt="Drizzle ORM" />
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>Languages</h4>
      <p>
        <img src="https://img.shields.io/badge/TypeScript-141414?style=flat-square&logo=typescript&logoColor=3178C6" alt="TypeScript" />
        <img src="https://img.shields.io/badge/JavaScript-141414?style=flat-square&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
        <img src="https://img.shields.io/badge/Java-141414?style=flat-square&logo=openjdk&logoColor=f5f5f5" alt="Java" />
        <img src="https://img.shields.io/badge/Python-141414?style=flat-square&logo=python&logoColor=3776AB" alt="Python" />
        <img src="https://img.shields.io/badge/SQL-141414?style=flat-square" alt="SQL" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h4>Tools & testing</h4>
      <p>
        <img src="https://img.shields.io/badge/Git-141414?style=flat-square&logo=git&logoColor=F05032" alt="Git" />
        <img src="https://img.shields.io/badge/Docker-141414?style=flat-square&logo=docker&logoColor=2496ED" alt="Docker" />
        <img src="https://img.shields.io/badge/Vercel-141414?style=flat-square&logo=vercel&logoColor=f5f5f5" alt="Vercel" />
        <img src="https://img.shields.io/badge/GitHub_Actions-141414?style=flat-square&logo=githubactions&logoColor=2088FF" alt="GitHub Actions" />
        <img src="https://img.shields.io/badge/Playwright-141414?style=flat-square&logo=playwright&logoColor=2EAD33" alt="Playwright" />
        <img src="https://img.shields.io/badge/pytest-141414?style=flat-square&logo=pytest&logoColor=0A9EDC" alt="pytest" />
        <img src="https://img.shields.io/badge/ONNX_Runtime-141414?style=flat-square&logo=onnx&logoColor=005CED" alt="ONNX Runtime" />
      </p>
    </td>
  </tr>
</table>

<details>
  <summary><b>▸ Certifications (19) — Verified Coursera coursework</b></summary>
  <br />
  <sub>Full-size certificates are also viewable on the <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/#skills">portfolio skills page ↗</a>.</sub>
  <br /><br />

| Certificate | Issuer | Date |
| :--- | :--- | ---: |
| Angular for Front End Engineers | Codio · Coursera | `Oct 2026` |
| User Experience: Research & Prototyping | UC San Diego · Coursera | `Oct 2026` |
| AI For Everyone | DeepLearning.AI · Coursera | `Sep 2026` |
| Information Security Fundamentals | EC-Council · Coursera | `Sep 2026` |
| Foundations of Agile Project Management | Google · Coursera | `Sep 2026` |
| Data Warehouse Concepts, Design, and Data Integration | Univ. of Colorado System · Coursera | `Jun 2026` |
| Visual Elements of User Interface Design | CalArts · Coursera | `Jun 2026` |
| Version Control with Git | Atlassian · Coursera | `Jun 2026` |
| Essential Tools for Application Development | LearnQuest · Coursera | `Jun 2026` |
| Introduction to Data Science in Python | Univ. of Michigan · Coursera | `Feb 2026` |
| Enterprise Systems | Univ. of Minnesota · Coursera | `Nov 2025` |
| An Introduction to Interactive Programming in Python (Part 1) | Rice University · Coursera | `Oct 2025` |
| Data Structures | UC San Diego · Coursera | `Jul 2025` |
| Database Management Essentials | Univ. of Colorado System · Coursera | `Jul 2025` |
| Object Oriented Programming in Java | UC San Diego · Coursera | `Mar 2025` |
| Interactivity with JavaScript | Univ. of Michigan · Coursera | `Mar 2025` |
| Introduction to Contemporary Operating Systems and Hardware 1a | Illinois Tech · Coursera | `Mar 2025` |
| Advanced Styling with Responsive Design | Univ. of Michigan · Coursera | `Feb 2025` |
| Programming for Everybody (Getting Started with Python) | Univ. of Michigan · Coursera | `Oct 2024` |

</details>

---

## Activity

<div align="center">
  <a href="https://github.com/cjgdizon">
    <img src="https://streak-stats.demolab.com?user=cjgdizon&background=090909&border=292929&stroke=292929&ring=f5f5f5&fire=d7e5e5&currStreakNum=f5f5f5&sideNums=f5f5f5&currStreakLabel=d7e5e5&sideLabels=a3a3a3&dates=7c7c85&border_radius=12" alt="GitHub Streak" />
  </a>
  <br />
  <br />
  <a href="https://github.com/cjgdizon">
    <img height="168" src="https://github-readme-stats.vercel.app/api?username=cjgdizon&show_icons=true&bg_color=090909&border_color=292929&title_color=f5f5f5&text_color=a3a3a3&icon_color=d7e5e5&border_radius=12" alt="GitHub Stats" />
  </a>
  &nbsp;
  <a href="https://github.com/cjgdizon">
    <img height="168" src="https://github-readme-stats.vercel.app/api/top-langs/?username=cjgdizon&layout=compact&bg_color=090909&border_color=292929&title_color=f5f5f5&text_color=a3a3a3&border_radius=12" alt="Top Languages" />
  </a>
</div>

<br />

<details>
  <summary><b>▸ Contribution snake (monochrome titanium · auto-updated daily)</b></summary>
  <br />
  <div align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cjgdizon/cjgdizon/output/github-contribution-grid-snake-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/cjgdizon/cjgdizon/output/github-contribution-grid-snake.svg" />
      <img alt="GitHub contribution grid snake animation" src="https://raw.githubusercontent.com/cjgdizon/cjgdizon/output/github-contribution-grid-snake-dark.svg" />
    </picture>
  </div>
</details>

---

## Guestbook

<sub>Want to say hi or leave feedback? Click <b>Sign the Guestbook</b> below — opening the pre-filled issue triggers a GitHub Action that automatically adds your note here.</sub>

<p>
  <a href="https://github.com/cjgdizon/cjgdizon/issues/new?template=guestbook.md&title=guestbook%3A+Hey+Christian!">
    <img src="https://img.shields.io/badge/Sign_the_Guestbook_%E2%86%97-141414?style=for-the-badge&logo=github&logoColor=d7e5e5" alt="Sign the Guestbook" />
  </a>
  &nbsp;
  <a href="https://github.com/cjgdizon/cjgdizon/issues/new?template=project-inquiry.md&title=project%3A+">
    <img src="https://img.shields.io/badge/Start_a_Project_Inquiry_%E2%86%97-141414?style=for-the-badge" alt="Start a Project Inquiry" />
  </a>
</p>

<!-- GUESTBOOK:START -->
| Visitor | Note | Date |
| :--- | :--- | ---: |
| [@cjgdizon](https://github.com/cjgdizon) | Welcome — leave a note above to sign the guestbook! | `2026-11-19` |
<!-- GUESTBOOK:END -->

---

## Contact

### Let's build your next project.

Need an online store, a booking system, or a custom web application? Send me your idea, what it needs to do, and where you'd like to take it.

<p>
  <a href="mailto:cjamesgdizon@gmail.com">
    <img src="https://img.shields.io/badge/Email_me_%E2%86%97-f5f5f5?style=for-the-badge&logo=gmail&logoColor=090909" alt="Email me" />
  </a>
  &nbsp;
  <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio_%E2%86%97-141414?style=for-the-badge&logo=vercel&logoColor=f5f5f5" alt="Portfolio" />
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/christian-james-dizon-b731b82a0">
    <img src="https://img.shields.io/badge/LinkedIn_%E2%86%97-141414?style=for-the-badge&logo=linkedin&logoColor=f5f5f5" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://www.instagram.com/christian.znn/">
    <img src="https://img.shields.io/badge/Instagram_%E2%86%97-141414?style=for-the-badge&logo=instagram&logoColor=f5f5f5" alt="Instagram" />
  </a>
  &nbsp;
  <a href="https://www.facebook.com/1Chrizon1">
    <img src="https://img.shields.io/badge/Facebook_%E2%86%97-141414?style=for-the-badge&logo=facebook&logoColor=f5f5f5" alt="Facebook" />
  </a>
</p>

<br />

<div align="center">
  <a href="https://portfolio-nine-coral-djuqwwvzib.vercel.app/">
    <img src="./assets/footer.svg" width="100%" alt="Christian James Dizon — Design-minded. Built end to end." />
  </a>
</div>
