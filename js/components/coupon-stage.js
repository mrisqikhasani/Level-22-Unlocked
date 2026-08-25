class CouponStage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ==================== STAGE 2: REWARD COUPONS ==================== -->
      <div id="coupon-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6">

        <div class="inline-block bg-pink-100 text-pink-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-pink-200 shadow-sm">
          STAGE 2: REWARD CENTER 🎁
        </div>

        <h2 class="font-cute text-2xl sm:text-3xl text-pink-600 font-bold">Klaim Kupon Hadiah Kamu! 🎉</h2>
        <p class="text-xs sm:text-base text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
          Klik/Tap setiap kartu di bawah ini buat membuka kado rahasia dari aku!
        </p>

        <!-- Grid 3 Kupon Hadiah -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          
          <!-- Kupon 1: Dimsum -->
          <div class="coupon-card bg-white border-4 border-pink-200 rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group">
            <div class="coupon-overlay absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-400 flex flex-col items-center justify-center text-white transition-opacity duration-500 z-10 p-4">
              <span class="text-3xl mb-1 group-hover:scale-110 transition">🥟</span>
              <span class="font-cute text-sm font-bold">TAP UNTUK BUKA</span>
            </div>
            <div class="coupon-content text-center space-y-2 py-2">
              <span class="text-xs font-bold text-pink-400 block tracking-wider">REWARD #1</span>
              <h3 class="font-cute text-base font-bold text-pink-600">AYCE Dimsum Date 🥟</h3>
              <p class="text-[11px] text-slate-500">Makan dimsum sepuasnya, aku yang bayar sepenuhnya! ❤️</p>
              <span class="inline-block bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full">VALID FOREVER</span>
            </div>
          </div>

          <!-- Kupon 2: Barang Lucu -->
          <div class="coupon-card bg-white border-4 border-pink-200 rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group">
            <div class="coupon-overlay absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 flex flex-col items-center justify-center text-white transition-opacity duration-500 z-10 p-4">
              <span class="text-3xl mb-1 group-hover:scale-110 transition">🛍️</span>
              <span class="font-cute text-sm font-bold">TAP UNTUK BUKA</span>
            </div>
            <div class="coupon-content text-center space-y-2 py-2">
              <span class="text-xs font-bold text-purple-400 block tracking-wider">REWARD #2</span>
              <h3 class="font-cute text-base font-bold text-purple-600">Khilaf Barang Lucu 🛍️✨</h3>
              <p class="text-[11px] text-slate-500">Bebas beli barang gemoy di KKV/Miniso/Shopee!</p>
              <span class="inline-block bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full">100% APPROVED</span>
            </div>
          </div>

          <!-- Kupon 3: Free Pass -->
          <div class="coupon-card bg-white border-4 border-pink-200 rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group">
            <div class="coupon-overlay absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 flex flex-col items-center justify-center text-white transition-opacity duration-500 z-10 p-4">
              <span class="text-3xl mb-1 group-hover:scale-110 transition">🎟️</span>
              <span class="font-cute text-sm font-bold">TAP UNTUK BUKA</span>
            </div>
            <div class="coupon-content text-center space-y-2 py-2">
              <span class="text-xs font-bold text-amber-500 block tracking-wider">REWARD #3</span>
              <h3 class="font-cute text-base font-bold text-amber-600">Bebas Pilih Tempat Date 🎬</h3>
              <p class="text-[11px] text-slate-500">Nonton/Jalan/Nongkrong bebas kamu yang tentukan!</p>
              <span class="inline-block bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full">NO DEBATE PASS</span>
            </div>
          </div>

        </div>

        <!-- Action Next to Love Letter -->
        <div id="next-to-letter" class="hidden pt-6">
          <button id="letter-btn"
            class="font-cute bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 hover:scale-105 active:scale-95 text-white font-bold px-8 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-pink-300 transition duration-200 border-2 border-white text-sm sm:text-base">
            BUKA SURAT CINTA UTAMA 💌✨
          </button>
        </div>

      </div>
    `;

    // Event listener untuk setiap kupon
    const cards = this.querySelectorAll(".coupon-card");
    let openedCount = 0;

    cards.forEach(card => {
      card.addEventListener("click", () => {
        const overlay = card.querySelector(".coupon-overlay");
        if (overlay && !overlay.classList.contains("opacity-0")) {
          overlay.classList.add("opacity-0", "pointer-events-none");
          openedCount++;

          if (typeof confetti === "function") {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 }
            });
          }

          // Munculkan tombol lanjut ke surat jika minimal 1 kupon dibuka
          if (openedCount >= 1) {
            const nextBtn = this.querySelector("#next-to-letter");
            if (nextBtn) nextBtn.classList.remove("hidden");
          }
        }
      });
    });

    // Event listener tombol lanjut ke Surat
    const letterBtn = this.querySelector("#letter-btn");
    if (letterBtn) {
      letterBtn.addEventListener("click", () => {
        const letterComp = document.querySelector("letter-stage");
        if (letterComp) {
          const letterSec = letterComp.querySelector("#letter-section");
          if (letterSec) {
            letterSec.classList.remove("hidden");
            letterSec.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  }
}

customElements.define("coupon-stage", CouponStage);