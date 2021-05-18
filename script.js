const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

console.log(liters);

smallCups.forEach((i, index) => {
  i.addEventListener('click', () => highlightCups(index));
});

function highlightCups(idx) {
  if (smallCups[idx].classList.contains('full')) {
    idx = idx - 1;
  }

  smallCups.forEach((item, idx2) => {
    if (idx2 <= idx) {
      item.classList.add('full');
      percentage.innerText = `${(idx + 1) * 12.5}%`;
      percentage.style.height = `${(idx + 1) * 40}px`;
      liters.innerText = `${2 - (idx + 1) * 0.25}L`;

      console.log(item.className);
    } else {
      item.classList.remove('full');
    }
  });

  if (!smallCups[0].classList.contains('full')) {
    percentage.innerText = null;
    percentage.style.height = `0px`;
    liters.innerText = `2L`;
  }
}
