const members = [
  { id: 'JW', name: '김지원' },
  { id: 'BR', name: '박바름' },
  { id: 'JK', name: '박준규' },
  { id: 'CY', name: '박채영' },
  { id: 'HY', name: '서혜연' },
  { id: 'WJ', name: '손원재' },
  { id: 'SK', name: '윤석규' },
  { id: 'JM', name: '이정민' },
  { id: 'JH', name: '이정훈' },
  { id: 'HG', name: '이한결' },
  { id: 'HW', name: '이효원' },
  { id: 'SH', name: '임소형' },
];

const getRandomOrder = n =>
  new Array(n)
    .fill()
    .map((_, i) => [i, Math.random()])
    .sort((a, b) => a[1] - b[1])
    .map(nums => nums[0]);

const suffle = () => {
  const order = getRandomOrder(12);
  const groups = [order.slice(0, 4), order.slice(4, 8), order.slice(8)];

  groups.forEach(group => {
    group.forEach((member, index, groupArray) => {
      const copiedGroupArray = [...groupArray];
      copiedGroupArray.splice(index, 1);
      document.querySelector(`.${members[member].id} .requester`).innerHTML = copiedGroupArray
        .map(member => members[member].name)
        .join(', ');
    });
  });
};

const $shuffleButton = document.querySelector('.shuffle');

$shuffleButton.onclick = () => {
  suffle();
};
