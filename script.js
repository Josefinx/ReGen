const watchImg = document.getElementById("watch-img");
const ButtonKoppar = document.getElementById("button-koppar");
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

ButtonKoppar.addEventListener("click", function() {
    watchImg.src = "Assets/watch/Final1!.png";
  });



/* hero desktop video */

const video = document.getElementById('hero-video');
const heroH1 = document.querySelector('.hero-h1-desktop');


function updateTextBasedOnTime() {
  const currentTime = video.currentTime; 
  console.log(currentTime); 

  if (currentTime >= 0 && currentTime < 4) {
    if (heroH1.textContent !== "YOUR OWN WAY IS THE GOAL") {
      heroH1.textContent = "YOUR OWN WAY IS THE GOAL";
      /*console.log("hej");*/
    }
  } else if (currentTime >= 4 && currentTime < 9) {
    if (heroH1.textContent !== "EVERY STEP IS A STORY") {
      heroH1.textContent = "EVERY STEP IS A STORY";
    }
  } else if (currentTime >= 9 && currentTime < 15) {
    if (heroH1.textContent !== "AND IT IS YOURS") {
      heroH1.textContent = "AND IT IS YOURS";
    }
  } else { /* Ta inte bort detta funkar inte annars! */
    if (heroH1.textContent !== "YOUR OWN WAY IS THE GOAL") {
      heroH1.textContent = "YOUR OWN WAY IS THE GOAL";
    }
  }
}

video.addEventListener('timeupdate', updateTextBasedOnTime);
