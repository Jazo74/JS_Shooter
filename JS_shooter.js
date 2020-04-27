
let num = 1;
let score = 0;
let swoosh = document.getElementById('swoosh');
let cling = document.getElementById('cling');
let currentHeight = window.innerHeight;
let maxDeep = currentHeight - 300;
const headerDiv = document.querySelector('.header')
const footerDiv = document.querySelector('.footer')
const containerDiv = document.querySelector('.playground');

// Main program
function main() {
  //"global"
    window.addEventListener('resize', resizeWindow);
    containerDiv.style.height = currentHeight - 190;
    const audio = new Audio('Audio/SuTurno.mp3')
    addAudioButtons(footerDiv, audio)
    setInterval(() => {
    createATarget(containerDiv);
  }, 1000);
}

// Moving the targets
function makeOneMove(num) {
  const target = document.getElementById(`target_${num}`);
  target.classList.remove('hide');
  target.style['margin-left'] = '2000px';
}

// This happens when a hit landed on a target
function onHit(event) {
  const hitTarget = event.target
  swoosh.play();
  event.target.src = './covid_hit.png';
  event.target.style.opacity = 0;
  score++;
  document.getElementById("score").innerHTML = "Score: "  + score;
}

// This happens when a hit landed on a good target, like orange
function onFail(event) {
    const hitTarget = event.target
    cling.play();
    //event.target.src = './covid_hit.png';
    event.target.style.opacity = 0;
    score -= 5;
    document.getElementById("score").innerHTML = "Score: "  + score;
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
    let rndTarget = Math.floor(Math.random() * 2);
    let rndVertical = Math.floor(Math.random() * maxDeep);
    let rndSpeed = 0;
    while (true) {
        rndSpeed = Math.floor(Math.random() * 6);
        if (rndSpeed >= 2) {
            break;
        }
    }
    
    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    if (rndTarget >= 1){
        img.setAttribute('src', './covid.png')
        img.setAttribute('width', '280')
        img.addEventListener('mouseover', onHit, { once: true })
    } else{
        img.setAttribute('src', './orange.png')
        img.setAttribute('width', '130px')
        img.addEventListener('mouseover', onFail, { once: true })
    }
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('height', 'auto')
    containerDiv.appendChild(img)
    img.style['margin-top'] = rndVertical;
    img.style.transitionDuration = `${rndSpeed}s`;
    setTimeout(makeOneMove.bind(null,num),50);
    setTimeout(removeATarget.bind(null, `target_${num}`),(rndSpeed*1000)-300);
    num++
}

//Removing old targets
function removeATarget(id){
    document.getElementById(id).remove();
}

//Resizing the browser window
function resizeWindow(){
    currentHeight = window.innerHeight;
    containerDiv.style.height = currentHeight - 190;
    let maxDeep = currentHeight - 300;
}

// Starting program
main()
