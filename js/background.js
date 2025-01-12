const background = document.getElementById('moveable-background');
const sensitivity = 15;

document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    background.style.backgroundPosition = `${x / sensitivity}px ${y / sensitivity}px`;
});

// document.addEventListener('mouseleave', function() {
//     background.style.backgroundPosition = 'center';
// });