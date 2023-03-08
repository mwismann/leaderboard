import './style.css';
import { refreshData, sendData } from './modules/handlingData.js';

refreshData();
document.querySelector('.refresh-btn').addEventListener('click', refreshData);
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
});