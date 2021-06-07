const divide = (array) => {
  let divider = { arrayLeft: [], arrayRight: [] };
  const centerIdx = Math.round(array.length / 2);
  array.forEach((item, index) => {
    if (index < centerIdx) {
      divider.arrayLeft.push(item);
    } else {
      divider.arrayRight.push(item);
    }
  });
  return divider;
};

const merge = (arrayL, arrayR) => {
  let merged = [];
  let left = arrayL.shift();
  let right = arrayR.shift();
  while (left !== undefined && right !== undefined) {
    if (left < right) {
      merged.push(left);
      left = arrayL.shift();
    } else {
      merged.push(right);
      right = arrayR.shift();
    }
  }
  left === undefined ? merged.push(right) : merged.push(left);
  merged = merged.concat(arrayL).concat(arrayR);
  return merged;
};

export const mergeSort = (array) => {
  if (array.length == 1) {
    return array;
  } else {
    const divider = divide(array);
    return merge(mergeSort(divider.arrayLeft), mergeSort(divider.arrayRight));
  }
};
