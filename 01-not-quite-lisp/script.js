const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) console.log(err);
  const dataArray = data.toString().split('');

  console.time('part1-1');
  console.log(calculateFloor01(dataArray));
  console.timeEnd('part1-1');

  console.time('part1-2');
  console.log(calculateFloor02(dataArray));
  console.timeEnd('part1-2');

  console.time('part2-1');
  console.log(findPosition01(dataArray));
  console.timeEnd('part2-1');

  console.time('part2-2');
  console.log(findPosition02(dataArray));
  console.timeEnd('part2-2');
});

// '(' ---> go UP 1 floor
// ')' ---> go DOWN 1 floor

// Part 1: What floor does Santa end up on?
const calculateFloor01 = data => {
  let floor = 0;
  let position = 0;
  do {
    const char = data[position];
    if (char === '(') floor++;
    else if (char === ')') floor--;
    position++;
  } while (position < data.length);

  return floor;
};

const calculateFloor02 = data => {
  const result = data.reduce((acc, curValue) => {
    if (curValue === '(') {
      return (acc += 1);
    } else if (curValue === ')') {
      return (acc -= 1);
    }
  }, 0);

  return result;
};

// Part 2: When does Santa first enter the basement?
const findPosition01 = data => {
  let floor = 0;
  let position = 0;

  do {
    const char = data[position];
    if (char === '(') floor++;
    else if (char === ')') floor--;
    position++;
  } while (floor !== -1);

  return position;
};

const findPosition02 = data => {
  let acc = 0;
  let counter = 0;
  const result = data.some(curValue => {
    if (curValue === '(') {
      acc += 1;
    } else if (curValue === ')') {
      acc -= 1;
    }

    counter++;

    return acc < 0;
  });

  return counter;
};
