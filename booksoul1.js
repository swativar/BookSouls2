
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    window.name = data.name;
    console.log(window.name);
    document.getElementById('religion').style.display = "none";
    document.getElementById('societyandculture').style.display = "none";
    document.getElementById('science').style.display = "none";
    document.getElementById('sexandrelationships').style.display = "none";
    // document.getElementById('natureandenviornment').style.display="none";
    //   document.getElementById('personaldevelopment').style.display="none";
    //  document.getElementById('healthandnutrition').style.display="none";
    document.getElementById('careerandsuccess').style.display = "none";
    //  document.getElementById('motivationandinspiration').style.display="none";
    //   document.getElementById('parenting').style.display="none";
    document.querySelector('#' + window.name + ' ' + '.name').innerHTML = map[window.name];
    document.querySelector('#' + window.name).style.display = "block";
}
var map = {
    "careerandsuccess": "Career and Success",
    "societyandculture": "Society and Culture",
    "careerandsuccess": "Career and Success",
    "sexandrelationships": "Sex and Relationships",
    "natureandenviornment": "Nature and enviornment",
    "motivationandinspiration": "Motivation and Inspiration",
    "healthandnutrition": "Health and nutrition",
    "personaldevelopment": "Personal Development",
    "religion": "Religion",
    "science": "science"
}
var links = document.getElementsByClassName('content');
var links_arr = Array.from(links);
links_arr.forEach(function (link) {
    link.onclick = function (e) {
        window.book_name = e.target.innerHTML;
        window.id = e.target.id;
        console.log(window.book_name);
        url = 'audio.html?name=' + encodeURIComponent(window.book_name.split(" ").join('-')) + '&id=' + encodeURIComponent(window.id);
        document.location.href = url;
    }
})