console.group('carousel.js');
$(document).ready(function () {
  let headers = ['خرج امتیاز'];
  for (let slide of slides) {
    headers.push(slide.header)
  }
  console.log("Carousel Settings Applied")
  $("#carouselExampleIndicators").carousel({
    interval: 3000,
    keyboard: true,
    ride: false,
    wrap: true,
  });
  $("#carouselExampleIndicators").on('slid.bs.carousel', function (event) {
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