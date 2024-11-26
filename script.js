const watchImg = document.getElementById("watch-img");
const ButtonSilver = document.getElementById("button-silver");
const ButtonRubber = document.getElementById("button-rubber");
const ButtonDesign = document.getElementById("design-your-own");

ButtonSilver.addEventListener("click", function() {
    watchImg.src = "Assets/watch/Final2!.png";
  });

ButtonRubber.addEventListener("click", function() {
    watchImg.src = "Assets/watch/Final3!.png";
  });

ButtonDesign.addEventListener("click", function() {
    watchImg.src = "Assets/watch/Final4!.gif";
  });