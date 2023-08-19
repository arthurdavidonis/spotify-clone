const songName = document.getElementById('song-name');
songName.innerText = 'Chicago Freestyle';
const artistType = document.getElementById('artist-name');
artistType.innerText = 'Drake';
const song = document.getElementById('audio');
const tocar = document.getElementById('play');
let estaTocando = true;

function playSong(){
    tocar.querySelector('.bi').classList.remove('bi-play-circle-fill');
    tocar.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    estaTocando = true;
    
}

function pauseSong(){
    tocar.querySelector('.bi').classList.add('bi-play-circle-fill');
    tocar.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    estaTocando = false;
    
    
}

function playPauseVerif(){
    if(estaTocando === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

tocar.addEventListener('click', playPauseVerif);

