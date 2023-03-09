// In this file we handle the data provided by the API and the user
import { getScores, postScore } from './fetchingData.js';

// We store our game's url in a variable
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SzxB0D5b3hJBN8T3JMNC/scores/';

// refreshData will render the content of our leaderboard
const refreshData = () => {
  const scoresContainer = document.querySelector('.scores');
  
  // First we empty the container to avoid duplicated content
  scoresContainer.innerHTML = '';
  // Then we inject the data returned by getScores 
  getScores(url).then((data) => {
    data.result.forEach((score) => {
      scoresContainer.insertAdjacentHTML('beforeend',
        `<li><span>${score.user}</span><span>${score.score}</span></li>`);
    });
  });
};

// sendData will handle the user form submission
const sendData = () => {
  // First we store the user provided data in an object
  const data = {
    user: document.getElementById('form-name').value,
    score: document.getElementById('form-score').value,
  };

  // Then we send the data to our game's API endpoint
  postScore(url, data);

  // We make sure to empty the form's value to improve the user UX experience
  document.getElementById('form-name').value = '';
  document.getElementById('form-score').value = '';
};

export { refreshData, sendData };