window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const birds = document.querySelectorAll(".app .bird");
      birds.forEach((bird, index) => {
          bird.addEventListener("click", function() {
            console.log(index);
            sounds[index].currentTime = 0;
            sounds[index].play();
            sounds[index].p
          });
      });
  });