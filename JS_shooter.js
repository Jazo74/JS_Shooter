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
const mainBody = document.querySelector('.main');
const headerDiv = document.querySelector('.header');
const footerDiv = document.querySelector('.footer');
const containerDiv = document.querySelector('.playground');
const buttonGroup = document.querySelector('.buttonGroup')
const startupPage = document.querySelector('.startupPage')

// Main program
function main() {
  "global"
    const scoreCounter = document.getElementById("score")
    scoreDesign(scoreCounter)
    mainBody.height = currentHeight;
    window.addEventListener('resize', resizeWindow);
    containerDiv.style.height = currentHeight - 190;

  // startup 1min or no timer
  const timer = document.querySelector('.option_1')
  const noTimer = document.querySelector('.option_2')
  timer.addEventListener('click', startWithTimer)
  noTimer.addEventListener('click', startWithOutTimer)


    const audio = new Audio('Audio/SuTurno.mp3')
    addAudioButtons(footerDiv, audio)
  
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
  if(timer == 60){
    alert("Game is finished! Point: " + score);
    timer = 0;
    score = 0;
  }
}

function startWithTimer(){
  startupPage.style.display = 'none';
  setInterval(count, 1000)
  setInterval(() => {
    createATarget(containerDiv);
  }, 1000);
}

function startWithOutTimer() {
  startupPage.style.display = 'none';
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
}

// This happens when a hit landed on a good target, like orange
function onFail(event) {
    const hitTarget = event.target
    cling.play();
    //event.target.src = './covid_hit.png';
    event.target.style.opacity = 0;
    score -= 3;
    document.getElementById("score").innerHTML = "Score:  "  + score;
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

  buttonGroup.appendChild(audioButton)
  buttonGroup.appendChild(muteButton)
  buttonGroup.appendChild(unMuteButton)
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
