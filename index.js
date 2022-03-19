// Get all the images
let totalImag = 19
var image_array = []
for (var i = 0; i <= totalImag; i++) {
    image_array[i] = i + ".jpg";
}

function get_random_image() {
    // Get a random index
    random_index = get_random_index(image_array)

    // Get an image at the random_index
    if (image_array[random_index] != "0.jpg") {
        selected_image = image_array[random_index]
    } else {
        selected_image = image_array[get_random_index(image_array)]
    }

    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
}

function get_random_index(image_array) {
    return Math.floor(Math.random() * image_array.length);
}