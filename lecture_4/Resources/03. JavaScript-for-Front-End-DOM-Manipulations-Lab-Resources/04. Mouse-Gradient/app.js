function attachGradientEvents() {
    let gradientBox = document.querySelector("#gradient");
    let result = document.querySelector("#result");

    gradientBox.addEventListener("mousemove", MouseTrack);

    function MouseTrack (e) {
        var gradient = (e.offsetX) / 3;
        if (gradient < 0) {gradient = 0}
        if (gradient > 100) {gradient = 100}
        result.textContent = `${gradient.toFixed(0)}%`;
    }
}
