// Mega Menu
const btn = document.querySelector(".other");
const megaMenu = document.querySelector(".mega-menu");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("other")) return;
  megaMenu.classList.remove("active");
});

btn.addEventListener("click", () => {
  if (megaMenu.classList.contains("active")) {
    megaMenu.classList.remove("active");
  } else {
    megaMenu.classList.add("active");
  }
});


const skills = document.querySelector(".skills");
const skillsProgress = document.querySelectorAll("[data-width]");

const stats = document.querySelectorAll(".stat");
const statSection = document.querySelector(".stats");

window.onscroll = function () {
  // skills progress Animation
  if (window.scrollY >= skills.offsetTop - 500) {
    skillsProgress.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
  
  // States Animation
  if (window.scrollY >= statSection.offsetTop - 300) {
    stats.forEach((stat) => startCount(stat));
  }
};

// Count Down
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(function () {
  let eventDate = new Date("1 1 2023").getTime();
  let now = new Date().getTime();
  let date = eventDate - now;
  let day = Math.floor(date / (1000 * 60 * 60 * 24));
  let hour = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((date % (1000 * 60)) / 1000);

  days.innerText = day < 10 ? `0${day}` : day;
  hours.innerText = hour < 10 ? `0${hour}` : hour;
  minutes.innerText = minute < 10 ? `0${minute}` : minute;
  seconds.innerText = second < 10 ? `0${second}` : second;
}, 1000);

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.innerText === goal ? clearInterval(counter) : el.innerText++;
  }, 2000 / goal);
}
