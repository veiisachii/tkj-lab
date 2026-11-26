// SEARCH MATERI
const searchInput = document.getElementById("searchInput");
const categoryCards = document.querySelectorAll(".category-card");

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    categoryCards.forEach(card => {
        const content = card.innerText.toLowerCase();
        card.style.display = content.includes(keyword) ? "block" : "none";
    });
});

// DATA KUIS
const questionBank = [
    {
        question: "Apa kepanjangan dari LAN?",
        options: ["Local Area Network", "Large Access Network", "Long Area Node", "Local Access Node"],
        answer: 0
    },
    {
        question: "Perangkat yang digunakan untuk menghubungkan beberapa jaringan adalah?",
        options: ["Keyboard", "Router", "Monitor", "Printer"],
        answer: 1
    },
    {
        question: "Apa fungsi utama IP Address?",
        options: ["Mempercepat komputer", "Menyimpan data", "Mengidentifikasi perangkat dalam jaringan", "Menghapus virus"],
        answer: 2
    },
    {
        question: "Sistem operasi Linux bersifat?",
        options: ["Open Source", "Berbayar seluruhnya", "Khusus untuk game", "Tidak bisa dimodifikasi"],
        answer: 0
    },
    {
        question: "Apa kepanjangan dari CPU?",
        options: ["Computer Personal Unit", "Central Processing Unit", "Central Program Utility", "Computer Processing User"],
        answer: 1
    },
    {
        question: "Perangkat yang menghubungkan komputer ke jaringan kabel disebut?",
        options: ["NIC atau kartu jaringan", "RAM", "Heatsink", "Power supply"],
        answer: 0
    },
    {
        question: "Apa fungsi utama switch dalam jaringan LAN?",
        options: ["Mencetak dokumen", "Menghubungkan perangkat dalam satu jaringan", "Menyimpan sistem operasi", "Mengubah tegangan listrik"],
        answer: 1
    },
    {
        question: "Kabel jaringan yang umum digunakan pada jaringan Ethernet adalah?",
        options: ["HDMI", "VGA", "UTP", "SATA"],
        answer: 2
    },
    {
        question: "Apa kepanjangan dari DNS?",
        options: ["Domain Name System", "Digital Network Service", "Data Number System", "Domain Network Security"],
        answer: 0
    },
    {
        question: "Perintah Linux untuk melihat isi direktori adalah?",
        options: ["cd", "ls", "pwd", "mkdir"],
        answer: 1
    },
    {
        question: "Apa fungsi RAM pada komputer?",
        options: ["Menyimpan data sementara saat komputer bekerja", "Menampilkan gambar ke monitor", "Menghubungkan komputer ke internet", "Mendinginkan prosesor"],
        answer: 0
    },
    {
        question: "Perangkat yang digunakan untuk membagikan koneksi jaringan secara nirkabel adalah?",
        options: ["Access point", "Scanner", "Plotter", "DVD drive"],
        answer: 0
    },
    {
        question: "Apa kepanjangan dari HTTP?",
        options: ["HyperText Transfer Protocol", "High Transfer Text Program", "Host Terminal Transfer Process", "Hyperlink Text Tracking Protocol"],
        answer: 0
    },
    {
        question: "Perintah Linux untuk berpindah direktori adalah?",
        options: ["ls", "cp", "cd", "rm"],
        answer: 2
    },
    {
        question: "Apa fungsi utama subnet mask?",
        options: ["Menentukan bagian network dan host pada IP Address", "Menghapus alamat IP", "Mempercepat prosesor", "Mengganti nama komputer"],
        answer: 0
    }
];

let questions = [];
let currentQuestion = 0;
let score = 0;

function shuffleQuestions(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    // Ambil 5 soal secara acak setiap kuis
    questions = shuffleQuestions(questionBank).slice(0, 5);

    showQuestion();
}

function showQuestion() {
    const area = document.getElementById("quizArea");
    const q = questions[currentQuestion];

    area.innerHTML = `
        <div class="category-card">
            <p style="color:#3987ff; margin-bottom:15px;">
                QUESTION ${currentQuestion + 1} / ${questions.length}
            </p>
            <h3>${q.question}</h3>
            <div id="options"></div>
        </div>
    `;

    const options = document.getElementById("options");

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = option;
        button.style.cssText = `
            display:block;
            width:100%;
            padding:13px;
            margin-top:12px;
            border:1px solid #263958;
            border-radius:8px;
            background:#111b30;
            color:white;
            cursor:pointer;
            text-align:left;
        `;

        button.onclick = () => checkAnswer(index);
        options.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const area = document.getElementById("quizArea");

    area.innerHTML = `
        <div class="category-card">
            <h2>Quiz Completed!</h2>
            <p style="margin:20px 0;">
                Skor kamu: ${score} / ${questions.length}
            </p>
            <button class="btn" onclick="startQuiz()">
                Try Again →
            </button>
        </div>
    `;
}
