class LetterStage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- ==================== STAGE 3: SECRET LOVE LETTER ==================== -->
      <div id="letter-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6 mb-12">

        <div class="inline-block bg-pink-100 text-pink-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-pink-200 shadow-sm">
          FINAL STAGE: SPECIAL MESSAGE 💌
        </div>

        <h2 class="font-cute text-2xl sm:text-3xl text-pink-600 font-bold">A Letter For You 🌹</h2>

        <!-- Card Envelope / Letter Paper -->
        <div class="max-w-xs sm:max-w-md mx-auto bg-gradient-to-br from-white via-pink-50/50 to-purple-50 border-4 border-pink-300 p-6 sm:p-8 rounded-3xl shadow-xl text-left relative overflow-hidden space-y-4">
          
          <div class="absolute -top-3 -right-3 text-4xl opacity-20">🌸</div>

          <div class="flex items-center justify-between border-b-2 border-pink-100 pb-3">
            <span class="font-cute text-pink-500 font-bold text-xs sm:text-sm">For: Alia Jennifer Kim Ritzky, S.Kom ✨</span>
            <span class="text-xs text-slate-400 font-semibold">Level 22 🎓</span>
          </div>

          <!-- PESAN UTAMA -->
          <div class="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            <p class="font-bold text-pink-500 text-sm sm:text-base">
              Happy Birthday, Alia, S.Kom! 🎉🎓
            </p>
            <p>
              Selamat memasuki usia yang baru. Terima kasih ya sudah hadir dan tumbuh jadi sosok yang selalu membawa warna, kehangatan, dan keceriaan di sekitarmu.
            </p>
            <p>
              Mengingat awal pertama kita ketemu gara-gara kamu nanya soal program Bangkit—dari yang dulu masih belajar awal banget di dunia IT, sampai berhasil melewati lika-liku kuliah, resmi unlocked gelar <b>S.Kom</b>, dan bahkan jadi <b>lulusan terbaik di program Asah</b>... Jujur, progress dan pencapaian kamu luar biasa banget. Aku beneran bangga sama kamu! 🌟🎓
            </p>
            <p>
              Kamu itu sosok yang gigih, kuat, otentik, baik hati, dan punya energi positif yang selalu berhasil bikin orang-orang di sekitarmu merasa nyaman. Melihat perjuangan kamu sampai di titik ini bikin aku makin yakin, di masa depan nanti kamu pasti bisa meraih semua mimpi-mimpi besar kamu. Jangan pernah ragu sama kemampuan diri kamu sendiri ya!
            </p>
            <p>
              Semoga di level 22 ini, karier dan impian barumu makin dipermudah, makin banyak kebahagiaan yang datang, sehat selalu, dan tentunya... bisa makan dimsum enak sepuasnya tanpa ragu! 🥟✨
            </p>
            <p>
              Tetap jadi diri kamu yang otentik, lucu, dan selalu jadi orang baik ya.
            </p>
          </div>

          <div class="border-t-2 border-pink-100 pt-4 text-right">
            <span class="font-cute text-pink-500 font-bold text-xs sm:text-sm block">With all my love,</span>
            <span class="font-cute text-slate-400 text-xs">Sani ❤️</span>
          </div>

        </div>

      </div>
    `;
  }
}

customElements.define("letter-stage", LetterStage);