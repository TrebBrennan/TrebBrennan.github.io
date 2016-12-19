

$('.change').addClass('fade');


// Global Variables
// ====================================
  var FPS = 30;
  var time = timeStr();

  var doing = "";

// Game loop
// ====================================
  setInterval(function() {
    update();
    draw();
  }, 1000/FPS);

// Game update
// ====================================
  function update() {
    time = timeStr();
  }

// Game draw
// ====================================
  function draw() {
    $('#time').html(time);
  }


// TEST TODO
// ====================================
$.getJSON('http://trebbrennan.github.io/frontier24/js/data/room-01.json', function(room) {

  $('#stage').append('<h2>' + room.title + '</h2>');

  setting = room.setting;
  setting = setting.replace( '#txt01', room.settingVars.txt01[0]['00:00:00'] );
  setting = setting.replace( '#txt02', room.settingVars.txt02[0]['00:00:00'] );
  setting = setting.replace( '#txt03', room.settingVars.txt03[0]['00:00:00'] );
  setting = setting.replace( '#txt04', room.settingVars.txt04[0]['00:00:00'] );
  $('#stage').append('\
    <div class="setting">\
      <p>' +setting+ '</p>\
    </div>'
  );

  $('#stage').append('<p>' + room.events[1]['05:00:00'] + '</p>');
  console.log( room.events);
});

// Functions
// ====================================

// Time(Date) to string
// ------------------------------------
  function timeStr(h,m,s){
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    if (h < 10) { h = '0'+h; }
    if (m < 10) { m = '0'+m; }
    if (s < 10) { s = '0'+s; }
    return h+':'+m+':'+s;
  }

// Parse time string as integer (seconds total) for comparison
// ------------------------------------
  function timeInt(string){
    //Expected format 00:00:00
    var strArray = string.split(":");
    var hr = parseInt(strArray[0]);
    var mm = parseInt(strArray[1]);
    var sc = parseInt(strArray[2]);
    return (hr*3600) + (mm*60) + sc;
  }
