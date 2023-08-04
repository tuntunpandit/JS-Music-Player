const backButton = document.getElementById("back");
const playButton = document.getElementById("play");
const forwardButton = document.getElementById("forward");
const songProgressBar = document.getElementById("progress-bar");

let songIndex = 0;
let audioElement = new Audio("assets/songs/1.mp3");
const songsList = [
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/1.mp3",
    coverPath: "assets/covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/2.mp3",
    coverPath: "assets/covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/3.mp3",
    coverPath: "assets/covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/4.mp3",
    coverPath: "assets/covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/5.mp3",
    coverPath: "assets/covers/5.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/6.mp3",
    coverPath: "assets/covers/6.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/7.mp3",
    coverPath: "assets/covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/8.mp3",
    coverPath: "assets/covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/9.mp3",
    coverPath: "assets/covers/9.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/10.mp3",
    coverPath: "assets/covers/10.jpg",
  },
];

function calculateSongProgress() {
  return parseInt((audioElement.currentTime / audioElement.duration) * 100);
}

playButton.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    playButton.classList.remove("fa-circle-pause");
    playButton.classList.add("fa-circle-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = calculateSongProgress();
  console.log(progress, audioElement.duration);
  songProgressBar.value = progress;
  if (calculateSongProgress() === 100) {
    audioElement.pause();
    playButton.classList.remove("fa-circle-pause");
    playButton.classList.add("fa-circle-play");
  }
});

songProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (songProgressBar.value * audioElement.duration) / 100;
});
