
const macaco = document.querySelector('.macaco');
const pipe = document.querySelector('.pipe');

const jump = () => {
    macaco.classList.add('jump');

    setTimeout(() => {
        macaco.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{



    const pipePosition = pipe.offsetLeft;
    const macacoPosition = +window.getComputedStyle(macaco).bottom.replace('px','');

    console.log(macacoPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && macacoPosition< 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        macaco.style.animation = 'none';
        macaco.style.bottom = `${macacoPosition}px`;

        macaco.src = './perdeu.png';

        clearInterval(loop);
    }



},10);

document.addEventListener('keydown', jump);