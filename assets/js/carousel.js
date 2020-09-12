console.group('carousel.js');
$(document).ready(function () {
  $("#carouselExampleIndicators").carousel();
  $("#carouselExampleIndicators").on('slid.bs.carousel', function () {
    // window.alert("finished")
  })
});
console.groupEnd()