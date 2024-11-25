document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;
    const result = document.getElementById("result");

    // Перевірка відповіді
    const answer1 = document.querySelector('input[name="q1"]:checked');
    if (answer1 && answer1.value === "B") {
        score++;
    }

    // Виведення результату
    if (score === 1) {
        result.textContent = "Ваша відповідь правильна! Ви отримали 1 бал.";
        updateProgress(1);
    } else {
        result.textContent = "Неправильно. Правильна відповідь: Б) 6.";
    }
});

// Оновлення прогресу
function updateProgress(score) {
    const progress = localStorage.getItem("mathScore") || 0;
    const updatedScore = parseInt(progress) + score;
    localStorage.setItem("mathScore", updatedScore);
}
