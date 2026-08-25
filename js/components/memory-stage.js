class MemoryStage extends HTMLElement {

  connectedCallback() {
    this.memories = [
      {
        year: "2023",
        title: "The Beginning 🌸",
        image: "assets/img/Memory-1.jpg",
        description:
          "Salah satu bagian dari perjalanan yang mungkin kelihatannya sederhana, tapi ternyata jadi bagian dari cerita yang berharga."
      },
      {
        year: "2024",
        title: "The S.Kom Era 🎓",
        image: "assets/img/Memory-2.jpg",
        description:
          "Dari tugas, deadline, drama, sampai akhirnya bisa bilang: S.Kom officially unlocked! 🎓✨"
      },
      {
        year: "2025",
        title: "New Chapter ✨",
        image: "assets/img/Memory-3.jpg",
        description:
          "Chapter baru dimulai. Banyak hal baru, banyak cerita baru, dan tentunya lebih banyak alasan buat tersenyum."
      },
      {
        year: "2026",
        title: "Level 22 👑",
        image: "assets/img/Memory-4.jpg",
        description:
          "Dan akhirnya kita sampai di sini. Level 22 unlocked! Semoga chapter ini jadi salah satu chapter terbaik dalam hidupmu."
      }
    ];

    this.currentIndex = 0;

    this.innerHTML = `
      <!-- ==================== MEMORY STAGE ==================== -->
      <!-- TAMBAHKAN KELAS 'hidden' DI SINI AGAR TIDAK MUNCUL DI AWAL -->
      <section
        id="memory-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6"
      >

        <!-- Stage Badge -->
        <div
          class="inline-block bg-purple-100 text-purple-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-purple-200 shadow-sm"
        >
          QUEST 1: MEMORY LANE 📸
        </div>

        <!-- Title -->
        <div class="space-y-2">
          <h2
            class="font-cute text-2xl sm:text-3xl text-purple-600 font-bold"
          >
            Let's Take a Trip Down Memory Lane! ✨
          </h2>

          <p
            class="text-xs sm:text-base text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed"
          >
            Sebelum lanjut ke quest berikutnya, yuk lihat kembali
            beberapa cerita dan kenangan yang pernah dilewati. 🌸
          </p>
        </div>

        <!-- Memory Card -->
        <div class="max-w-xs sm:max-w-md mx-auto">
          <div
            class="bg-white border-4 border-purple-200 p-4 sm:p-5 rounded-3xl shadow-xl"
          >
            <!-- Photo -->
            <div
              class="relative bg-purple-50 rounded-2xl p-2 border-2 border-purple-100"
            >
              <img
                id="memory-image"
                src=""
                alt="Memory"
                class="w-full h-64 sm:h-80 object-cover rounded-xl transition-all duration-500"
              />

              <!-- Year Badge -->
              <span
                id="memory-year"
                class="absolute top-4 left-4 bg-yellow-300 text-yellow-900 border-2 border-yellow-400 font-cute text-xs font-bold px-3 py-1 rounded-full shadow-md"
              >
                2023
              </span>
            </div>

            <!-- Memory Info -->
            <div class="mt-5 space-y-2">
              <h3
                id="memory-title"
                class="font-cute text-xl sm:text-2xl text-purple-600 font-bold"
              >
                Memory Title
              </h3>

              <p
                id="memory-description"
                class="text-xs sm:text-sm text-slate-500 leading-relaxed"
              >
                Memory description
              </p>
            </div>
          </div>

          <!-- Progress -->
          <div class="flex justify-center items-center gap-2 mt-5">
            <span
              id="memory-progress"
              class="font-cute text-xs text-purple-400 font-bold"
            >
              MEMORY 1 / 4
            </span>
          </div>

          <!-- Dots -->
          <div
            id="memory-dots"
            class="flex justify-center gap-2 mt-3"
          ></div>

          <!-- Navigation -->
          <div class="mt-5">
            <button
              id="next-memory-btn"
              type="button"
              class="font-cute bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 hover:scale-105 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-purple-200 transition active:scale-95 text-sm sm:text-base border-2 border-white cursor-pointer"
            >
              NEXT MEMORY →
            </button>
          </div>
        </div>

        <!-- Completion Message -->
        <div
          id="memory-complete"
          class="hidden max-w-xs sm:max-w-md mx-auto bg-emerald-50 border-2 border-emerald-200 p-5 rounded-3xl shadow-sm space-y-3"
        >
          <div class="text-4xl">
            🎉
          </div>

          <h3
            class="font-cute text-lg sm:text-xl text-emerald-600 font-bold"
          >
            ALL MEMORIES UNLOCKED!
          </h3>

          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Oke, cukup nostalgia-nya. Sekarang waktunya lanjut ke
            quest berikutnya! 🕯️✨
          </p>

          <button
            id="continue-memory-btn"
            type="button"
            class="font-cute bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 text-white font-bold px-6 py-3 rounded-2xl shadow-md transition active:scale-95 text-xs sm:text-sm cursor-pointer"
          >
            CONTINUE TO QUIZ 🧠✨
          </button>
        </div>

      </section>
    `;

    this.renderMemory();

    const nextBtn = this.querySelector("#next-memory-btn");
    const continueBtn = this.querySelector("#continue-memory-btn");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.nextMemory());
    }

    if (continueBtn) {
      continueBtn.addEventListener("click", () => this.continueQuest());
    }
  }

  renderMemory() {
    const memory = this.memories[this.currentIndex];

    const image = this.querySelector("#memory-image");
    const year = this.querySelector("#memory-year");
    const title = this.querySelector("#memory-title");
    const description = this.querySelector("#memory-description");
    const progress = this.querySelector("#memory-progress");
    const dots = this.querySelector("#memory-dots");

    if (!memory) return;

    if (image) {
      image.style.opacity = "0";

      setTimeout(() => {
        image.src = memory.image;
        image.alt = memory.title;
        image.style.opacity = "1";
      }, 150);
    }

    if (year) {
      year.innerText = memory.year;
    }

    if (title) {
      title.innerText = memory.title;
    }

    if (description) {
      description.innerText = memory.description;
    }

    if (progress) {
      progress.innerText =
        `MEMORY ${this.currentIndex + 1} / ${this.memories.length}`;
    }

    if (dots) {
      dots.innerHTML = this.memories
        .map((_, index) => `
          <span
            class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === this.currentIndex
            ? "bg-purple-500 scale-125"
            : "bg-purple-200"
          }"
          ></span>
        `)
        .join("");
    }

    const nextBtn = this.querySelector("#next-memory-btn");

    if (nextBtn) {
      if (this.currentIndex === this.memories.length - 1) {
        nextBtn.innerText = "FINISH MEMORIES ✨";
      } else {
        nextBtn.innerText = "NEXT MEMORY →";
      }
    }
  }

  nextMemory() {
    if (this.currentIndex < this.memories.length - 1) {
      this.currentIndex++;
      this.renderMemory();

      const section = this.querySelector("#memory-section");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      this.finishMemoryStage();
    }
  }

  finishMemoryStage() {
    const complete = this.querySelector("#memory-complete");
    const nextBtn = this.querySelector("#next-memory-btn");

    if (nextBtn) {
      nextBtn.classList.add("hidden");
    }

    if (complete) {
      complete.classList.remove("hidden");

      setTimeout(() => {
        complete.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 100);
    }

    if (typeof confetti === "function") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6
        }
      });
    }
  }

  continueQuest() {
    const quizComponent = document.querySelector("quiz-stage");

    if (!quizComponent) {
      console.warn("Quiz Stage tidak ditemukan.");
      return;
    }

    const quizSection = quizComponent.querySelector("#quiz-section");

    if (!quizSection) {
      console.warn("#quiz-section tidak ditemukan.");
      return;
    }

    quizSection.classList.remove("hidden");

    setTimeout(() => {
      quizSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  }
}

customElements.define("memory-stage", MemoryStage);