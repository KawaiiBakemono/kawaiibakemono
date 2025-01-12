function enableLightMode() {
    if (document.getElementById("light-mode-toggle").checked) {
        console.log("Changing to light mode!")
        document.getElementById("scout").classList.toggle("show");
        document.getElementById("light-mode-overlay").style.pointerEvents = "all";
        document.getElementById("light-mode-audio").play();
        setTimeout(() => {
            document.getElementById("light-mode-overlay").classList.toggle("show");
        }, "1300");
        setTimeout(() => {
            document.getElementById("light-mode-toggle").checked = false
            document.getElementById("scout").classList.toggle("show");
        }, "2000");
        setTimeout(() => {
            document.getElementById("light-mode-overlay").classList.toggle("show");
            document.getElementById("light-mode-overlay").style.pointerEvents = "none";
        }, "10000");
    }
}