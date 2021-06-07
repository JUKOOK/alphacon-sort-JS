const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getUnSorted = () => {
  const arr = Array(30)
    .fill(undefined)
    .map((v, i) => i + 1);

  return shuffle(arr);
};

export const delay = (ms) => {
  setTimeout(function() {}, ms);
};
