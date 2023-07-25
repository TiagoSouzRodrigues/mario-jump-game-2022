const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const game = document.getElementsByClassName('game-board');



const score = document.querySelector('.score--value')
const scr = document.querySelector('.score > h2')
const finalScore = document.querySelector('.score-final ')
const menu = document.querySelector('.menu--screen');
const buttonPlay = document.querySelector('.btn-play')

const jump = () => {
  mario.classList.add("jump");


  setTimeout(() => {
    mario.classList.remove("jump");
  }, 900);


};
const incrementScore = () => {
  score.innerText = +score.innerText + 1
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");
  const cloudsPosition = window.getComputedStyle(clouds).left.replace("px", "");

  if (pipePosition <= 105 && pipePosition > 0 && marioPosition < 95) {

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;



    mario.src = "https://cdn.streamelements.com/uploads/3a66481b-e161-40ce-8e3c-8bb0f42145b4.png";
    mario.style.width = "125px";
    mario.style.height = "135px";
    mario.style.marginLeft = "30px";



    menu.style.display = 'flex';
    scr.style.display = 'none'
    score.style.color = "greenyellow"
    finalScore.style.display = 'flex'
    finalScore.style.marginTop = '300px'


    clearInterval(loop);


  }

  incrementScore()

}, 50);


document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
document.addEventListener("click", jump);
