class MemoryStage extends HTMLElement {
  connectedCallback() {
    this.memories = [
      {
        year: "2023",
        title: "The Beginning 🌸",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        description:
          "Awal dari segalanya! Momen manis di mana cerita kita baru dimulai. Dari berkenalan sampai akhirnya selalu ada buat satu sama lain."
      },
      {
        year: "2024",
        title: "First Sweet Adventure ✈️✨",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        description:
          "Petualangan dan jalan-jalan seru pertama kita! Banyak momen lucu, tawa, dan foto-foto gemes yang bikin hari-hari terasa lebih berwarna."
      },
      {
        year: "2025",
        title: "Growing Beautifully 🌟💗",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        description:
          "Menikmati proses tumbuh jadi sosok yang makin matang, bijak, dan cantik. Tetap jadi diri sendiri yang selalu bawa keceriaan dan energi positif."
      },
      {
        year: "2025",
        title: "Proud of Your Achievements 🎓✨",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        description:
          "Momen penuh rasa bangga! Semua kerja keras dan perjuangan kamu akhirnya membuahkan hasil manis. Super proud of you, princess!"
      },
      {
        year: "2026",
        title: "Level Up & Happy Birthday! 👑🎈",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
        description:
          "Selamat ulang tahun buat cewek paling spesial! Semoga di chapter baru ini makin banyak kebahagiaan, impian yang tercapai, dan kenangan indah bareng."
      }
    ];

    this.currentIndex = 0;

    this.innerHTML = `
      <!-- ==================== MEMORY STAGE ==================== -->
      <section
        id="memory-section"
        class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-pink-200 text-center space-y-6"
      >

        <!-- Stage Badge -->
        <div
          class="inline-block bg-purple-100 text-purple-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-purple-200 shadow-sm"
        >
          STAGE 1: MEMORY LANE 📸
        </div>

        <!-- Title -->
        <div class="space-y-2">
          <h2 class="font-cute text-2xl sm:text-3xl text-purple-600 font-bold">
            Let's Take a Trip Down Memory Lane! ✨
          </h2>
          <p class="text-xs sm:text-base text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
            Sebelum lanjut ke quest berikutnya, yuk lihat kembali beberapa cerita dan kenangan indah yang pernah kita lewati bersama. 🌸
          </p>
        </div>

        <!-- Memory Card Container -->
        <div class="max-w-xs sm:max-w-md mx-auto">
          <!-- Polaroid Frame Wrapper -->
          <div class="bg-white border-4 border-purple-200 p-4 sm:p-5 rounded-3xl shadow-xl transition-all duration-300 transform hover:-rotate-1">
            
            <!-- Photo Box (Polaroid Look) -->
            <div class="relative bg-purple-50 rounded-2xl p-2.5 border-2 border-purple-100 shadow-inner group overflow-hidden">
              
              <!-- Cute Tape Deco -->
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-200/80 backdrop-blur-sm rotate-2 z-20 rounded-sm border border-pink-300"></div>

              <img
                id="memory-image"
                src=""
                alt="Memory"
                class="w-full h-64 sm:h-80 object-cover rounded-xl transition-all duration-500 transform scale-100 group-hover:scale-105"
              />

              <!-- Year Badge -->
              <span
                id="memory-year"
                class="absolute top-4 left-4 bg-yellow-300 text-yellow-900 border-2 border-yellow-400 font-cute text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 transition-transform duration-300"
              >
                2023
              </span>
            </div>

            <!-- Memory Info -->
            <div class="mt-5 space-y-2">
              <h3
                id="memory-title"
                class="font-cute text-xl sm:text-2xl text-purple-600 font-bold transition-all duration-300"
              >
                Memory Title
              </h3>

              <p
                id="memory-description"
                class="text-xs sm:text-sm text-slate-500 leading-relaxed transition-all duration-300"
              >
                Memory description
              </p>
            </div>
          </div>

          <!-- Progress Text -->
          <div class="flex justify-center items-center gap-2 mt-5">
            <span
              id="memory-progress"
              class="font-cute text-xs text-purple-400 font-bold"
            >
              MEMORY 1 / 5
            </span>
          </div>

          <!-- Dots Indicator -->
          <div
            id="memory-dots"
            class="flex justify-center gap-2 mt-3"
          ></div>

          <!-- Navigation Button -->
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
          class="hidden max-w-xs sm:max-w-md mx-auto bg-emerald-50 border-2 border-emerald-200 p-5 rounded-3xl shadow-sm space-y-3 animate-pop-in"
        >
          <div class="text-4xl animate-bounce">
            🎉
          </div>

          <h3 class="font-cute text-lg sm:text-xl text-emerald-600 font-bold">
            ALL MEMORIES UNLOCKED! 🏆
          </h3>

          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Semua kenangan manis berhasil dibuka! Sekarang waktunya tes seberapa tahu kamu tentang hal-hal favorit di quest berikutnya! 🧠✨
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
      image.style.transform = "scale(0.95)";

      setTimeout(() => {
        image.src = memory.image;
        image.alt = memory.title;
        image.style.opacity = "1";
        image.style.transform = "scale(1)";
      }, 150);
    }

    if (year) {
      year.innerText = memory.year;
      year.classList.add("scale-125");
      setTimeout(() => year.classList.remove("scale-125"), 200);
    }

    if (title) title.innerText = memory.title;
    if (description) description.innerText = memory.description;

    if (progress) {
      progress.innerText = `MEMORY ${this.currentIndex + 1} / ${this.memories.length}`;
    }

    if (dots) {
      dots.innerHTML = this.memories
        .map((_, index) => `
          <span
            class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === this.currentIndex
            ? "bg-purple-500 scale-125 shadow-sm"
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

      if (typeof confetti === "function") {
        confetti({
          particleCount: 20,
          spread: 40,
          origin: { y: 0.6 }
        });
      }

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
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }

  continueQuest() {
    const quizComponent = document.querySelector("quiz-stage");
    if (!quizComponent) return;

    const quizSection = quizComponent.querySelector("#quiz-section");
    if (!quizSection) return;

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