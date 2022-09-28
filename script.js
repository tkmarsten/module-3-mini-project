let wins = 0
let losses = 0
let ties = 0

function displayGame() {
  let playAgain = true

  alert('In this duel, you shall face a computer in rock, paper, or scissors.')

  while (playAgain) {
    playGame()

    if (confirm('Would you like to play again?')) {
      continue
    } else {
      alert('Thanks for playing!')
      playAgain = false
    }
  }
}

function playGame() {
  let userChoice = prompt('Please choose (r)ock, (p)aper, or (s)cissors').toLowerCase()

  while (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {
    userChoice = prompt('Invalid input, please try again')
  }

  let compChoice = generateMove()
  let temp = compChoice.charAt(0)

  if (userChoice === temp) {
    ties++
    alert('Stalemate...')
  } else if ((userChoice === 's' && temp === 'p') ||
    (userChoice === 'r' && temp === 's') ||
    (userChoice === 'p' && temp === 'r')) {
    wins++
    alert('You won!')
  } else {
    losses++
    alert('You lost :(')
  }

  alert(`
  The computer picked ${compChoice}
  Wins: ${wins}
  Losses: ${losses}
  Ties: ${ties}
  `)
}

function generateMove() {
  let moves = ['rock', 'paper', 'scissors']
  let rand = Math.floor(Math.random() * 3)
  return moves[rand]
}

displayGame()