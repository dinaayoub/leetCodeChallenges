/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
  Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6
Example 2:
  Input: height = [4,2,0,3,2,5]
  Output: 9
Constraints:
  n == height.length
  0 <= n <= 3 * 104
  0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let minHeights = [0];
  for (let i = 1; i < height.length - 1; i++) {
    if (height[i - 1] < height[i] && height[i + 1] < height[i]) {
      //move on, there can be no water above this?
      minHeights[i] = 0;
    }
    if (height[i + 1] <= height[i]) {
      let minHeight = 0;
      let j = i;
      //loop till we find something that is higher, and create a max
      while (height[j] <= height[i]) {
        minHeight += height[i];
        j++;
      }
    }
    if (height[i - 1] < height[i + 1])
      minHeights[i] = height[i - 1];
    else
      minHeights[i] = height[i + 1];
  }
  console.log(minHeights);

};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]))