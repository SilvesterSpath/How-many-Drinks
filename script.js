const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const small = document.getElementById('small');

console.log(small);

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
      percentage.style.height = `${(idx + 1) * 41}px`;
      liters.innerText = `${2 - (idx + 1) * 0.25}L`;
      percentage.style.visibility = 'visible';

      console.log(item.className);
    } else {
      item.classList.remove('full');
    }
  });

  if (!smallCups[0].classList.contains('full')) {
    percentage.innerText = null;
    percentage.style.height = `0px`;
    liters.innerText = `2L`;
    percentage.style.visibility = 'hidden';
  }

  if (smallCups[7].classList.contains('full')) {
    small.style.visibility = 'hidden';
    liters.innerText = `Full!`;
    remained.style.height = 0;
  } else {
    small.style.visibility = 'visible';
  }
}
