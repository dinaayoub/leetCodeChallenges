/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        //get number of instances of nums[i]
        if (nums[i] === nums[i-1])
         {
             nums.splice(i,1);
             i--;
         }
    }
    return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));