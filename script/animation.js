// dom element
const flipContainer = document.querySelector(".s1-container");
const flip = document.querySelector(".s1-flip");
const flip1 = document.querySelector(".s1-1");
const flip2 = document.querySelector(".s1-2");
const flip3 = document.querySelector(".s1-3");
const misuraFlip = flip.getBoundingClientRect();
const centroFLip = (misuraFlip.width / 2);

const misuraFlip1 = flip1.getBoundingClientRect()
const centroFlip1 = (misuraFlip1.width /2)
const centro = (centroFLip - centroFlip1)


// variable to store our intervalID
let intervalId;

function changeColor() {
    console.log(flip.getBoundingClientRect(centro))
    console.log(misuraFlip.width)
    console.log(centroFLip)
    console.log(misuraFlip1.width)
    console.log(centroFlip1)
    flip1.setAttribute("style","position-left:" + centro)
    flip1.setAttribute("style","display:block")
    flip2.setAttribute("style","display:none")
    flip3.setAttribute("style","display:none")
    flashText()

  // check if an interval has already been set up
  intervalId ??= setInterval(flashText, 9000);
}

function flashText() {
    setTimeout(flipUno,"3000")
    setTimeout(flipDue,"6000")
    setTimeout(flipTre,"9000")
}


changeColor()





function flipUno(){
    flip1.setAttribute("style","display:none")
    flip2.setAttribute("style","display:block")
    flip3.setAttribute("style","display:none")
}

function flipDue(){
    flip1.setAttribute("style","display:none")
    flip2.setAttribute("style","display:none")
    flip3.setAttribute("style","display:block")
}

function flipTre(){
    flip1.setAttribute("style","display:block")
    flip2.setAttribute("style","display:none")
    flip3.setAttribute("style","display:none")
}


// setTimeout(flipUno,"5000");
// setTimeout(flipDue,"10000");
// setTimeout(flipTre,"15000");

//  const setInterval(flipUno,2000);