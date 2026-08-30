class LetterStage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ==================== STAGE 5: SECRET LOVE LETTER ==================== -->
      <section id="letter-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6 mb-12">

        <!-- Stage Badge -->
        <div class="inline-block bg-pink-100 text-pink-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-pink-200 shadow-sm animate-pulse">
          FINAL STAGE: SPECIAL MESSAGE 🌹
        </div>

        <h2 class="font-cute text-2xl sm:text-3xl text-pink-600 font-bold">A Letter For You 💌</h2>

        <!-- Card Envelope / Letter Paper with Pop-In Animation -->
        <div class="max-w-xs sm:max-w-md mx-auto bg-gradient-to-br from-white via-pink-50/50 to-purple-50 border-4 border-pink-300 p-6 sm:p-8 rounded-3xl shadow-xl text-left relative overflow-hidden space-y-4 animate-pop-in transition-all duration-300 hover:shadow-2xl">
          
          <!-- Decorative Floating Background Emoji -->
          <div class="absolute -top-3 -right-3 text-4xl opacity-20 animate-float">🌸</div>
          <div class="absolute -bottom-2 -left-2 text-4xl opacity-15 animate-float" style="animation-delay: 1s;">☁️</div>

          <!-- Header Letter Info -->
          <div class="flex items-center justify-between border-b-2 border-pink-100 pb-3">
            <span class="font-cute text-pink-500 font-bold text-xs sm:text-sm">For: My Favorite Person ✨</span>
            <span class="text-xs text-slate-400 font-semibold bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full border border-pink-200">Level 22 🎈</span>
          </div>

          <!-- PESAN UTAMA -->
          <div class="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            <p class="font-bold text-pink-500 text-sm sm:text-base">
              Happy Birthday, Princess! 🎉✨
            </p>
            <p>
              Selamat memasuki usia yang baru! Terima kasih ya sudah hadir dan tumbuh jadi sosok yang selalu membawa warna, kehangatan, dan keceriaan di sekitarku.
            </p>
            <p>
              Melihat perjalanan yang sudah kita lewati sejauh ini—dari setiap momen sederhana, tawa bersama, sampai kerja keras kamu dalam meraih tiap impian... Jujur, aku bener-bener bangga sama kamu! Kamu selalu berhasil membuktikan kalau kamu itu sosok yang hebat. 🌟💖
            </p>
            <p>
              Kamu itu sosok yang gigih, kuat, otentik, baik hati, dan punya energi positif yang selalu bikin orang-orang di sekitarmu merasa nyaman. Melihat kebaikan dan semangat kamu bikin aku makin yakin, di masa depan nanti kamu pasti bisa meraih semua mimpi besar kamu. Jangan pernah ragu sama kemampuan diri kamu sendiri ya!
            </p>
            <p>
              Semoga di level baru ini, rezeki makin melimpah, segala urusan dipermudah, makin banyak kebahagiaan yang datang, sehat selalu, dan tentunya... bisa jajan makanan favorit kamu sepuasnya tanpa ragu! 🍰🛍️✨
            </p>
            <p>
              Tetap jadi diri kamu yang otentik, lucu, dan selalu jadi orang baik ya.
            </p>
          </div>

          <!-- Signature Section -->
          <div class="border-t-2 border-pink-100 pt-4 text-right">
            <span class="font-cute text-pink-500 font-bold text-xs sm:text-sm block">With all my love,</span>
            <span class="font-cute text-slate-500 text-xs font-semibold">Your Favorite Person ❤️</span>
          </div>

        </div>

        <!-- Grand Finale Re-Confetti Button -->
        <div class="pt-2">
          <button id="celebrate-btn" type="button"
            class="font-cute bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 hover:scale-105 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-pink-200 transition active:scale-95 text-xs sm:text-sm border-2 border-white cursor-pointer">
            CELEBRATE AGAIN! 🎉💖
          </button>
        </div>

      </section>
    `;

    // Event Listener untuk Tombol Perayaan Ulang
    const celebrateBtn = this.querySelector("#celebrate-btn");
    if (celebrateBtn) {
      celebrateBtn.addEventListener("click", () => {
        if (typeof confetti === "function") {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
          });
        }
      });
    }
  }
}

customElements.define("letter-stage", LetterStage);