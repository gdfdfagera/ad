var questions = [
    {
        question: "What was the primary goal for Alash Orda in the political sphere?",
        options: ["Expansion into new territories", "Unification of Kazakhs", "Economic dominance", "Conquest of neighboring states"],
        correctAnswer: "b"
    },
    {
        question: "What event marked the unification of the Kazakh people under the auspices of the Alash Orda?",
        options: ["Signing of the peace treaty", "Declaration of independence", "Organization of a cultural festival", "Military victory"],
        correctAnswer: "d"
    },
    {
        question: "What was the significance of the Declaration of Independence of the Alash Republic in 1917?",
        options: ["Affirmation of cultural traditions", "Recognition of the independence of the state", "Economic reforms", "Opening of new trade routes"],
        correctAnswer: "b"
    },
    {
        question: "What were the cultural and educational efforts of the Alash Orda?",
        options: ["Holding cultural festivals", "Preservation and development of Kazakh culture", "Military training of the population", "Expansion in the educational sector"],
        correctAnswer: "b"
    },
    {
        question: "What reforms have been implemented in the educational sector by Alash Orda?",
        options: ["Economic reforms", "Political changes", "Development of education in the Kazakh language", "Introduction of new taxes"],
        correctAnswer: "c"
    },
    {
        question: "What economic reforms did Alash Orda undertake?",
        options: ["Implementation of land reforms for peasants", "Expansion of the empire", "Military resource mobilization", "Conclusion of international trade agreements"],
        correctAnswer: "a"
    },
    {
        question: "What changes in land relations were the goal of the Alash Orda land reforms?",
        options: ["Equalization of land holdings", "Improvement of the situation of Kazakh peasants", "Expropriation of lands from the nobility", "Privatization of all land plots"],
        correctAnswer: "b"
    },
    {
        question: "How did the economy of the Alash Republic develop in the field of agriculture?",
        options: ["Privatization of agricultural enterprises", "Agricultural stimulation", "Prohibition of agricultural practices", "Export of agricultural products"],
        correctAnswer: "b"
    },
    {
        question: "What industries developed in the Alash Republic?",
        options: ["Military industry only", "Industry was banned", "Agricultural development was a priority", "Industrial development including manufacturing and consumer goods production"],
        correctAnswer: "d"
    },
    {
        question: "What social changes were a consequence of the economic achievements of the Alash Orda?",
        options: ["Rising unemployment", "Improving living conditions of the Kazakh population", "Declining educational level", "Growing social inequalities"],
        correctAnswer: "b"
    },
    {
        question: "What consequences did the Declaration of Independence have for Kazakh culture?",
        options: ["Prohibition of cultural practices", "Support and development of Kazakh culture", "Import of cultural standards", "Limitation of cultural diversity"],
        correctAnswer: "b"
    },
    {
        question: "How did Alash Orda influence the formation of Kazakh identity?",
        options: ["Involvement of foreign culture", "Strengthening cultural traditions and language", "Rejection of one's own traditions", "Adoption of a common culture of the region"],
        correctAnswer: "b"
    },
    {
        question: "What steps did Alash Orda take to preserve the Kazakh language?",
        options: ["Replacing the Kazakh language with a foreign one", "Promotion of linguistic diversity", "Conducting language reforms and supporting the Kazakh language", "Prohibition of the use of the Kazakh language"],
        correctAnswer: "c"
    },
    {
        question: "What was the significance of land reforms for the Kazakh population?",
        options: ["Declining land availability", "Deterioration of living conditions of the peasantry", "Improvement of the situation of Kazakh peasants and fair distribution of land", "Prohibition of land ownership"],
        correctAnswer: "c"
    },
    {
        question: "What factors contributed to the influence of Alash Orda on the formation of state structures in Kazakhstan?",
        options: ["Preservation of the imperial system", "Active independence policy", "Intervention by neighboring countries", "Conclusion of international agreements and recognition of independence"],
        correctAnswer: "d"
    },
];


var questionsContainer = document.getElementById("questions-container");
questions.forEach(function (q, index) {
    var questionHTML = `<div class="q"><h4>${index + 1}. ${q.question}</h4>`;
    questionHTML += `<div class="wrap">`;
    q.options.forEach(function (option, optionIndex) {
        questionHTML += `
            <label>
                <input type="radio" name="answer${index}" value="${String.fromCharCode(97 + optionIndex)}"> ${option}
            </label>
        `;
    });
    questionHTML += `</div></div>`;
    questionHTML += `<br>`;
    questionHTML += `<br>`;
    questionHTML += `<br>`;
    questionsContainer.innerHTML += questionHTML;
});

function checkAnswers() {
    var correctCount = 0;

    questions.forEach(function (q, index) {
        var selectedAnswer = document.querySelector(`input[name="answer${index}"]:checked`);

        if (selectedAnswer) {
            var userAnswer = selectedAnswer.value;
            var correctAnswer = q.correctAnswer;

            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        }
    });

    alert(`Вы ответили правильно на ${correctCount} из ${questions.length} вопросов.`);
}