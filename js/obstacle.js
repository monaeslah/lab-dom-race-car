class Obstacle {
  constructor (gameScreen, width, height, imgsrc) {
    this.gameScreen = gameScreen
    this.left = Math.floor(Math.random() * 300 + 70)
    this.top = 0
    this.width = width
    this.height = height
    this.element = document.createElement('img')
    this.element.src = imgsrc
    this.element.style.position = 'absolute'
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`

    this.gameScreen.appendChild(this.element)
  }

  move () {
    this.top += 1
    this.updatePosition()
  }

  updatePosition () {
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }
}
