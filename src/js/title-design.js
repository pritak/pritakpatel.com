$(document).ready(function () {
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
