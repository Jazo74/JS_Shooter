const target = document.getElementsByClassName("target");
target[0].style['margin-left'] = '1000px';







function main() {
  createTarget(1)
  const target = document.querySelector('.target')
  target.addEventListener('click', onHit, { once: true })
}


function onHit(event) {
  const hitTarget = event.target
  console.log(hitTarget)
}

function createTarget(amount) {
  const img = document.createElement('img')
  img.setAttribute('class', 'target')
}






main()
