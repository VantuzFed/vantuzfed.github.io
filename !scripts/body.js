//minecraft server parser - start
const ip_addr_def = "hypixel.net"; 

 function server_fetch(){
   window.user_ip = $("#ipget").val();
   window.addr = "https://api.mcsrvstat.us/2/" + user_ip;
 if ($("#ipget").val() == ip_addr_def){
 $("#but_reset").prop('disabled', true);
 } else {$("#but_reset").prop('disabled', false);}
 $("#load").show();
 $("#icon").hide();
 $("#vers").hide();
 $("#pl_on").hide();
 $("#ip").hide();
 $("#online").hide();
 setTimeout(fetch_two, 500);
 }

function fetch_two(){
fetch(addr)
  .then(response => response.json())
  .then(json => {
  	$("#ip").show();
    $("#ip").html("IP: " + json.hostname);
    if (json.icon == undefined){
      $("#icon").hide();
    } else {
      $("#icon").show();
      $("#icon").attr("src", json.icon);
    }
  if (json.version == undefined){
    $("#vers").hide();
  } else {
    $("#vers").show();
    $("#vers").html("Version: " + json.version);
  }
  if (json.players == undefined){
    $("#pl_on").hide();
  } else {
    $("#pl_on").html("Players: " + json.players.online + "/" + json.players.max);
    $("#pl_on").show();
  }
  let stat = json.online;
   if (stat==true) { 
   $("#online").show();
   $("#online").html("Status: Online 🟢");
   $("#load").hide();
  }
    else {
    $("#online").show();
    $("#online").html("Status: Offline 🔴");
    $("#load").hide();
  }
});
}

function server_reset(){
$("#ipget").val(ip_addr_def);
server_fetch();
}

 $(window).ready(server_fetch());
$("#ipget").on("keypress", function(event) {
    if(event.which == '13') {
        server_fetch();   
    }
});
//-end

//windows manager
    $(".drag").draggable({ handle:'.title-bar', containment: ".desktop", snap: true, snapMode: "outer", snapTolerance: 3, stack: ".window"});
    if ($(window).width()>=1300){ //windows postition on 16:9
    $(".one").css("left", 550);
    $(".two").css("left", 785);
    $(".three").css("left", 1020);
    $(".bel").css("top", 320); 
    } else{ //windows postition on 4:3
    $(".one").css("left",230);
    $(".two").css("left", 465);
    $(".three").css("left", 700);
    $(".bel").css("top", 320);}

    //changelog
    $("#chng").hide();
    $("#chng").addClass("disabled");
    $("#chng_text").css({"max-width": $(".desktop").width()-25, "max-height": $(".desktop").height()-2}); 
	 //changelog default state

    function change_get(){
    $.get('/!misc/changelog.txt', function(data) { //changelog txt parser
      $("#chng_text").html(data);});
    }
    $(window).ready(change_get());

    function reset() { //start button function
      $(".resetable").fadeIn();
      $(".resetable").removeClass("disabled");
      bsod = 0;
    }
    //window above others on mouse click
    let zwindow = 1;
    $(".window").click(function(){
        zwindow++
        $(this).css("z-index", zwindow);
    });
    
//console ascii art
$.get('/!misc/skrepka.txt', function(data) {
  console.log(data);});

function desktop_size(){
 $(".desktop").height($(window).height() - 30); //restrict windows under taskbar
}
$(window).ready(desktop_size());
