function main() {
  // replaces value of section team1 h2 to the value of .team1
  function updateTeam1Name(event) {
    const teamName = document.querySelector('.team1 h2')
    teamName.textContent = event.target.value
  }
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)

  // replaces value of section team2 h2 to the value of .team2
  function updateTeam2Name(event) {
    const teamName = document.querySelector('.team2 h2')
    teamName.textContent = event.target.value
  }
  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Name)

  // first team totals
  let teamOneCounter = 0
  const team1Name = document.querySelector('.team1 h2')
  function teamOneScoreAdd() {
    if (teamOneCounter >= 21) {
      window.alert(`${team1Name.textContent} WINS!`)
      return
    }
    teamOneCounter++
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = teamOneCounter
  }
  document
    .querySelector('.team1 .add')
    .addEventListener('click', teamOneScoreAdd)

  function TeamOneScoreSub() {
    if (teamOneCounter <= 0) {
      window.alert('NO SUCH THING AS A NEGATIVE SCORE...')
      return
    }
    teamOneCounter--
    const teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = teamOneCounter
  }
  document
    .querySelector('.team1 .subtract')
    .addEventListener('click', TeamOneScoreSub)

  // Second team totals
  let teamTwoCounter = 0
  const team2Name = document.querySelector('.team2 h2')
  function teamTwoScoreAdd() {
    if (teamTwoCounter >= 21) {
      window.alert(`${team2Name.textContent} WINS!`)
      return
    }
    teamTwoCounter++
    const teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = teamTwoCounter
  }
  document
    .querySelector('.team2 .add')
    .addEventListener('click', teamTwoScoreAdd)

  function TeamTwoScoreSub() {
    if (teamTwoCounter <= 0) {
      window.alert('NO SUCH THING AS A NEGATIVE SCORE...')
      return
    }
    teamTwoCounter--
    const teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = teamTwoCounter
  }
  document
    .querySelector('.team2 .subtract')
    .addEventListener('click', TeamTwoScoreSub)

  // reset button
  function resetScores() {
    teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = 0
    teamOneCounter = 0
    teamTwoScore = document.querySelector('.team2 h3')
    teamTwoScore.textContent = 0
    teamTwoCounter = 0
  }
  document.querySelector('a').addEventListener('click', resetScores)
}

document.addEventListener('DOMContentLoaded', main)
