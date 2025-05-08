// Get elements
const image = document.getElementById('swin');
const pauseBtn = document.getElementById('pauseBtn');
const playBtn = document.getElementById('playBtn');
const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');

// Event listeners
pauseBtn.addEventListener('click', () => {
  image.style.animationPlayState = 'paused';
});

playBtn.addEventListener('click', () => {
  image.style.animationPlayState = 'running';
});

speedRange.addEventListener('input', (e) => {
  const speed = e.target.value;
  image.style.animationDuration = `${speed}s`;
  speedValue.textContent = `Current speed: ${speed}s`;
});