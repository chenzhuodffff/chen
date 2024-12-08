// 获取音频播放器和按钮
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');

// 音乐列表（包含每首歌的文件路径和歌曲名）
const musicList = [
    { src: 'music/song1.mp3', title: '歌曲 1' },
    { src: 'music/song2.mp3', title: '歌曲 2' },
    { src: 'music/song3.mp3', title: '歌曲 3' }
];

// 当前播放的音频索引
let currentTrackIndex = 0;

// 设置当前歌曲
function setTrack() {
    audioPlayer.src = musicList[currentTrackIndex].src;
    songTitle.textContent = `正在播放: ${musicList[currentTrackIndex].title}`;
}

// 播放/暂停按钮的事件处理
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = '暂停';
    } else {
        audioPlayer.pause();
        playButton.textContent = '播放';
    }
});

// 上一曲按钮的事件处理
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    setTrack();
    audioPlayer.play();
    playButton.textContent = '暂停';
});

// 下一曲按钮的事件处理
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    setTrack();
    audioPlayer.play();
    playButton.textContent = '暂停';
});

// 音频播放结束时自动播放下一曲
audioPlayer.addEventListener('ended', () => {
    nextButton.click();
});

// 初始化播放器，设置当前曲目
setTrack();
