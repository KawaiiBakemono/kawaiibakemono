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

var i = 0;

function changeImage() {
    var images = ["/img/Aina_Looktoside.png", "/img/Aina_Sweat.png", "/img/Aina_Gross.png", "/img/Aina_Neutral.png"]
    let img = document.getElementById("character-img");
    img.src = images[i];
    if (i > 2) {
        i = 0;
    } else {
        i++;
    }
}

function clickExplosion(tag, onfire, explode) {
    const element = document.getElementById(tag);
    const fireOverlay = document.getElementById(onfire);
    const explosionOverlay = document.getElementById(explode);
    const count = element.dataset.counter;

    if (count == 20) {
        fireOverlay.style.visibility = 'visible';
        document.getElementById('setfire-audio').play();
        document.getElementById('onfire-audio').play();
    } 
    else if (count == 50) {
        explosionOverlay.style.visibility = 'visible';
        element.style.visibility = 'hidden';
        document.getElementById('explosion-audio').play();
        setTimeout(() => {
            explosionOverlay.style.visibility = 'hidden';
        }, "600");
    }
    Number(element.dataset.counter++);
    console.log(count)
}

// ======== MODAL ========
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

function galleryImage(image) {    
    let img = document.getElementById(image);
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

var close = document.getElementsByClassName("close")[0];

close.onclick = function() {
    modal.style.display = "none";
}
