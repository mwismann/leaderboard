import { getScores, postScore } from './fetchingData.js';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SzxB0D5b3hJBN8T3JMNC/scores/';

const refreshData = () => {
  const scoresContainer = document.querySelector('.scores');
  scoresContainer.innerHTML = '';
  getScores(url).then(data => {
      data.result.forEach(score => {
          scoresContainer.insertAdjacentHTML('beforeend', 
          `<li><span>${score.user}: ${score.score}</span></li>`);
      });
  });
};

const sendData = () => {
  const data = {
    user: document.getElementById('form-name').value,
    score: document.getElementById('form-score').value,
  };

  postScore(url, data);
}

export { refreshData, sendData };