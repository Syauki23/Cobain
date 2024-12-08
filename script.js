// script.js
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');

btnNo.addEventListener('mouseenter', moveButtonRandomly);

btnYes.addEventListener('click', function() {
  alert('Anjayyy Balikan!');
});

function moveButtonRandomly() {
  // Mendapatkan ukuran dari halaman dan tombol
  const width = window.innerWidth;
  const height = window.innerHeight;
  const btnWidth = btnNo.offsetWidth;
  const btnHeight = btnNo.offsetHeight;

  // Menghasilkan posisi acak untuk tombol
  const randomX = Math.random() * (width - btnWidth);
  const randomY = Math.random() * (height - btnHeight);

  // Memindahkan tombol ke posisi acak
  btnNo.style.position = 'absolute';
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}
