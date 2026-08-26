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
            <span class="font-cute text-pink-500 font-bold text-xs sm:text-sm">For: Alia Jennifer Kim Ritzky, S.Kom ✨</span>
            <span class="text-xs text-slate-400 font-semibold bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full border border-pink-200">Level 22 🎓</span>
          </div>

          <!-- PESAN UTAMA -->
          <div class="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            <p class="font-bold text-pink-500 text-sm sm:text-base">
              Happy Birthday, Alia, S.Kom! 🎉🎓✨
            </p>
            <p>
              Selamat memasuki usia yang baru. Terima kasih ya sudah hadir dan tumbuh jadi sosok yang selalu membawa warna, kehangatan, dan keceriaan di sekitarmu.
            </p>
            <p>
              Mengingat awal pertama kita ketemu gara-gara kamu nanya soal program Bangkit—dari yang dulu masih belajar awal di IT, berhasil jadi <b>Lulusan Terbaik di Program Asah</b>, sampai kemarin momen lega banget H-1 ultah resmi unlocked gelar <b>S.Kom</b>... Jujur, progress dan pencapaian kamu luar biasa banget. Aku beneran bangga sama kamu! 🌟🎓
            </p>
            <p>
              Kamu itu sosok yang gigih, kuat, otentik, baik hati, dan punya energi positif yang selalu berhasil bikin orang-orang di sekitarmu merasa nyaman. Melihat perjuangan kamu sampai di titik ini bikin aku makin yakin, di masa depan nanti kamu pasti bisa meraih semua mimpi besar kamu—termasuk jadi <b>DevOps & AWS Cloud Engineer</b> yang hebat! Jangan pernah ragu sama kemampuan diri kamu sendiri ya!
            </p>
            <p>
              Semoga di level 22 ini, rezeki makin melimpah, karier dipermudah, makin banyak kebahagiaan yang datang, sehat selalu, dan tentunya... bisa makan Chikuro & Dimsum enak sepuasnya tanpa ragu! 🥟🛍️✨
            </p>
            <p>
              Tetap jadi diri kamu yang otentik, lucu, dan selalu jadi orang baik ya.
            </p>
          </div>

          <!-- Signature Section -->
          <div class="border-t-2 border-pink-100 pt-4 text-right">
            <span class="font-cute text-pink-500 font-bold text-xs sm:text-sm block">The Most Special Person,</span>
            <span class="font-cute text-slate-500 text-xs font-semibold">Sani</span>
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