class Obstacle {
  constructor () {
    this.gameScreen = document.querySelector('#game-screen')
    this.positionsX = [70, 175, 175, 175, 70]
    this.randomIndex = Math.floor(Math.random() * this.positionsX.length)
    this.left = this.positionsX[this.randomIndex]
    this.top = -200
    this.width = 60
    this.height = 120

    this.element = document.createElement('img')
    this.element.style.position = 'absolute'
    this.element.src = '../images/redCar.png'
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`

    this.gameScreen.appendChild(this.element)
  }
  move () {
    this.top += 3
    this.updatePosition()
  }

  updatePosition () {
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
  }
}
