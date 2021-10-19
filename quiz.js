const list = [
    {
        title: "Kelas VI",
        quiz: [
            {
                question: "Apa yang menjadi dampak buruk dari pemanasan global dibawah ini?",
                answer: "a",
                answers: ["Biota laut", "Bintang dilangit", "Pengemis", "Tukang batu bara"]
            },
            {
                question: "Siapa yang harus ikut serta dalam mengatasi pemanasan global?",
                answer: "d",
                answers: ["Tukang kayu", "Presiden", "Pengemis", "Semua Manusia"]
            },
            {
                question: "Apa yang harus dilakukan untuk mencegah terjadinya banjir?",
                answer: "d",
                answers: ["Buang sampah di laut", "uang limbah sembarangan", "Menimbun Bitcoin", "Membuang sampah pada tempatnya"]
            },
            {
                question: "Lapisan batuan yang ada di bumi disebut?",
                answer: "c",
                answers: ["Cryptocurrency", "Etherium", "Litosfer", "Tiktok"]
            }
        ]
    },
    {
        title: "Kelas VII",
        quiz: [
            {
                question: "Macam-macam Kandungan Zat dalam Menu Berbuka Puasa?",
                answer: "a",
                answers: ["Karbohidrat, lemak, protein, vitamin, dan mineral.", "Nasi Lemak", "Soto", "Es Teh Manis"]
            },
            {
                question: "Beberapa Upaya Menjaga Kesehatan Sistem Pernapasan?",
                answer: "d",
                answers: ["Makan Micin Tiap Hari", " Tidur", "Kayang", "Olahraga Teratur"]
            },
            {
                question: "Organ Pernapasan ?",
                answer: "d",
                answers: ["Hidung", "Mulut", "Telinga", "Paru-paru"]
            },
            {
                question: "Organ Peredaran Darah pada Manusia?",
                answer: "c",
                answers: ["Andrianus", "KennyHong", "Jantung", "Uranus"]
            }
        ]
    },
];

window.onload = () => {
    let current = 0;
    const container = document.getElementById("quiz-container");
    let indexChars = 96;
    changeContent(current);
    const selector = document.getElementById("class-selector");
    selector.onchange = () => {
        changeContent(Number(selector.value));
    }
    document.getElementById("class-selector").innerHTML = list.map((x, i) => `<option value="${i}" ${i === 0 ? "selected" : ""}>${x.title}</option>`);
    const form = document.forms["quiz-container"];
    form.addEventListener("submit", e => {
        e.preventDefault();
        const result = [...form];
        let i;
        let correct = 0;
        for (i = 0; i < list[current].quiz.length;) {
            i += 1;
            const currentQuestion = result.filter(x => x.name == i);
            if (!currentQuestion.find(x => x.checked)) {
                alert("Please fill out all question");
                return false;
            }
            const selected = currentQuestion.find(x => x.checked);
            if (selected.id.split("_")[0] === list[current].quiz[i-1].answer) correct++;
        }
        alert(`Your points: ${correct}/${list[current].quiz.length}`);
    });
    function changeContent(index) {
        current = index;
        const elements = list[current].quiz.map((x, indexQuestion) => `
        <div class="quiz-el">
            <h3>${indexQuestion+1}. ${x.question}</h3>
            <div class="quiz-answer">
                ${x.answers.map((a) => {
                    indexChars += 1;
                    return `
                        <div>
                            <input type="radio" id="${String.fromCharCode(indexChars)}_${indexQuestion+1}" name="${indexQuestion+1}" value="${String.fromCharCode(indexChars)}">
                            <label for="${String.fromCharCode(indexChars)}_${indexQuestion+1}">${a}</label>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>`);
        indexChars = 96;
        container.innerHTML = `
            ${elements.join("")}
            <button type="submit" id="btn-submit">Submit</button>
        `;
    }
}