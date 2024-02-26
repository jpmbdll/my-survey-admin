export default function computeMean(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
