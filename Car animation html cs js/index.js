
let audio=document.createElement('audio')
audio.setAttribute('src','sound.mp3')
// audio.loop=true

setInterval(() => {
    audio.play();
    // console.log("song play")
}, 10);
// location.reload()