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

  // var mouseX, mouseY;
  // var ww = $(window).width();
  // var wh = $(window).height();
  // var traX, traY;
  // $(document).mousemove(function (e) {
  //   mouseX = e.pageX;
  //   mouseY = e.pageY;
  //   traX = ((4 * mouseX) / 570) + 40;
  //   traY = ((4 * mouseY) / 570) + 50;
  //   $(".title").css({ "background-position": traX + "%" + traY + "%" });
  // });

  var subtitles2 = ['Design', 'Photography', 'Art', 'Travel', 'Hiking', 'Badminton', 'Music', 'Film'];
  var subtitles1 = ['Software Engineer', 'Electrical Engineer', 'Computer Scientist', 'Tech Consultant'];

  setInterval(function() {
    var rand1 = Math.floor(Math.random() * 8);
    var rand2 = Math.floor(Math.random() * 4);
    $("#subtitle-change-2").fadeOut(800, function () {
      $("#subtitle-change-2").text(subtitles2[rand1]).fadeIn(800);
    });
    $("#subtitle-change-1").fadeOut(800, function () {
      $(this).text(subtitles1[rand2]).fadeIn(800);
    });
  }, 5000);


});
