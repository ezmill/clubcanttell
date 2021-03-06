var audioAmt = 3;
var sources = [
	"audio/03 My Way.mp3",
	"audio/03 What More Can I Say.mp3",
	"audio/04 Last Caress.mp3"
]
var tracks = [];
for(var i = 0; i < sources.length; i++){
	tracks[i] = new Audio();
	tracks[i].src = sources[i];
	tracks[i].load();
}

var index = Math.floor(Math.random()*tracks.length);
playTrack(index);
window.addEventListener("click", switchTrack);

function playTrack(index){
	tracks[index].play();
	tracks[index].addEventListener("ended", switchTrack);
}
function pauseTrack(index){
	tracks[index].pause();
	tracks[index].currentTime = 0.0;	
}
function switchTrack(e){
	if(index == tracks.length - 1){
		pauseTrack(index);
		index = 0;
		playTrack(index);
	} else {
		pauseTrack(index);
		index++;
		playTrack(index);
	}
}