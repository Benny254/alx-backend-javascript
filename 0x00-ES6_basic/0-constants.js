export function taskFirst() {
  const task = 'Using const is ideal when variables are immutable.';
  return task;
}

export function getLast() {
  return ' can be useful in certain cases.';
}

export function taskNext() {
  let sentence = 'However, using let';
  sentence += getLast();

  return sentence;
}
