window.onload = function () {
  const startButton = document.getElementById('start-button')
  const restartButton = document.getElementById('restart-button')
  let currentGame

  // All Event Listeners
  startButton.addEventListener('click', function () {
    startGame()
    window.addEventListener('keydown', handleKeyInputs)
  })

  function startGame () {
    console.log('start game')
    currentGame = new Game()
    currentGame.start()
  }

  function handleKeyInputs (event) {
    if (!currentGame) return
    event.preventDefault() // needed so the browser doesn't utilize the inputs from the arrow keys itsself
    switch (event.key) {
      case 'ArrowUp':
        currentGame.player.directionY -= 7
        break
      case 'ArrowDown':
        currentGame.player.directionY += 7
        break
      case 'ArrowLeft':
        currentGame.player.directionX -= 7
        break
      case 'ArrowRight':
        currentGame.player.directionX += 7
        break
      // Bonus: Added breaking.
      case ' ':
        currentGame.player.directionX = 0
        currentGame.player.directionY = 0
        break
    }
  }
}
