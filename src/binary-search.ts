export const bynarySearch = (
  nums: Array<number>,
  target: number
): boolean | null => {
  let initIndex = 0;
  let endIndex = nums.length;

  while (initIndex <= endIndex) {
    const middle = Math.floor((initIndex + endIndex) / 2);
    const kick = nums[middle];

    if (kick === target) return true;

    if (kick > target) {
      endIndex = middle - 1;
    } else {
      initIndex = middle + 1;
    }
  }

  return false;
};
