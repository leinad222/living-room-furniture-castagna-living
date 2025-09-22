// ========================
// Hero video cycling
// ========================
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const source = video.querySelector('source');

// Mobile menu toggle
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".head-right");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Dropdown toggle (mobile-friendly)
const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownContent.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownContent.classList.remove("show");
  }
});

// Video list
const movieList = [
  'videos/hero-1.mp4',
  'videos/hero-2.mp4',
  'videos/hero-3.mp4',
  'videos/hero-4.mp4'
];

let index = 0;

// Safari/iOS inline fix
video.setAttribute('playsinline', '');
video.setAttribute('webkit-playsinline', '');

// Next video button
nextButton.addEventListener('click', () => {
  index = (index + 1) % movieList.length;
  source.src = movieList[index];
  video.load();
  video.play();
});
