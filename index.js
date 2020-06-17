//this section is dedicated to type writer style.
var txt = "Create,develope,win,design.";

var i = 0;
var speed = 150;
function typeWriter() {
  if (i<txt.length) {
    $(".title-h1-2").append(txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

var width =window.innerWidth;
if(width<550){
  $("#particles-js").remove();
}

//to create  the hover function.

$(".learn-more").hover(function(){
  $(".learn-more").css("display","block");
},
function(){
  $(".learn-more").css("display","none");

});

// to create a sticky header
var nav = $("#nav");
var offset = $("#nav").offset();
console.log("this is first testing");

console.log("this is the testing"+offset.top);
window.onscroll = function(){
  navbar();
}
function navbar(){
  if(offset.top < window.pageYOffset){
    nav.addClass("fixed-top");

  }
  else{
    nav.removeClass("fixed-top");
  }
}
