const CHOICES = [
  ["L", "L'", "L2"],
  ["R", "R'", "R2"],
  ["U", "U'", "U2"],
  ["D", "D'", "D2"],
  ["B", "B'", "B2"],
  ["F", "F'", "F2"],
];
// initialize both to -1 to not match any choices by design for the first/second selections
const lastTwoChoicesQueue = [-1, -1];
const possibleChoices = [0, 1, 2, 3, 4, 5];

export function get3x3Scramble() {
  const scramble = [];
  for (let i = 0; i < 25; i++) {
    const randomChoiceIndex = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    scramble.push(CHOICES[randomChoiceIndex][(Math.floor(Math.random() * 3))]);

    const oldLastChoice = lastTwoChoicesQueue[0];
    lastTwoChoicesQueue[0] = lastTwoChoicesQueue[1];
    lastTwoChoicesQueue[1] = randomChoiceIndex;

    if (oldLastChoice !== -1) {
      possibleChoices.push(oldLastChoice);
    }
    possibleChoices.splice(possibleChoices.indexOf(randomChoiceIndex), 1);
  }
  return scramble;
}
