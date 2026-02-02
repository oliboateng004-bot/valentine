// Floating hearts
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 400);

// Countdown
const countdown = document.getElementById('countdown');
const valentinesDay = new Date('Feb 14, 2026 00:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = valentinesDay - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `⏳ ${days} days till Valentine’s Day`;
}, 1000);

// Popup
const popup = document.getElementById('popup');
document.querySelector('.popup-btn').onclick = () => {
    popup.style.display = 'block';
};

function closePopup() {
    popup.style.display = 'none';
}
