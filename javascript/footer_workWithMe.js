function openMultiplePages() {
    // URL delle pagine da aprire
    const urls = [
        "https://www.flaticon.com/free-icon/sunrise_17356781",
        "https://www.flaticon.com/free-icon/sneaker_8160075",
        "https://www.flaticon.com/free-icon/pie-chart_425089",
        "https://www.flaticon.com/free-icon/multitasking_12966826",
        "https://www.flaticon.com/free-icon/book_1164651",
        "https://www.flaticon.com/free-icon/vinyl_9320256",
        "https://www.flaticon.com/free-icon/sound-waves_709559",
        "https://www.flaticon.com/free-icon/dumbbell_563828",
        "https://www.flaticon.com/free-icon/deep-learning_8090632",
        "https://www.flaticon.com/free-icon/optimization_5149368",
        "https://www.flaticon.com/free-icon/work-life-balance_13454843"
    ];

    // Apri ogni URL in una nuova scheda
    urls.forEach(url => {window.open(url, '_blank');});
}

document.write(`
<footer>
    <div class="footer-link center">
        <a href="../index.html">Home</a>
        <div style="width: 20px; display: inline-block;"></div>
        <a href="#" onclick="openMultiplePages()">Icons</a>
    </div>
</footer>
        `);