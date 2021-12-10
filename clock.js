const clock = document.querySelector(".clock");
clockDate = document.querySelector(".clock-date");
clockTime = document.querySelector(".clock-time");

const updateClock = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  console.log(now.toDateString());
  clockDate.textContent = now.toDateString();

  clockTime.innerHTML = `<div class="clock-time-hours">${h} :</div>
  <div class="clock-time-minutes">${m} :</div>
  <div class="clock-time-seconds">${s}</div>`;
};

setInterval(updateClock, 1000);
