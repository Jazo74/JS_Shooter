
let num = 1;
let score = 0;




function main() {
  //"global"
  const containerDiv = document.querySelector('.playground');


  setInterval(() => {
    createATarget(containerDiv);
  }, 2000);

  //createTarget(containerDiv);
  //setTimeout(makeThemMove, 1000);


}


function makeThemMove() {
  const targets = document.querySelectorAll(".target");
  for (let i = 0; i < targets.length; i++) {
    const element = targets[i];
    element.classList.remove('hide')
    element.style['margin-left'] = '1000px';
  }
}

function makeOneMove(num) {
    const target = document.getElementById(`target_${num}`);
      target.classList.remove('hide');
      target.style['margin-left'] = '1800px';
  }


function onHit(event) {
  const hitTarget = event.target
  event.target.src = './covid_hit.png';
  event.target.style.opacity = 0;
  score++;
  console.log(score);
}

function createTarget(amount, containerDiv) {
  var num = 1;

  for (let i = 0; i < amount; i++) {
    let rndVertical = Math.floor(Math.random() * 500);
    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    img.setAttribute('src', 'https://pngimg.com/uploads/coronavirus/coronavirus_PNG7.png')
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('width', '230')
    img.setAttribute('height', '150')
    img.addEventListener('click', onHit, { once: true })
    containerDiv.appendChild(img)
    img.style['margin-top'] = rndVertical;
    setTimeout(makeOneMove.bind(null,num),1000);
    num++
  }

}

function createATarget(containerDiv) {
    let rndVertical = Math.floor(Math.random() * 700);
    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    img.setAttribute('src', './covid.png')
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('width', '230')
    img.setAttribute('height', '150')
    img.addEventListener('mouseover', onHit, { once: true })
    containerDiv.appendChild(img)
    img.style['margin-top'] = rndVertical;
    setTimeout(makeOneMove.bind(null,num),50);
    num++
  }






main()
