function sortedSquares(nums: number[]): number[] {
    // let l: number = 0;
    // let r: number = nums.length - 1;
    // let k: number = r;
    // let arr: number[] = [];
    // while (l <= r) {
    //     if (Math.abs(nums[l]) > Math.abs(nums[r])) {
    //         arr[k] = Math.pow(nums[l], 2);
    //         k--;
    //         l++;
    //     } else {
    //         arr[k] = Math.pow(nums[r], 2);
    //         k--;
    //         r--;
    //     }
    // }
    // return arr;
    return(nums.map(x => Math.pow(x, 2)).sort((a, b) => a - b));
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));