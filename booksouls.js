var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("button");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var buttons = document.querySelectorAll('.button button');
var button_array = Array.from(buttons);
console.log(button_array);
button_array.forEach(function (button) {
    button.onclick = function (e) {
        document.getElementById('religion').style.display = "none";
        document.getElementById('societyandculture').style.display = "none";
        document.getElementById('science').style.display = "none";
        document.getElementById('sexandrelationships').style.display = "none";
        document.getElementById('natureandenviornment').style.display = "none";
        document.getElementById('personaldevelopment').style.display = "none";
        document.getElementById('healthandnutrition').style.display = "none";
        document.getElementById('careerandsuccess').style.display = "none";
        document.getElementById('motivationandinspiration').style.display = "none";
        document.getElementById('parenting').style.display = "none";
        window.name = e.target.innerHTML;
        window.data = window.name;
        document.querySelector('#' + window.name.split(" ").join("").toLowerCase() + ' ' + '.name').innerHTML = window.name;
        document.querySelector('#' + window.name.split(" ").join("").toLowerCase()).style.display = "block";
    }

})
function category() {
    console.log(window.data);
    if (window.data) {
        window.data = window.data.split(" ").join("").toLowerCase();
        console.log(window.data)
        url = 'category.html?name=' + encodeURIComponent(window.data);
        console.log(url)
        document.location.href = url;
    }
    else {
        url = 'category.html?name=societyandculture';
        document.location.href = url;
    }
}

var links = document.getElementsByClassName('content');
var links_arr = Array.from(links);
console.log(links_arr);
links_arr.forEach(function (link) {
    link.onclick = function (e) {
        window.book_name = e.target.innerHTML;
        window.id = e.target.id;
        console.log(book_name);
        url = 'audio.html?name=' + encodeURIComponent(window.book_name.split(" ").join('-')) + '&id=' + encodeURIComponent(window.id);
        document.location.href = url;
    }
})