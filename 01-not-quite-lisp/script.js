const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) console.log(err);
  const input = data.toString();

  console.time('part1');
  console.log(calculateFloor(input));
  console.timeEnd('part1');

  console.time('part2');
  console.log(findPosition(input));
  console.timeEnd('part2');
});

// '(' ---> go UP 1 floor
// ')' ---> go DOWN 1 floor

// Part 1: What floor does Santa end up on?
const calculateFloor = data => {
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

// Part 2: When does Santa first enter the basement?
const findPosition = data => {
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
