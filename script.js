const previousButton = document.getElementById("back");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("forward");
const songProgressBar = document.getElementById("progress-bar");
const songName = document.getElementById("songName");
const songCover = document.getElementById("songCover");

let songIndex = 0;
let audioElement = new Audio("assets/songs/1.mp3");
const songsList = [
  {
    songName: "Salam-e-Ishq",
    filePath: "assets/songs/1.mp3",
    coverPath: "assets/covers/1.jpg",
  },
  {
    songName: "Ye Jawani Hai Diwani",
    filePath: "assets/songs/2.mp3",
    coverPath: "assets/covers/2.jpg",
  },
  {
    songName: "Aakhiri Khwais",
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
  if (progress) {
    songProgressBar.value = progress;
    if (progress === 100) {
      audioElement.pause();
      playButton.classList.remove("fa-circle-pause");
      playButton.classList.add("fa-circle-play");
    }
  } else {
    songProgressBar.value = 0;
  }
});

songProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (songProgressBar.value * audioElement.duration) / 100;
});

function prepareNextSongData(songIndex) {
  songCover.src = songsList[songIndex].coverPath;
  songName.innerHTML = songsList[songIndex].songName;
  audioElement.src = songsList[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  playButton.classList.remove("fa-circle-play");
  playButton.classList.add("fa-circle-pause");
}

nextButton.addEventListener("click", () => {
  songIndex = songIndex + 1;
  if (songIndex <= 0 || songIndex > songsList.length - 1) {
    songIndex = 0;
  }
  prepareNextSongData(songIndex);
});

previousButton.addEventListener("click", () => {
  songIndex = songIndex - 1;
  if (songIndex < 0) {
    songIndex = songsList.length - 1;
  }
  prepareNextSongData(songIndex);
});
