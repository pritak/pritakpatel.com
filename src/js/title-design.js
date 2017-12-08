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

  var subtitles = ['Avid Music Listener', 'Above Average Photo Taker', 'TV Show Binger', 
  'World Traveller', 'Occasional Hiker', 'Star Wars Fanboy', 'Duke Basketball Fan',
  'Beyhive Member', 'Novice Chef'];
  var usedsubtitles = new Array();;
  setInterval(function() {
    var rand1 = Math.floor(Math.random() * subtitles.length);
    while(usedsubtitles.includes(subtitles[rand1])){
      rand1 = Math.floor(Math.random() * subtitles.length);
      if (usedsubtitles.length == subtitles.length){
        usedsubtitles = new Array();
      }
    }
    usedsubtitles.push(subtitles[rand1]);
    $("#subtitle-change-2").fadeOut(400, function () {
      $("#subtitle-change-2").text(subtitles[rand1]).fadeIn(400);
    });
  }, 6000);


});
