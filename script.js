// ----------- Pages -----------
const pages = document.querySelectorAll(".page");

function showPage(id) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    if (id === "letter") {
        typeLetter();
    }
}

// ----------- Gallery -----------
const photos = [
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png"
];

let current = 0;

const photo = document.getElementById("photo");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updatePhoto() {

    if (!photo) return;

    photo.style.opacity = "0";

    setTimeout(function () {

        photo.src = photos[current];

        photo.style.opacity = "1";

    }, 250);
}

if (nextBtn) {
    nextBtn.onclick = function () {
        current++;

        if (current >= photos.length) {
            current = 0;
        }

        updatePhoto();
    };
}

if (prevBtn) {
    prevBtn.onclick = function () {
        current--;

        if (current < 0) {
            current = photos.length - 1;
        }

        updatePhoto();
    };
}

// ----------- Love Letter -----------
const letter = `Dear Fiona ❤️

Every day with you is a blessing.

Thank you for loving me.

Thank you for believing in me.

Thank you for being my happiness.

Happy Girlfriends Day ❤️

Forever Yours,

Brandon ❤️`;

const letterText = document.getElementById("letterText");

let typingStarted = false;

function typeLetter() {

    if (!letterText || typingStarted) return;

    typingStarted = true;

    letterText.innerHTML = "";

    let i = 0;

    const timer = setInterval(function () {

        letterText.innerHTML += letter.charAt(i);

        i++;

        if (i >= letter.length) {
            clearInterval(timer);
        }

    }, 35);
}

// ----------- Floating Hearts -----------
const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.transition = "all 6s linear";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-110vh)";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 6500);
}

setInterval(createHeart, 600);

// ----------- Music -----------
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {
    musicBtn.onclick = function () {
        bgMusic.play();
        musicBtn.innerHTML = "❤️ Music Playing";
        musicBtn.disabled = true;
    };
}

// ----------- Start -----------
updatePhoto();