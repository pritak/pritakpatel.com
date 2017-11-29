$(document).ready(function () {

  // tippy(document.querySelector('#main-title'),{
  //   size: 'regular',
  //   placement: 'top',
  //   animation: 'scale',
  //   zIndex: 9999,
  //   duration: 1000,
  //   arrow: false,
  //   followCursor: true,
  //   hideOnClick: 'persistent',
  //   inertia: true,
  //   animateFill: true
  // });

  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
  });
});
