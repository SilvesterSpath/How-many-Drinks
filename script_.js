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
  const fullCups = document.querySelectorAll('.cup-small.full');
  const NumberOfFullCups = fullCups.length;
  console.log(typeof NumberOfFullCups);
  if (NumberOfFullCups === 0) {
    //console.log('hidden');
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
    liters.innerText = `${2}L`;
  } else {
    percentage.style.visibility = 'visible';
    percentage.innerText = `${NumberOfFullCups * 12.5}%`;
    percentage.style.height = `${NumberOfFullCups * 35}px`;
    liters.innerText = `${2 - NumberOfFullCups * 0.25}L`;
  }
}
