const clock = document.querySelector(".clock");
clockDate = document.querySelector(".clock-date");
clockTime = document.querySelector(".clock-time");
const credit = document.querySelector(".credit");
const builtDate = new Date("December 09 2021 19:55");
timeBuilt = Math.round(builtDate.getTime() / 1000 / 60);
const updateClock = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let timeStampRN = now.getTime();
  timeStampRN = Math.round(timeStampRN / 1000 / 60);
  credit.innerHTML = `<h2 class="credit">Built by Anirudh Bharadwaj Vangara, ${
    timeStampRN - timeBuilt
  }</h2> minutes ago </h2>`;

  clockDate.textContent = now.toDateString();

  clockTime.innerHTML = `<div class="clock-time-hours">${h} :</div>
  <div class="clock-time-minutes">${m} :</div>
  <div class="clock-time-seconds">${s}</div>`;
};

setInterval(updateClock, 1000);
