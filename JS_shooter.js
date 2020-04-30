// komment
let num = 1;
let score = 0;
let timer = 0;
let swoosh = document.getElementById('swoosh');
let cling = document.getElementById('cling');
let currentHeight = window.innerHeight;
let currentWidth = window.innerWidth;
let animEnd = currentWidth - 250;
let animEndY = currentHeight - 300;
let maxDeep = currentHeight - 300;
let countId;
let gameId;
const mainBody = document.querySelector('.main');
const headerDiv = document.querySelector('.header');
const footerDiv = document.querySelector('.footer');
const containerDiv = document.querySelector('.playground');
const buttonGroup = document.querySelector('.buttonGroup')
const startupPage = document.querySelector('.startupPage')
const finalScoreDiv = document.querySelector('.finalScore')
const finalScore = document.querySelector('#finalScore');
let minGame;
let freeGame;


// Main program
function main() {
  "global"
    const audio = new Audio('Audio/pirates.mp3')
    addAudioButtons(footerDiv, audio)
    const scoreCounter = document.getElementById("score")
    minGame = document.querySelector('#minGame');
    freeGame = document.querySelector('#freeGame');
    scoreDesign(scoreCounter)
    mainBody.height = currentHeight;
    window.addEventListener('resize', resizeWindow);
    containerDiv.style.height = currentHeight - 190;
  
}

// Moving the targets
function makeOneMove(num) {
  const target = document.getElementById(`target_${num}`);
  target.classList.remove('hide');
  let rndVertical = Math.floor(Math.random() * maxDeep);
  target.style['margin-left'] = animEnd;
  target.style['margin-top'] = rndVertical;
}

function count() {
  timer = timer + 1;
  document.getElementById("countdown").innerHTML = "Timer: "  + timer;
  document.getElementById("score").innerHTML = "Score:  "  + score;
  if(timer === 60){
    clearInterval(countId);
    clearInterval(gameId);
    //alert("Game is finished! Point: " + score);
    timer = 0;
    score = 0;
    finalScoreDiv.style.display = 'flex';
    freeGame.innerHTML = 'Free game';
    minGame.style.display = '';
    freeGame.style.display = '';
  }
}

function startWithTimer(){
  minGame.style.display = 'none';
  freeGame.style.display = 'none';
  freeGame.innerHTML = 'More target!';
  finalScoreDiv.style.display = 'none';
  countId = setInterval(count, 1000)
  gameId = setInterval(() => {
    createATarget(containerDiv);
  }, 1000);
}

function startWithOutTimer() {
  score = 0;
  minGame.style.display = 'none';
  freeGame.innerHTML = 'More target!';
  finalScoreDiv.style.display = 'none';
  const timer = document.getElementById('countdown')
  timer.setAttribute('class', 'hide')
  setInterval(() => {
    createATarget(containerDiv);
  }, 1000);

}

// This happens when a hit landed on a target
function onHit(event) {
  const hitTarget = event.target
  swoosh.play();
  if (event.target.src === 'http://127.0.0.1:5500/images/covid.png'){
    event.target.src = './images/covid_hit.png';
  } else {
    event.target.src = './images/bacteria_hit.png';
  }
  event.target.style.opacity = 0;
  score++;
  document.getElementById("score").innerHTML = "Score:  "  + score;
  document.getElementById("finalScore").innerHTML = "Final Score:  "  + score;
}

// This happens when a hit landed on a good target, like orange
function onFail(event) {
    const hitTarget = event.target
    bite.play();
    //event.target.src = './covid_hit.png';
    event.target.style.opacity = 0;
    score += 2;
    document.getElementById("score").innerHTML = "Score:  "  + score;
    document.getElementById("finalScore").innerHTML = "Final Score:  "  + score;
  }

// Creating audio buttons
function addAudioButtons(footerDiv, audio) {

  const audioButton = document.createElement('button')
  audioButton.addEventListener('click', function() {audio.play();})
  audioButton.setAttribute('class', 'bottomButton')
  audioButton.setAttribute('alt', 'click to play music')
  audioButton.innerText = 'Play music'

  const muteButton = document.createElement('button')
  muteButton.addEventListener('click', function() {audio.pause();})
  muteButton.setAttribute('class', 'bottomButton')
  muteButton.setAttribute('alt', 'click to stop music')
  muteButton.innerText = 'Pause music'

  const unMuteButton = document.createElement('button')
  unMuteButton.addEventListener('click', function() {
    video.muted = false;
  });
  unMuteButton.setAttribute('class', 'bottomButton')
  unMuteButton.setAttribute('alt', 'click to stop sound effect')
  unMuteButton.innerText = 'Mute sound  '

  const start1MinButton = document.createElement('button')
  start1MinButton.addEventListener('click', startWithTimer)
  start1MinButton.setAttribute('class', 'bottomButton')
  start1MinButton.setAttribute('id', 'minGame')
  start1MinButton.setAttribute('alt', 'start 1 min game')
  start1MinButton.innerText = '1min game'

  const freeGameButton = document.createElement('button')
  freeGameButton.addEventListener('click', startWithOutTimer)
  freeGameButton.setAttribute('class', 'bottomButton')
  freeGameButton.setAttribute('id', 'freeGame')
  freeGameButton.setAttribute('alt', 'Free game')
  freeGameButton.innerText = 'Free game'

  buttonGroup.appendChild(audioButton)
  buttonGroup.appendChild(muteButton)
  buttonGroup.appendChild(unMuteButton)
  buttonGroup.appendChild(start1MinButton)
  buttonGroup.appendChild(freeGameButton)
}

// Creating targets
function createATarget(containerDiv) {
    let rndTarget = Math.floor(Math.random() * 4);
    let rndVertical = Math.floor(Math.random() * maxDeep);
    let rndSpeed = 0;
    while (true) {
        rndSpeed = Math.floor(Math.random() * 4);
        if (rndSpeed >= 1) {
            break;
        }
    }
    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    if (rndTarget === 3){
        img.setAttribute('src', './images/covid.png')
        img.setAttribute('width', '280')
        img.addEventListener('mouseover', onHit, { once: true })
    } else if (rndTarget === 2) {
        img.setAttribute('src', './images/orange2.png')
        img.setAttribute('width', '150px')
        img.addEventListener('mouseover', onFail, { once: true })
    } else if (rndTarget === 1) {
        img.setAttribute('src', './images/bacteria.png')
        img.setAttribute('width', '250px')
        img.addEventListener('mouseover', onHit, { once: true })
    } else {
        img.setAttribute('src', './images/watermelon.png')
        img.setAttribute('width', '130px')
        img.addEventListener('mouseover', onFail, { once: true })
    }
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('height', 'auto')
    containerDiv.appendChild(img)
    img.style['margin-top'] = rndVertical;
    img.style.transitionDuration = `${rndSpeed}s`;
    setTimeout(makeOneMove.bind(null,num),50);
    setTimeout(removeATarget.bind(null, `target_${num}`),(rndSpeed*1000));
    num++
}

//Removing old targets
function removeATarget(id){
    document.getElementById(id).remove();
}

//Resizing the browser window
function resizeWindow(){
    currentHeight = window.innerHeight;
    currentWidth = window.innerWidth;
    containerDiv.style.height = currentHeight - 205;
    mainBody.height = currentHeight;
    let maxDeep = currentHeight - 300;
}

function scoreDesign(scoreCounter) {
  scoreCounter.setAttribute('class', 'score')
}


// Starting program
main()
