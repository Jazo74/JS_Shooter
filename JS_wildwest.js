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
    setInterval(() => {
    createATarget(containerDiv);
  }, 800);
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

// This happens when a hit landed on a target
function onHit(event) {
  const hitTarget = event.target
  shoot.play();
  event.target.src = './images/moneybag.png';
  event.target.width = '100px';
  event.target.style.opacity = 0;
  score++;
  document.getElementById("score").innerHTML = "Score:  "  + score;
}

// This happens when a hit landed on a good target, like orange
function onFail(event) {
    const hitTarget = event.target
    shoot.play();
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

  footerDiv.appendChild(audioButton)
  footerDiv.appendChild(muteButton)
  footerDiv.appendChild(unMuteButton)
}

// Creating targets
function createATarget(containerDiv) {
    let rndTarget = Math.floor(Math.random() * 3);
    let rndHorizontal = Math.floor(Math.random() * animEnd);
    let rndSpeed = 0;
    while (true) {
        rndSpeed = Math.floor(Math.random() * 2);
        if (rndSpeed >= 1) {
            break;
        }
    }
    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    if (rndTarget === 2){
        img.setAttribute('src', './images/bandit1.png')
        img.setAttribute('width', '500')
        img.style['margin-top'] = animEndY-390;
        img.addEventListener('click', onHit, { once: true })
    } else if (rndTarget === 1) {
        img.setAttribute('src', './images/bandit2.png')
        img.setAttribute('width', '500px')
        img.style['margin-top'] = animEndY-390;
        img.addEventListener('click', onHit, { once: true })
    } else {
        img.setAttribute('src', './images/cowboy1.png')
        img.setAttribute('width', '550px')
        img.style['margin-top'] = animEndY-415;
        img.addEventListener('click', onHit, { once: true })
    }
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('height', 'auto')
    containerDiv.appendChild(img)
    img.style['margin-left'] = rndHorizontal;
    console.log(animEnd,rndHorizontal);
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
    containerDiv.style.height = currentHeight - 210;
    containerDiv.style.width = currentWidth - 210;
    let maxDeep = currentHeight - 300;
}

function scoreDesign(scoreCounter) {
  scoreCounter.setAttribute('class', 'score')
}


// Starting program
main()
