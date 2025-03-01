function moveableBackground() {
    const background = document.getElementById('moveable-background');
    const sensitivity = 15;

    document.addEventListener('mousemove', function(el) {
        var x = el.clientX / sensitivity;
        var y = el.clientY / sensitivity;
        background.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    });
}

moveableBackground();