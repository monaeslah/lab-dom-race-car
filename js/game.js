class Game {
  constructor () {
    console.log('Game class loaded')
    this.startScreen = document.querySelector('#game-intro')
    this.statsContainer = document.querySelector('#game-container')
    this.gameScreen = document.querySelector('#game-screen')
    this.gameEndScreen = document.querySelector('#game-end')
    this.scoreSpan = document.querySelector('#score')
    this.livesSpan = document.querySelector('#lives')
    this.height = 600
    this.width = 500
    this.obstacles = []
    this.score = 0
    this.lives = 3
    this.gameIsOver = false
    this.gameIntervalId
    this.obstacleAddFlag = true
    this.gameLoopFrequency = 1000 / 60 // 60fps;
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      './images/car.png'
    )
  }

  start () {
    this.gameScreen.style.height = `${this.height}px`
    this.gameScreen.style.width = `${this.width}px`
    this.startScreen.style.display = 'none'
    this.statsContainer.style.display = 'flex'
    this.gameScreen.style.display = 'block'
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
  }

  gameLoop () {
    console.log('gameLoop Active')
    this.update()
    if (this.gameIsOver) clearInterval(this.gameIntervalId)
  }

  update () {
    this.player.move()
    this.livesSpan.innerText = this.lives
    this.scoreSpan.innerText = this.score
    for (let index in this.obstacles) {
      let obstacle = this.obstacles[index]
      obstacle.move()
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove()
        this.lives--
        this.obstacles.splice(index, 1)
      } else if (obstacle.top > this.height) {
        this.score++
        obstacle.element.remove()
        this.obstacles.splice(index, 1)
      }
    }
    if (this.lives === 0) {
      this.endGame()
    }
    if (
      Math.random() >= 0.95 &&
      this.obstacles.length <= 1 &&
      this.obstacleAddFlag === true
    ) {
      this.addNewObstacle()
      this.obstacleAddFlag = false
      setTimeout(() => (this.obstacleAddFlag = true), 3000)
    }
  }

  addNewObstacle () {
    this.obstacles.push(
      new Obstacle(this.gameScreen, 100, 150, './images/redCar.png')
    )
  }

  endGame () {
    this.player.element.remove()
    this.obstacles.forEach(obstacle => obstacle.element.remove())
    this.gameIsOver = true
    this.gameScreen.style.display = 'none'
    this.gameEndScreen.style.display = 'block'
  }
}
