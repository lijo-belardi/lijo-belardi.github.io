var words = ['Sviluppatore Blockchain', 'Sviluppatore Full Stack', 'Giornalista', 'Sociologo'];
var counter = 0;
var word = document.getElementById('carousel-words');
setInterval(updated_carousel_words, 2000);
function updated_carousel_words() {
    word.innerHTML = words[counter];
    counter++;
    if (counter >= words.length) {
        counter = 0;
    }
}