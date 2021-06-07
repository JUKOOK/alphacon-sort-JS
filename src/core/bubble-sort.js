export const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let swap = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    console.log(`${i}회전: ${array}`);
    if (!swap) break;
  }
  return array;
};
