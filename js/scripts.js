$(document).ready(function() {
  // write your scripts here

  function pickPic(max) {
		var num = Math.floor(Math.random() * Math.floor(max)) + 1;
		document.getElementById('hero').src = "/assets/HERO" + num + ".jpg";
  }
  
  pickPic(3);

});
