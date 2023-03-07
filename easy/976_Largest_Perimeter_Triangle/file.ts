function largestPerimeter(nums: number[]): any {
    nums.sort((a:number, b: number) => b - a);
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        } 
    };
    return 0;
};