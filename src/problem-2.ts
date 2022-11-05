/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * @param nums number[]
 * @param k number
 * @returns number[]
 */
export const rotate = (nums: number[], k: number) => {
  const rotations = k * -1;

  const rotatedSlice = nums.slice(rotations);
  const staticSlice = nums.slice(0, nums.length + rotations);

  return [...rotatedSlice, ...staticSlice];
}
