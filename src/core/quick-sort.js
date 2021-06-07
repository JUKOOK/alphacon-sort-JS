export const bubbleSort = (array) => {};

const partitionate = function(arr) {
  const pivot = arr.shift();
  let partition = { pivot: pivot, left: [], right: [] };
  for (let item of arr) {
    item > pivot ? partition.right.push(item) : partition.left.push(item);
  }
  return partition;
};

const merge = function(partition) {
  let merged = [];
  merged = partition.left ? merged.concat(partition.left) : merged;
  merged.push(partition.pivot);
  merged = partition.right ? merged.concat(partition.right) : merged;
  return merged;
};

export const quickSort = (array) => {
  if (array.length == 0) return;
  const partition = partitionate(array);
  partition.left = quickSort(partition.left);
  partition.right = quickSort(partition.right);
  return merge(partition);
};
