// === CONFIGURATION ===
const CORRECT_PASSCODE = "270804"; 

// === GLOBAL VARIABLES ===
let attemptCount = 0;
let isPlaying = false;

// 1. Password Verification & Clue Logic
function handlePasscodeSubmit(event) {
  event.preventDefault();
  const inputVal = document.getElementById("passcode-input").value;
  const clueToast = document.getElementById("clue-toast");

  if (inputVal === CORRECT_PASSCODE) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-dashboard").classList.remove("hidden");
    playMusic();
  } else {
    attemptCount++;
    if (clueToast) {
      clueToast.classList.remove("hidden");
      if (attemptCount === 1) {
        clueToast.innerText = "❌ Ups, salah! Masa tanggal lahir sendiri lupa? Coba ingat-ingat lagi 😄";
      } else if (attemptCount === 2) {
        clueToast.innerText = "😜 Masih salah! Clue: Formatnya DDMMYY ya manis";
      } else {
        clueToast.innerText = "🚨 Udah 3x salah nih! Clue utama: Tanggal lahir kamu sendiri ya sayang ❤️ (270804)";
      }
    }
  }
}

// 2. Audio Control
function playMusic() {
  const bgMusic = document.getElementById("bg-music");
  if (!bgMusic) return;

  bgMusic.play().then(() => {
    isPlaying = true;
    const btn = document.getElementById("music-btn");
    if (btn) btn.innerText = "🔊";
  }).catch(err => {
    console.log("Autoplay blocked by browser policy. User interaction required.");
  });
}

function toggleMusic() {
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  if (!bgMusic || !musicBtn) return;

  if (isPlaying) {
    bgMusic.pause();
    musicBtn.innerText = "🎵";
    isPlaying = false;
  } else {
    bgMusic.play();
    musicBtn.innerText = "🔊";
    isPlaying = true;
  }
}

// 3. Scroll to Quest Button Handler
function scrollToQuest() {
  const cakeComponent = document.querySelector("cake-stage");
  if (cakeComponent) {
    const cakeSection = cakeComponent.querySelector("#cake-section");
    if (cakeSection) {
      cakeSection.classList.remove("hidden");
      cakeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

