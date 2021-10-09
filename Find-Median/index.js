// The median of a list of numbers is essentially its middle element after sorting. The same number of
// elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?

function findMedian(arr) {
  const midArrayRounded = Math.floor(arr.length / 2),
    sortedArray = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? sortedArray[midArrayRounded]
    : (sortedArray[midArrayRounded - 1] + sortedArray[midArrayRounded]) / 2;
}
