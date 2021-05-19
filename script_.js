const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

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

      console.log(item.className);
    } else {
      item.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
    //liters.innerText = `${2}L`;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    liters.innerText = `${2 - fullCups * 0.25}L`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
  }
}
