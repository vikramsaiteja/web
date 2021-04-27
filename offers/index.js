var open = document.querySelectorAll('.know-more');

var y = 0;

var t = open.length;

for (x = 0; x < open.length; x++) {
  open[x].addEventListener('click', function() {
    var s = '.popup-' + y;
    var q = document.querySelector(s);
    q.classList.add('aactive');
    y += 1;
    var o = document.querySelector('.overlay');
    o.classList.add('active');
  });
}

var close = document.querySelectorAll('.close-button');
var ov = document.querySelector('.overlay');

function c() {
  var z = 0;
  for (k = 0; k < t; k++) {
    var sn = '.popup-' + z;
    if (document.querySelector(sn).classList.contains('aactive')) {
      document.querySelector(sn).classList.remove('aactive');
      document.querySelector('.overlay').classList.toggle('active');
      break;
    }

    z += 1;
  }
}

for (n = 0; n < close.length; n++) {
  close[n].addEventListener('click', c);
}

ov.addEventListener('click', c);
