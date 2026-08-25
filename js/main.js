// === CONFIGURATION ===
const CORRECT_PASSCODE = "270804"; 

// === GLOBAL VARIABLES ===
let attemptCount = 0;
let isPlaying = false;

const clueToast = document.getElementById("clue-toast");
const bgMusic = document.getElementById("bg-music");

// 1. Password Verification & Clue Logic
function handlePasscodeSubmit(event) {
  event.preventDefault();
  const inputVal = document.getElementById("passcode-input").value;

  if (inputVal === CORRECT_PASSCODE) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-dashboard").classList.remove("hidden");
    playMusic();
  } else {
    attemptCount++;
    clueToast.classList.remove("hidden");
    
    if (attemptCount === 1) {
      clueToast.innerText = "❌ Ups, salah! Masa tanggal lahir sendiri lupa? Coba ingat-ingat lagi 😄";
    } else if (attemptCount === 2) {
      clueToast.innerText = "😜 Masih salah! Clue: Formatnya DDMMYY ya manis. Jangan pake ultah mantan!";
    } else {
      clueToast.innerText = "🚨 Udah 3x salah nih! Clue utama: Tanggal lahir kamu sendiri ya sayang ❤️ (270804)";
    }
  }
}

// 2. Audio Control
function playMusic() {
  bgMusic.play().then(() => {
    isPlaying = true;
    document.getElementById("music-btn").innerText = "🔊";
  }).catch(err => {
    console.log("Autoplay blocked by browser policy. User interaction required.");
  });
}

function toggleMusic() {
  const musicBtn = document.getElementById("music-btn");
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

// 3. Scroll to Quest & Blow Candle
function scrollToQuest() {
  const cakeSection = document.getElementById("cake-section");
  cakeSection.classList.remove("hidden");
  cakeSection.scrollIntoView({ behavior: 'smooth' });
}

function blowCandle() {
  const flame = document.getElementById("candle-flame");
  const wishMsg = document.getElementById("wish-message");
  const blowBtn = document.getElementById("blow-btn");

  flame.classList.add("opacity-0", "scale-0");
  wishMsg.classList.remove("hidden");

  blowBtn.innerText = "✨ WISH GRANTED!";
  blowBtn.disabled = true;
  blowBtn.classList.add("opacity-60", "cursor-not-allowed");

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}