import computeMean from "./compute-mean";

export default function computeStandardDeviation(arr) {
  // Step 1: Calculate the mean
  const mean = computeMean(arr);

  // Step 2: Calculate the deviations
  const deviations = arr.map((num) => num - mean);

  // Step 3: Square each deviation
  const squaredDeviations = deviations.map((dev) => dev * dev);

  // Step 4: Calculate the mean of squared deviations
  const meanSquaredDeviations =
    squaredDeviations.reduce((acc, val) => acc + val, 0) / arr.length;

  // Step 5: Take the square root of the mean of squared deviations
  const standardDeviation = Math.sqrt(meanSquaredDeviations);

  return standardDeviation;
}
