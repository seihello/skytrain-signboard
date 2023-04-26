$(() => {

  setInitialArrival()

  $("#action").on("click", () => {
    update()
  })

})

function setInitialArrival() {
  for(let i = 0; i < 3; i++) {
    const arrivalElement = createArrivalElement(getDestination())
    arrivalElement.css("top", `${i*80}px`)
    $("#schedule").append(arrivalElement)
  }
}

function update() {
  $(".arrival").first().animate(
    { left:'900px' }, 1000, slideUp
  )
}

function slideUp() {
  $(".arrival").first().remove()
  $(".arrival").first().animate({top: `0px`}, 500)
  $(".arrival").last().animate({top: `80px`}, 500, insertNewArrival)
}

function insertNewArrival() {
  const arrivalElement = createArrivalElement(getDestination())
  arrivalElement.css("top", `160px`)
  arrivalElement.css("left", `-900px`)
  $("#schedule").append(arrivalElement)
  $(".arrival").last().animate({left: `0px`}, 500)
}

function createArrivalElement(destination) {
  const arrivalElement = $(`
    <div class="arrival">
      <img class="train-icon" src="train.png">
      <div class="destination">${destination}</div>
      <div class="eta">5min</div>
    </div>
  `)
  return arrivalElement
}

function getDestination() {
  switch(Math.floor(Math.random() * 2)) {
    case 0:
      return "King George"
    case 1:
      return "Production Way - University"
  }
}