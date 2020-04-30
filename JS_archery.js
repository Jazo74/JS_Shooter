// komment
let num = 1;
let score = 0;
let timer = 0;
let swoosh = document.getElementById('swoosh');
let cling = document.getElementById('cling');
let currentHeight = window.innerHeight;
let currentWidth = window.innerWidth;
let animEnd = currentWidth - 550;
let animEndY = currentHeight - 300;
let maxDeep = currentHeight - 300;
let xCoord = 0;
let yCoord = 0;
const headerDiv = document.querySelector('.header')
const footerDiv = document.querySelector('.footer')
const containerDiv = document.querySelector('.playground');

// Main program
function main() {
  //"global"
    const scoreCounter = document.getElementById("score")
    scoreDesign(scoreCounter)
    window.addEventListener('resize', resizeWindow);
    containerDiv.style.height = currentHeight - 190;
    const audio = new Audio('Audio/SuTurno.mp3')
    //setInterval(count,1000)
    addAudioButtons(footerDiv, audio)
    createATarget(containerDiv);
    // setInterval(() => {
    //   createATarget(containerDiv);
    // }, 2000);
  ;
}

// Moving the targets
function makeOneMove(num) {
  const target = document.getElementById(`target_${num}`);
  target.classList.remove('hide');
}

function count(){
  timer = timer + 1;
  document.getElementById("countdown").innerHTML = "Timer: "  + timer;
  if(timer == 60){
    alert("Game is finished! Point: " + score);
    timer = 0;
  }
}

function hitCalculate(xHit, yHit) {
  let xDist = Math.abs(xCoord - xHit);
  let yDist = Math.abs(yCoord+90 - yHit);
  let dist = 0;
  console.log(xDist, yDist);
  if (xDist >= yDist) {
    dist = xDist;
  } else {
    dist = yDist;
  }
  if (dist <= 11) {
    return 15;
  } else if (dist <= 22) {
    return 10;
  }else if (dist <= 32) {
    return 8;
  }else if (dist <= 44) {
    return 5;
  }else if (dist <= 54) {
    return 4;
  }else if (dist <= 66) {
    return 3;
  }else if (dist <= 76) {
    return 2;
  }else if (dist <= 92) {
    return 1;
  }else {
    return -1;
  }
  return 0;
}
// This happens when a hit landed on a target
function onHit(event) {
  const hitTarget = event.target;
  const xHit = event.clientX;
  const yHit = event.clientY;
  console.log(xHit, yHit);
  let result = hitCalculate(xHit, yHit)
  console.log(result);
  shoot.play();
  //event.target.src = './images/moneybag.png';
  //event.target.width = '200px';
  // event.target.style.opacity = 0;
  score += result;
  document.getElementById("score").innerHTML = "Score:  "  + score;
  if (score % 10 == 0) {
    bite2.play()
  }
  if (score % 6 == 0) {
    bite.play()
  }
}

// Creating audio buttons
function addAudioButtons(footerDiv, audio) {

  const audioButton = document.createElement('button')
  audioButton.addEventListener('click', function() {audio.play();})
  audioButton.setAttribute('class', 'audioButton')
  audioButton.setAttribute('alt', 'click to play music')
  audioButton.innerText = 'Play music'

  const muteButton = document.createElement('button')
  muteButton.addEventListener('click', function() {audio.pause();})
  muteButton.setAttribute('class', 'audioButton')
  muteButton.setAttribute('alt', 'click to stop music')
  muteButton.innerText = 'Pause music'

  const unMuteButton = document.createElement('button')
  unMuteButton.addEventListener('click', function() {
    video.muted = false;
  });
  unMuteButton.setAttribute('class', 'audioButton')
  unMuteButton.setAttribute('alt', 'click to stop sound effect')
  unMuteButton.innerText = 'Mute sound  '

  footerDiv.appendChild(audioButton)
  footerDiv.appendChild(muteButton)
  footerDiv.appendChild(unMuteButton)
}

// Creating targets
function createATarget(containerDiv) {
    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    img.setAttribute('src', './images/target.png')
    img.setAttribute('width', '200');
    xCoord = 400;
    yCoord = 300;
    img.style['margin-left'] = xCoord-100;
    img.style['margin-top'] = yCoord-100;
    console.log(xCoord, yCoord+90);
    img.addEventListener('click', onHit)
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('height', 'auto')
    containerDiv.appendChild(img)
    img.style['margin-left'] = 300;
    img.style.transitionDuration = '500ms';
    setTimeout(makeOneMove.bind(null,num),50);
    num++
}

//Resizing the browser window
function resizeWindow(){
    currentHeight = window.innerHeight;
    currentWidth = window.innerWidth;
    containerDiv.style.height = currentHeight - 210;
    let maxDeep = currentHeight - 300;
}

function scoreDesign(scoreCounter) {
  scoreCounter.setAttribute('class', 'score')
}


// Starting program
main()
