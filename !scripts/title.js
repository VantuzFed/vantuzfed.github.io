//title animation
let i = 0;
let txt = "VantuzFed";
let speed = 100;
let ind = 0;


function typeWriter() {
  if (i < txt.length) {
    document.title += txt.charAt(i);
    i++;
  }
}

if (i < txt.length) {setInterval(typeWriter, speed);}
