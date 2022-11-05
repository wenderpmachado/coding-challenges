export const rotate = (nums: number[], k: number) => {
  const rotations = k * -1;

  const rotatedSlice = nums.slice(rotations);
  const staticSlice = nums.slice(0, nums.length + rotations);

  return [...rotatedSlice, ...staticSlice];
}
