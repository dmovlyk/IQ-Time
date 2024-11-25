document.addEventListener("DOMContentLoaded", () => {
    const mathScore = localStorage.getItem("mathScore") || 0;

    const ctx = document.getElementById("progressChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Математика", "Англійська мова"],
            datasets: [
                {
                    label: "Прогрес по курсах",
                    data: [mathScore, 0],
                    backgroundColor: ["#ff8c00", "#1e90ff"],
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
