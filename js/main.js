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

// function toggleMusic() {
//   const bgMusic = document.getElementById("bg-music");
//   const musicBtn = document.getElementById("music-btn");
//   if (!bgMusic || !musicBtn) return;

//   if (isPlaying) {
//     bgMusic.pause();
//     musicBtn.innerText = "🎵";
//     isPlaying = false;
//   } else {
//     bgMusic.play();
//     musicBtn.innerText = "🔊";
//     isPlaying = true;
//   }
// }

// 3. Scroll to Quest Button Handler
function scrollToQuest() {
  const cakeComponent = document.querySelector("memory-stage");
  const startBirtdayQuestButton = document.querySelector("#start-birthday-quest-btn");
  if (cakeComponent) {
    const cakeSection = cakeComponent.querySelector("#memory-section");
    if (cakeSection) {
      cakeSection.classList.remove("hidden");
      cakeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  startBirtdayQuestButton.classList.add("")
}

// Variable Emojis Avatar
const avatarMoods = ["👑", "🥰", "💖", "🌸", "🥳", "🎀"];
let currentMoodIndex = 0;

// 1. Interactive Avatar Mood Flip
function triggerAvatarMood() {
  const avatarBtn = document.getElementById("player-avatar");
  if (!avatarBtn) return;

  // Ganti Emoji
  currentMoodIndex = (currentMoodIndex + 1) % avatarMoods.length;
  avatarBtn.innerText = avatarMoods[currentMoodIndex];

  // Jalankan Animasi Spin
  avatarBtn.classList.add("animate-spin-once");
  setTimeout(() => avatarBtn.classList.remove("animate-spin-once"), 500);

  // Confetti kecil
  if (typeof confetti === "function") {
    confetti({ particleCount: 15, spread: 40, origin: { y: 0.1, x: 0.2 } });
  }
}

// 2. Floating Text Effect saat Love Bar diklik
function restoreHealth() {
  const loveText = document.getElementById("love-text");
  if (!loveText) return;

  // Buat Elemen Floating Text (+100 XP)
  const floatEl = document.createElement("span");
  floatEl.innerText = "+100 LOVE XP 💕";
  floatEl.className = "absolute text-[11px] font-cute font-bold text-pink-500 pointer-events-none";
  floatEl.style.animation = "floatUp 1s ease-out forwards";

  loveText.parentElement.appendChild(floatEl);

  setTimeout(() => floatEl.remove(), 1000);

  if (typeof confetti === "function") {
    confetti({ particleCount: 20, spread: 50, origin: { y: 0.1, x: 0.3 } });
  }
}

// 3. Audio Control dengan Animasi Disk
function toggleMusic() {
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  if (!bgMusic || !musicBtn) return;

  if (isPlaying) {
    bgMusic.pause();
    musicBtn.innerText = "🎵";
    musicBtn.classList.remove("animate-music-spin");
    isPlaying = false;
  } else {
    bgMusic.play();
    musicBtn.innerText = "🔊";
    musicBtn.classList.add("animate-music-spin");
    isPlaying = true;
  }
}

