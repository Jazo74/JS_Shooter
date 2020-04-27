
function main() {
  //"global"
  const containerDiv = document.querySelector('.playground');
  





  createTarget(5, containerDiv);
const target = document.getElementsByClassName("target");
target[0].style['margin-left'] = '1000px';
}


function onHit(event) {
  const hitTarget = event.target
  event.target.style.opacity = 0;
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
    console.log(rndVertical);
    img.addEventListener('click', onHit, { once: true })
    containerDiv.appendChild(img)
    img.style['margin-top'] = rndVertical;
    num++
  }

}






main()
