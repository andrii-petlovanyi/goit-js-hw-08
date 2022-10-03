import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = document.querySelector('#vimeo-player');
const playerVimeo = new Player(player);
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  playerVimeo.setCurrentTime(currentTime);
}

playerVimeo.on('timeupdate', throttle(setCurrentTimeInStorage, 1000));

function setCurrentTimeInStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds.toFixed(1));
}
