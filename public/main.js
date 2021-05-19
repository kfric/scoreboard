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
  const team1Name = document.querySelector('.team1 h2')
  function updateScoreAdd() {
    if (moveCounter >= 21) {
      window.alert(`${team1Name.textContent} WINS!`)
      return
    }
    moveCounter++
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = moveCounter
  }
  document.querySelector('.add').addEventListener('click', updateScoreAdd)

  moveCounter = 0
  function updateScoreSub() {
    if (moveCounter <= 0) {
      window.alert('NO SUCH THING AS A NEGATIVE SCORE...')
      return
    }
    moveCounter--
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = moveCounter
  }
  document.querySelector('.subtract').addEventListener('click', updateScoreSub)

  // reset button
  const resetScore = 0
  function resetScores() {
    teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = resetScore
  }
  document.querySelector('footer').addEventListener('click', resetScores)
}

document.addEventListener('DOMContentLoaded', main)
