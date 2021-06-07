const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 무작위 인덱스(0 이상 i 미만)
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getUnSorted = () => {
  const arr = Array(100)
    .fill(undefined)
    .map((v, i) => i + 1);

  return shuffle(arr);
};
