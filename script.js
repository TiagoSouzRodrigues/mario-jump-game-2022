const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump =() =>{
   mario.classList.add('jump');

   setTimeout(()=>{
    mario.classList.remove('jump');

   },1000 );

}


const loop =setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = window.getComputedStyle(clouds).left.replace('px', '');

    if ( pipePosition <= 95 && pipePosition > 0 && marioPosition < 90  ){
        
        pipe.style.animation = 'none';    
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
    

        mario.style.animation = 'none';    
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./images/game-over.png';
        mario.style.width ='75px'
        mario.style.marginLeft ='50px'


        clearInterval(loop);
        
    }
   
},10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
document.addEventListener('click', jump);
