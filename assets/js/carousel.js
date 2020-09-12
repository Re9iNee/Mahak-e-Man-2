console.group('carousel.js');
$(document).ready(function () {
  let headers = ['خرج امتیاز'];
  for (let slide of slides) {
    headers.push(slide.header)
  }
  $("#carouselExampleIndicators").carousel({
    interval: 2000,
    keyboard: true,
    ride: false,
    pause: 'hover',
    wrap: true,
  });
  $("#carouselExampleIndicators").on('slide.bs.carousel', function (event) {
    let right = event.to + 1;
    let left = event.to - 1;
    if (right >= headers.length) {
      right = 0;
    }
    if (left < 0) {
      left = headers.length - 1;
    }
    $('#next').html(headers[right])
    $('#prev').html(headers[left])
  })
});
console.groupEnd()