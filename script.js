const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const go = document.getElementById("go");
const rest = document.getElementById("restart");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 1000);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");
  const cloudsPosition = window.getComputedStyle(clouds).left.replace("px", "");
  const goPosition = window.getComputedStyle(clouds).left.replace("px", "");

  const resPosition = window.getComputedStyle(rest).left.replace("px", "");

  if (pipePosition <= 95 && pipePosition > 0 && marioPosition < 90) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    go.style.animation = "none";
    go.style.left = `${goPosition}px`;

    mario.src =
      "https://cdn.streamelements.com/uploads/3a66481b-e161-40ce-8e3c-8bb0f42145b4.png";
    mario.style.width = "125px";
    mario.style.height = "135px";
    mario.style.marginLeft = "30px";
    go.innerText = "GAME OVER";
    rest.style.opacity = "1";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
document.addEventListener("click", jump);
