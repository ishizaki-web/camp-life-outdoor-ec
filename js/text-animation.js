$(function(){
/*==================================
	Top text animation
===================================*/  

  var textWrapper = document.querySelector('.top-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.top-text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.top-text',
    opacity: 1,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1500
  });

});