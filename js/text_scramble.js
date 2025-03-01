class TextScramble {

    constructor(el) {
        this.el = el;
        this.chars = '!#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const transitionLength = 100; // how long it takes to get to the next string
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);

        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * transitionLength);
            const end = start + Math.floor(Math.random() * transitionLength);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        const characterRate = 0.1; // how fast to change scrambled characters during the
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } 
            else if (this.frame >= start) {
                if (!char || Math.random() < characterRate) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="scrambled-text">${char}</span>`;
            } 
            else {
                output += from;
            }
        }

        this.el.innerHTML = output

        if (complete === this.queue.length) {
            this.resolve();
        } 
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// Neon Text scramble

const phrases = [
    "KawaiiBakemono",
    "Kathryn Beam",
    "An Artist",
    "A Programmer",
    "A Game Developer",
    "A Modder"
]

const defaultTiming = 2000;
const timings = [
    2000,
    5000,
    2000,
    2000,
    2000,
    2000,
];

const element = document.getElementById("scrambled-header");
const effects = new TextScramble(element);

let counter = 0;
const next = () => {
    effects.setText(phrases[counter]).then(() => {
        // This check is just a fallback incase I fuck up the timings/phrases arrays
        if (!(counter > timings.length)) {
            setTimeout(next, timings[counter]);
        } else {
            setTimeout(next, defaultTiming);
        }
    })
    counter = (counter + 1) % phrases.length;
} 
next();