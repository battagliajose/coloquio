const instrucSec = document.querySelectorAll('.instruc-sec');
const instruPipe = document.querySelectorAll('.instruc-pipe')

const celdasSec = document.querySelectorAll('.sec')
const celdasPipe = document.querySelectorAll('.pipe')

indexSec = 1
indexInstrSec = 5

indexPipe = 1
indexInstrPipe = 5

const moveObjectSec = () => {
    
    if (indexInstrSec >= 0) {
        celdasSec[indexSec].insertBefore(instrucSec[indexInstrSec], celdasSec[indexSec].firstChild)
        indexSec++

        if (indexSec >= celdasSec.length) {
            indexSec = 1
            indexInstrSec -= 1
        }
    
    } else {
        indexInstrSec = 5
        instrucSec.forEach((instruccion) => {
            celdasSec[0].appendChild(instruccion)
        });
    }

    setTimeout(moveObjectSec, Math.floor(500));
};

let posicionIndex = 1
let instruccionIndex = 5
let maxInstruciones = 6

const moveObjectPipe2 = async () => {

    let counter =  posicionIndex
    let counterInstr = instruccionIndex

    while(counter >= 1 && counterInstr >= 0) {
        celdasPipe[counter].insertBefore(instruPipe[counterInstr], celdasPipe[counter].firstChild)
        await delay(100);
        console.log(posicionIndex, counterInstr, counter)

        if (instruPipe[counterInstr].classList.contains('lenta')){
            counter--
        }

        if (posicionIndex >= 1) {
            counter-- //<-- modifica la separacion entre instrucciones
            counterInstr--
        }
    }

    console.log('---')

    if (posicionIndex < 7) {
        posicionIndex++
    } else {
        instruccionIndex--
    }

    if (instruccionIndex < 0) {
        posicionIndex = 1
        instruccionIndex = 5
        instruPipe.forEach((instruccion) => {
            celdasPipe[0].appendChild(instruccion)
        });
    }

    setTimeout(moveObjectPipe2, 500);
};

function delay(time){
	return new Promise(resolve => setTimeout(resolve, time));
}

moveObjectSec();
moveObjectPipe2();

