// komment
let currentHeight = window.innerHeight;
let currentWidth = window.innerWidth;
let animEnd = currentWidth - 250;
let animEndY = currentHeight - 300;
let maxDeep = currentHeight - 300;
const headerDiv = document.querySelector('.header')
const footerDiv = document.querySelector('.footer')
const containerDiv = document.querySelector('.playground');
const ninjaStart = document.querySelector('#first');
const wildWestStart = document.querySelector('#second');
ninjaStart.addEventListener('click',startNinja);
wildWestStart.addEventListener('click',startWildWest);

function startNinja(){
  window.open('./JS_shooter.html');
}

function startWildWest(){
  window.open('./JS_wildwest.html');
}

// Main program
function main() {
  //"global"
    window.addEventListener('resize', resizeWindow);
    containerDiv.style.height = currentHeight - 190;
    
}

//Resizing the browser window
function resizeWindow(){
    currentHeight = window.innerHeight;
    currentWidth = window.innerWidth;
    containerDiv.style.height = currentHeight - 210;
    containerDiv.style.width = currentWidth - 210;
    let maxDeep = currentHeight - 300;
}

// Starting program
main()
