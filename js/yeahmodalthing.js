const openBtn = document.getElementById('open-modal');
const element = document.getElementsByClassName('modalclass')[0];
const closeBtn = document.getElementById('close-modal');
const closeBtn2 = document.getElementById('close-modal-btn');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('show');
});