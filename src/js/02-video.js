import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = document.querySelector('#vimeo-player');
const playerVimeo = new Player(player);
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  playerVimeo.setCurrentTime(currentTime);
}

playerVimeo.on('timeupdate', throttle(setCurrentTimeInStorage, 1000));

function setCurrentTimeInStorage() {
  playerVimeo.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(seconds.toFixed(1));
  });
}
