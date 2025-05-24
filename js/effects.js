function backgroundFollowMouse() {
    const background = document.getElementById("moveable-background");
    const sensitivity = 15;

    document.addEventListener("mousemove", function(el) {
        setTimeout(() => {
            var x = el.clientX / sensitivity;
            var y = el.clientY / sensitivity;
            background.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        }, "10"); // No reason to run it every millisecond
    });
} backgroundFollowMouse();

// ======== Clickable Aina ========

var i = 0;
var squeak = new Audio("/audio/squeak.ogg");
var images = ["/img/Aina_Looktoside.png", "/img/Aina_Sweat.png", "/img/Aina_Gross.png", "/img/Aina_Neutral.png"]

function changeImage() {
    let img = document.getElementById("character-img");
    img.src = images[i];
    if (i > 2) {
        i = 0;
    } else {
        i++;
    }
    squeak.cloneNode().play();
    // document.getElementById("aina-squeak").play();
}

function selectSFX() {
    document.getElementById('select-sfx').play();
}

var a = document.getElementsByClassName('snake');
function animateSequence() {
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span>' + letter[l] + '</span>';
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

// animateSequence();



// ======== CLICK EXPLOSION ========

function clickExplosion(_parent, _image) {
    const parent = document.getElementById(_parent);
    const baseImage = document.getElementById(_image);
    const count = parent.dataset.counter;

    if (count == 25) {
        createImgElement(parent, "display-img-medium img-fire", "/img/onfire.gif");
        createAudioElement(parent, "/audio/flash_fire_ignite.ogg", false);
        createAudioElement(parent, "/audio/on_fire.wav", true);
    } 
    else if (count == 50) {
        createImgElement(parent, "display-img-medium img-explosion", "/img/the_explosion.gif", "explosion");
        createAudioElement(parent, "/audio/deltarune-explosion.ogg", false);
        baseImage.style.visibility = "hidden";
        parent.style.pointerEvents = "none";
        setTimeout(() => {
            parent.removeChild(document.getElementById("explosion"));
        }, "900");
    }
    Number(parent.dataset.counter++);
    console.log(count)
}

function createImgElement(_parent, _class, _file, _id = "") {
    let img = document.createElement("img");
    img.className = _class;
    img.src = _file;
    if (_id != "") {
        img.id = _id;
    }
    _parent.appendChild(img);
}

function createAudioElement(_parent, _file, _loop) {
    let audio = document.createElement("audio");
    if (_loop) {
        audio.loop = true;
    }
    audio.textContent = "Your browser doesn't support the audio element. Womp womp.";
    _parent.appendChild(audio);
    
    let source = document.createElement("source");
    source.src = _file;
    let extension =  _file.split(".").pop();
    source.type = `audio/${extension}`;
    audio.appendChild(source);
    
    audio.play();
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
    document.getElementById('cancel-sfx').play();
    modal.style.display = "none";
}
