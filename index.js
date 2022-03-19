// Get all the images
let totalImag = 19
var image_array = []
for (var i = 0; i <= totalImag; i++) {
    image_array[i] = i + ".jpg";
}
console.log(image_array.length);
console.log(image_array);

function get_random_image() {
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);

    if (image_array[random_index] != "0.jpg") {
        // Get an image at the random_index
        selected_image = image_array[random_index]
        console.log(image_array[random_index]);
    }


    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
}