let bsod = 0;
function sas(foldid){$(foldid).slideToggle();}

function cls(clsid){
  $(clsid).fadeOut();
  $(clsid).addClass("disabled");
  bsod++; 
  if (bsod == 4){
  $(location).attr('href','http://vantuzfed.ru/404');
}
}
 // changelog logic
function chnglg(chngid){
  if ($(chngid).hasClass("disabled")){
    $(chngid).removeClass("disabled");
    $(chngid).fadeIn();
    $(chngid).css("z-index", 99999);
  }else{
    $(chngid).addClass("disabled");
    $(chngid).fadeOut();
    $(chngid).css("z-index", 0);
  }
  
}
window.winmax=false;

function maxwin(){
  if (winmax==false){
  winmax=true;
  $("#chng").css({"width": $(".desktop").width(), "height": "fit-content", "top": 0, "left": 0});
  $("#chng_text").css({"width": $("#chng").width(), "height": $(".desktop").height()-55,"resize": "none"});
  $("#chng").draggable("disable");
  } else{
  winmax=false;
  $("#chng").css({"width": "fit-content", "height": "fit-content", "top": 100, "left": 100});
  $("#chng_text").css({"width": 676, "height": 380,"resize": "both"});
 $("#chng").draggable("enable")
  }
}

//fullscreen
function fullscr(){
  if (document.fullscreenElement) {
  	document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

$(window).bind('resize', function(){
    desktop_size();
});

//time
window.setTimeout(function() {
window.today = new Date();
window.time = today.getHours() + ":" + today.getMinutes();
}, 10);

