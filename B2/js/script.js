const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let intervalId;
let seconds = 0;
let centiseconds = 0;

function formatTime() {
    const formattedSeconds = String(seconds).padStart(3, '0');
    const formattedCentiseconds = String(centiseconds).padStart(2, '0');
    return `${formattedSeconds}:${formattedCentiseconds}`;
}

 function updateTimer() {
    centiseconds++;
    if (centiseconds === 100) {
         seconds++;
         centiseconds = 0;
        }
    timerDisplay.textContent = formatTime();
}

startBtn.addEventListener('click', () => {
    intervalId = setInterval(updateTimer, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});

 resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    seconds = 0;
    centiseconds = 0;
    timerDisplay.textContent = formatTime();
});