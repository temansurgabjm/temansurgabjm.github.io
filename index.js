// Get all the images
let totalImag = 19
var image_array = []
let interval;
let isFirstTime = true;
let urlDaftar = "https://api.whatsapp.com/send/?phone=6289647476858&text=%2AAssalamualaikum.+Wr.+Wb.%2A+Kak%2C+Saya+mau+ikut+Acara+Ramadhan%0A%0A%2ANama%3A%0A%2AUsia%3A%0A%2ASekolah%3A%0A%2AAsal+kota%3A%0A&app_absent=0"
let intervalSpeed = 10;
let delayRandom = 5000;

for (var i = 0; i <= totalImag; i++) {
    image_array[i] = i + ".jpg";
}

function get_random_image() {
    if (isFirstTime) {
        const button = document.getElementById('btn')
        button.disabled = true;
        button.style.visibility = 'hidden'
        button.innerText = "Lagi di acak";

        startRandomImage()

        setTimeout(function() {
            clearInterval(interval)
            interval = null;
            button.disabled = false;
            button.innerText = "Daftar";
            button.style.visibility = 'visible'
            isFirstTime = false;
        }, delayRandom);
    } else {
        window.location = urlDaftar;
    }
}

function get_random_index(image_array) {
    return Math.floor(Math.random() * image_array.length);
}

function startRandomImage() {
    interval = setInterval(function() {
        // Genarate image number
        const imageNumber = Math.floor(Math.random() * image_array.length);
        // Show image with the generated number
        if (image_array[imageNumber] != "0.jpg") {
            document.getElementById('image_shower').src = `./images/${image_array[imageNumber]}`
            console.log(image_array[imageNumber]);
        }
    }, intervalSpeed);
}