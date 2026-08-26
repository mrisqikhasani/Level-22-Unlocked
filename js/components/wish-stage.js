class WishStage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ==================== STAGE 2: MAKE A WISH CAPSULE ==================== -->
      <div id="wish-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6">

        <div class="inline-block bg-pink-100 text-pink-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-pink-200 shadow-sm">
          STAGE 4: WISH CAPSULE 💌
        </div>

        <h2 class="font-cute text-2xl sm:text-3xl text-pink-600 font-bold">Tulis Harapan Kamu di Sini! ✨</h2>
        <p class="text-xs sm:text-base text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
          Ketik permintaan atau doa terbaikmu untuk level 22 ini. Harapanmu akan tersimpan aman di kapsul waktu! 🌸
        </p>

        <!-- Form Box Input Wish -->
        <div class="max-w-xs sm:max-w-md mx-auto bg-white border-4 border-pink-200 p-5 sm:p-6 rounded-3xl shadow-lg relative text-left">
          
          <form id="wish-form">
            <label class="block font-cute text-xs sm:text-sm font-bold text-pink-500 mb-2">
              Wish Kamu Tahun Ini 💭
            </label>
            
            <textarea 
              id="wish-input" 
              rows="3" 
              placeholder="Misal: Semoga tahun ini makin banyak makan dimsum, bahagia terus, dan..." 
              class="w-full p-3 bg-pink-50 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none font-sans text-xs sm:text-sm text-slate-600 mb-3 resize-none transition"
              required
            ></textarea>

            <button 
              type="submit" 
              id="submit-wish-btn"
              class="w-full font-cute bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 hover:brightness-105 text-white font-bold py-3 rounded-2xl shadow-md transition active:scale-95 text-xs sm:text-sm border-2 border-white cursor-pointer"
            >
              KIRIM HARAPAN KE KAPSUL 🚀
            </button>
          </form>

          <!-- Feedback Setelah Submit Form -->
          <div id="wish-success-msg" class="hidden text-center py-4 space-y-4">
            <div class="text-4xl animate-bounce">💌</div>
            <h3 class="font-cute text-pink-600 font-bold text-base sm:text-lg">Harapan Berhasil Disimpan!</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Semoga semua doa baikmu didengar dan dikabulkan satu per satu ya!
            </p>

            <!-- Tombol Lanjut ke Stage 3 (Surat Utama) -->
            <div class="pt-2">
              <button 
                id="open-letter-btn"
                class="w-full font-cute bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 hover:scale-105 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-pink-200 transition active:scale-95 text-xs sm:text-sm border-2 border-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BUKA SURAT DARI AKU</span>
                <span>✉️✨</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;

    // Bind Event Listeners
    this.querySelector("#wish-form").addEventListener("submit", (e) => this.submitWish(e));
    this.querySelector("#open-letter-btn").addEventListener("click", () => this.goToLetterStage());
  }

  async submitWish(event) {
    event.preventDefault();
    
    const wishInput = this.querySelector("#wish-input");
    const submitBtn = this.querySelector("#submit-wish-btn");
    const form = this.querySelector("#wish-form");
    const successMsg = this.querySelector("#wish-success-msg");

    const wishText = wishInput.value.trim();
    if (!wishText) return;

    submitBtn.innerText = "SAVING TO CAPSULE... ⏳";
    submitBtn.disabled = true;

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzABbP1njTIpCTv_1FXoAy3o8B12nnLpRhwwahf392csfKbqbgHpIw9mxImg8bIomST/exec";
    // const SCRIPT_URL = "";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wish: wishText, timestamp: new Date().toISOString() })
      });
    } catch (err) {
      console.error("Gagal mengirim wish:", err);
    }

    form.classList.add("hidden");
    successMsg.classList.remove("hidden");

    if (typeof confetti === "function") {
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    }
  }

  goToLetterStage() {
    const letterComponent = document.querySelector("letter-stage");
    if (letterComponent) {
      const letterSection = letterComponent.querySelector("#letter-section");
      if (letterSection) {
        letterSection.classList.remove("hidden");
        requestAnimationFrame(() => {
          letterSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }
}

customElements.define("wish-stage", WishStage);