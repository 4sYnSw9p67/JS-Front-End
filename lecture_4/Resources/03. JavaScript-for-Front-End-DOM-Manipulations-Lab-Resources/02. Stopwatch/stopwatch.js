function stopwatch() {
    var startBtn = document.querySelector("#startBtn");
    var stopBtn = document.querySelector("#stopBtn");
    var time = document.querySelector("#time");
    var minutes = time.textContent.split(":")[0];
    var seconds = time.textContent.split(":")[1];

    startBtn.addEventListener("click", startCounter);
    stopBtn.addEventListener("click", stopCounter);

    function counter() {
        if (startBtn.hasAttribute("disabled") == true) {
            if (seconds == 59) {
                seconds = pad(0);
                minutes = pad(+minutes + 1);
            } else {
                seconds = pad(+seconds + 1);
            }

            if (minutes == 60) {
                minutes = pad(0);
            }

            time.textContent = `${minutes}:${seconds}`;
            //console.log(`${minutes}:${seconds}`);
            setTimeout(counter, 1000);
        }
    }

    function startCounter(e) {
        var target = e.currentTarget;
        startBtn.setAttribute("disabled", "true");
        stopBtn.removeAttribute("disabled");
        minutes = "00";
        seconds = "00";
        time.textContent = `${minutes}:${seconds}`;
        setTimeout(counter, 1000);
    }

    function stopCounter(e) {
        var target = e.currentTarget;
        startBtn.removeAttribute("disabled");
        stopBtn.setAttribute("disabled", "true");
    }

    function pad(d) {
        return d < 10 ? "0" + d.toString() : d.toString();
    }
}
