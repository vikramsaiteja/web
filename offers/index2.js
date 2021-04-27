var open = document.querySelectorAll('.know-more');
var over = document.querySelector('.overlay');
var close = document.querySelectorAll('.close-button');

open[0].addEventListener('click', function() {
  var popup = document.querySelector('.popup-0');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

open[1].addEventListener('click', function() {
  var popup = document.querySelector('.popup-1');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

open[2].addEventListener('click', function() {
  var popup = document.querySelector('.popup-2');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

open[3].addEventListener('click', function() {
  var popup = document.querySelector('.popup-3');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

open[4].addEventListener('click', function() {
  var popup = document.querySelector('.popup-4');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

close[0].addEventListener('click', function() {
  var popup = document.querySelector('.popup-0');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

close[1].addEventListener('click', function() {
  var popup = document.querySelector('.popup-1');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

close[2].addEventListener('click', function() {
  var popup = document.querySelector('.popup-2');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

close[3].addEventListener('click', function() {
  var popup = document.querySelector('.popup-3');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

close[4].addEventListener('click', function() {
  var popup = document.querySelector('.popup-4');
  popup.classList.toggle('aactive');
  over.classList.toggle('active');
});

over.addEventListener('click', function() {
  var popup = document.querySelector('.popup-0');
  if (popup.classList.contains('aactive')) {
    popup.classList.toggle('aactive');
    over.classList.toggle('active');
  }
});

over.addEventListener('click', function() {
  var popup = document.querySelector('.popup-1');
  if (popup.classList.contains('aactive')) {
    popup.classList.toggle('aactive');
    over.classList.toggle('active');
  }
});

over.addEventListener('click', function() {
  var popup = document.querySelector('.popup-2');
  if (popup.classList.contains('aactive')) {
    popup.classList.toggle('aactive');
    over.classList.toggle('active');
  }
});

over.addEventListener('click', function() {
  var popup = document.querySelector('.popup-3');
  if (popup.classList.contains('aactive')) {
    popup.classList.toggle('aactive');
    over.classList.toggle('active');
  }
});

over.addEventListener('click', function() {
  var popup = document.querySelector('.popup-4');
  if (popup.classList.contains('aactive')) {
    popup.classList.toggle('aactive');
    over.classList.toggle('active');
  }
});
