class CakeStage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ==================== STAGE 1: CANDLE STAGE ==================== -->
      <div id="cake-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6">

        <div class="inline-block bg-pink-100 text-pink-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-pink-200 shadow-sm">
          STAGE 3: CANDLE STAGE 🕯️
        </div>

        <h2 class="font-cute text-2xl sm:text-3xl text-pink-600 font-bold">Tiup Lilinnya & Make a Wish! ✨</h2>
        <p class="text-xs sm:text-base text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
          Tutup mata, bayangkan permintaan terbaikmu tahun ini, lalu klik tombol tiup di bawah!
        </p>

        <!-- Visual Kue Ultah Interaktif -->
        <div class="relative w-48 h-52 sm:w-56 sm:h-60 mx-auto bg-gradient-to-b from-pink-50 to-pink-100/50 border-4 border-pink-200 rounded-3xl flex flex-col items-center justify-end p-4 sm:p-5 shadow-inner overflow-hidden">
          
          <div id="smoke-effect" class="opacity-0 transition-opacity duration-700 absolute top-6 flex flex-col items-center pointer-events-none">
            <span class="text-slate-400 text-xs animate-ping">💨</span>
          </div>

          <div id="candle-flame"
            class="w-4 h-6 sm:w-5 sm:h-8 bg-gradient-to-t from-amber-500 via-amber-400 to-yellow-200 rounded-full blur-[0.5px] animate-pulse shadow-[0_0_15px_#fbbf24] mb-1 transition-all duration-500">
          </div>

          <div class="w-3.5 h-9 sm:w-4 sm:h-10 bg-gradient-to-b from-rose-300 via-pink-400 to-rose-400 rounded-sm mb-1 shadow-sm border-x border-white/40"></div>
          
          <div class="w-full h-12 sm:h-14 bg-pink-300 rounded-t-2xl border-b-4 border-pink-400 flex items-center justify-center text-xs sm:text-sm shadow-sm">
            🍓 🍓 🍓
          </div>

          <div class="w-full h-12 sm:h-14 bg-amber-100 rounded-b-2xl flex flex-col items-center justify-center text-[10px] sm:text-xs font-cute text-amber-800 shadow-sm">
            <span class="font-bold">DIMSUM STRAWBERRY 🥟</span>
            <span class="text-[9px] text-amber-600">SPECIAL EDITION</span>
          </div>
        </div>

        <!-- Feedback Teks Setelah Ditiup -->
        <div id="wish-message"
          class="hidden bg-emerald-50 border-2 border-emerald-200 text-emerald-600 p-4 rounded-2xl text-xs sm:text-sm font-bold animate-bounce max-w-xs sm:max-w-md mx-auto shadow-sm">
          🎉 Horeee! Lilinnya mati! Semoga semua doa & harapanmu dikabulkan ya! ❤️
        </div>

        <!-- Wadah Tombol -->
        <div class="flex flex-col items-center gap-3">
          <button id="blow-btn" type="button"
            class="font-cute bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-105 text-white font-bold px-8 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-orange-200 transition active:scale-95 text-sm sm:text-base border-2 border-white">
            💨 TIUP LILINNYA!
          </button>

          <!-- Tombol Lanjut ke Wish Stage (Muncul Setelah Lilin Mati) -->
          <div id="next-quest-container" class="hidden transition-all duration-500 pt-2">
            <button id="next-stage-btn" type="button"
              class="font-cute bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 hover:scale-105 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-pink-300 transition active:scale-95 text-sm sm:text-base border-2 border-white flex items-center gap-2 cursor-pointer">
              <span>TULIS WISH KAMU</span>
              <span>✉️✨</span>
            </button>
          </div>
        </div>

      </div>
    `;

    // Direct Event Binding
    const blowBtn = this.querySelector("#blow-btn");
    const nextBtn = this.querySelector("#next-stage-btn");

    if (blowBtn) blowBtn.addEventListener("click", () => this.blowCandle());
    if (nextBtn) nextBtn.addEventListener("click", () => this.goToWishStage());
  }

  blowCandle() {
    const flame = this.querySelector("#candle-flame");
    const smoke = this.querySelector("#smoke-effect");
    const wishMsg = this.querySelector("#wish-message");
    const blowBtn = this.querySelector("#blow-btn");
    const nextContainer = this.querySelector("#next-quest-container");

    if (flame) flame.classList.add("opacity-0", "scale-0");
    if (smoke) {
      smoke.classList.remove("opacity-0");
      setTimeout(() => smoke.classList.add("opacity-0"), 1500);
    }

    if (wishMsg) wishMsg.classList.remove("hidden");

    if (blowBtn) {
      blowBtn.innerText = "✨ WISH GRANTED!";
      blowBtn.disabled = true;
      blowBtn.classList.add("opacity-60", "cursor-not-allowed");
    }

    if (nextContainer) {
      nextContainer.classList.remove("hidden");
    }

    if (typeof confetti === "function") {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  }

  goToWishStage() {
    // Cari elemen wish-stage secara fleksibel di DOM
    const wishComponent = document.querySelector("wish-stage");
    if (wishComponent) {
      const wishSection = wishComponent.querySelector("#wish-section");
      if (wishSection) {
        // Unhide section
        wishSection.classList.remove("hidden");
        // Force layout repaint & smooth scroll
        requestAnimationFrame(() => {
          wishSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }
}

customElements.define("cake-stage", CakeStage);