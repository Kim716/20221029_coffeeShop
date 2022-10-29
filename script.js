const windows = document.querySelectorAll(".window");
const bulbs = document.querySelectorAll(".light-bulb");
const screen = document.querySelector(".screen");

// FUNCTION:切換早中晚
const changeMorningMode = function (event) {
  windows.forEach((window) => {
    window.classList.remove("window-dusk", "window-night");
    window.classList.add("window-morning");
  });

  bulbs.forEach((bulb) => {
    bulb.classList.remove("light-bulb-night");
  });
};
const changeDuskMode = function (event) {
  windows.forEach((window) => {
    window.classList.remove("window-night", "window-morning");
    window.classList.add("window-dusk");
  });

  bulbs.forEach((bulb) => {
    bulb.classList.remove("light-bulb-night");
  });
};
const changeNightMode = function (event) {
  windows.forEach((window) => {
    window.classList.remove("window-dusk", "window-morning");
    window.classList.add("window-night");
  });

  bulbs.forEach((bulb) => {
    bulb.classList.add("light-bulb-night");
  });
};

// FUNCTION: 倒數計時
let setTime = 30 * 60; // TODO 之後優化成可以自己設定想要倒數的時間，現在是強制設定 30分鐘*60秒
let startCounting = false;
const timer = function () {
  startCounting = true;

  setTime--;
  const sec = String(setTime % 60).padStart(2, "0");
  const min = String(Math.trunc(setTime / 60) % 60).padStart(2, "0");
  const hr = String(Math.trunc(setTime / 60 / 60) % 60).padStart(2, "0");

  screen.innerHTML = `
  <span class="hours">${hr}<span>:<span class="minutes">${min}</span>:<span class="seconds">${sec}</span>
  `;

  // console.log(1);
};

// EVENT LISTENER: 切早中晚 TODO 跟著現在時間調整
windows[0].addEventListener("click", changeMorningMode);
windows[1].addEventListener("click", changeDuskMode);
windows[2].addEventListener("click", changeNightMode);

// EVENT LISTENER: 倒數計時器
let counter;
screen.addEventListener("click", function () {
  if (!startCounting) {
    counter = setInterval(timer, 1000);
  }
  if (startCounting) {
    clearInterval(counter);
    startCounting = false;
  }
});

// 點擊螢幕可以設定倒數計時、並寫下todo list
// 鼓勵小語
// 背景音樂（可關）
// 更換場景
// 收藏喜愛的實體咖啡店
// 朋友一起共學（訊息）
