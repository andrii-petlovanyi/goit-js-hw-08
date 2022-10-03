import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const player = document.querySelector('#vimeo-player');
const playerVimeo = new Player(player);
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
  playerVimeo.setCurrentTime(currentTime);
}

playerVimeo.on('timeupdate', throttle(setCurrentTimeInStorage, 1000));

function setCurrentTimeInStorage(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds.toFixed(1));
}
