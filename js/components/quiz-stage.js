class QuizStage extends HTMLElement {
    connectedCallback() {

        // ==============================
        // QUIZ DATA: ALIA'S SELF-TEST
        // ==============================
        this.questions = [
            {
                question: "Menurut versi kamu sendiri, apa super-power rahasia yang paling bikin orang di sekitarmu (termasuk aku) merasa nyaman? 🌸",
                options: [
                    "Suka ngasih tebakan garing 😜",
                    "Energi positif, kehangatan, & senyuman kamu ✨",
                    "Keahlian menghilang saat kencan 🙈",
                    "Bisa membaca pikiran orang 🔮"
                ],
                answer: 1,
                correctMessage: "100% TRUE! Energi positif & kehangatan kamu selalu berhasil bikin hari-hari jadi lebih indah ✨❤️",
                wrongMessage: "Pilih opsi B dong! Kehangatan & energi positif kamu itu super-power terbaik kamu! 🥺"
            },

            {
                question: "Apa refleks pertama kamu ketika nggak sengaja ngeliat barang lucu/gemoy di mall atau online shop? 🛍️",
                options: [
                    "'Aku tidak membutuhkannya' 🛑",
                    "'Cuma lihat-lihat aja kok, nggak bakal beli.' 🙈",
                    "'LUCU BANGET HARUS PUNYA SEKARANG! 😭🛍️'",
                    "'Nanti deh mikir-mikir dulu seminggu.'"
                ],
                answer: 2,
                correctMessage: "YES! Self-control otomatis shutdown kalau udah ngeliat yang gemoy-gemoy 😂🛍️",
                wrongMessage: "Hayo jangan bohong... Jawaban aslinya pasti 'LUCU BANGET HARUS PUNYA!' 😭✨"
            },

            {
                question: "Mulai hari ini, sistem telah meng-update status kamu ke level baru. Level berapa kamu sekarang? 🎮",
                options: [
                    "Level 20 (Masih berasa remaja) 🌸",
                    "Level 21 (Level tahun lalu) 🎈",
                    "LEVEL 22: Cutest Girl Unlocked! 👑✨",
                    "Level 25 (Kemajuan woi!) 🏃"
                ],
                answer: 2,
                correctMessage: "LEVEL 22 UNLOCKED! Welcome to your best chapter yet! 👑✨",
                wrongMessage: "Coba lirik badge LVL 22 di header atas layar dong manis! 😭🎈"
            },

            {
                question: "Dari perjalanan kamu di Bangkit, lulusan terbaik Asah, resmi S.Kom, sampai makin pro di dunia DevOps & AWS Cloud, predikat apa yang paling cocok buat kamu? 🌟",
                options: [
                    "Cewek Pekerja Keras & Pantang Menyerah 💪",
                    "Future Certified AWS Cloud Engineer ☁️💻",
                    "Sosok Hebat yang Bikin Bangga ❤️",
                    "SEMUA BENAR TANPA KECUALI! 👑✨"
                ],
                answer: 3,
                correctMessage: "100% CORRECT! Kamu borong semua predikat keren itu tanpa sisa! 👑☁️❤️",
                wrongMessage: "Kamu itu borongan semuanya! Pilih yang 'SEMUA BENAR' dong! 🥺✨"
            },

            {
                question: "Apa wishlist wajib yang paling kamu harapkan di usiamu yang ke-22 ini? ✨",
                options: [
                    "Makin banyak kebahagiaan & senyuman ❤️",
                    "Karier DevOps & AWS Cloud makin sukses ☁️🚀",
                    "Rezeki melimpah, stok dimsum enak & barang gemoy aman 🥟🛍️💸",
                    "SEMUA DOA BAIK DI ATAS! 🎉"
                ],
                answer: 3,
                correctMessage: "Aamiin! Semoga rezeki makin melimpah, karier DevOps AWS makin meroket, dan semua doa baik kamu dikabulkan satu per satu ya sayang! ❤️☁️✨",
                wrongMessage: "Jangan pilih satu-satu, aminkan SEMUA doa baiknya dong! 😭❤️"
            }
        ];

        this.currentQuestion = 0;
        this.score = 0;
        this.answerLocked = false;

        // ==============================
        // RENDER COMPONENT
        // ==============================
        this.innerHTML = `
      <!-- ==================== QUIZ STAGE ==================== -->
      <section id="quiz-section" class="hidden mt-12 sm:mt-16 pt-8 border-t-2 border-dashed border-purple-200 text-center space-y-6">

        <!-- Stage Badge -->
        <div class="inline-block bg-purple-100 text-purple-500 font-cute text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold border border-purple-200 shadow-sm">
          STAGE 2: PERSONALITY CHECK 🧠
        </div>

        <!-- Heading -->
        <div class="space-y-2">
          <h2 class="font-cute text-2xl sm:text-3xl text-purple-600 font-bold">
            Alia's Self-Test! 👀
          </h2>
          <p class="text-xs sm:text-base text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
            Sebelum lanjut ke tiup lilin, yuk tes seberapa konsisten kebiasaan & fakta unik kamu di Level 22 ini! ✨
          </p>
        </div>

        <!-- QUIZ CARD -->
        <div id="quiz-card" class="max-w-xs sm:max-w-md mx-auto bg-white border-4 border-purple-200 p-5 sm:p-6 rounded-3xl shadow-xl space-y-5">

          <!-- Progress -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="font-cute text-xs text-purple-400 font-bold">QUIZ PROGRESS</span>
              <span id="quiz-progress-text" class="font-cute text-xs text-purple-500 font-bold">1 / 5</span>
            </div>

            <div class="w-full h-3 bg-purple-100 rounded-full overflow-hidden border border-purple-200">
              <div id="quiz-progress-bar" class="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500" style="width: 20%;"></div>
            </div>
          </div>

          <!-- Question -->
          <div class="bg-purple-50 border-2 border-purple-100 rounded-2xl p-4 sm:p-5">
            <span id="question-number" class="font-cute text-xs text-purple-400 font-bold">QUESTION 1</span>
            <h3 id="question-text" class="font-cute text-base sm:text-lg text-purple-700 font-bold mt-2 leading-relaxed">Question</h3>
          </div>

          <!-- Answer Options -->
          <div id="quiz-options" class="space-y-3 text-left"></div>

          <!-- Feedback -->
          <div id="quiz-feedback" class="hidden p-4 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed"></div>

          <!-- Next Button -->
          <button id="next-question-btn" type="button" class="hidden w-full font-cute bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 hover:scale-105 text-white font-bold py-3 rounded-2xl shadow-md transition active:scale-95 text-xs sm:text-sm border-2 border-white cursor-pointer">
            NEXT QUESTION →
          </button>
        </div>

        <!-- QUIZ RESULT -->
        <div id="quiz-result" class="hidden max-w-xs sm:max-w-md mx-auto bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-purple-200 p-6 rounded-3xl shadow-xl space-y-4">
          <div class="text-5xl animate-bounce">🏆</div>
          <div>
            <span class="font-cute text-xs text-purple-400 font-bold">QUIZ COMPLETE</span>
            <h3 id="result-title" class="font-cute text-2xl sm:text-3xl text-purple-600 font-bold mt-1">AMAZING!</h3>
          </div>

          <!-- Score -->
          <div class="bg-white border-2 border-purple-100 rounded-2xl p-4">
            <div class="font-cute text-xs text-slate-400 font-bold">YOUR SCORE</div>
            <div id="result-score" class="font-cute text-4xl text-pink-500 font-bold mt-1">5 / 5</div>
          </div>

          <p id="result-message" class="text-xs sm:text-sm text-slate-500 leading-relaxed"></p>

          <!-- XP -->
          <div class="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-3">
            <span class="font-cute text-yellow-600 font-bold text-sm">+500 LOVE XP ❤️</span>
          </div>

          <!-- Continue Button -->
          <button id="continue-quiz-btn" type="button" class="w-full font-cute bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 hover:scale-105 text-white font-bold py-3.5 rounded-2xl shadow-lg transition active:scale-95 text-xs sm:text-sm border-2 border-white cursor-pointer">
            CONTINUE TO MAKE A WISH 🕯️
          </button>
        </div>

      </section>
    `;

        // Event Listeners
        const nextBtn = this.querySelector("#next-question-btn");
        const continueBtn = this.querySelector("#continue-quiz-btn");

        if (nextBtn) nextBtn.addEventListener("click", () => this.nextQuestion());
        if (continueBtn) continueBtn.addEventListener("click", () => this.continueToCake());

        this.renderQuestion();
    }

    // ==============================
    // RENDER QUESTION
    // ==============================
    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        if (!question) return;

        this.answerLocked = false;

        const questionNumber = this.querySelector("#question-number");
        const questionText = this.querySelector("#question-text");
        const progressText = this.querySelector("#quiz-progress-text");
        const progressBar = this.querySelector("#quiz-progress-bar");
        const optionsContainer = this.querySelector("#quiz-options");
        const feedback = this.querySelector("#quiz-feedback");
        const nextBtn = this.querySelector("#next-question-btn");

        if (questionNumber) questionNumber.innerText = `QUESTION ${this.currentQuestion + 1}`;
        if (questionText) questionText.innerText = question.question;

        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        if (progressText) progressText.innerText = `${this.currentQuestion + 1} / ${this.questions.length}`;
        if (progressBar) progressBar.style.width = `${progress}%`;

        if (optionsContainer) optionsContainer.innerHTML = "";
        if (feedback) {
            feedback.className = "hidden p-4 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed";
            feedback.innerText = "";
        }
        if (nextBtn) nextBtn.classList.add("hidden");

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "quiz-option w-full text-left p-3 sm:p-4 bg-white border-2 border-purple-100 rounded-2xl font-semibold text-xs sm:text-sm text-slate-600 hover:border-purple-300 hover:bg-purple-50 transition active:scale-95 cursor-pointer";
            button.innerText = `${String.fromCharCode(65 + index)}. ${option}`;
            button.addEventListener("click", () => this.selectAnswer(index, button));

            if (optionsContainer) optionsContainer.appendChild(button);
        });
    }

    // ==============================
    // SELECT ANSWER
    // ==============================
    selectAnswer(selectedIndex, selectedButton) {
        if (this.answerLocked) return;
        this.answerLocked = true;

        const question = this.questions[this.currentQuestion];
        const options = this.querySelectorAll(".quiz-option");
        const feedback = this.querySelector("#quiz-feedback");
        const nextBtn = this.querySelector("#next-question-btn");
        const isCorrect = selectedIndex === question.answer;

        options.forEach((button) => {
            button.disabled = true;
            button.classList.add("opacity-70", "cursor-not-allowed");
        });

        if (isCorrect) {
            this.score++;
            selectedButton.classList.remove("border-purple-100");
            selectedButton.classList.add("border-emerald-400", "bg-emerald-50", "text-emerald-600");

            if (feedback) {
                feedback.classList.remove("hidden");
                feedback.classList.add("bg-emerald-50", "border-2", "border-emerald-200", "text-emerald-600");
                feedback.innerText = `✅ CORRECT!\n\n${question.correctMessage}`;
            }

            if (typeof confetti === "function") {
                confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
            }
        } else {
            selectedButton.classList.remove("border-purple-100");
            selectedButton.classList.add("border-rose-400", "bg-rose-50", "text-rose-600");

            options.forEach((button, index) => {
                if (index === question.answer) {
                    button.classList.remove("border-purple-100");
                    button.classList.add("border-emerald-300", "bg-emerald-50", "text-emerald-600");
                }
            });

            if (feedback) {
                feedback.classList.remove("hidden");
                feedback.classList.add("bg-rose-50", "border-2", "border-rose-200", "text-rose-600");
                feedback.innerText = `❌ NOT QUITE!\n\n${question.wrongMessage}`;
            }
        }

        if (nextBtn) {
            nextBtn.classList.remove("hidden");
            nextBtn.innerText = (this.currentQuestion === this.questions.length - 1) ? "SEE MY RESULT 🏆" : "NEXT QUESTION →";
        }
    }

    // ==============================
    // NEXT QUESTION
    // ==============================
    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
            this.scrollToQuiz();
        } else {
            this.showResult();
        }
    }

    // ==============================
    // SHOW RESULT
    // ==============================
    showResult() {
        const quizCard = this.querySelector("#quiz-card");
        const result = this.querySelector("#quiz-result");
        const resultScore = this.querySelector("#result-score");
        const resultTitle = this.querySelector("#result-title");
        const resultMessage = this.querySelector("#result-message");

        if (quizCard) quizCard.classList.add("hidden");
        if (result) result.classList.remove("hidden");
        if (resultScore) resultScore.innerText = `${this.score} / ${this.questions.length}`;

        if (resultTitle) {
            if (this.score === this.questions.length) resultTitle.innerText = "100% PERFECT ALIA! 👑";
            else if (this.score >= 4) resultTitle.innerText = "ALMOST PERFECT! ✨";
            else resultTitle.innerText = "NICE TRY CUTIE! 🥰";
        }

        if (resultMessage) {
            if (this.score === this.questions.length) {
                resultMessage.innerText = "Luar biasa! Kamu terbukti 100% konsisten jadi cewek paling gemoy, berprestasi, dan mengagumkan di Level 22 ini! Certified Cutest Girl Unlocked! 🏆❤️";
            } else {
                resultMessage.innerText = "Skor kamu keren banget! Apapun jawabannya, kamu tetap jadi cewek paling berprestasi & terfavorit hari ini! 👑✨";
            }
        }

        if (typeof confetti === "function") {
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        }

        setTimeout(() => {
            if (result) result.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
    }

    // ==============================
    // SCROLL UTILITIES
    // ==============================
    scrollToQuiz() {
        const section = this.querySelector("#quiz-section");
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    continueToCake() {
        const cakeComponent = document.querySelector("cake-stage");
        if (!cakeComponent) return;

        const cakeSection = cakeComponent.querySelector("#cake-section");
        if (!cakeSection) return;

        cakeSection.classList.remove("hidden");
        setTimeout(() => {
            cakeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);

        if (typeof confetti === "function") {
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
    }
}

// ==============================
// REGISTER CUSTOM ELEMENT
// ==============================
customElements.define("quiz-stage", QuizStage);