var night_box = document.querySelector('.night');
var star_limit = 45;

for (var i = 0; i < star_limit; i++) {
    var star = document.createElement('div');
    star.classList.add('star');
    star.style.width = (Math.floor(Math.random() * (5 - 2) + 2)) + 'px';
    star.style.height = star.style.width;

    star.style.top = Math.floor(Math.random() * 100) + '%';
    star.style.left = Math.floor(Math.random() * 100) + '%';

    night_box.appendChild(star);
    
}