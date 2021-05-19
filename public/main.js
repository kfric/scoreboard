function main() {
  // replaces value of section team1 h2 to the value of .team1
  function updateTeam1Name(event) {
    const teamName = document.querySelector('.team1 h2')
    teamName.textContent = event.target.value
  }
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)

  let moveCounter = 0
  function updateScoreAdd() {
    moveCounter++
    if (moveCounter > 21) {
      console.log('YOU WIN!')
      return
    }
    const addScore = document.querySelector('.team1 h3')
    addScore.textContent = moveCounter
  }
  document.querySelector('.add').addEventListener('click', updateScoreAdd)

  moveCounter = 0
  function updateScoreSub() {
    moveCounter--
    if (moveCounter < 0) {
      console.log('NO ZEROS ALLOWED')
      return
    }
    const subScore = document.querySelector('.team1 h3')
    subScore.textContent = moveCounter
  }
  document.querySelector('.subtract').addEventListener('click', updateScoreSub)
}

document.addEventListener('DOMContentLoaded', main)
