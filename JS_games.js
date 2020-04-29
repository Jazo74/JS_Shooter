// komment
let currentHeight = window.innerHeight;
let currentWidth = window.innerWidth;
const headerDiv = document.querySelector('.header')
const footerDiv = document.querySelector('.footer')
const containerDiv = document.querySelector('.playground');
const ninjaStart = document.querySelector('#first');
const wildWestStart = document.querySelector('#second');
const archeryStart = document.querySelector('#third');
ninjaStart.addEventListener('click',startNinja);
wildWestStart.addEventListener('click',startWildWest);
archeryStart.addEventListener('click',startArchery);

function startNinja(){
  swoosh.play();
  window.open('./JS_shooter.html');
}

function startWildWest(){
  lock.play();
  window.open('./JS_wildwest.html');
}

function startArchery(){
  lock.play();
  window.open('./JS_archery.html');
}

// Main program
function main() {
  //"global"
    window.addEventListener('resize', resizeWindow);
    containerDiv.style.height = currentHeight - 200;
    
}

//Resizing the browser window
function resizeWindow(){
    currentHeight = window.innerHeight;
    currentWidth = window.innerWidth;
    containerDiv.style.height = currentHeight - 200;
    containerDiv.style.width = currentWidth - 210;
    let maxDeep = currentHeight - 300;
}

// Starting program
main()
