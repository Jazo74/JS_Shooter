






function main() {
  //"global"
  const containerDiv =document.querySelector('.playground')


  createTarget(5, containerDiv)
  setTimeout(makeThemMove, 1000)


}

function makeThemMove() {
  const targets = document.querySelectorAll(".target");
  for (let i = 0; i < targets.length; i++) {
    const element = targets[i];
    element.classList.remove('hide')
    element.style['margin-left'] = '1000px';
  }
}


function onHit(event) {
  const hitTarget = event.target
  console.log(hitTarget)
}

function createTarget(amount, containerDiv) {
  var num = 1;

  for (let i = 0; i < amount; i++) {

    const img = document.createElement('img')
    img.setAttribute('class', 'target')
    img.setAttribute('src', 'https://pngimg.com/uploads/coronavirus/coronavirus_PNG7.png')
    img.setAttribute('id', `target_${num}`)
    img.setAttribute('width', '230')
    img.setAttribute('height', '150')
    img.addEventListener('click', onHit, { once: true })
    img.classList.add('hide')

    containerDiv.appendChild(img)
    num++
  }

}






main()
