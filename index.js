// Get all the images
let totalImag = 19
var image_array = []
let interval;
let isFirstTime = true;
let urlDaftar = "https://api.whatsapp.com/send/?phone=6289647476858&text=%2AAssalamualaikum.+Wr.+Wb.%2A+Kak%2C+Saya+mau+ikut+Acara+Ramadhan%0A%0A%2ANama%3A%0A%2AUsia%3A%0A%2ASekolah%3A%0A%2AAsal+kota%3A%0A&app_absent=0"
let intervalSpeed = 20;
let delayRandom = 5000;
var imageNumber;

// config
var lastClick = 0;
var delay = 20;

for (var i = 0; i <= totalImag; i++) {
    image_array[i] = i + ".jpg";
}

document.getElementById('image_shower').onclick = function () {
    console.log('You clicked');
    get_random_image();
}

document.getElementById('btn').onclick = function () {
    console.log('You clicked btn');
    get_random_image();
}

function get_random_image() {
    console.log("getRandomImage");
    // preventMultipleClick()
    const img = document.getElementById('image_shower')
    const button = document.getElementById('btn')

    if (isFirstTime) {
        console.log("isFirstTime");
        img.onclick = false;
        button.style.visibility = 'hidden'
        button.innerText = "Lagi di acak";
        button.classList.remove("btn-danger")
        button.classList.add("btn-success")

        startRandomImage()

        setTimeout(function () {
            const button = document.getElementById('btn')
            console.log("TimeOut End");
            clearInterval(interval)
            interval = null;
            button.innerText = "Daftar";
            button.style.visibility = 'visible'
            isFirstTime = false;
            console.log(image_array[imageNumber]);
        }, delayRandom);
    } else {
        console.log("is not first time");
        window.location = urlDaftar;
    }
}

function startRandomImage() {
    console.log("Random Start");
    interval = setInterval(function () {
        // Genarate image number
        imageNumber = Math.floor(Math.random() * image_array.length);
        // Show image with the generated number
        if (image_array[imageNumber] != "0.jpg") {
            document.getElementById('image_shower').src = `./images/${image_array[imageNumber]}`
        }
    }, intervalSpeed);
}

function preventMultipleClick() {
    // prevent multiple click
    if (lastClick >= (Date.now() - delay))
        return;
    lastClick = Date.now();
}