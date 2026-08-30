# 🎈 Level 22: Cutest Girl Unlocked! ✨

<p align="center">
  <img src="https://img.shields.io/badge/Level-22-ff69b4?style=for-the-badge&logo=sparkles&logoColor=white" alt="Level 22" />
  <img src="https://img.shields.io/badge/Status-S.Kom_Unlocked-purple?style=for-the-badge&logo=graduation-cap&logoColor=white" alt="S.Kom Unlocked" />
  <img src="https://img.shields.io/badge/Tech-Web_Components-blue?style=for-the-badge&logo=javascript&logoColor=white" alt="Web Components" />
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

> 🎮 **Project Description:**  
> An interactive, RPG-style gamified web application specially crafted to celebrate a special birthday milestone. Built with modular Native Web Components, Tailwind CSS, custom keyframe animations, and micro-interactions.
---

## 🌟 Key Features & Quest Flow

The web app features a sequential, state-driven quest architecture that guides the player through 5 distinct interactive stages:


🔐 Passcode Gate ➔ 📸 Stage 1: Memory Lane ➔ 🧠 Stage 2: Personality Check ➔ 🕯️ Stage 3: Candle Stage ➔ 💌 Stage 4: Wish Capsule ➔ 🌹 Final Stage: Secret Letter


* 🔐 Security Checkpoint: Passcode-protected entry gate verifying player identity (DDMMYY).
* 📸 Stage 1 — Memory Lane: Interactive 5-step Polaroid timeline highlighting sweet memories, growth, and shared milestones over the years.
* 🧠 Stage 2 — Personality Check: Self-test trivia quiz with dynamic score feedback, custom celebratory messages, and interactive option locks.
* 🕯️ Stage 3 — Candle Stage: Interactive cake presentation with candle-blowing interaction and confetti effects.
* 💌 Stage 4 — Wish Capsule: Form integration for recording birthday wishes and hopes for Level 22.
* 🌹 Final Stage — Secret Letter: Personal birthday letter with interactive celebration triggers.
---

## 🛠️ Tech Stack & Architecture

* **Core Logic:** Vanilla JavaScript (ES6+ Custom HTML Elements / Web Components)
* **UI Framework:** Tailwind CSS & Custom CSS Keyframe Animations
* **VFX & Animations:** Canvas Confetti API & SVG Micro-Interactions
* **Typography:** Google Fonts (*Fredoka* & *Quicksand*)
* **Assets & Media:** Responsive HTML5 Audio API & Modular Image Assets

---

## 📂 Project Structure

```text
alia-birthday-quest/
├── assets/
│   ├── img/            # Memory Lane & Hero Polaroid photos
│   └── audio/          # Background music (BGM)
├── css/
│   └── style.css       # Custom keyframe animations & UI helpers
├── js/
│   ├── components/     # Custom Web Component modules
│   │   ├── memory-stage.js
│   │   ├── quiz-stage.js
│   │   ├── cake-stage.js
│   │   ├── wish-stage.js
│   │   └── letter-stage.js
│   └── main.js         # Core application handler & HUD interaction logic
├── index.html          # Main application entry point
└── README.md           # Project documentation