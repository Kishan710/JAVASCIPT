function getMidnightTime() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight;
}

const endTime = getMidnightTime();
const timerEl = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date();
  const remaining = endTime - now;

  if (remaining <= 0) {
    clearInterval(countdown);
    timerEl.textContent = "00:00:00";
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timerEl.textContent = 
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0');
}, 1000);
